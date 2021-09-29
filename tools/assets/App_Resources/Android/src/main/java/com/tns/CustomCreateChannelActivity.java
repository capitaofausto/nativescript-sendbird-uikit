package com.tns;

import android.os.Bundle;
import android.content.Context;
import android.content.Intent;

import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentManager;

import org.nativescript.plugindemoangular.R;
import com.sendbird.uikit.activities.CreateChannelActivity;
import com.sendbird.uikit.fragments.CreateChannelFragment;
import com.sendbird.uikit.consts.CreateableChannelType;
import com.sendbird.uikit.activities.ChannelActivity;

import com.tns.CustomCreateChannelFragment;

public class CustomCreateChannelActivity extends CreateChannelActivity {

    public static Intent newIntent(@NonNull Context context, @NonNull CreateableChannelType type) {
        return new Intent(context, CustomCreateChannelActivity.class);
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

    @Override
    protected CreateChannelFragment createCreateChannelFragment(CreateableChannelType type) {
        return new CreateChannelFragment.Builder(type)
            .setCustomCreateChannelFragment(new CustomCreateChannelFragment())
            .setUseHeader(true)
            .setHeaderTitle(getString(R.string.sb_text_header_create_channel))
            .setCreateButtonText(getString(R.string.sb_text_button_create))
            .build();
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
