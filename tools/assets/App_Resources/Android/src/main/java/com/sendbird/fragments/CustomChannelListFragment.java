package com.sendbird.fragments;

import java.util.List;
import java.util.ArrayList;

import org.nativescript.plugindemoangular.R;

import android.content.Intent;
import android.content.Context;
import android.content.DialogInterface;
import android.app.Dialog;
import android.app.AlertDialog;
import androidx.annotation.NonNull;


import com.sendbird.uikit.activities.CreateChannelActivity;
import com.sendbird.uikit.consts.CreateableChannelType;
import com.sendbird.uikit.fragments.ChannelListFragment;
import com.sendbird.uikit.model.DialogListItem;
import com.sendbird.uikit.consts.DialogEditTextParams;
import com.sendbird.uikit.interfaces.OnEditTextResultListener;

import com.tns.CustomCreateChannelActivity;

import com.sendbird.utils.DialogUtils;

public class CustomChannelListFragment extends ChannelListFragment {

    private String[] fandoms;
    public CustomChannelListFragment(String[] fandoms) {
      this.fandoms = fandoms;
    }

    @Override
    protected void onSelectedChannelType(@NonNull CreateableChannelType channelType) {
      AlertDialog.Builder selectFandomsBuilder = new AlertDialog.Builder(getActivity());
      String[] fandoms = this.fandoms;
      selectFandomsBuilder.setTitle(R.string.fandoms_dialog)
            .setItems(fandoms, new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface dialog, int which) {
                  if(which > -1) {
                    String selectedFandom = fandoms[which];
                    Intent createChannelIntent = CustomCreateChannelActivity.newIntent(getContext(), channelType);
                    OnEditTextResultListener listener = res -> {
                      if(res != null) {
                        String channelName = res;
                        createChannelIntent.putExtra("selectedFandom", selectedFandom);
                        createChannelIntent.putExtra("fandomText", channelName);
                        startActivity(createChannelIntent);
                      }

                    };
                    DialogEditTextParams params = new DialogEditTextParams(getString(R.string.sb_text_channel_settings_change_channel_name_hint));
                          params.setEnableSingleLine(true);
                          DialogUtils.buildEditText(
                                  getString(R.string.sb_text_channel_settings_change_channel_name_hint),
                                  (int) getResources().getDimension(R.dimen.sb_dialog_width_280),
                                  params, listener,
                                  getString(R.string.sb_text_button_save), null,
                                  getString(R.string.sb_text_button_cancel), null).showSingle(getFragmentManager());
                  }
                }
              });
      AlertDialog selectFandomsDialog = selectFandomsBuilder.create();
      selectFandomsDialog.show();
    }
}

