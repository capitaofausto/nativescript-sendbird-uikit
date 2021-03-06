package com.tns;

import android.content.Context;
import android.content.SharedPreferences;
import android.content.Intent;
import android.view.View;
import androidx.annotation.NonNull;
import org.nativescript.plugindemoangular.R;
import com.sendbird.uikit.SendBirdUIKit;
import com.sendbird.uikit.activities.InviteChannelActivity;
import com.sendbird.uikit.activities.MemberListActivity;
import com.sendbird.uikit.fragments.MemberListFragment;
import com.sendbird.uikit.utils.ContextUtils;

import com.tns.NativeScriptActivity;

public class CustomMemberListActivity extends MemberListActivity {
    public static Intent newIntent(@NonNull Context context, @NonNull String channelUrl) {
        return newIntentFromCustomActivity(context, CustomMemberListActivity.class, channelUrl);
    }

    @Override
    protected MemberListFragment createMemberListFragment(@NonNull String channelUrl) {
        CustomMemberListFragment customFragmentInstance = new CustomMemberListFragment();
        return new MemberListFragment.Builder(channelUrl)
                .setCustomMemberListFragment(customFragmentInstance)
                .setHeaderRightButtonListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        if (!(customFragmentInstance.isRemoving() || customFragmentInstance.isDetached() || customFragmentInstance.getContext() == null)) {
                            customFragmentInstance.startActivity(CustomInviteChannelActivity.newIntent(customFragmentInstance.getContext(), channelUrl));
                        }
                    }
                })
                .setUseHeader(true)
                .setUseHeaderRightButton(true)
                .setHeaderTitle(getString(R.string.sb_text_header_member_list))
                .setItemClickListener((view, i, member) -> showCustomChannelActivity(member.getUserId()))
                .setEmptyIcon(R.drawable.icon_chat, SendBirdUIKit.getDefaultThemeMode().getMonoTintColorStateList(this))
                .setEmptyText(R.string.sb_text_user_list_empty)
                .build();
    }

    private void showCustomChannelActivity(String userId) {
      Intent intent = new Intent(this, NativeScriptActivity.class);
      SharedPreferences sharedPref = getSharedPreferences("prefs.db", 0);
      SharedPreferences.Editor editor = sharedPref.edit();
      editor.putString("sendbirdUserId", userId);
      editor.apply();
      // intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_NEW_TASK);
      startActivity(intent);
      finish();
    }
}
