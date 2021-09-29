package com.tns;

import android.os.Bundle;
import com.sendbird.android.GroupChannel;
import com.sendbird.uikit.activities.ChannelListActivity;
import com.sendbird.uikit.fragments.ChannelListFragment;
import com.sendbird.uikit.interfaces.OnItemClickListener;
import android.view.View;

public class CustomChannelListActivity extends ChannelListActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
  }

  @Override
  protected ChannelListFragment createChannelListFragment() {
      CustomChannelListFragment customFragmentInstance = new CustomChannelListFragment();
    return new ChannelListFragment.Builder()
        .setCustomChannelListFragment(customFragmentInstance)
        .setItemClickListener(new OnItemClickListener<GroupChannel>() {
          @Override
          public void onItemClick(View view, int position, GroupChannel channel) {
            if (!(customFragmentInstance.isRemoving() || customFragmentInstance.isDetached() || customFragmentInstance.getContext() == null)) {
                customFragmentInstance.startActivity(CustomChannelActivity.newIntent(customFragmentInstance.getContext(), channel.getUrl()));
            }
          }
        })
        .setUseHeader(true)
        .build();
  }

}
