package com.tns;

import android.content.Context;
import android.content.Intent;
import androidx.annotation.NonNull;
import org.nativescript.plugindemoangular.R;
import com.sendbird.uikit.fragments.InviteChannelFragment;
import com.sendbird.uikit.activities.InviteChannelActivity;

public class CustomInviteChannelActivity extends InviteChannelActivity {

    public static Intent newIntent(@NonNull Context context, @NonNull String channelUrl) {
        return newIntentFromCustomActivity(context, CustomInviteChannelActivity.class, channelUrl);
    }

    @Override
    protected InviteChannelFragment createInviteChannelFragment(@NonNull String channelUrl) {
        return new InviteChannelFragment.Builder(channelUrl)
                .setCustomInviteChannelFragment(new CustomInviteChannelFragment())
                .setUseHeader(true)
                .setHeaderTitle(getString(R.string.sb_text_header_invite_member))
                .setInviteButtonText(getString(R.string.sb_text_button_invite))
                .build();
    }
}
