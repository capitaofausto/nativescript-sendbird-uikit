package com.sendbird.fragments;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.nativescript.plugindemoangular.R;

import android.content.Intent;
import android.content.Context;
import android.content.DialogInterface;
import android.app.Dialog;
import android.app.AlertDialog;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import android.os.Bundle;
import android.content.res.ColorStateList;
import android.view.View;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.FragmentManager;
import androidx.databinding.DataBindingUtil;

import com.sendbird.uikit.activities.CreateChannelActivity;
import com.sendbird.uikit.consts.CreateableChannelType;
import com.sendbird.uikit.fragments.ChannelListFragment;
import com.sendbird.uikit.model.DialogListItem;
import com.sendbird.uikit.consts.DialogEditTextParams;
import com.sendbird.uikit.interfaces.OnEditTextResultListener;
import com.sendbird.uikit.activities.ChannelActivity;
import com.sendbird.uikit.widgets.StatusFrameView;
import com.sendbird.uikit.databinding.SbFragmentChannelListBinding;

import com.tns.CustomCreateChannelActivity;
import com.tns.CustomChannelActivity;

import com.sendbird.utils.DialogUtils;


import com.sendbird.android.GroupChannel;
import com.sendbird.android.GroupChannelParams;
import com.sendbird.android.SendBirdException;

public class CustomChannelListFragment extends ChannelListFragment {

    private SbFragmentChannelListBinding binding;
    private String[] fandoms;
    private CreateableChannelType channelType;
    public CustomChannelListFragment(String[] fandoms, CreateableChannelType channelType) {
      this.fandoms = fandoms;
      this.channelType = channelType;
    }

    // @Nullable
    // @Override
    // public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
    //   super.onCreateView(inflater, container, savedInstanceState);
    //   binding = DataBindingUtil.inflate(inflater, R.layout.sb_fragment_channel_list, container, false);
    //   return binding.getRoot();
    // }

    @Override
    protected void onSelectedChannelType(@NonNull CreateableChannelType channelType) {
      Bundle args = getArguments();
      // int emptyTextResId = args.getInt("HELLO", R.string.sb_text_channel_list_empty);
      // binding.statusFrame.setEmptyText(emptyTextResId);
      String[] fandoms = this.fandoms;
      HashMap<String, String> extraInfo = new HashMap<String, String>();
      if(this.channelType == CreateableChannelType.Normal) {
        this.startCreateChannelActivity(this.channelType, null);
      } else if (this.channelType == CreateableChannelType.Super && fandoms.length == 1) {
        extraInfo.put("selectedFandom", fandoms[0]);
        this.channelNameDialog(this.channelType, extraInfo);
      } else if (this.channelType == CreateableChannelType.Super) {
        this.fandomsDialog(this.fandoms, this.channelType, extraInfo);
      }
    }

    private void fandomsDialog(String[] fandoms, CreateableChannelType channelType, HashMap<String, String> extraInfo) {
      CustomChannelListFragment context = CustomChannelListFragment.this;
      AlertDialog.Builder selectFandomsBuilder = new AlertDialog.Builder(getActivity());
      selectFandomsBuilder.setTitle(R.string.fandoms_dialog)
            .setItems(fandoms, new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface dialog, int which) {
                  if(which > -1) {
                    String selectedFandom = fandoms[which];
                    extraInfo.put("selectedFandom", selectedFandom);
                    channelNameDialog(channelType, extraInfo);
                  }
                }
              });
      AlertDialog selectFandomsDialog = selectFandomsBuilder.create();
      selectFandomsDialog.show();
    }

    private void channelNameDialog(CreateableChannelType channelType, HashMap<String, String> extraInfo) {
      OnEditTextResultListener listener = res -> {
        if(res != null) {
          extraInfo.put("channelName", res);
          if(channelType == CreateableChannelType.Super) {
            this.createAndStartSuperGroup(extraInfo);
          } else {
            this.startCreateChannelActivity(this.channelType, extraInfo);
          }
        }
      };
      DialogEditTextParams params = new DialogEditTextParams(getString(R.string.channel_name_dialog));
      params.setEnableSingleLine(true);
      DialogUtils.buildEditText(
              getString(R.string.channel_name_dialog_hint),
              (int) getResources().getDimension(R.dimen.sb_dialog_width_280),
              params, listener,
              getString(R.string.dialog_button_save), null,
              getString(R.string.sb_text_button_cancel), null).showSingle(getFragmentManager());
    }

    private void startCreateChannelActivity(CreateableChannelType channelType, @Nullable HashMap<String, String> extraInfo) {
      Intent createChannelIntent = CustomCreateChannelActivity.newIntent(getContext(), channelType);
      if(extraInfo != null) {
        Iterator it = extraInfo.entrySet().iterator();
        while (it.hasNext()) {
          Map.Entry pair = (Map.Entry)it.next();
          createChannelIntent.putExtra(pair.getKey().toString(), pair.getValue().toString());
          it.remove();
        }
      }
      startActivity(createChannelIntent);
    }

    private void createAndStartSuperGroup(HashMap<String, String> extraInfo) {
      GroupChannelParams params = new GroupChannelParams()
        .setName(extraInfo.get("channelName").toString())
        .setCustomType("fandom_"+extraInfo.get("selectedFandom").toString())
        .setPublic(true)
        .setSuper(true);

        GroupChannel.createChannel(params, new GroupChannel.GroupChannelCreateHandler() {
            @Override
            public void onResult(GroupChannel groupChannel, SendBirdException e) {
                String channelUrl = groupChannel.getUrl();
                startCreateChannelActivity(channelUrl);
            }
        });
    }

    private void startCreateChannelActivity(String channelUrl) {
      Intent intent = CustomChannelActivity.newIntent(getContext(), channelUrl);
      startActivity(intent);
    }
}

