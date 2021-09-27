package com.tns;

import java.util.Collections;

import android.view.View;

import androidx.annotation.NonNull;

import com.sendbird.android.Member;

import com.sendbird.uikit.fragments.MemberListFragment;
import com.sendbird.uikit.model.DialogListItem;
import com.sendbird.uikit.utils.DialogUtils;

import org.nativescript.plugindemoangular.R;

public class CustomMemberListFragment extends MemberListFragment {
  @Override
    protected void onActionItemClicked(View view, int position, Member member) {
        if (member == null || getContext() == null || getFragmentManager() == null) return;
        boolean isMuted = member.isMuted();
        boolean isOperator = member.getRole() == Member.Role.OPERATOR;
        DialogListItem promoteOperator = new DialogListItem(isOperator ? R.string.sb_text_dismiss_operator : R.string.sb_text_promote_operator);
        DialogListItem muteMember = new DialogListItem(isMuted ? R.string.sb_text_unmute_member : R.string.sb_text_mute_member);
        DialogListItem banMember = new DialogListItem(R.string.sb_text_ban_member, 0, true);
        DialogListItem[] items = !channel.isBroadcast() ?
                new DialogListItem[]{promoteOperator, muteMember, banMember} :
                new DialogListItem[]{promoteOperator, banMember};
        DialogUtils.buildItems(member.getNickname(),
                (int) getResources().getDimension(R.dimen.sb_dialog_width_280),
                items, (v, p, key) -> {
                    if (key == R.string.sb_text_promote_operator) {
                        addOperator(member.getUserId());
                    } else if (key == R.string.sb_text_dismiss_operator) {
                        addOperator(member.getUserId());
                    } else if (key == R.string.sb_text_mute_member) {
                        addOperator(member.getUserId());
                    } else if (key == R.string.sb_text_unmute_member) {
                        addOperator(member.getUserId());
                    } else if (key == R.string.sb_text_ban_member) {
                        addOperator(member.getUserId());
                    }
                }).showSingle(getFragmentManager());
    }

    private void addOperator(@NonNull String userId) {
      loadingDialogHandler.shouldShowLoadingDialog();
      channel.addOperators(Collections.singletonList(userId), e -> {
          loadingDialogHandler.shouldDismissLoadingDialog();
          if (e != null) {
              toastError(R.string.sb_text_error_promote_operator);
          }
      });
  }
}
