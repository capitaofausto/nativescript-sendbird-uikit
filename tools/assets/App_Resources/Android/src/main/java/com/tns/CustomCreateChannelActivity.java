package com.tns;

import org.nativescript.plugindemoangular.R;

import android.os.Bundle;
import android.content.Intent;
import android.content.Context;

import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentManager;

import com.sendbird.uikit.consts.CreateableChannelType;
import com.sendbird.uikit.activities.CreateChannelActivity;
import com.sendbird.uikit.fragments.CreateChannelFragment;
import com.sendbird.uikit.activities.ChannelActivity;

import com.sendbird.fragments.CustomCreateChannelFragment;


public class CustomCreateChannelActivity extends CreateChannelActivity {

  public static Intent newIntent(@NonNull Context context) {
    return new Intent(context, CustomCreateChannelActivity.class);
  }

  public static Intent newIntent(@NonNull Context context, @NonNull CreateableChannelType type) {
    return newIntentFromCustomActivity(context, CustomCreateChannelActivity.class, type);
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    Intent intent = getIntent();
    String selectedFandom = intent.getStringExtra("selectedFandom");
    String channelName = intent.getStringExtra("channelName");
    setContentView(R.layout.sb_activity);
    CreateChannelFragment fragment = createCreateChannelFragment(selectedFandom, channelName);
    FragmentManager manager = getSupportFragmentManager();
    manager.popBackStack();
    manager.beginTransaction()
            .replace(R.id.sb_fragment_container, fragment)
            .commit();
  }

  protected CreateChannelFragment createCreateChannelFragment(String selectedFandom, String channelName) {
    return new CreateChannelFragment.Builder()
      .setCustomCreateChannelFragment(new CustomCreateChannelFragment(selectedFandom, channelName))
      .setUseHeader(true)
      .setHeaderTitle(getString(R.string.sb_text_header_member_list))
      .build();
  }

  protected CreateChannelFragment createCreateChannelFragment(CreateableChannelType type, String selectedFandom, String channelName) {
      return new CreateChannelFragment.Builder()
              .setCustomCreateChannelFragment(new CustomCreateChannelFragment(selectedFandom, channelName))
              .setUseHeader(true)
              .build();
  }
}
