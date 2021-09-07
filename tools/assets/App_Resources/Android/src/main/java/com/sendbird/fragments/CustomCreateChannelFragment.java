package com.sendbird.fragments;

import org.nativescript.plugindemoangular.R;

import android.content.Intent;

import androidx.annotation.NonNull;

import com.sendbird.android.GroupChannel;
import com.sendbird.android.GroupChannelParams;
import com.sendbird.uikit.activities.adapter.UserListAdapter;
import com.sendbird.uikit.interfaces.CustomParamsHandler;
import com.sendbird.uikit.fragments.CreateChannelFragment;

import java.util.ArrayList;
import java.util.List;

public class CustomCreateChannelFragment extends CreateChannelFragment {
    private List<String> userIds = new ArrayList<>();
    private String selectedFandom;
    private String channelName;

    public CustomCreateChannelFragment(String selectedFandom, String channelName) {
      this.selectedFandom = selectedFandom;
      this.channelName = channelName;
    }

    @Override
    protected void onBeforeCreateGroupChannel(@NonNull GroupChannelParams params) {
      toastError(R.string.sb_text_error_create_channel);
      super.onBeforeCreateGroupChannel(params);
      params.addUserIds(userIds);
      params.setName(this.channelName);
      params.setCustomType("fandom_"+this.selectedFandom);
    }
}
