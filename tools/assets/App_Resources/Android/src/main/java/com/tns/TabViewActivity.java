package com.tns;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.content.Context;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentPagerAdapter;
import androidx.annotation.NonNull;
import androidx.viewpager.widget.ViewPager;
import androidx.databinding.DataBindingUtil;

import org.nativescript.plugindemoangular.R;
import org.nativescript.plugindemoangular.databinding.ActivityMainBinding;

import com.google.android.material.tabs.TabLayout;

import com.sendbird.uikit.SendBirdUIKit;
import com.sendbird.uikit.fragments.ChannelListFragment;
import com.sendbird.uikit.fragments.OpenChannelFragment;
import com.sendbird.uikit.consts.CreateableChannelType;

import com.sendbird.android.GroupChannel;
import com.sendbird.android.GroupChannelListQuery;
import com.sendbird.android.GroupChannelListQuery.PublicChannelFilter;
import com.sendbird.android.GroupChannelListQuery.SuperChannelFilter;

import com.sendbird.fragments.CustomChannelListFragment;
import com.sendbird.CustomTabView;

import java.util.Objects;

public class TabViewActivity extends AppCompatActivity {

  private ActivityMainBinding binding;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      int themeResId = SendBirdUIKit.getDefaultThemeMode().getResId();
      setTheme(themeResId);
      // getSupportActionBar().hide();
      setContentView(R.layout.activity_main);
      initPage();
  }

  private void initPage() {
    Intent intent = getIntent();
    String fandomsString = intent.getStringExtra("fandoms");
    String[] fandoms = fandomsString.split(",");
    ViewPager mainPage = findViewById(R.id.vpMain);
    MainAdapter mainAdapter = new MainAdapter(getSupportFragmentManager(), FragmentPagerAdapter.BEHAVIOR_RESUME_ONLY_CURRENT_FRAGMENT, fandoms);
    mainPage.setAdapter(mainAdapter);

    TabLayout tabLayout = findViewById(R.id.tlMain);
    tabLayout.setupWithViewPager(mainPage);

    CustomTabView publicGroupTab = new CustomTabView(this);
    publicGroupTab.setBadgeVisibility(View.GONE);
    publicGroupTab.setTitle(getString(R.string.text_tab_channels));
    publicGroupTab.setIcon(R.drawable.icon_chat);

    CustomTabView supergroupTab = new CustomTabView(this);
    supergroupTab.setBadgeVisibility(View.GONE);
    supergroupTab.setTitle(getString(R.string.text_tab_supergroups));
    supergroupTab.setIcon(R.drawable.icon_supergroup);

    Objects.requireNonNull(tabLayout.getTabAt(0)).setCustomView(publicGroupTab);
    Objects.requireNonNull(tabLayout.getTabAt(1)).setCustomView(supergroupTab);

    redirectChannelIfNeeded(intent);
  }

  private class MainAdapter extends FragmentPagerAdapter {
    private static final int PAGE_SIZE = 2;
    private String[] fandoms;

    public MainAdapter(@NonNull FragmentManager fm, int behavior, String[] fandoms) {
        super(fm, behavior);
        this.fandoms = fandoms;
    }

    @NonNull
    @Override
    public Fragment getItem(int position) {
      CustomChannelListFragment customGroupFragmentInstance = new CustomChannelListFragment(this.fandoms, CreateableChannelType.Normal);
      CustomChannelListFragment customSuperGroupFragmentInstance = new CustomChannelListFragment(this.fandoms, CreateableChannelType.Super);
      GroupChannelListQuery privateGroupChannelsQuery = GroupChannel.createMyGroupChannelListQuery();
      GroupChannelListQuery superGroupChannelsQuery = GroupChannel.createMyGroupChannelListQuery();
      privateGroupChannelsQuery.setSuperChannelFilter(SuperChannelFilter.NONSUPER_CHANNEL_ONLY);
      privateGroupChannelsQuery.setPublicChannelFilter(PublicChannelFilter.PRIVATE);
      privateGroupChannelsQuery.setIncludeEmpty(true);
      superGroupChannelsQuery.setPublicChannelFilter(PublicChannelFilter.PUBLIC);
      superGroupChannelsQuery.setSuperChannelFilter(SuperChannelFilter.SUPER_CHANNEL_ONLY);
      superGroupChannelsQuery.setIncludeEmpty(true);

      if (position == 0) {
        return new ChannelListFragment
          .Builder()
          .setCustomChannelListFragment(customGroupFragmentInstance)
          .setUseHeader(true)
          .setGroupChannelListQuery(privateGroupChannelsQuery)
          .build();
        } else {
        return new ChannelListFragment
          .Builder()
          .setCustomChannelListFragment(customSuperGroupFragmentInstance)
          .setUseHeader(true)
          .setGroupChannelListQuery(superGroupChannelsQuery)
          .build();
      }
    }

    @Override
    public int getCount() {
        return PAGE_SIZE;
    }

  }

  private void redirectChannelIfNeeded(Intent intent) {
    if (intent == null) return;

    if ((intent.getFlags() & Intent.FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY) == Intent.FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY) {
        getIntent().removeExtra("PUSH_REDIRECT_CHANNEL");
    }
    if (intent.hasExtra("PUSH_REDIRECT_CHANNEL")) {
        String channelUrl = intent.getStringExtra("PUSH_REDIRECT_CHANNEL");
        // showCustomChannelActivity(channelUrl);
        intent.removeExtra("PUSH_REDIRECT_CHANNEL");
    }
}
}

