package com.tns;

import java.util.ArrayList;
import java.util.List;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.view.LayoutInflater;
import android.widget.SearchView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import com.sendbird.uikit.fragments.CreateChannelFragment;
import com.sendbird.uikit.widgets.PagerRecyclerView;

import org.nativescript.plugindemoangular.R;
import com.sendbird.uikit.fragments.CreateChannelFragment;
import com.sendbird.uikit.activities.adapter.UserListAdapter;
import com.sendbird.android.GroupChannel;
import com.sendbird.android.GroupChannelParams;
import com.sendbird.uikit.interfaces.CustomParamsHandler;
import java.util.List;

public class CustomCreateChannelFragment extends CreateChannelFragment implements SearchView.OnQueryTextListener {

    private List<String> userIds = new ArrayList<>();
    private String selectedFandom;
    private String channelName;

    public CustomCreateChannelFragment() {
        this.selectedFandom = null;
        this.channelName = null;
    }

    public CustomCreateChannelFragment(String selectedFandom, String channelName) {
        this.selectedFandom = selectedFandom;
        this.channelName = channelName;
    }

    @Override
    protected void onBeforeCreateGroupChannel(@NonNull GroupChannelParams params) {
      super.onBeforeCreateGroupChannel(params);
      params.addUserIds(userIds);
      if(this.channelName != null) {
        params.setName(this.channelName);
      }
      if(this.selectedFandom != null) {
        params.setCustomType("fandom_"+this.selectedFandom.toLowerCase());
      }
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = super.onCreateView(inflater, container, savedInstanceState);
        customUserListQueryHandler = new SelectUserQueryHandler();

        return SelectUserHelper.extendView(this, view, this);
    }

    @Override
    public boolean onQueryTextChange(String newText) {
        if (newText == null || newText.length() == 0) {
            setCustomUserListQueryHandler(new SelectUserQueryHandler());
        } else {
            setCustomUserListQueryHandler(new SelectUserQueryHandler(newText));
        }
        getViewModelStore().clear();

        View view = getView();
        PagerRecyclerView userListView = view.findViewById(R.id.rvSelectableUserList);

        onDrawPage();

        List<String> selectedUsers = adapter.getSelectedUserList();
        int count = selectedUsers == null ? 0 : selectedUsers.size();
        setRightButtonEnabled(selectedUsers != null && count > 0);

        userListView.setHasFixedSize(false);

        return false;
    }

    @Override
    public boolean onQueryTextSubmit(String query) {
        return false;
    }

}
