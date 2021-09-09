package com.tns;

import java.util.ArrayList;
import java.util.List;
import com.sendbird.uikit.interfaces.CustomUserListQueryHandler;
import com.sendbird.uikit.interfaces.UserInfo;
import com.sendbird.uikit.interfaces.UserListResultHandler;
import com.sendbird.uikit.utils.UserUtils;
import com.sendbird.android.ApplicationUserListQuery;
import com.sendbird.android.SendBird;
import com.sendbird.android.SendBirdException;
import com.sendbird.android.User;
import com.sendbird.android.UserListQuery;

class SelectUserQueryHandler implements CustomUserListQueryHandler {
    private final ApplicationUserListQuery listQuery = SendBird.createApplicationUserListQuery();

    public SelectUserQueryHandler() {

    }

    public SelectUserQueryHandler(String startsWith) {
        listQuery.setNicknameStartsWithFilter(startsWith);
    }

    @Override
    public void loadInitial(UserListResultHandler handler) {
        loadNext(handler);
    }

    @Override
    public void loadNext(UserListResultHandler handler) {
        listQuery.next(new UserListQuery.UserListQueryResultHandler() {
            @Override
            public void onResult(List<User> list, SendBirdException e) {
                if (e != null) {
                    System.err.println("Error fetching user list");
                    return;
                }
                List<UserInfo> newUsers = new ArrayList<>();
                for (User user : list) {
                    newUsers.add(UserUtils.toUserInfo(user));
                }

                handler.onResult(newUsers, e);
            }
        });
    }

    @Override
    public boolean hasMore() {
        return listQuery.hasNext();
    }

}
