package com.tns;

import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.view.LayoutInflater;
import android.widget.SearchView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import com.sendbird.uikit.R;
import com.sendbird.uikit.fragments.InviteChannelFragment;
import com.sendbird.uikit.widgets.PagerRecyclerView;

public class CustomInviteChannelFragment extends InviteChannelFragment implements SearchView.OnQueryTextListener {

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

        userListView.setHasFixedSize(false);

        return false;
    }

    @Override
    public boolean onQueryTextSubmit(String query) {
        return false;
    }

}
