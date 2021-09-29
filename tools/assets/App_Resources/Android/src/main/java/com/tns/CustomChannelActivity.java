package com.tns;

import android.content.Context;
import android.content.Intent;
import android.view.View;

import androidx.annotation.NonNull;
import com.sendbird.uikit.activities.ChannelActivity;
import com.sendbird.uikit.consts.StringSet;
import com.sendbird.uikit.fragments.ChannelFragment;
import org.nativescript.plugindemoangular.R;
import com.sendbird.uikit.utils.ContextUtils;
/**
 * Activity displays a list of messages from a channel.
 */
public class CustomChannelActivity extends ChannelActivity {

    public static Intent newIntent(@NonNull Context context, @NonNull String channelUrl) {
        return newIntentFromCustomActivity(context, CustomChannelActivity.class, channelUrl);
    }

    @Override
    protected ChannelFragment createChannelFragment(@NonNull String channelUrl) {
        final Intent intent = getIntent();
        CustomChannelFragment customFragmentInstance = new CustomChannelFragment();
        ChannelFragment.Builder builder = new ChannelFragment.Builder(channelUrl)
                .setCustomChannelFragment(customFragmentInstance)
                .setHeaderRightButtonListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        Intent intent = CustomChannelSettingsActivity.newIntent(customFragmentInstance.getContext(), channelUrl);
                        customFragmentInstance.startActivityForResult(intent, 2004);
                    }
                })
                // .setOnProfileClickListener((view, i, member) -> handleProfileClick(member.getUserId()))
                .setUseHeader(true)
                .setStartingPoint(intent.getLongExtra(StringSet.KEY_STARTING_POINT, Long.MAX_VALUE));
        if (intent.hasExtra(StringSet.KEY_HIGHLIGHT_MESSAGE_INFO)) {
            builder.setHighlightMessageInfo(intent.getParcelableExtra(StringSet.KEY_HIGHLIGHT_MESSAGE_INFO));
        }
        if (intent.hasExtra(StringSet.KEY_FROM_SEARCH_RESULT)) {
            builder.setUseHeaderRightButton(intent.getBooleanExtra(StringSet.KEY_FROM_SEARCH_RESULT, false));
        }
        return builder.build();
    }

    private void handleProfileClick(String userId) {
      finish();
    }
}
