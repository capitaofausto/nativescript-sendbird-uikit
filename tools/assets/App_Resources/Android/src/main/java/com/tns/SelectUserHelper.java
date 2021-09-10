package com.tns;

import com.sendbird.uikit.R;
import com.sendbird.uikit.fragments.SelectUserFragment;
import com.sendbird.uikit.widgets.PagerRecyclerView;
import android.widget.SearchView;
import androidx.constraintlayout.widget.ConstraintLayout;
import android.widget.LinearLayout;
import android.widget.FrameLayout;
import android.view.View;

public class SelectUserHelper {

    public static View extendView(SelectUserFragment fragment, View view, SearchView.OnQueryTextListener queryTextListener) {

        if (view instanceof ConstraintLayout) {
            ConstraintLayout layout = (ConstraintLayout) view;

            SearchView sv = new SearchView(fragment.getContext());
            sv.setBackgroundColor(fragment.getResources().getColor(R.color.background_100));
            //sv.findViewById(androidx.appcompat.app.R.id.search_plate).setBackgroundColor(Color.TRANSPARENT);
            sv.setIconifiedByDefault(false);
            sv.setIconified(false);

            int svId = View.generateViewId();
            sv.setId(svId);
            sv.setOnQueryTextListener(queryTextListener);
            ConstraintLayout.LayoutParams slp = new ConstraintLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT);
            slp.topToBottom = R.id.abvSelectUsers;
            slp.bottomToBottom = R.id.rvSelectableUserList;
            sv.setLayoutParams(slp);

            FrameLayout fl = (FrameLayout) view.findViewById(R.id.rvSelectableUserList).getParent();
            ConstraintLayout.LayoutParams flp = (ConstraintLayout.LayoutParams) fl.getLayoutParams();
            flp.topToBottom = svId;
            fl.setLayoutParams(flp);

            layout.addView(sv);
        }

        return view;
    }

}
