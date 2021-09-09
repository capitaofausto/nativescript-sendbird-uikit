package com.tns;

import android.content.Context;
import android.content.Intent;
import android.view.View;
import androidx.annotation.NonNull;
import com.sendbird.android.GroupChannel;
import com.sendbird.uikit.activities.ChannelSettingsActivity;
import com.sendbird.uikit.interfaces.OnMenuItemClickListener;
import com.sendbird.uikit.fragments.ChannelSettingsFragment;
import com.sendbird.uikit.widgets.ChannelSettingsView;

public class CustomChannelSettingsActivity extends ChannelSettingsActivity {

    public static Intent newIntent(@NonNull Context context, @NonNull String channelUrl) {
        return newIntentFromCustomActivity(context, CustomChannelSettingsActivity.class, channelUrl);
    }

    @Override
    protected ChannelSettingsFragment createChannelSettingsFragment(@NonNull String channelUrl) {
        CustomChannelSettingsFragment customFragmentInstance = new CustomChannelSettingsFragment();
        return new ChannelSettingsFragment.Builder(channelUrl)
                .setCustomChannelSettingsFragment(customFragmentInstance)
                .setOnSettingMenuClickListener(new OnMenuItemClickListener<ChannelSettingsView.ChannelSettingMenu, GroupChannel>() {
                    @Override
                    public boolean onMenuItemClicked(View view, ChannelSettingsView.ChannelSettingMenu menu, GroupChannel data) {
                        if (menu == ChannelSettingsView.ChannelSettingMenu.MEMBERS) {
                            if (!(customFragmentInstance.isRemoving() || customFragmentInstance.isDetached() || customFragmentInstance.getContext() == null)) {
                                customFragmentInstance.startActivity(CustomMemberListActivity.newIntent(customFragmentInstance.getContext(), channelUrl));
                            }
                            return true;
                        }
                        return false;
                    }
                })
                .setUseHeader(true)
                .build();
    }
}
