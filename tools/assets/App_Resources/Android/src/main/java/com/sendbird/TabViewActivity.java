package com.sendbird;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentPagerAdapter;
import androidx.annotation.NonNull;
import androidx.viewpager.widget.ViewPager;

import org.nativescript.plugindemoangular.R;

import com.google.android.material.tabs.TabLayout;

import com.sendbird.uikit.fragments.ChannelListFragment;
import com.sendbird.uikit.fragments.OpenChannelFragment;
import com.sendbird.android.GroupChannel;
import com.sendbird.android.GroupChannelListQuery;
import com.sendbird.android.GroupChannelListQuery.PublicChannelFilter;

import com.sendbird.CustomTabView;

import java.util.Objects;

public class TabViewActivity extends AppCompatActivity {

  private CustomTabView unreadCountTab;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);
      initPage();
  }

  private void initPage() {
    Toolbar toolbar = findViewById(R.id.tbMain);
    setSupportActionBar(toolbar);

    ViewPager mainPage = findViewById(R.id.vpMain);
    mainPage.setAdapter(new MainAdapter(getSupportFragmentManager(), FragmentPagerAdapter.BEHAVIOR_RESUME_ONLY_CURRENT_FRAGMENT));

    TabLayout tabLayout = findViewById(R.id.tlMain);
    tabLayout.setupWithViewPager(mainPage);

    unreadCountTab = new CustomTabView(this);
    unreadCountTab.setBadgeVisibility(View.GONE);
    unreadCountTab.setTitle(getString(R.string.text_tab_channels));
    unreadCountTab.setIcon(R.drawable.icon_chat_filled);

    CustomTabView settingsTab = new CustomTabView(this);
    settingsTab.setBadgeVisibility(View.GONE);
    settingsTab.setTitle(getString(R.string.text_tab_supergroups));
    settingsTab.setIcon(R.drawable.icon_chat_filled);

    Objects.requireNonNull(tabLayout.getTabAt(0)).setCustomView(unreadCountTab);
    Objects.requireNonNull(tabLayout.getTabAt(1)).setCustomView(settingsTab);

    redirectChannelIfNeeded(getIntent());
  }

  private class MainAdapter extends FragmentPagerAdapter {
    private static final int PAGE_SIZE = 2;

    public MainAdapter(@NonNull FragmentManager fm, int behavior) {
        super(fm, behavior);
    }

    @NonNull
    @Override
    public Fragment getItem(int position) {
      GroupChannelListQuery groupChannelsQuery = GroupChannel.createMyGroupChannelListQuery();
      // GroupChannelListQuery superGroupChannelsQuery = GroupChannel.createMyGroupChannelListQuery();
      groupChannelsQuery.setPublicChannelFilter(PublicChannelFilter.PUBLIC);

      if (position == 0) {
          return new ChannelListFragment.Builder().setUseHeader(true).setGroupChannelListQuery(groupChannelsQuery).build();
        } else {
          return new ChannelListFragment.Builder().setUseHeader(true).setGroupChannelListQuery(groupChannelsQuery).build();
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

