package com.sendbird;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.DrawableRes;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import org.nativescript.plugindemoangular.R;
import com.sendbird.utils.DrawableUtils;
import com.sendbird.utils.PreferenceUtils;

public class CustomTabView extends FrameLayout {
    private int tintColorRedId;
    private TextView badgeView;
    private ImageView iconView;
    private TextView titleView;

    public CustomTabView(@NonNull Context context) {
        this(context, null);
    }

    public CustomTabView(@NonNull Context context, @Nullable AttributeSet attrs) {
        this(context, attrs, 0);
    }

    public CustomTabView(@NonNull Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        initView(context);
    }

    private void initView(@NonNull Context context) {
        LayoutInflater inflater = LayoutInflater.from(getContext());
        View view = inflater.inflate(R.layout.view_custom_tab, this, true);
        badgeView = view.findViewById(R.id.badge);
        iconView = view.findViewById(R.id.ivIcon);
        titleView = view.findViewById(R.id.tvTitle);

        tintColorRedId = R.color.selector_tab_tint;

        int badgeTextAppearance = R.style.SendbirdCaption3OnDark01;
        int badgeBackgroundRes = R.drawable.shape_badge_background;
        int titleTextAppearance = R.style.SendbirdCaption2Primary300;

        badgeView.setTextAppearance(context, badgeTextAppearance);
        badgeView.setBackgroundResource(badgeBackgroundRes);
        titleView.setTextAppearance(context, titleTextAppearance);
        titleView.setTextColor(context.getResources().getColorStateList(tintColorRedId));
    }

    public void setBadgeVisibility(int visibility) {
        badgeView.setVisibility(visibility);
    }

    public void setBadgeCount(String countString) {
        badgeView.setText(countString);
    }

    public void setIcon(@DrawableRes int iconResId) {
        iconView.setImageDrawable(DrawableUtils.setTintList(getContext(), iconResId, tintColorRedId));
    }

    public void setTitle(String title) {
        titleView.setText(title);
    }
}
