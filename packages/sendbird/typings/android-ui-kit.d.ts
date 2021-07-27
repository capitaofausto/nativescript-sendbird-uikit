/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module sendbird {
		export module uikit {
			export class BuildConfig {
				public static class: java.lang.Class<com.sendbird.uikit.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export class DataBinderMapperImpl {
				public static class: java.lang.Class<com.sendbird.uikit.DataBinderMapperImpl>;
				public getDataBinder(param0: androidx.databinding.DataBindingComponent, param1: androidNative.Array<globalAndroid.view.View>, param2: number): androidx.databinding.ViewDataBinding;
				public getDataBinder(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View, param2: number): androidx.databinding.ViewDataBinding;
				public collectDependencies(): java.util.List<androidx.databinding.DataBinderMapper>;
				public getLayoutId(param0: string): number;
				public convertBrIdToString(param0: number): string;
				public constructor();
			}
			export module DataBinderMapperImpl {
				export class InnerBrLookup {
					public static class: java.lang.Class<com.sendbird.uikit.DataBinderMapperImpl.InnerBrLookup>;
				}
				export class InnerLayoutIdLookup {
					public static class: java.lang.Class<com.sendbird.uikit.DataBinderMapperImpl.InnerLayoutIdLookup>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export class SendBirdUIKit {
				public static class: java.lang.Class<com.sendbird.uikit.SendBirdUIKit>;
				public static getCustomUserListQueryHandler(): com.sendbird.uikit.interfaces.CustomUserListQueryHandler;
				public static init(param0: com.sendbird.uikit.adapter.SendBirdUIKitAdapter, param1: globalAndroid.content.Context): void;
				public static getCompressQuality(): number;
				public static setUseDefaultUserProfile(param0: boolean): void;
				public static getResizingSize(): globalAndroid.util.Pair<java.lang.Integer,java.lang.Integer>;
				public static getAdapter(): com.sendbird.uikit.adapter.SendBirdUIKitAdapter;
				public static disconnect(param0: com.sendbird.android.SendBird.DisconnectHandler): void;
				public static setCompressQuality(param0: number): void;
				public static setUseImageCompression(param0: boolean): void;
				public static shouldUseImageCompression(): boolean;
				public static setResizingSize(param0: globalAndroid.util.Pair<java.lang.Integer,java.lang.Integer>): void;
				public static getCustomParamsHandler(): com.sendbird.uikit.interfaces.CustomParamsHandler;
				public static shouldUseDefaultUserProfile(): boolean;
				public constructor();
				public static setCustomUserListQueryHandler(param0: com.sendbird.uikit.interfaces.CustomUserListQueryHandler): void;
				public static updateUserInfo(param0: string, param1: string, param2: com.sendbird.android.SendBird.UserInfoUpdateHandler): void;
				public static setDefaultThemeMode(param0: com.sendbird.uikit.SendBirdUIKit.ThemeMode): void;
				public static getDefaultThemeMode(): com.sendbird.uikit.SendBirdUIKit.ThemeMode;
				public static setCustomParamsHandler(param0: com.sendbird.uikit.interfaces.CustomParamsHandler): void;
				public static isDarkMode(): boolean;
				public static setLogLevel(param0: com.sendbird.uikit.SendBirdUIKit.LogLevel): void;
				public static connect(param0: com.sendbird.android.SendBird.ConnectHandler): void;
			}
			export module SendBirdUIKit {
				export class LogLevel {
					public static class: java.lang.Class<com.sendbird.uikit.SendBirdUIKit.LogLevel>;
					public static ALL: com.sendbird.uikit.SendBirdUIKit.LogLevel;
					public static INFO: com.sendbird.uikit.SendBirdUIKit.LogLevel;
					public static WARN: com.sendbird.uikit.SendBirdUIKit.LogLevel;
					public static ERROR: com.sendbird.uikit.SendBirdUIKit.LogLevel;
					public static values(): androidNative.Array<com.sendbird.uikit.SendBirdUIKit.LogLevel>;
					public static valueOf(param0: string): com.sendbird.uikit.SendBirdUIKit.LogLevel;
				}
				export class ThemeMode {
					public static class: java.lang.Class<com.sendbird.uikit.SendBirdUIKit.ThemeMode>;
					public static Light: com.sendbird.uikit.SendBirdUIKit.ThemeMode;
					public static Dark: com.sendbird.uikit.SendBirdUIKit.ThemeMode;
					public static values(): androidNative.Array<com.sendbird.uikit.SendBirdUIKit.ThemeMode>;
					public getSecondaryTintResId(): number;
					public getPrimaryTintResId(): number;
					public getPrimaryTintColorStateList(param0: globalAndroid.content.Context): globalAndroid.content.res.ColorStateList;
					public static valueOf(param0: string): com.sendbird.uikit.SendBirdUIKit.ThemeMode;
					public getMonoTintResId(): number;
					public getSecondaryTintColorStateList(param0: globalAndroid.content.Context): globalAndroid.content.res.ColorStateList;
					public getResId(): number;
					public getMonoTintColorStateList(param0: globalAndroid.content.Context): globalAndroid.content.res.ColorStateList;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export class BannedListActivity {
					public static class: java.lang.Class<com.sendbird.uikit.activities.BannedListActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public static newIntent(param0: globalAndroid.content.Context, param1: string): globalAndroid.content.Intent;
					public constructor();
					public createBannedListFragment(param0: string): androidx.fragment.app.Fragment;
					public static newIntentFromCustomActivity(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: string): globalAndroid.content.Intent;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export class ChannelActivity {
					public static class: java.lang.Class<com.sendbird.uikit.activities.ChannelActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public static newIntent(param0: globalAndroid.content.Context, param1: string): globalAndroid.content.Intent;
					public createChannelFragment(param0: string): com.sendbird.uikit.fragments.ChannelFragment;
					public constructor();
					public static newIntentFromCustomActivity(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: string): globalAndroid.content.Intent;
				}
				export module ChannelActivity {
					export class IntentBuilder {
						public static class: java.lang.Class<com.sendbird.uikit.activities.ChannelActivity.IntentBuilder>;
						public build(): globalAndroid.content.Intent;
						public setHighlightMessageInfo(param0: com.sendbird.uikit.model.HighlightMessageInfo): com.sendbird.uikit.activities.ChannelActivity.IntentBuilder;
						public setStartingPoint(param0: number): com.sendbird.uikit.activities.ChannelActivity.IntentBuilder;
						public constructor(param0: globalAndroid.content.Context, param1: string);
						public constructor(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export class ChannelListActivity {
					public static class: java.lang.Class<com.sendbird.uikit.activities.ChannelListActivity>;
					public static newIntent(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onNewIntent(param0: globalAndroid.content.Intent): void;
					public constructor();
					public createChannelListFragment(): com.sendbird.uikit.fragments.ChannelListFragment;
					public static newRedirectToChannelIntent(param0: globalAndroid.content.Context, param1: string): globalAndroid.content.Intent;
					public static newIntentFromCustomActivity(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: string): globalAndroid.content.Intent;
					public createRedirectChannelActivityIntent(param0: string): globalAndroid.content.Intent;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export class ChannelSettingsActivity {
					public static class: java.lang.Class<com.sendbird.uikit.activities.ChannelSettingsActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public static newIntent(param0: globalAndroid.content.Context, param1: string): globalAndroid.content.Intent;
					public constructor();
					public static newIntentFromCustomActivity(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: string): globalAndroid.content.Intent;
					public createChannelSettingsFragment(param0: string): com.sendbird.uikit.fragments.ChannelSettingsFragment;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export class CreateChannelActivity {
					public static class: java.lang.Class<com.sendbird.uikit.activities.CreateChannelActivity>;
					public static newIntentFromCustomActivity(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: com.sendbird.uikit.consts.CreateableChannelType): globalAndroid.content.Intent;
					public static newIntent(param0: globalAndroid.content.Context, param1: com.sendbird.uikit.consts.CreateableChannelType): globalAndroid.content.Intent;
					public static newIntent(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public createCreateChannelFragment(param0: com.sendbird.uikit.consts.CreateableChannelType): com.sendbird.uikit.fragments.CreateChannelFragment;
					public createCreateChannelFragment(): com.sendbird.uikit.fragments.CreateChannelFragment;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export class InviteChannelActivity {
					public static class: java.lang.Class<com.sendbird.uikit.activities.InviteChannelActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public static newIntent(param0: globalAndroid.content.Context, param1: string): globalAndroid.content.Intent;
					public constructor();
					public static newIntentFromCustomActivity(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: string): globalAndroid.content.Intent;
					public createInviteChannelFragment(param0: string): com.sendbird.uikit.fragments.InviteChannelFragment;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export class MemberListActivity {
					public static class: java.lang.Class<com.sendbird.uikit.activities.MemberListActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public static newIntent(param0: globalAndroid.content.Context, param1: string): globalAndroid.content.Intent;
					public constructor();
					public static newIntentFromCustomActivity(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: string): globalAndroid.content.Intent;
					public createMemberListFragment(param0: string): com.sendbird.uikit.fragments.MemberListFragment;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export class MessageSearchActivity {
					public static class: java.lang.Class<com.sendbird.uikit.activities.MessageSearchActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public static newIntent(param0: globalAndroid.content.Context, param1: string): globalAndroid.content.Intent;
					public constructor();
					public static newIntentFromCustomActivity(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: string): globalAndroid.content.Intent;
					public createMessageSearchFragment(param0: string): com.sendbird.uikit.fragments.MessageSearchFragment;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export class ModerationActivity {
					public static class: java.lang.Class<com.sendbird.uikit.activities.ModerationActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public static newIntent(param0: globalAndroid.content.Context, param1: string): globalAndroid.content.Intent;
					public constructor();
					public static newIntentFromCustomActivity(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: string): globalAndroid.content.Intent;
					public createModerationFragment(param0: string): com.sendbird.uikit.fragments.ModerationFragment;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export class MutedMemberListActivity {
					public static class: java.lang.Class<com.sendbird.uikit.activities.MutedMemberListActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public static newIntent(param0: globalAndroid.content.Context, param1: string): globalAndroid.content.Intent;
					public constructor();
					public static newIntentFromCustomActivity(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: string): globalAndroid.content.Intent;
					public createMutedMemberListFragment(param0: string): androidx.fragment.app.Fragment;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export class OpenChannelSettingsActivity {
					public static class: java.lang.Class<com.sendbird.uikit.activities.OpenChannelSettingsActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public static newIntent(param0: globalAndroid.content.Context, param1: string): globalAndroid.content.Intent;
					public constructor();
					public static newIntentFromCustomActivity(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: string): globalAndroid.content.Intent;
					public createOpenChannelSettingsFragment(param0: string): com.sendbird.uikit.fragments.OpenChannelSettingsFragment;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export class OperatorListActivity {
					public static class: java.lang.Class<com.sendbird.uikit.activities.OperatorListActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public static newIntent(param0: globalAndroid.content.Context, param1: string): globalAndroid.content.Intent;
					public constructor();
					public static newIntentFromCustomActivity(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: string): globalAndroid.content.Intent;
					public createOperatorListFragment(param0: string): androidx.fragment.app.Fragment;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export class ParticipantsListActivity {
					public static class: java.lang.Class<com.sendbird.uikit.activities.ParticipantsListActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public static newIntent(param0: globalAndroid.content.Context, param1: string): globalAndroid.content.Intent;
					public constructor();
					public static newIntentFromCustomActivity(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: string): globalAndroid.content.Intent;
					public createParticipantsListFragment(param0: string): com.sendbird.uikit.fragments.ParticipantsListFragment;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export class PhotoViewActivity {
					public static class: java.lang.Class<com.sendbird.uikit.activities.PhotoViewActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public static newIntent(param0: globalAndroid.content.Context, param1: com.sendbird.android.BaseChannel.ChannelType, param2: com.sendbird.android.FileMessage): globalAndroid.content.Intent;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export class PromoteOperatorsActivity {
					public static class: java.lang.Class<com.sendbird.uikit.activities.PromoteOperatorsActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public static newIntent(param0: globalAndroid.content.Context, param1: string): globalAndroid.content.Intent;
					public constructor();
					public createPromoteOperatorFragment(param0: com.sendbird.android.GroupChannel): androidx.fragment.app.Fragment;
					public static newIntentFromCustomActivity(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: string): globalAndroid.content.Intent;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module adapter {
					export abstract class BaseAdapter<T, VH>  extends androidx.recyclerview.widget.RecyclerView.Adapter<any> {
						public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.BaseAdapter<any,any>>;
						public getItem(param0: number): any;
						public getItems(): java.util.List<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module adapter {
					export abstract class BaseMessageAdapter<T, VH>  extends androidx.recyclerview.widget.RecyclerView.Adapter<any> {
						public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.BaseMessageAdapter<any,any>>;
						public getItemId(param0: number): number;
						public getItem(param0: number): any;
						public getItems(): java.util.List<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module adapter {
					export class ChannelDiffCallback {
						public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.ChannelDiffCallback>;
						public getNewListSize(): number;
						public areItemsTheSame(param0: number, param1: number): boolean;
						public areContentsTheSame(param0: number, param1: number): boolean;
						public getOldListSize(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module adapter {
					export class ChannelListAdapter extends com.sendbird.uikit.activities.adapter.BaseAdapter<com.sendbird.android.GroupChannel,com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.GroupChannel>> {
						public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.ChannelListAdapter>;
						public constructor();
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.GroupChannel>;
						public setItems(param0: java.util.List<com.sendbird.android.GroupChannel>): void;
						public setOnItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.GroupChannel>): void;
						public getItem(param0: number): any;
						public setOnItemLongClickListener(param0: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.GroupChannel>): void;
						public getItem(param0: number): com.sendbird.android.GroupChannel;
						public getItems(): java.util.List<com.sendbird.android.GroupChannel>;
						public getItemCount(): number;
						public getItemId(param0: number): number;
						public onBindViewHolder(param0: com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.GroupChannel>, param1: number): void;
						public constructor(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.GroupChannel>);
						public getItems(): java.util.List<any>;
					}
					export module ChannelListAdapter {
						export class ChannelInfo {
							public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.ChannelListAdapter.ChannelInfo>;
							public isFrozen(): boolean;
							public getChannelUrl(): string;
							public hashCode(): number;
							public getCreatedAt(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export class ChannelPreviewHolder extends com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.GroupChannel> {
							public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.ChannelListAdapter.ChannelPreviewHolder>;
							public bind(param0: any): void;
							public bind(param0: com.sendbird.android.GroupChannel): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module adapter {
					export class EmojiListAdapter extends com.sendbird.uikit.activities.adapter.BaseAdapter<com.sendbird.android.Emoji,com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.Emoji>> {
						public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.EmojiListAdapter>;
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.Emoji>;
						public onBindViewHolder(param0: com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.Emoji>, param1: number): void;
						public setMoreButtonClickListener(param0: globalAndroid.view.View.OnClickListener): void;
						public getItemViewType(param0: number): number;
						public getItem(param0: number): com.sendbird.android.Emoji;
						public getItems(): java.util.List<com.sendbird.android.Emoji>;
						public getItemCount(): number;
						public setEmojiClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<string>): void;
						public getItem(param0: number): any;
						public getItems(): java.util.List<any>;
						public constructor(param0: java.util.List<com.sendbird.android.Emoji>, param1: java.util.List<com.sendbird.android.Reaction>, param2: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module adapter {
					export class EmojiReactionDiffCallback {
						public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.EmojiReactionDiffCallback>;
						public getNewListSize(): number;
						public areItemsTheSame(param0: number, param1: number): boolean;
						public areContentsTheSame(param0: number, param1: number): boolean;
						public getOldListSize(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module adapter {
					export class EmojiReactionListAdapter extends com.sendbird.uikit.activities.adapter.BaseAdapter<com.sendbird.android.Reaction,com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.Reaction>> {
						public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.EmojiReactionListAdapter>;
						public setReactionList(param0: java.util.List<com.sendbird.android.Reaction>): void;
						public constructor();
						public setUseMoreButton(param0: boolean): void;
						public getItemViewType(param0: number): number;
						public useMoreButton(): boolean;
						public setClickable(param0: boolean): void;
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.Reaction>;
						public setEmojiReactionClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<string>): void;
						public getItem(param0: number): any;
						public getItem(param0: number): com.sendbird.android.Reaction;
						public setLongClickable(param0: boolean): void;
						public setMoreButtonClickListener(param0: globalAndroid.view.View.OnClickListener): void;
						public setEmojiReactionLongClickListener(param0: com.sendbird.uikit.interfaces.OnItemLongClickListener<string>): void;
						public onBindViewHolder(param0: com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.Reaction>, param1: number): void;
						public getItemCount(): number;
						public getItems(): java.util.List<any>;
						public getItems(): java.util.List<com.sendbird.android.Reaction>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module adapter {
					export class EmojiReactionUserListAdapter extends com.sendbird.uikit.activities.adapter.BaseAdapter<com.sendbird.android.User,com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.User>> {
						public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.EmojiReactionUserListAdapter>;
						public constructor();
						public onBindViewHolder(param0: com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.User>, param1: number): void;
						public getItemCount(): number;
						public getItemId(param0: number): number;
						public getItem(param0: number): com.sendbird.android.User;
						public getItem(param0: number): any;
						public getItems(): java.util.List<any>;
						public getItems(): java.util.List<com.sendbird.android.User>;
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.User>;
						public setItems(param0: java.util.List<com.sendbird.android.User>): void;
						public constructor(param0: java.util.List<com.sendbird.android.User>);
					}
					export module EmojiReactionUserListAdapter {
						export class EmojiReactionUserViewHolder extends com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.User> {
							public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.EmojiReactionUserListAdapter.EmojiReactionUserViewHolder>;
							public bind(param0: any): void;
							public bind(param0: com.sendbird.android.User): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module adapter {
					export class MemberListAdapter extends com.sendbird.uikit.activities.adapter.BaseAdapter<com.sendbird.android.Member,com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.Member>> {
						public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.MemberListAdapter>;
						public setItems(param0: java.util.List<com.sendbird.android.Member>, param1: com.sendbird.android.Member.Role): void;
						public constructor();
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.Member>;
						public getItem(param0: number): com.sendbird.android.Member;
						public setOnItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.Member>): void;
						public setOnActionItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.Member>): void;
						public getItems(): java.util.List<com.sendbird.android.Member>;
						public setOnProfileClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.Member>): void;
						public getItem(param0: number): any;
						public setOnItemLongClickListener(param0: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.Member>): void;
						public onBindViewHolder(param0: com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.Member>, param1: number): void;
						public getItemCount(): number;
						public getItemId(param0: number): number;
						public getItems(): java.util.List<any>;
					}
					export module MemberListAdapter {
						export class MemberPreviewHolder extends com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.Member> {
							public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.MemberListAdapter.MemberPreviewHolder>;
							public bind(param0: any): void;
							public bind(param0: com.sendbird.android.Member): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module adapter {
					export class MessageDiffCallback {
						public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.MessageDiffCallback>;
						public getNewListSize(): number;
						public areItemsTheSame(param0: number, param1: number): boolean;
						public areContentsTheSame(param0: number, param1: number): boolean;
						public constructor(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.android.GroupChannel, param2: java.util.List<com.sendbird.android.BaseMessage>, param3: java.util.List<com.sendbird.android.BaseMessage>, param4: boolean);
						public getOldListSize(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module adapter {
					export class MessageListAdapter extends com.sendbird.uikit.activities.adapter.BaseMessageAdapter<com.sendbird.android.BaseMessage,com.sendbird.uikit.activities.viewholder.MessageViewHolder> {
						public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.MessageListAdapter>;
						public constructor();
						public getItemViewType(param0: number): number;
						public getItem(param0: number): com.sendbird.android.BaseMessage;
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.sendbird.uikit.activities.viewholder.MessageViewHolder;
						public getItem(param0: number): any;
						public setEmojiReactionMoreButtonClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.BaseMessage>): void;
						public constructor(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.BaseMessage>, param2: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.BaseMessage>, param3: boolean);
						public constructor(param0: com.sendbird.android.GroupChannel);
						public constructor(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.BaseMessage>, param2: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.BaseMessage>);
						public setEmojiReactionClickListener(param0: com.sendbird.uikit.interfaces.OnEmojiReactionClickListener): void;
						public setOnItemLongClickListener(param0: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.BaseMessage>): void;
						public setChannel(param0: com.sendbird.android.GroupChannel): void;
						public setOnProfileClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.BaseMessage>): void;
						public getItemId(param0: number): number;
						public getItemCount(): number;
						public setEmojiReactionLongClickListener(param0: com.sendbird.uikit.interfaces.OnEmojiReactionLongClickListener): void;
						public setHighlightInfo(param0: com.sendbird.uikit.model.HighlightMessageInfo): void;
						public getItems(): java.util.List<any>;
						public constructor(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.BaseMessage>);
						public onBindViewHolder(param0: com.sendbird.uikit.activities.viewholder.MessageViewHolder, param1: number): void;
						public getItems(): java.util.List<com.sendbird.android.BaseMessage>;
						public setOnItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.BaseMessage>): void;
						public setItems(param0: com.sendbird.android.GroupChannel, param1: java.util.List<com.sendbird.android.BaseMessage>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module adapter {
					export class MessageSearchAdapter extends com.sendbird.uikit.activities.adapter.BaseAdapter<com.sendbird.android.BaseMessage,com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.BaseMessage>> {
						public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.MessageSearchAdapter>;
						public onBindViewHolder(param0: com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.BaseMessage>, param1: number): void;
						public constructor();
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.BaseMessage>;
						public setItems(param0: java.util.List<com.sendbird.android.BaseMessage>): void;
						public getItem(param0: number): com.sendbird.android.BaseMessage;
						public getItemId(param0: number): number;
						public getItemCount(): number;
						public getItem(param0: number): any;
						public getItems(): java.util.List<any>;
						public getItems(): java.util.List<com.sendbird.android.BaseMessage>;
						public setOnItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.BaseMessage>): void;
					}
					export module MessageSearchAdapter {
						export class SearchResultViewHolder extends com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.BaseMessage> {
							public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.MessageSearchAdapter.SearchResultViewHolder>;
							public bind(param0: any): void;
							public constructor(param0: globalAndroid.view.View);
							public bind(param0: com.sendbird.android.BaseMessage): void;
							public constructor(param0: com.sendbird.uikit.activities.adapter.MessageSearchAdapter, param1: com.sendbird.uikit.databinding.SbViewSearchResultPreviewBinding);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module adapter {
					export class OpenChannelMessageDiffCallback {
						public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.OpenChannelMessageDiffCallback>;
						public getNewListSize(): number;
						public areItemsTheSame(param0: number, param1: number): boolean;
						public areContentsTheSame(param0: number, param1: number): boolean;
						public constructor(param0: com.sendbird.android.OpenChannel, param1: com.sendbird.android.OpenChannel, param2: java.util.List<com.sendbird.android.BaseMessage>, param3: java.util.List<com.sendbird.android.BaseMessage>, param4: boolean);
						public getOldListSize(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module adapter {
					export class OpenChannelMessageListAdapter extends com.sendbird.uikit.activities.adapter.BaseMessageAdapter<com.sendbird.android.BaseMessage,com.sendbird.uikit.activities.viewholder.MessageViewHolder> {
						public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.OpenChannelMessageListAdapter>;
						public constructor();
						public constructor(param0: com.sendbird.android.OpenChannel);
						public constructor(param0: com.sendbird.android.OpenChannel, param1: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.BaseMessage>, param2: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.BaseMessage>, param3: boolean);
						public getItemViewType(param0: number): number;
						public getItem(param0: number): com.sendbird.android.BaseMessage;
						public setItems(param0: com.sendbird.android.OpenChannel, param1: java.util.List<com.sendbird.android.BaseMessage>): void;
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.sendbird.uikit.activities.viewholder.MessageViewHolder;
						public getItem(param0: number): any;
						public setChannel(param0: com.sendbird.android.OpenChannel): void;
						public constructor(param0: com.sendbird.android.OpenChannel, param1: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.BaseMessage>);
						public setOnItemLongClickListener(param0: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.BaseMessage>): void;
						public setOnProfileClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.BaseMessage>): void;
						public constructor(param0: com.sendbird.android.OpenChannel, param1: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.BaseMessage>, param2: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.BaseMessage>);
						public getItemId(param0: number): number;
						public getItemCount(): number;
						public getItems(): java.util.List<any>;
						public onBindViewHolder(param0: com.sendbird.uikit.activities.viewholder.MessageViewHolder, param1: number): void;
						public getItems(): java.util.List<com.sendbird.android.BaseMessage>;
						public setOnItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.BaseMessage>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module adapter {
					export class UserListAdapter extends com.sendbird.uikit.activities.adapter.BaseAdapter<com.sendbird.uikit.interfaces.UserInfo,com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.uikit.interfaces.UserInfo>> {
						public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.UserListAdapter>;
						public constructor();
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.uikit.interfaces.UserInfo>;
						public setDisabledUserList(param0: java.util.List<string>): void;
						public getItem(param0: number): any;
						public setOnItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.uikit.interfaces.UserInfo>): void;
						public getSelectedUserList(): java.util.List<string>;
						public getItems(): java.util.List<com.sendbird.uikit.interfaces.UserInfo>;
						public constructor(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.uikit.interfaces.UserInfo>);
						public getItem(param0: number): com.sendbird.uikit.interfaces.UserInfo;
						public setItems(param0: java.util.List<com.sendbird.uikit.interfaces.UserInfo>): void;
						public isDisabled(param0: com.sendbird.uikit.interfaces.UserInfo): boolean;
						public getItemCount(): number;
						public getItemId(param0: number): number;
						public setOnItemLongClickListener(param0: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.uikit.interfaces.UserInfo>): void;
						public getItems(): java.util.List<any>;
						public setOnUserSelectChangedListener(param0: com.sendbird.uikit.interfaces.OnUserSelectChangedListener): void;
						public onBindViewHolder(param0: com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.uikit.interfaces.UserInfo>, param1: number): void;
					}
					export module UserListAdapter {
						export class UserPreviewHolder extends com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.uikit.interfaces.UserInfo> {
							public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.UserListAdapter.UserPreviewHolder>;
							public bind(param0: any): void;
							public bind(param0: com.sendbird.uikit.interfaces.UserInfo): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module adapter {
					export class UserTypeListAdapter extends com.sendbird.uikit.activities.adapter.BaseAdapter<com.sendbird.android.User,com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.User>> {
						public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.UserTypeListAdapter>;
						public constructor();
						public setOnActionItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.User>): void;
						public setOnItemLongClickListener(param0: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.User>): void;
						public onBindViewHolder(param0: com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.User>, param1: number): void;
						public getItem(param0: number): any;
						public setOnItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.User>): void;
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.User>;
						public setOnProfileClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.User>): void;
						public setItems(param0: java.util.List<com.sendbird.android.User>, param1: com.sendbird.android.Member.Role): void;
						public getItemCount(): number;
						public getItemId(param0: number): number;
						public getItem(param0: number): com.sendbird.android.User;
						public getItems(): java.util.List<any>;
						public getItems(): java.util.List<com.sendbird.android.User>;
					}
					export module UserTypeListAdapter {
						export class UserPreviewHolder extends com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.User> {
							public static class: java.lang.Class<com.sendbird.uikit.activities.adapter.UserTypeListAdapter.UserPreviewHolder>;
							public bind(param0: any): void;
							public bind(param0: com.sendbird.android.User): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export class AdminMessageViewHolder extends com.sendbird.uikit.activities.viewholder.MessageViewHolder {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.AdminMessageViewHolder>;
						public getClickableView(): globalAndroid.view.View;
						public bind(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export abstract class BaseViewHolder<T>  extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.BaseViewHolder<any>>;
						public bind(param0: any): void;
						public constructor(param0: globalAndroid.view.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export class EmojiMoreViewHolder extends com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.Emoji> {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.EmojiMoreViewHolder>;
						public bind(param0: any): void;
						public bind(param0: com.sendbird.android.Emoji): void;
						public constructor(param0: globalAndroid.view.View);
						public constructor(param0: com.sendbird.uikit.widgets.EmojiView);
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export class EmojiReactionMoreViewHolder extends com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.Reaction> {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.EmojiReactionMoreViewHolder>;
						public bind(param0: any): void;
						public bind(param0: com.sendbird.android.Reaction): void;
						public constructor(param0: com.sendbird.uikit.widgets.EmojiReactionView);
						public constructor(param0: globalAndroid.view.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export class EmojiReactionViewHolder extends com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.Reaction> {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.EmojiReactionViewHolder>;
						public bind(param0: any): void;
						public bind(param0: com.sendbird.android.Reaction): void;
						public constructor(param0: globalAndroid.view.View);
						public constructor(param0: com.sendbird.uikit.databinding.SbViewEmojiReactionBinding);
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export class EmojiViewHolder extends com.sendbird.uikit.activities.viewholder.BaseViewHolder<com.sendbird.android.Emoji> {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.EmojiViewHolder>;
						public bind(param0: any): void;
						public constructor(param0: com.sendbird.uikit.databinding.SbViewEmojiBinding);
						public bind(param0: com.sendbird.android.Emoji): void;
						public constructor(param0: globalAndroid.view.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export abstract class GroupChannelMessageViewHolder extends com.sendbird.uikit.activities.viewholder.MessageViewHolder {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.GroupChannelMessageViewHolder>;
						public constructor(param0: globalAndroid.view.View);
						public setEmojiReaction(param0: java.util.List<com.sendbird.android.Reaction>, param1: com.sendbird.uikit.interfaces.OnItemClickListener<string>, param2: com.sendbird.uikit.interfaces.OnItemLongClickListener<string>, param3: globalAndroid.view.View.OnClickListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export class MessageType {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.MessageType>;
						public static VIEW_TYPE_USER_MESSAGE_ME: com.sendbird.uikit.activities.viewholder.MessageType;
						public static VIEW_TYPE_USER_MESSAGE_OTHER: com.sendbird.uikit.activities.viewholder.MessageType;
						public static VIEW_TYPE_FILE_MESSAGE_ME: com.sendbird.uikit.activities.viewholder.MessageType;
						public static VIEW_TYPE_FILE_MESSAGE_OTHER: com.sendbird.uikit.activities.viewholder.MessageType;
						public static VIEW_TYPE_FILE_MESSAGE_IMAGE_ME: com.sendbird.uikit.activities.viewholder.MessageType;
						public static VIEW_TYPE_FILE_MESSAGE_IMAGE_OTHER: com.sendbird.uikit.activities.viewholder.MessageType;
						public static VIEW_TYPE_FILE_MESSAGE_VIDEO_ME: com.sendbird.uikit.activities.viewholder.MessageType;
						public static VIEW_TYPE_FILE_MESSAGE_VIDEO_OTHER: com.sendbird.uikit.activities.viewholder.MessageType;
						public static VIEW_TYPE_ADMIN_MESSAGE: com.sendbird.uikit.activities.viewholder.MessageType;
						public static VIEW_TYPE_TIME_LINE: com.sendbird.uikit.activities.viewholder.MessageType;
						public static VIEW_TYPE_UNKNOWN_MESSAGE_ME: com.sendbird.uikit.activities.viewholder.MessageType;
						public static VIEW_TYPE_UNKNOWN_MESSAGE_OTHER: com.sendbird.uikit.activities.viewholder.MessageType;
						public static valueOf(param0: string): com.sendbird.uikit.activities.viewholder.MessageType;
						public static values(): androidNative.Array<com.sendbird.uikit.activities.viewholder.MessageType>;
						public static from(param0: number): com.sendbird.uikit.activities.viewholder.MessageType;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export abstract class MessageViewHolder {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.MessageViewHolder>;
						public binding: androidx.databinding.ViewDataBinding;
						public highlight: com.sendbird.uikit.model.HighlightMessageInfo;
						public isMine(): boolean;
						public isShowProfile(): boolean;
						public onBindViewHolder(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.android.BaseMessage, param3: com.sendbird.android.BaseMessage): void;
						public getClickableView(): globalAndroid.view.View;
						public constructor(param0: globalAndroid.view.View);
						public setHighlightInfo(param0: com.sendbird.uikit.model.HighlightMessageInfo): void;
						public bind(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
						public isNewDate(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export class MessageViewHolderFactory {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.MessageViewHolderFactory>;
						public static getMessageType(param0: com.sendbird.android.BaseMessage): com.sendbird.uikit.activities.viewholder.MessageType;
						public constructor();
						public static createViewHolder(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: com.sendbird.uikit.activities.viewholder.MessageType, param3: boolean): com.sendbird.uikit.activities.viewholder.MessageViewHolder;
						public static createOpenChannelViewHolder(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: com.sendbird.uikit.activities.viewholder.MessageType, param3: boolean): com.sendbird.uikit.activities.viewholder.MessageViewHolder;
						public static getViewType(param0: com.sendbird.android.BaseMessage): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export class MyFileMessageViewHolder extends com.sendbird.uikit.activities.viewholder.GroupChannelMessageViewHolder {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.MyFileMessageViewHolder>;
						public getClickableView(): globalAndroid.view.View;
						public bind(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
						public setEmojiReaction(param0: java.util.List<com.sendbird.android.Reaction>, param1: com.sendbird.uikit.interfaces.OnItemClickListener<string>, param2: com.sendbird.uikit.interfaces.OnItemLongClickListener<string>, param3: globalAndroid.view.View.OnClickListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export class MyImageFileMessageViewHolder extends com.sendbird.uikit.activities.viewholder.GroupChannelMessageViewHolder {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.MyImageFileMessageViewHolder>;
						public getClickableView(): globalAndroid.view.View;
						public bind(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
						public setEmojiReaction(param0: java.util.List<com.sendbird.android.Reaction>, param1: com.sendbird.uikit.interfaces.OnItemClickListener<string>, param2: com.sendbird.uikit.interfaces.OnItemLongClickListener<string>, param3: globalAndroid.view.View.OnClickListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export class MyUserMessageViewHolder extends com.sendbird.uikit.activities.viewholder.GroupChannelMessageViewHolder {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.MyUserMessageViewHolder>;
						public getClickableView(): globalAndroid.view.View;
						public bind(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
						public setEmojiReaction(param0: java.util.List<com.sendbird.android.Reaction>, param1: com.sendbird.uikit.interfaces.OnItemClickListener<string>, param2: com.sendbird.uikit.interfaces.OnItemLongClickListener<string>, param3: globalAndroid.view.View.OnClickListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export class MyVideoFileMessageViewHolder extends com.sendbird.uikit.activities.viewholder.GroupChannelMessageViewHolder {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.MyVideoFileMessageViewHolder>;
						public getClickableView(): globalAndroid.view.View;
						public bind(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
						public setEmojiReaction(param0: java.util.List<com.sendbird.android.Reaction>, param1: com.sendbird.uikit.interfaces.OnItemClickListener<string>, param2: com.sendbird.uikit.interfaces.OnItemLongClickListener<string>, param3: globalAndroid.view.View.OnClickListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export class OpenChannelAdminMessageViewHolder extends com.sendbird.uikit.activities.viewholder.MessageViewHolder {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.OpenChannelAdminMessageViewHolder>;
						public getClickableView(): globalAndroid.view.View;
						public bind(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export class OpenChannelFileMessageViewHolder extends com.sendbird.uikit.activities.viewholder.OpenChannelMessageViewHolder {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.OpenChannelFileMessageViewHolder>;
						public getProfileView(): globalAndroid.view.View;
						public getClickableView(): globalAndroid.view.View;
						public bind(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export class OpenChannelImageFileMessageViewHolder extends com.sendbird.uikit.activities.viewholder.OpenChannelMessageViewHolder {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.OpenChannelImageFileMessageViewHolder>;
						public getProfileView(): globalAndroid.view.View;
						public getClickableView(): globalAndroid.view.View;
						public bind(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export abstract class OpenChannelMessageViewHolder extends com.sendbird.uikit.activities.viewholder.MessageViewHolder {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.OpenChannelMessageViewHolder>;
						public getProfileView(): globalAndroid.view.View;
						public constructor(param0: globalAndroid.view.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export class OpenChannelUserMessageViewHolder extends com.sendbird.uikit.activities.viewholder.OpenChannelMessageViewHolder {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.OpenChannelUserMessageViewHolder>;
						public getProfileView(): globalAndroid.view.View;
						public getClickableView(): globalAndroid.view.View;
						public bind(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export class OpenChannelVideoFileMessageViewHolder extends com.sendbird.uikit.activities.viewholder.OpenChannelMessageViewHolder {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.OpenChannelVideoFileMessageViewHolder>;
						public getProfileView(): globalAndroid.view.View;
						public getClickableView(): globalAndroid.view.View;
						public bind(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export class OtherFileMessageViewHolder extends com.sendbird.uikit.activities.viewholder.OtherMessageViewHolder {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.OtherFileMessageViewHolder>;
						public getProfileView(): globalAndroid.view.View;
						public getClickableView(): globalAndroid.view.View;
						public bind(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
						public setEmojiReaction(param0: java.util.List<com.sendbird.android.Reaction>, param1: com.sendbird.uikit.interfaces.OnItemClickListener<string>, param2: com.sendbird.uikit.interfaces.OnItemLongClickListener<string>, param3: globalAndroid.view.View.OnClickListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export class OtherImageFileMessageViewHolder extends com.sendbird.uikit.activities.viewholder.OtherMessageViewHolder {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.OtherImageFileMessageViewHolder>;
						public getProfileView(): globalAndroid.view.View;
						public getClickableView(): globalAndroid.view.View;
						public bind(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
						public setEmojiReaction(param0: java.util.List<com.sendbird.android.Reaction>, param1: com.sendbird.uikit.interfaces.OnItemClickListener<string>, param2: com.sendbird.uikit.interfaces.OnItemLongClickListener<string>, param3: globalAndroid.view.View.OnClickListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export abstract class OtherMessageViewHolder extends com.sendbird.uikit.activities.viewholder.GroupChannelMessageViewHolder {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.OtherMessageViewHolder>;
						public getProfileView(): globalAndroid.view.View;
						public constructor(param0: globalAndroid.view.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export class OtherUserMessageViewHolder extends com.sendbird.uikit.activities.viewholder.OtherMessageViewHolder {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.OtherUserMessageViewHolder>;
						public getProfileView(): globalAndroid.view.View;
						public getClickableView(): globalAndroid.view.View;
						public bind(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
						public setEmojiReaction(param0: java.util.List<com.sendbird.android.Reaction>, param1: com.sendbird.uikit.interfaces.OnItemClickListener<string>, param2: com.sendbird.uikit.interfaces.OnItemLongClickListener<string>, param3: globalAndroid.view.View.OnClickListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export class OtherVideoFileMessageViewHolder extends com.sendbird.uikit.activities.viewholder.OtherMessageViewHolder {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.OtherVideoFileMessageViewHolder>;
						public getProfileView(): globalAndroid.view.View;
						public getClickableView(): globalAndroid.view.View;
						public bind(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
						public setEmojiReaction(param0: java.util.List<com.sendbird.android.Reaction>, param1: com.sendbird.uikit.interfaces.OnItemClickListener<string>, param2: com.sendbird.uikit.interfaces.OnItemLongClickListener<string>, param3: globalAndroid.view.View.OnClickListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module activities {
				export module viewholder {
					export class TimelineViewHolder extends com.sendbird.uikit.activities.viewholder.MessageViewHolder {
						public static class: java.lang.Class<com.sendbird.uikit.activities.viewholder.TimelineViewHolder>;
						public getClickableView(): globalAndroid.view.View;
						public bind(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module adapter {
				export class SendBirdUIKitAdapter {
					public static class: java.lang.Class<com.sendbird.uikit.adapter.SendBirdUIKitAdapter>;
					/**
					 * Constructs a new instance of the com.sendbird.uikit.adapter.SendBirdUIKitAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAppId(): string;
						getAccessToken(): string;
						getUserInfo(): com.sendbird.uikit.interfaces.UserInfo;
					});
					public constructor();
					public getUserInfo(): com.sendbird.uikit.interfaces.UserInfo;
					public getAppId(): string;
					public getAccessToken(): string;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module consts {
				export class CreateableChannelType {
					public static class: java.lang.Class<com.sendbird.uikit.consts.CreateableChannelType>;
					public static Normal: com.sendbird.uikit.consts.CreateableChannelType;
					public static Super: com.sendbird.uikit.consts.CreateableChannelType;
					public static Broadcast: com.sendbird.uikit.consts.CreateableChannelType;
					public static values(): androidNative.Array<com.sendbird.uikit.consts.CreateableChannelType>;
					public static valueOf(param0: string): com.sendbird.uikit.consts.CreateableChannelType;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module consts {
				export class DialogEditTextParams {
					public static class: java.lang.Class<com.sendbird.uikit.consts.DialogEditTextParams>;
					public setEnableSingleLine(param0: boolean): void;
					public setText(param0: string): void;
					public constructor(param0: string);
					public setHintText(param0: string): void;
					public getText(): string;
					public constructor();
					public setSelection(param0: number): void;
					public enabledSingleLine(): boolean;
					public getHintText(): string;
					public setEllipsis(param0: globalAndroid.text.TextUtils.TruncateAt): void;
					public getSelection(): number;
					public getEllipsis(): globalAndroid.text.TextUtils.TruncateAt;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module consts {
				export class KeyboardDisplayType {
					public static class: java.lang.Class<com.sendbird.uikit.consts.KeyboardDisplayType>;
					public static Plane: com.sendbird.uikit.consts.KeyboardDisplayType;
					public static Dialog: com.sendbird.uikit.consts.KeyboardDisplayType;
					public static values(): androidNative.Array<com.sendbird.uikit.consts.KeyboardDisplayType>;
					public static valueOf(param0: string): com.sendbird.uikit.consts.KeyboardDisplayType;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module consts {
				export class MessageGroupType {
					public static class: java.lang.Class<com.sendbird.uikit.consts.MessageGroupType>;
					public static GROUPING_TYPE_SINGLE: com.sendbird.uikit.consts.MessageGroupType;
					public static GROUPING_TYPE_HEAD: com.sendbird.uikit.consts.MessageGroupType;
					public static GROUPING_TYPE_BODY: com.sendbird.uikit.consts.MessageGroupType;
					public static GROUPING_TYPE_TAIL: com.sendbird.uikit.consts.MessageGroupType;
					public static valueOf(param0: string): com.sendbird.uikit.consts.MessageGroupType;
					public getValue(): number;
					public static values(): androidNative.Array<com.sendbird.uikit.consts.MessageGroupType>;
					public static from(param0: number): com.sendbird.uikit.consts.MessageGroupType;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module consts {
				export class MessageLoadState {
					public static class: java.lang.Class<com.sendbird.uikit.consts.MessageLoadState>;
					public static LOAD_STARTED: com.sendbird.uikit.consts.MessageLoadState;
					public static LOAD_ENDED: com.sendbird.uikit.consts.MessageLoadState;
					public static valueOf(param0: string): com.sendbird.uikit.consts.MessageLoadState;
					public static values(): androidNative.Array<com.sendbird.uikit.consts.MessageLoadState>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module consts {
				export class StringSet {
					public static class: java.lang.Class<com.sendbird.uikit.consts.StringSet>;
					public static KEY_CHANNEL_URL: string;
					public static KEY_THEME_RES_ID: string;
					public static KEY_USE_HEADER: string;
					public static KEY_USE_HEADER_RIGHT_BUTTON: string;
					public static KEY_USE_HEADER_LEFT_BUTTON: string;
					public static KEY_USE_INPUT_LEFT_BUTTON: string;
					public static KEY_HEADER_TITLE: string;
					public static KEY_HEADER_DESCRIPTION: string;
					public static KEY_HEADER_RIGHT_BUTTON_TEXT: string;
					public static KEY_HEADER_RIGHT_BUTTON_ICON_RES_ID: string;
					public static KEY_HEADER_RIGHT_BUTTON_ICON_TINT: string;
					public static KEY_HEADER_LEFT_BUTTON_ICON_RES_ID: string;
					public static KEY_HEADER_LEFT_BUTTON_ICON_TINT: string;
					public static KEY_INCLUDE_EMPTY: string;
					public static KEY_DISTINCT: string;
					public static KEY_SELECTED_CHANNEL_TYPE: string;
					public static KEY_EMPTY_ICON_RES_ID: string;
					public static KEY_EMPTY_ICON_TINT: string;
					public static KEY_EMPTY_TEXT_RES_ID: string;
					public static KEY_INPUT_TEXT: string;
					public static KEY_USE_TYPING_INDICATOR: string;
					public static KEY_INPUT_RIGHT_BUTTON_ICON_RES_ID: string;
					public static KEY_INPUT_RIGHT_BUTTON_ICON_TINT: string;
					public static KEY_INPUT_RIGHT_BUTTON_SHOW_ALWAYS: string;
					public static KEY_INPUT_LEFT_BUTTON_ICON_RES_ID: string;
					public static KEY_INPUT_LEFT_BUTTON_ICON_TINT: string;
					public static KEY_INPUT_HINT: string;
					public static KEY_MESSAGE_FILENAME: string;
					public static KEY_IMAGE_URL: string;
					public static KEY_MESSAGE_MIMETYPE: string;
					public static KEY_MESSAGE_CREATEDAT: string;
					public static KEY_MESSAGE_SENDER_NAME: string;
					public static KEY_MESSAGE_ID: string;
					public static KEY_SENDER_ID: string;
					public static KEY_CHANNEL_TYPE: string;
					public static KEY_USE_MESSAGE_GROUP_UI: string;
					public static KEY_USE_USER_PROFILE: string;
					public static KEY_USE_OVERLAY_MODE: string;
					public static KEY_KEYBOARD_DISPLAY_TYPE: string;
					public static KEY_USE_SEARCH_BAR: string;
					public static KEY_HIGHLIGHT_MESSAGE_INFO: string;
					public static KEY_STARTING_POINT: string;
					public static KEY_FROM_SEARCH_RESULT: string;
					public static KEY_SEARCH_BAR_BUTTON_TEXT: string;
					public static sb_uikit: string;
					public static audio: string;
					public static image: string;
					public static video: string;
					public static jpg: string;
					public static jpeg: string;
					public static gif: string;
					public static png: string;
					public static webp: string;
					public static svg: string;
					public static size: string;
					public static name: string;
					public static uri: string;
					public static GROUP_CHANNEL: string;
					public static mCursorDrawableRes: string;
					public static LABEL_COPY_TEXT: string;
					public static DEFAULT_CHANNEL_COVER_URL: string;
					public static reactions: string;
					public static enable_og_tag: string;
					public static allow_super_group_channel: string;
					public static allow_broadcast_channel: string;
					public static message_search_v3: string;
					public static TAG_SENDBIRD_DIALOG_FRAGMENT: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbFragmentChannelBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbFragmentChannelBinding>;
					public chvChannelHeader: com.sendbird.uikit.widgets.AppBarView;
					public mrvMessageList: com.sendbird.uikit.widgets.MessageRecyclerView;
					public statusFrame: com.sendbird.uikit.widgets.StatusFrameView;
					public tvInformation: androidx.appcompat.widget.AppCompatTextView;
					public vgInputBox: com.sendbird.uikit.widgets.MessageInputView;
					public mVm: com.sendbird.uikit.vm.ChannelViewModel;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbFragmentChannelBinding;
					public getVm(): com.sendbird.uikit.vm.ChannelViewModel;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbFragmentChannelBinding;
					public setVm(param0: com.sendbird.uikit.vm.ChannelViewModel): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.AppBarView, param4: com.sendbird.uikit.widgets.MessageRecyclerView, param5: com.sendbird.uikit.widgets.StatusFrameView, param6: androidx.appcompat.widget.AppCompatTextView, param7: com.sendbird.uikit.widgets.MessageInputView);
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbFragmentChannelBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbFragmentChannelBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbFragmentChannelBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbFragmentChannelBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbFragmentChannelBindingImpl extends com.sendbird.uikit.databinding.SbFragmentChannelBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbFragmentChannelBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVm(param0: com.sendbird.uikit.vm.ChannelViewModel): void;
					public setVariable(param0: number, param1: any): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.AppBarView, param4: com.sendbird.uikit.widgets.MessageRecyclerView, param5: com.sendbird.uikit.widgets.StatusFrameView, param6: androidx.appcompat.widget.AppCompatTextView, param7: com.sendbird.uikit.widgets.MessageInputView);
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbFragmentChannelListBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbFragmentChannelListBinding>;
					public abvChannelList: com.sendbird.uikit.widgets.AppBarView;
					public rvGroupChannelList: com.sendbird.uikit.widgets.PagerRecyclerView;
					public statusFrame: com.sendbird.uikit.widgets.StatusFrameView;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.AppBarView, param4: com.sendbird.uikit.widgets.PagerRecyclerView, param5: com.sendbird.uikit.widgets.StatusFrameView);
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbFragmentChannelListBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbFragmentChannelListBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbFragmentChannelListBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbFragmentChannelListBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbFragmentChannelListBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbFragmentChannelListBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbFragmentChannelListBindingImpl extends com.sendbird.uikit.databinding.SbFragmentChannelListBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbFragmentChannelListBindingImpl>;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.AppBarView, param4: com.sendbird.uikit.widgets.PagerRecyclerView, param5: com.sendbird.uikit.widgets.StatusFrameView);
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbFragmentChannelSettingsBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbFragmentChannelSettingsBinding>;
					public abSettingsHeader: com.sendbird.uikit.widgets.AppBarView;
					public csvSettings: com.sendbird.uikit.widgets.ChannelSettingsView;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbFragmentChannelSettingsBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbFragmentChannelSettingsBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbFragmentChannelSettingsBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.AppBarView, param4: com.sendbird.uikit.widgets.ChannelSettingsView);
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbFragmentChannelSettingsBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbFragmentChannelSettingsBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbFragmentChannelSettingsBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbFragmentChannelSettingsBindingImpl extends com.sendbird.uikit.databinding.SbFragmentChannelSettingsBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbFragmentChannelSettingsBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.AppBarView, param4: com.sendbird.uikit.widgets.ChannelSettingsView);
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbFragmentMessageSearchBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbFragmentMessageSearchBinding>;
					public searchBar: com.sendbird.uikit.widgets.SearchBarView;
					public searchResultList: com.sendbird.uikit.widgets.PagerRecyclerView;
					public statusFrame: com.sendbird.uikit.widgets.StatusFrameView;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbFragmentMessageSearchBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.SearchBarView, param4: com.sendbird.uikit.widgets.PagerRecyclerView, param5: com.sendbird.uikit.widgets.StatusFrameView);
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbFragmentMessageSearchBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbFragmentMessageSearchBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbFragmentMessageSearchBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbFragmentMessageSearchBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbFragmentMessageSearchBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbFragmentMessageSearchBindingImpl extends com.sendbird.uikit.databinding.SbFragmentMessageSearchBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbFragmentMessageSearchBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.SearchBarView, param4: com.sendbird.uikit.widgets.PagerRecyclerView, param5: com.sendbird.uikit.widgets.StatusFrameView);
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbFragmentModerationsBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbFragmentModerationsBinding>;
					public abSettingsHeader: com.sendbird.uikit.widgets.AppBarView;
					public bannedMembersItem: com.sendbird.uikit.widgets.SingleMenuItemView;
					public freezeChannelItem: com.sendbird.uikit.widgets.SingleMenuItemView;
					public mutedMembersItem: com.sendbird.uikit.widgets.SingleMenuItemView;
					public operatorsItem: com.sendbird.uikit.widgets.SingleMenuItemView;
					public vgContent: globalAndroid.widget.LinearLayout;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbFragmentModerationsBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbFragmentModerationsBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbFragmentModerationsBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbFragmentModerationsBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.AppBarView, param4: com.sendbird.uikit.widgets.SingleMenuItemView, param5: com.sendbird.uikit.widgets.SingleMenuItemView, param6: com.sendbird.uikit.widgets.SingleMenuItemView, param7: com.sendbird.uikit.widgets.SingleMenuItemView, param8: globalAndroid.widget.LinearLayout);
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbFragmentModerationsBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbFragmentModerationsBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbFragmentModerationsBindingImpl extends com.sendbird.uikit.databinding.SbFragmentModerationsBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbFragmentModerationsBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.AppBarView, param4: com.sendbird.uikit.widgets.SingleMenuItemView, param5: com.sendbird.uikit.widgets.SingleMenuItemView, param6: com.sendbird.uikit.widgets.SingleMenuItemView, param7: com.sendbird.uikit.widgets.SingleMenuItemView, param8: globalAndroid.widget.LinearLayout);
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbFragmentOpenChannelBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbFragmentOpenChannelBinding>;
					public bg: globalAndroid.widget.ImageView;
					public chvChannelHeader: com.sendbird.uikit.widgets.AppBarView;
					public mrvMessageList: com.sendbird.uikit.widgets.MessageRecyclerView;
					public root: androidx.constraintlayout.widget.ConstraintLayout;
					public statusFrame: com.sendbird.uikit.widgets.StatusFrameView;
					public tvInformation: androidx.appcompat.widget.AppCompatTextView;
					public vgInputBox: com.sendbird.uikit.widgets.MessageInputView;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbFragmentOpenChannelBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: globalAndroid.widget.ImageView, param4: com.sendbird.uikit.widgets.AppBarView, param5: com.sendbird.uikit.widgets.MessageRecyclerView, param6: androidx.constraintlayout.widget.ConstraintLayout, param7: com.sendbird.uikit.widgets.StatusFrameView, param8: androidx.appcompat.widget.AppCompatTextView, param9: com.sendbird.uikit.widgets.MessageInputView);
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbFragmentOpenChannelBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbFragmentOpenChannelBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbFragmentOpenChannelBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbFragmentOpenChannelBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbFragmentOpenChannelBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbFragmentOpenChannelBindingImpl extends com.sendbird.uikit.databinding.SbFragmentOpenChannelBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbFragmentOpenChannelBindingImpl>;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: globalAndroid.widget.ImageView, param4: com.sendbird.uikit.widgets.AppBarView, param5: com.sendbird.uikit.widgets.MessageRecyclerView, param6: androidx.constraintlayout.widget.ConstraintLayout, param7: com.sendbird.uikit.widgets.StatusFrameView, param8: androidx.appcompat.widget.AppCompatTextView, param9: com.sendbird.uikit.widgets.MessageInputView);
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbFragmentOpenChannelSettingsBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbFragmentOpenChannelSettingsBinding>;
					public abSettingsHeader: com.sendbird.uikit.widgets.AppBarView;
					public csvSettings: com.sendbird.uikit.widgets.OpenChannelSettingsView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbFragmentOpenChannelSettingsBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbFragmentOpenChannelSettingsBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.AppBarView, param4: com.sendbird.uikit.widgets.OpenChannelSettingsView);
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbFragmentOpenChannelSettingsBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbFragmentOpenChannelSettingsBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbFragmentOpenChannelSettingsBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbFragmentOpenChannelSettingsBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbFragmentOpenChannelSettingsBindingImpl extends com.sendbird.uikit.databinding.SbFragmentOpenChannelSettingsBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbFragmentOpenChannelSettingsBindingImpl>;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.AppBarView, param4: com.sendbird.uikit.widgets.OpenChannelSettingsView);
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbFragmentPhotoViewBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbFragmentPhotoViewBinding>;
					public ivClose: androidx.appcompat.widget.AppCompatImageView;
					public ivDelete: androidx.appcompat.widget.AppCompatImageView;
					public ivDownload: androidx.appcompat.widget.AppCompatImageView;
					public ivPhoto: com.github.chrisbanes.photoview.PhotoView;
					public loading: com.sendbird.uikit.widgets.ProgressView;
					public tvCreatedAt: globalAndroid.widget.TextView;
					public tvTitle: globalAndroid.widget.TextView;
					public vgBottom: globalAndroid.widget.RelativeLayout;
					public vgHeader: globalAndroid.widget.FrameLayout;
					public mMessage: com.sendbird.android.FileMessage;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbFragmentPhotoViewBinding;
					public setMessage(param0: com.sendbird.android.FileMessage): void;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbFragmentPhotoViewBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbFragmentPhotoViewBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbFragmentPhotoViewBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbFragmentPhotoViewBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatImageView, param4: androidx.appcompat.widget.AppCompatImageView, param5: androidx.appcompat.widget.AppCompatImageView, param6: com.github.chrisbanes.photoview.PhotoView, param7: com.sendbird.uikit.widgets.ProgressView, param8: globalAndroid.widget.TextView, param9: globalAndroid.widget.TextView, param10: globalAndroid.widget.RelativeLayout, param11: globalAndroid.widget.FrameLayout);
					public getMessage(): com.sendbird.android.FileMessage;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbFragmentPhotoViewBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbFragmentPhotoViewBindingImpl extends com.sendbird.uikit.databinding.SbFragmentPhotoViewBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbFragmentPhotoViewBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setMessage(param0: com.sendbird.android.FileMessage): void;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatImageView, param4: androidx.appcompat.widget.AppCompatImageView, param5: androidx.appcompat.widget.AppCompatImageView, param6: com.github.chrisbanes.photoview.PhotoView, param7: com.sendbird.uikit.widgets.ProgressView, param8: globalAndroid.widget.TextView, param9: globalAndroid.widget.TextView, param10: globalAndroid.widget.RelativeLayout, param11: globalAndroid.widget.FrameLayout);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbFragmentSelectUsersBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbFragmentSelectUsersBinding>;
					public abvSelectUsers: com.sendbird.uikit.widgets.AppBarView;
					public rvSelectableUserList: com.sendbird.uikit.widgets.PagerRecyclerView;
					public statusFrame: com.sendbird.uikit.widgets.StatusFrameView;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbFragmentSelectUsersBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbFragmentSelectUsersBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.AppBarView, param4: com.sendbird.uikit.widgets.PagerRecyclerView, param5: com.sendbird.uikit.widgets.StatusFrameView);
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbFragmentSelectUsersBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbFragmentSelectUsersBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbFragmentSelectUsersBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbFragmentSelectUsersBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbFragmentSelectUsersBindingImpl extends com.sendbird.uikit.databinding.SbFragmentSelectUsersBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbFragmentSelectUsersBindingImpl>;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.AppBarView, param4: com.sendbird.uikit.widgets.PagerRecyclerView, param5: com.sendbird.uikit.widgets.StatusFrameView);
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbFragmentUserListBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbFragmentUserListBinding>;
					public rvUserList: com.sendbird.uikit.widgets.PagerRecyclerView;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbFragmentUserListBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbFragmentUserListBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbFragmentUserListBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbFragmentUserListBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbFragmentUserListBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.PagerRecyclerView);
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbFragmentUserListBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbFragmentUserListBindingImpl extends com.sendbird.uikit.databinding.SbFragmentUserListBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbFragmentUserListBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.PagerRecyclerView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbFragmentUserTypeListBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbFragmentUserTypeListBinding>;
					public abvMemberList: com.sendbird.uikit.widgets.AppBarView;
					public rvMemberList: com.sendbird.uikit.widgets.PagerRecyclerView;
					public statusFrame: com.sendbird.uikit.widgets.StatusFrameView;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbFragmentUserTypeListBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.AppBarView, param4: com.sendbird.uikit.widgets.PagerRecyclerView, param5: com.sendbird.uikit.widgets.StatusFrameView);
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbFragmentUserTypeListBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbFragmentUserTypeListBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbFragmentUserTypeListBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbFragmentUserTypeListBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbFragmentUserTypeListBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbFragmentUserTypeListBindingImpl extends com.sendbird.uikit.databinding.SbFragmentUserTypeListBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbFragmentUserTypeListBindingImpl>;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.AppBarView, param4: com.sendbird.uikit.widgets.PagerRecyclerView, param5: com.sendbird.uikit.widgets.StatusFrameView);
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewAdminMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewAdminMessageBinding>;
					public mMessage: com.sendbird.android.AdminMessage;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewAdminMessageBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewAdminMessageBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewAdminMessageBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewAdminMessageBinding;
					public getMessage(): com.sendbird.android.AdminMessage;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewAdminMessageBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewAdminMessageBinding;
					public setMessage(param0: com.sendbird.android.AdminMessage): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewAdminMessageBindingImpl extends com.sendbird.uikit.databinding.SbViewAdminMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewAdminMessageBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public setMessage(param0: com.sendbird.android.AdminMessage): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewAdminMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewAdminMessageComponentBinding>;
					public tvMessage: androidx.appcompat.widget.AppCompatTextView;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewAdminMessageComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewAdminMessageComponentBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewAdminMessageComponentBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewAdminMessageComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewAdminMessageComponentBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatTextView);
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewAdminMessageComponentBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewAdminMessageComponentBindingImpl extends com.sendbird.uikit.databinding.SbViewAdminMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewAdminMessageComponentBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatTextView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewAppBarBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewAppBarBinding>;
					public btnLeft: androidx.appcompat.widget.AppCompatTextView;
					public btnRight: androidx.appcompat.widget.AppCompatTextView;
					public ccvProfileView: com.sendbird.uikit.widgets.ChannelCoverView;
					public elevationView: globalAndroid.view.View;
					public emptyLeft: globalAndroid.view.View;
					public flLeftPanel: globalAndroid.widget.FrameLayout;
					public flRightPanel: globalAndroid.widget.FrameLayout;
					public ibtnLeft: androidx.appcompat.widget.AppCompatImageButton;
					public ibtnRight: androidx.appcompat.widget.AppCompatImageButton;
					public titlePanel: globalAndroid.widget.LinearLayout;
					public tvAppBarDesc: androidx.appcompat.widget.AppCompatTextView;
					public tvAppBarTitle: androidx.appcompat.widget.AppCompatTextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewAppBarBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewAppBarBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewAppBarBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatTextView, param4: androidx.appcompat.widget.AppCompatTextView, param5: com.sendbird.uikit.widgets.ChannelCoverView, param6: globalAndroid.view.View, param7: globalAndroid.view.View, param8: globalAndroid.widget.FrameLayout, param9: globalAndroid.widget.FrameLayout, param10: androidx.appcompat.widget.AppCompatImageButton, param11: androidx.appcompat.widget.AppCompatImageButton, param12: globalAndroid.widget.LinearLayout, param13: androidx.appcompat.widget.AppCompatTextView, param14: androidx.appcompat.widget.AppCompatTextView);
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewAppBarBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewAppBarBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewAppBarBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewAppBarBindingImpl extends com.sendbird.uikit.databinding.SbViewAppBarBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewAppBarBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatTextView, param4: androidx.appcompat.widget.AppCompatTextView, param5: com.sendbird.uikit.widgets.ChannelCoverView, param6: globalAndroid.view.View, param7: globalAndroid.view.View, param8: globalAndroid.widget.FrameLayout, param9: globalAndroid.widget.FrameLayout, param10: androidx.appcompat.widget.AppCompatImageButton, param11: androidx.appcompat.widget.AppCompatImageButton, param12: globalAndroid.widget.LinearLayout, param13: androidx.appcompat.widget.AppCompatTextView, param14: androidx.appcompat.widget.AppCompatTextView);
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewChannelCoverBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewChannelCoverBinding>;
					public ivProfileView: com.sendbird.uikit.widgets.ChannelCoverView;
					public mChannel: com.sendbird.android.GroupChannel;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewChannelCoverBinding;
					public getChannel(): com.sendbird.android.GroupChannel;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.ChannelCoverView);
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewChannelCoverBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewChannelCoverBinding;
					public setChannel(param0: com.sendbird.android.GroupChannel): void;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewChannelCoverBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewChannelCoverBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewChannelCoverBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewChannelCoverBindingImpl extends com.sendbird.uikit.databinding.SbViewChannelCoverBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewChannelCoverBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.ChannelCoverView);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public setChannel(param0: com.sendbird.android.GroupChannel): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewChannelPreviewBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewChannelPreviewBinding>;
					public channelPreview: com.sendbird.uikit.widgets.ChannelPreview;
					public mChannel: com.sendbird.android.GroupChannel;
					public getChannel(): com.sendbird.android.GroupChannel;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewChannelPreviewBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewChannelPreviewBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewChannelPreviewBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewChannelPreviewBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewChannelPreviewBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewChannelPreviewBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.ChannelPreview);
					public setChannel(param0: com.sendbird.android.GroupChannel): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewChannelPreviewBindingImpl extends com.sendbird.uikit.databinding.SbViewChannelPreviewBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewChannelPreviewBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.ChannelPreview);
					public setChannel(param0: com.sendbird.android.GroupChannel): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewChannelSettingsBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewChannelSettingsBinding>;
					public ccvChannelImage: com.sendbird.uikit.widgets.ChannelCoverView;
					public divider0: globalAndroid.view.View;
					public divider1: globalAndroid.view.View;
					public divider2: globalAndroid.view.View;
					public divider3: globalAndroid.view.View;
					public divider4: globalAndroid.view.View;
					public divider5: globalAndroid.view.View;
					public ivLeaveIcon: androidx.appcompat.widget.AppCompatImageView;
					public ivMembersIcon: androidx.appcompat.widget.AppCompatImageView;
					public ivModerationIcon: androidx.appcompat.widget.AppCompatImageView;
					public ivModerationNext: globalAndroid.widget.ImageView;
					public ivNext: globalAndroid.widget.ImageView;
					public ivNotiIcon: androidx.appcompat.widget.AppCompatImageView;
					public ivSearchIcon: androidx.appcompat.widget.AppCompatImageView;
					public leaveItem: androidx.constraintlayout.widget.ConstraintLayout;
					public membersItem: androidx.constraintlayout.widget.ConstraintLayout;
					public moderationItem: androidx.constraintlayout.widget.ConstraintLayout;
					public notiItem: androidx.constraintlayout.widget.ConstraintLayout;
					public scSwitch: androidx.appcompat.widget.SwitchCompat;
					public searchItem: androidx.constraintlayout.widget.ConstraintLayout;
					public tvChannelName: androidx.appcompat.widget.AppCompatTextView;
					public tvLeaveName: androidx.appcompat.widget.AppCompatTextView;
					public tvMemberCount: androidx.appcompat.widget.AppCompatTextView;
					public tvMembersName: androidx.appcompat.widget.AppCompatTextView;
					public tvModerationName: androidx.appcompat.widget.AppCompatTextView;
					public tvNotiName: androidx.appcompat.widget.AppCompatTextView;
					public tvSearcTitle: androidx.appcompat.widget.AppCompatTextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewChannelSettingsBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewChannelSettingsBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewChannelSettingsBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewChannelSettingsBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewChannelSettingsBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewChannelSettingsBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.ChannelCoverView, param4: globalAndroid.view.View, param5: globalAndroid.view.View, param6: globalAndroid.view.View, param7: globalAndroid.view.View, param8: globalAndroid.view.View, param9: globalAndroid.view.View, param10: androidx.appcompat.widget.AppCompatImageView, param11: androidx.appcompat.widget.AppCompatImageView, param12: androidx.appcompat.widget.AppCompatImageView, param13: globalAndroid.widget.ImageView, param14: globalAndroid.widget.ImageView, param15: androidx.appcompat.widget.AppCompatImageView, param16: androidx.appcompat.widget.AppCompatImageView, param17: androidx.constraintlayout.widget.ConstraintLayout, param18: androidx.constraintlayout.widget.ConstraintLayout, param19: androidx.constraintlayout.widget.ConstraintLayout, param20: androidx.constraintlayout.widget.ConstraintLayout, param21: androidx.appcompat.widget.SwitchCompat, param22: androidx.constraintlayout.widget.ConstraintLayout, param23: androidx.appcompat.widget.AppCompatTextView, param24: androidx.appcompat.widget.AppCompatTextView, param25: androidx.appcompat.widget.AppCompatTextView, param26: androidx.appcompat.widget.AppCompatTextView, param27: androidx.appcompat.widget.AppCompatTextView, param28: androidx.appcompat.widget.AppCompatTextView, param29: androidx.appcompat.widget.AppCompatTextView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewChannelSettingsBindingImpl extends com.sendbird.uikit.databinding.SbViewChannelSettingsBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewChannelSettingsBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.ChannelCoverView, param4: globalAndroid.view.View, param5: globalAndroid.view.View, param6: globalAndroid.view.View, param7: globalAndroid.view.View, param8: globalAndroid.view.View, param9: globalAndroid.view.View, param10: androidx.appcompat.widget.AppCompatImageView, param11: androidx.appcompat.widget.AppCompatImageView, param12: androidx.appcompat.widget.AppCompatImageView, param13: globalAndroid.widget.ImageView, param14: globalAndroid.widget.ImageView, param15: androidx.appcompat.widget.AppCompatImageView, param16: androidx.appcompat.widget.AppCompatImageView, param17: androidx.constraintlayout.widget.ConstraintLayout, param18: androidx.constraintlayout.widget.ConstraintLayout, param19: androidx.constraintlayout.widget.ConstraintLayout, param20: androidx.constraintlayout.widget.ConstraintLayout, param21: androidx.appcompat.widget.SwitchCompat, param22: androidx.constraintlayout.widget.ConstraintLayout, param23: androidx.appcompat.widget.AppCompatTextView, param24: androidx.appcompat.widget.AppCompatTextView, param25: androidx.appcompat.widget.AppCompatTextView, param26: androidx.appcompat.widget.AppCompatTextView, param27: androidx.appcompat.widget.AppCompatTextView, param28: androidx.appcompat.widget.AppCompatTextView, param29: androidx.appcompat.widget.AppCompatTextView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewDialogBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewDialogBinding>;
					public btNegative: globalAndroid.widget.TextView;
					public btNeutral: globalAndroid.widget.TextView;
					public btPositive: globalAndroid.widget.TextView;
					public etInputText: androidx.appcompat.widget.AppCompatEditText;
					public rvSelectView: androidx.recyclerview.widget.RecyclerView;
					public sbButtonPanel: globalAndroid.widget.LinearLayout;
					public sbContentPanel: globalAndroid.widget.FrameLayout;
					public sbContentViewPanel: globalAndroid.widget.FrameLayout;
					public sbParentPanel: globalAndroid.widget.LinearLayout;
					public sbTopPanel: globalAndroid.widget.FrameLayout;
					public tvDialogMessage: globalAndroid.widget.TextView;
					public tvDialogTitle: globalAndroid.widget.TextView;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: globalAndroid.widget.TextView, param4: globalAndroid.widget.TextView, param5: globalAndroid.widget.TextView, param6: androidx.appcompat.widget.AppCompatEditText, param7: androidx.recyclerview.widget.RecyclerView, param8: globalAndroid.widget.LinearLayout, param9: globalAndroid.widget.FrameLayout, param10: globalAndroid.widget.FrameLayout, param11: globalAndroid.widget.LinearLayout, param12: globalAndroid.widget.FrameLayout, param13: globalAndroid.widget.TextView, param14: globalAndroid.widget.TextView);
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewDialogBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewDialogBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewDialogBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewDialogBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewDialogBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewDialogBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewDialogBindingImpl extends com.sendbird.uikit.databinding.SbViewDialogBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewDialogBindingImpl>;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: globalAndroid.widget.TextView, param4: globalAndroid.widget.TextView, param5: globalAndroid.widget.TextView, param6: androidx.appcompat.widget.AppCompatEditText, param7: androidx.recyclerview.widget.RecyclerView, param8: globalAndroid.widget.LinearLayout, param9: globalAndroid.widget.FrameLayout, param10: globalAndroid.widget.FrameLayout, param11: globalAndroid.widget.LinearLayout, param12: globalAndroid.widget.FrameLayout, param13: globalAndroid.widget.TextView, param14: globalAndroid.widget.TextView);
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewDialogListItemBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewDialogListItemBinding>;
					public clItem: androidx.constraintlayout.widget.ConstraintLayout;
					public iconLeft: globalAndroid.widget.ImageView;
					public iconRight: globalAndroid.widget.ImageView;
					public name: globalAndroid.widget.TextView;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewDialogListItemBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewDialogListItemBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewDialogListItemBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.ConstraintLayout, param4: globalAndroid.widget.ImageView, param5: globalAndroid.widget.ImageView, param6: globalAndroid.widget.TextView);
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewDialogListItemBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewDialogListItemBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewDialogListItemBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewDialogListItemBindingImpl extends com.sendbird.uikit.databinding.SbViewDialogListItemBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewDialogListItemBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.ConstraintLayout, param4: globalAndroid.widget.ImageView, param5: globalAndroid.widget.ImageView, param6: globalAndroid.widget.TextView);
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewEmojiBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewEmojiBinding>;
					public mEmoji: com.sendbird.android.Emoji;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewEmojiBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewEmojiBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewEmojiBinding;
					public setEmoji(param0: com.sendbird.android.Emoji): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public getEmoji(): com.sendbird.android.Emoji;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewEmojiBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewEmojiBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewEmojiBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewEmojiBindingImpl extends com.sendbird.uikit.databinding.SbViewEmojiBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewEmojiBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public setEmoji(param0: com.sendbird.android.Emoji): void;
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewEmojiComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewEmojiComponentBinding>;
					public emojiPanel: androidx.constraintlayout.widget.ConstraintLayout;
					public ivEmoji: androidx.appcompat.widget.AppCompatImageView;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewEmojiComponentBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewEmojiComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewEmojiComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewEmojiComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewEmojiComponentBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewEmojiComponentBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.ConstraintLayout, param4: androidx.appcompat.widget.AppCompatImageView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewEmojiComponentBindingImpl extends com.sendbird.uikit.databinding.SbViewEmojiComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewEmojiComponentBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.ConstraintLayout, param4: androidx.appcompat.widget.AppCompatImageView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewEmojiListBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewEmojiListBinding>;
					public rvEmojiList: com.sendbird.uikit.widgets.ThemeableRecyclerView;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewEmojiListBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewEmojiListBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewEmojiListBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewEmojiListBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewEmojiListBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewEmojiListBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.ThemeableRecyclerView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewEmojiListBindingImpl extends com.sendbird.uikit.databinding.SbViewEmojiListBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewEmojiListBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.ThemeableRecyclerView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewEmojiReactionBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewEmojiReactionBinding>;
					public mReaction: com.sendbird.android.Reaction;
					public setReaction(param0: com.sendbird.android.Reaction): void;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewEmojiReactionBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewEmojiReactionBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public getReaction(): com.sendbird.android.Reaction;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewEmojiReactionBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewEmojiReactionBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewEmojiReactionBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewEmojiReactionBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewEmojiReactionBindingImpl extends com.sendbird.uikit.databinding.SbViewEmojiReactionBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewEmojiReactionBindingImpl>;
					public setReaction(param0: com.sendbird.android.Reaction): void;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewEmojiReactionComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewEmojiReactionComponentBinding>;
					public empty: globalAndroid.view.View;
					public ivEmoji: androidx.appcompat.widget.AppCompatImageView;
					public tvCount: androidx.appcompat.widget.AppCompatTextView;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewEmojiReactionComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewEmojiReactionComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewEmojiReactionComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewEmojiReactionComponentBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewEmojiReactionComponentBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: globalAndroid.view.View, param4: androidx.appcompat.widget.AppCompatImageView, param5: androidx.appcompat.widget.AppCompatTextView);
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewEmojiReactionComponentBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewEmojiReactionComponentBindingImpl extends com.sendbird.uikit.databinding.SbViewEmojiReactionComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewEmojiReactionComponentBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: globalAndroid.view.View, param4: androidx.appcompat.widget.AppCompatImageView, param5: androidx.appcompat.widget.AppCompatTextView);
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewEmojiReactionCountBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewEmojiReactionCountBinding>;
					public mReaction: com.sendbird.android.Reaction;
					public setReaction(param0: com.sendbird.android.Reaction): void;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewEmojiReactionCountBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewEmojiReactionCountBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewEmojiReactionCountBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public getReaction(): com.sendbird.android.Reaction;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewEmojiReactionCountBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewEmojiReactionCountBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewEmojiReactionCountBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewEmojiReactionCountBindingImpl extends com.sendbird.uikit.databinding.SbViewEmojiReactionCountBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewEmojiReactionCountBindingImpl>;
					public setReaction(param0: com.sendbird.android.Reaction): void;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewEmojiReactionCountComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewEmojiReactionCountComponentBinding>;
					public ivEmoji: androidx.appcompat.widget.AppCompatImageView;
					public tvCount: androidx.appcompat.widget.AppCompatTextView;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewEmojiReactionCountComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewEmojiReactionCountComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewEmojiReactionCountComponentBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewEmojiReactionCountComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewEmojiReactionCountComponentBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatImageView, param4: androidx.appcompat.widget.AppCompatTextView);
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewEmojiReactionCountComponentBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewEmojiReactionCountComponentBindingImpl extends com.sendbird.uikit.databinding.SbViewEmojiReactionCountComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewEmojiReactionCountComponentBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatImageView, param4: androidx.appcompat.widget.AppCompatTextView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewEmojiReactionListBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewEmojiReactionListBinding>;
					public rvEmojiReactionList: com.sendbird.uikit.widgets.ThemeableRecyclerView;
					public mEmoji: com.sendbird.android.Emoji;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewEmojiReactionListBinding;
					public setEmoji(param0: com.sendbird.android.Emoji): void;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewEmojiReactionListBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewEmojiReactionListBinding;
					public getEmoji(): com.sendbird.android.Emoji;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewEmojiReactionListBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewEmojiReactionListBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewEmojiReactionListBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.ThemeableRecyclerView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewEmojiReactionListBindingImpl extends com.sendbird.uikit.databinding.SbViewEmojiReactionListBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewEmojiReactionListBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public setEmoji(param0: com.sendbird.android.Emoji): void;
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.ThemeableRecyclerView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewEmojiReactionUserBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewEmojiReactionUserBinding>;
					public userViewHolder: com.sendbird.uikit.widgets.EmoijReactionUserView;
					public mUser: com.sendbird.android.User;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewEmojiReactionUserBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewEmojiReactionUserBinding;
					public setUser(param0: com.sendbird.android.User): void;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewEmojiReactionUserBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewEmojiReactionUserBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewEmojiReactionUserBinding;
					public getUser(): com.sendbird.android.User;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewEmojiReactionUserBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.EmoijReactionUserView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewEmojiReactionUserBindingImpl extends com.sendbird.uikit.databinding.SbViewEmojiReactionUserBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewEmojiReactionUserBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public setUser(param0: com.sendbird.android.User): void;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.EmoijReactionUserView);
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewEmojiReactionUserComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewEmojiReactionUserComponentBinding>;
					public ivUserCover: com.sendbird.uikit.widgets.ChannelCoverView;
					public tvNickname: androidx.appcompat.widget.AppCompatTextView;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewEmojiReactionUserComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewEmojiReactionUserComponentBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewEmojiReactionUserComponentBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.ChannelCoverView, param4: androidx.appcompat.widget.AppCompatTextView);
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewEmojiReactionUserComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewEmojiReactionUserComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewEmojiReactionUserComponentBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewEmojiReactionUserComponentBindingImpl extends com.sendbird.uikit.databinding.SbViewEmojiReactionUserComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewEmojiReactionUserComponentBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.ChannelCoverView, param4: androidx.appcompat.widget.AppCompatTextView);
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewEmojiReactionUserListBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewEmojiReactionUserListBinding>;
					public tabLayout: com.google.android.material.tabs.TabLayout;
					public tabLayoutPanel: globalAndroid.widget.FrameLayout;
					public vpEmojiReactionUserList: androidx.viewpager2.widget.ViewPager2;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewEmojiReactionUserListBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewEmojiReactionUserListBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewEmojiReactionUserListBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewEmojiReactionUserListBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewEmojiReactionUserListBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.google.android.material.tabs.TabLayout, param4: globalAndroid.widget.FrameLayout, param5: androidx.viewpager2.widget.ViewPager2);
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewEmojiReactionUserListBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewEmojiReactionUserListBindingImpl extends com.sendbird.uikit.databinding.SbViewEmojiReactionUserListBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewEmojiReactionUserListBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.google.android.material.tabs.TabLayout, param4: globalAndroid.widget.FrameLayout, param5: androidx.viewpager2.widget.ViewPager2);
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewMemberListItemBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMemberListItemBinding>;
					public ivAction: androidx.appcompat.widget.AppCompatImageButton;
					public ivProfile: androidx.appcompat.widget.AppCompatImageView;
					public ivProfileOverlay: androidx.appcompat.widget.AppCompatImageView;
					public tvDescription: androidx.appcompat.widget.AppCompatTextView;
					public tvNickname: androidx.appcompat.widget.AppCompatTextView;
					public vgMemberItem: androidx.constraintlayout.widget.ConstraintLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewMemberListItemBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewMemberListItemBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewMemberListItemBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewMemberListItemBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewMemberListItemBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewMemberListItemBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatImageButton, param4: androidx.appcompat.widget.AppCompatImageView, param5: androidx.appcompat.widget.AppCompatImageView, param6: androidx.appcompat.widget.AppCompatTextView, param7: androidx.appcompat.widget.AppCompatTextView, param8: androidx.constraintlayout.widget.ConstraintLayout);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewMemberListItemBindingImpl extends com.sendbird.uikit.databinding.SbViewMemberListItemBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMemberListItemBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatImageButton, param4: androidx.appcompat.widget.AppCompatImageView, param5: androidx.appcompat.widget.AppCompatImageView, param6: androidx.appcompat.widget.AppCompatTextView, param7: androidx.appcompat.widget.AppCompatTextView, param8: androidx.constraintlayout.widget.ConstraintLayout);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewMemberPreviewBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMemberPreviewBinding>;
					public memberViewHolder: com.sendbird.uikit.widgets.MemberPreview;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewMemberPreviewBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewMemberPreviewBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewMemberPreviewBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewMemberPreviewBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.MemberPreview);
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewMemberPreviewBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewMemberPreviewBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewMemberPreviewBindingImpl extends com.sendbird.uikit.databinding.SbViewMemberPreviewBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMemberPreviewBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.MemberPreview);
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewMessageInputBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMessageInputBinding>;
					public btnCancel: androidx.appcompat.widget.AppCompatButton;
					public btnSave: androidx.appcompat.widget.AppCompatButton;
					public editPanel: globalAndroid.widget.FrameLayout;
					public etInputText: androidx.appcompat.widget.AppCompatEditText;
					public ibtnAdd: androidx.appcompat.widget.AppCompatImageButton;
					public ibtnSend: androidx.appcompat.widget.AppCompatImageButton;
					public inputPanel: androidx.constraintlayout.widget.ConstraintLayout;
					public messageInputParent: globalAndroid.widget.LinearLayout;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewMessageInputBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewMessageInputBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatButton, param4: androidx.appcompat.widget.AppCompatButton, param5: globalAndroid.widget.FrameLayout, param6: androidx.appcompat.widget.AppCompatEditText, param7: androidx.appcompat.widget.AppCompatImageButton, param8: androidx.appcompat.widget.AppCompatImageButton, param9: androidx.constraintlayout.widget.ConstraintLayout, param10: globalAndroid.widget.LinearLayout);
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewMessageInputBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewMessageInputBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewMessageInputBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewMessageInputBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewMessageInputBindingImpl extends com.sendbird.uikit.databinding.SbViewMessageInputBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMessageInputBindingImpl>;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatButton, param4: androidx.appcompat.widget.AppCompatButton, param5: globalAndroid.widget.FrameLayout, param6: androidx.appcompat.widget.AppCompatEditText, param7: androidx.appcompat.widget.AppCompatImageButton, param8: androidx.appcompat.widget.AppCompatImageButton, param9: androidx.constraintlayout.widget.ConstraintLayout, param10: globalAndroid.widget.LinearLayout);
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewMessagePreviewBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMessagePreviewBinding>;
					public brBottom: androidx.constraintlayout.widget.Barrier;
					public brMiddle: androidx.constraintlayout.widget.Barrier;
					public ivDivider: androidx.appcompat.widget.AppCompatImageView;
					public ivIcon: androidx.appcompat.widget.AppCompatImageView;
					public ivProfile: androidx.appcompat.widget.AppCompatImageView;
					public leftGL: androidx.constraintlayout.widget.Guideline;
					public rightGL: androidx.constraintlayout.widget.Guideline;
					public root: androidx.constraintlayout.widget.ConstraintLayout;
					public tvMessage: androidx.appcompat.widget.AppCompatTextView;
					public tvSentAt: androidx.appcompat.widget.AppCompatTextView;
					public tvUserName: androidx.appcompat.widget.AppCompatTextView;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.Barrier, param4: androidx.constraintlayout.widget.Barrier, param5: androidx.appcompat.widget.AppCompatImageView, param6: androidx.appcompat.widget.AppCompatImageView, param7: androidx.appcompat.widget.AppCompatImageView, param8: androidx.constraintlayout.widget.Guideline, param9: androidx.constraintlayout.widget.Guideline, param10: androidx.constraintlayout.widget.ConstraintLayout, param11: androidx.appcompat.widget.AppCompatTextView, param12: androidx.appcompat.widget.AppCompatTextView, param13: androidx.appcompat.widget.AppCompatTextView);
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewMessagePreviewBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewMessagePreviewBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewMessagePreviewBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewMessagePreviewBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewMessagePreviewBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewMessagePreviewBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewMessagePreviewBindingImpl extends com.sendbird.uikit.databinding.SbViewMessagePreviewBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMessagePreviewBindingImpl>;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.Barrier, param4: androidx.constraintlayout.widget.Barrier, param5: androidx.appcompat.widget.AppCompatImageView, param6: androidx.appcompat.widget.AppCompatImageView, param7: androidx.appcompat.widget.AppCompatImageView, param8: androidx.constraintlayout.widget.Guideline, param9: androidx.constraintlayout.widget.Guideline, param10: androidx.constraintlayout.widget.ConstraintLayout, param11: androidx.appcompat.widget.AppCompatTextView, param12: androidx.appcompat.widget.AppCompatTextView, param13: androidx.appcompat.widget.AppCompatTextView);
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewMessageRecyclerViewBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMessageRecyclerViewBinding>;
					public ivScrollBottomIcon: androidx.appcompat.widget.AppCompatImageView;
					public rvMessageList: com.sendbird.uikit.widgets.PagerRecyclerView;
					public tvTooltipText: androidx.appcompat.widget.AppCompatTextView;
					public tvTypingIndicator: androidx.appcompat.widget.AppCompatTextView;
					public vgTooltipBox: globalAndroid.widget.FrameLayout;
					public mMessageList: java.util.List<com.sendbird.android.BaseMessage>;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewMessageRecyclerViewBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewMessageRecyclerViewBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewMessageRecyclerViewBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewMessageRecyclerViewBinding;
					public getMessageList(): java.util.List<com.sendbird.android.BaseMessage>;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewMessageRecyclerViewBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewMessageRecyclerViewBinding;
					public setMessageList(param0: java.util.List<com.sendbird.android.BaseMessage>): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatImageView, param4: com.sendbird.uikit.widgets.PagerRecyclerView, param5: androidx.appcompat.widget.AppCompatTextView, param6: androidx.appcompat.widget.AppCompatTextView, param7: globalAndroid.widget.FrameLayout);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewMessageRecyclerViewBindingImpl extends com.sendbird.uikit.databinding.SbViewMessageRecyclerViewBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMessageRecyclerViewBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public setMessageList(param0: java.util.List<com.sendbird.android.BaseMessage>): void;
					public executeBindings(): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatImageView, param4: com.sendbird.uikit.widgets.PagerRecyclerView, param5: androidx.appcompat.widget.AppCompatTextView, param6: androidx.appcompat.widget.AppCompatTextView, param7: globalAndroid.widget.FrameLayout);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewMyFileImageMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMyFileImageMessageBinding>;
					public mMessage: com.sendbird.android.FileMessage;
					public mChannel: com.sendbird.android.GroupChannel;
					public mMessageGroupType: com.sendbird.uikit.consts.MessageGroupType;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewMyFileImageMessageBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewMyFileImageMessageBinding;
					public getChannel(): com.sendbird.android.GroupChannel;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewMyFileImageMessageBinding;
					public getMessageGroupType(): com.sendbird.uikit.consts.MessageGroupType;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewMyFileImageMessageBinding;
					public getMessage(): com.sendbird.android.FileMessage;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					public setMessage(param0: com.sendbird.android.FileMessage): void;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewMyFileImageMessageBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public setChannel(param0: com.sendbird.android.GroupChannel): void;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewMyFileImageMessageBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewMyFileImageMessageBindingImpl extends com.sendbird.uikit.databinding.SbViewMyFileImageMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMyFileImageMessageBindingImpl>;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setMessage(param0: com.sendbird.android.FileMessage): void;
					public setVariable(param0: number, param1: any): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public setChannel(param0: com.sendbird.android.GroupChannel): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewMyFileImageMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMyFileImageMessageComponentBinding>;
					public brBottom: androidx.constraintlayout.widget.Barrier;
					public contentBarrier: androidx.constraintlayout.widget.Barrier;
					public contentPanel: androidx.constraintlayout.widget.ConstraintLayout;
					public emojiReactionListBackground: globalAndroid.view.View;
					public ivStatus: com.sendbird.uikit.widgets.MyMessageStatusView;
					public ivThumbnail: com.sendbird.uikit.widgets.RoundCornerView;
					public ivThumbnailIcon: androidx.appcompat.widget.AppCompatImageView;
					public ivThumbnailOveray: androidx.appcompat.widget.AppCompatImageView;
					public root: androidx.constraintlayout.widget.ConstraintLayout;
					public rvEmojiReactionList: com.sendbird.uikit.widgets.EmojiReactionListView;
					public tvSentAt: androidx.appcompat.widget.AppCompatTextView;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.Barrier, param4: androidx.constraintlayout.widget.Barrier, param5: androidx.constraintlayout.widget.ConstraintLayout, param6: globalAndroid.view.View, param7: com.sendbird.uikit.widgets.MyMessageStatusView, param8: com.sendbird.uikit.widgets.RoundCornerView, param9: androidx.appcompat.widget.AppCompatImageView, param10: androidx.appcompat.widget.AppCompatImageView, param11: androidx.constraintlayout.widget.ConstraintLayout, param12: com.sendbird.uikit.widgets.EmojiReactionListView, param13: androidx.appcompat.widget.AppCompatTextView);
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewMyFileImageMessageComponentBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewMyFileImageMessageComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewMyFileImageMessageComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewMyFileImageMessageComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewMyFileImageMessageComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewMyFileImageMessageComponentBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewMyFileImageMessageComponentBindingImpl extends com.sendbird.uikit.databinding.SbViewMyFileImageMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMyFileImageMessageComponentBindingImpl>;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.Barrier, param4: androidx.constraintlayout.widget.Barrier, param5: androidx.constraintlayout.widget.ConstraintLayout, param6: globalAndroid.view.View, param7: com.sendbird.uikit.widgets.MyMessageStatusView, param8: com.sendbird.uikit.widgets.RoundCornerView, param9: androidx.appcompat.widget.AppCompatImageView, param10: androidx.appcompat.widget.AppCompatImageView, param11: androidx.constraintlayout.widget.ConstraintLayout, param12: com.sendbird.uikit.widgets.EmojiReactionListView, param13: androidx.appcompat.widget.AppCompatTextView);
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewMyFileMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMyFileMessageBinding>;
					public mMessage: com.sendbird.android.FileMessage;
					public mChannel: com.sendbird.android.GroupChannel;
					public mMessageGroupType: com.sendbird.uikit.consts.MessageGroupType;
					public mHighlightInfo: com.sendbird.uikit.model.HighlightMessageInfo;
					public getChannel(): com.sendbird.android.GroupChannel;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewMyFileMessageBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewMyFileMessageBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewMyFileMessageBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewMyFileMessageBinding;
					public getMessageGroupType(): com.sendbird.uikit.consts.MessageGroupType;
					public setHighlightInfo(param0: com.sendbird.uikit.model.HighlightMessageInfo): void;
					public getMessage(): com.sendbird.android.FileMessage;
					public getHighlightInfo(): com.sendbird.uikit.model.HighlightMessageInfo;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					public setMessage(param0: com.sendbird.android.FileMessage): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewMyFileMessageBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewMyFileMessageBinding;
					public setChannel(param0: com.sendbird.android.GroupChannel): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewMyFileMessageBindingImpl extends com.sendbird.uikit.databinding.SbViewMyFileMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMyFileMessageBindingImpl>;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setMessage(param0: com.sendbird.android.FileMessage): void;
					public setVariable(param0: number, param1: any): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public setHighlightInfo(param0: com.sendbird.uikit.model.HighlightMessageInfo): void;
					public setChannel(param0: com.sendbird.android.GroupChannel): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewMyFileMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMyFileMessageComponentBinding>;
					public brBottom: androidx.constraintlayout.widget.Barrier;
					public contentBarrier: androidx.constraintlayout.widget.Barrier;
					public contentPanel: globalAndroid.widget.LinearLayout;
					public contentPanelWithReactions: androidx.constraintlayout.widget.ConstraintLayout;
					public emojiReactionListBackground: globalAndroid.view.View;
					public ivIcon: androidx.appcompat.widget.AppCompatImageView;
					public ivStatus: com.sendbird.uikit.widgets.MyMessageStatusView;
					public root: androidx.constraintlayout.widget.ConstraintLayout;
					public rvEmojiReactionList: com.sendbird.uikit.widgets.EmojiReactionListView;
					public tvFileName: androidx.appcompat.widget.AppCompatTextView;
					public tvSentAt: androidx.appcompat.widget.AppCompatTextView;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.Barrier, param4: androidx.constraintlayout.widget.Barrier, param5: globalAndroid.widget.LinearLayout, param6: androidx.constraintlayout.widget.ConstraintLayout, param7: globalAndroid.view.View, param8: androidx.appcompat.widget.AppCompatImageView, param9: com.sendbird.uikit.widgets.MyMessageStatusView, param10: androidx.constraintlayout.widget.ConstraintLayout, param11: com.sendbird.uikit.widgets.EmojiReactionListView, param12: androidx.appcompat.widget.AppCompatTextView, param13: androidx.appcompat.widget.AppCompatTextView);
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewMyFileMessageComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewMyFileMessageComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewMyFileMessageComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewMyFileMessageComponentBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewMyFileMessageComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewMyFileMessageComponentBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewMyFileMessageComponentBindingImpl extends com.sendbird.uikit.databinding.SbViewMyFileMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMyFileMessageComponentBindingImpl>;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.Barrier, param4: androidx.constraintlayout.widget.Barrier, param5: globalAndroid.widget.LinearLayout, param6: androidx.constraintlayout.widget.ConstraintLayout, param7: globalAndroid.view.View, param8: androidx.appcompat.widget.AppCompatImageView, param9: com.sendbird.uikit.widgets.MyMessageStatusView, param10: androidx.constraintlayout.widget.ConstraintLayout, param11: com.sendbird.uikit.widgets.EmojiReactionListView, param12: androidx.appcompat.widget.AppCompatTextView, param13: androidx.appcompat.widget.AppCompatTextView);
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewMyFileVideoMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMyFileVideoMessageBinding>;
					public mMessage: com.sendbird.android.FileMessage;
					public mChannel: com.sendbird.android.GroupChannel;
					public mMessageGroupType: com.sendbird.uikit.consts.MessageGroupType;
					public getChannel(): com.sendbird.android.GroupChannel;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewMyFileVideoMessageBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewMyFileVideoMessageBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewMyFileVideoMessageBinding;
					public getMessageGroupType(): com.sendbird.uikit.consts.MessageGroupType;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewMyFileVideoMessageBinding;
					public getMessage(): com.sendbird.android.FileMessage;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewMyFileVideoMessageBinding;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					public setMessage(param0: com.sendbird.android.FileMessage): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewMyFileVideoMessageBinding;
					public setChannel(param0: com.sendbird.android.GroupChannel): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewMyFileVideoMessageBindingImpl extends com.sendbird.uikit.databinding.SbViewMyFileVideoMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMyFileVideoMessageBindingImpl>;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setMessage(param0: com.sendbird.android.FileMessage): void;
					public setVariable(param0: number, param1: any): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public setChannel(param0: com.sendbird.android.GroupChannel): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewMyFileVideoMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMyFileVideoMessageComponentBinding>;
					public brBottom: androidx.constraintlayout.widget.Barrier;
					public contentBarrier: androidx.constraintlayout.widget.Barrier;
					public contentPanel: androidx.constraintlayout.widget.ConstraintLayout;
					public emojiReactionListBackground: globalAndroid.view.View;
					public ivStatus: com.sendbird.uikit.widgets.MyMessageStatusView;
					public ivThumbnail: com.sendbird.uikit.widgets.RoundCornerView;
					public ivThumbnailIcon: androidx.appcompat.widget.AppCompatImageView;
					public ivThumbnailOveray: androidx.appcompat.widget.AppCompatImageView;
					public root: androidx.constraintlayout.widget.ConstraintLayout;
					public rvEmojiReactionList: com.sendbird.uikit.widgets.EmojiReactionListView;
					public tvSentAt: androidx.appcompat.widget.AppCompatTextView;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.Barrier, param4: androidx.constraintlayout.widget.Barrier, param5: androidx.constraintlayout.widget.ConstraintLayout, param6: globalAndroid.view.View, param7: com.sendbird.uikit.widgets.MyMessageStatusView, param8: com.sendbird.uikit.widgets.RoundCornerView, param9: androidx.appcompat.widget.AppCompatImageView, param10: androidx.appcompat.widget.AppCompatImageView, param11: androidx.constraintlayout.widget.ConstraintLayout, param12: com.sendbird.uikit.widgets.EmojiReactionListView, param13: androidx.appcompat.widget.AppCompatTextView);
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewMyFileVideoMessageComponentBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewMyFileVideoMessageComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewMyFileVideoMessageComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewMyFileVideoMessageComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewMyFileVideoMessageComponentBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewMyFileVideoMessageComponentBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewMyFileVideoMessageComponentBindingImpl extends com.sendbird.uikit.databinding.SbViewMyFileVideoMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMyFileVideoMessageComponentBindingImpl>;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.Barrier, param4: androidx.constraintlayout.widget.Barrier, param5: androidx.constraintlayout.widget.ConstraintLayout, param6: globalAndroid.view.View, param7: com.sendbird.uikit.widgets.MyMessageStatusView, param8: com.sendbird.uikit.widgets.RoundCornerView, param9: androidx.appcompat.widget.AppCompatImageView, param10: androidx.appcompat.widget.AppCompatImageView, param11: androidx.constraintlayout.widget.ConstraintLayout, param12: com.sendbird.uikit.widgets.EmojiReactionListView, param13: androidx.appcompat.widget.AppCompatTextView);
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewMyMessageStatusBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMyMessageStatusBinding>;
					public ivStatus: androidx.appcompat.widget.AppCompatImageView;
					public mpvProgressStatus: com.sendbird.uikit.widgets.MessageProgressView;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatImageView, param4: com.sendbird.uikit.widgets.MessageProgressView);
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewMyMessageStatusBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewMyMessageStatusBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewMyMessageStatusBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewMyMessageStatusBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewMyMessageStatusBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewMyMessageStatusBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewMyMessageStatusBindingImpl extends com.sendbird.uikit.databinding.SbViewMyMessageStatusBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMyMessageStatusBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatImageView, param4: com.sendbird.uikit.widgets.MessageProgressView);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewMyUserMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMyUserMessageBinding>;
					public myUserMessage: com.sendbird.uikit.widgets.MyUserMessageView;
					public mMessage: com.sendbird.android.BaseMessage;
					public mChannel: com.sendbird.android.GroupChannel;
					public mMessageGroupType: com.sendbird.uikit.consts.MessageGroupType;
					public mHighlightInfo: com.sendbird.uikit.model.HighlightMessageInfo;
					public getChannel(): com.sendbird.android.GroupChannel;
					public getMessage(): com.sendbird.android.BaseMessage;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewMyUserMessageBinding;
					public setMessage(param0: com.sendbird.android.BaseMessage): void;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewMyUserMessageBinding;
					public getMessageGroupType(): com.sendbird.uikit.consts.MessageGroupType;
					public setHighlightInfo(param0: com.sendbird.uikit.model.HighlightMessageInfo): void;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewMyUserMessageBinding;
					public getHighlightInfo(): com.sendbird.uikit.model.HighlightMessageInfo;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewMyUserMessageBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewMyUserMessageBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewMyUserMessageBinding;
					public setChannel(param0: com.sendbird.android.GroupChannel): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.MyUserMessageView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewMyUserMessageBindingImpl extends com.sendbird.uikit.databinding.SbViewMyUserMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMyUserMessageBindingImpl>;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public setMessage(param0: com.sendbird.android.BaseMessage): void;
					public invalidateAll(): void;
					public executeBindings(): void;
					public setHighlightInfo(param0: com.sendbird.uikit.model.HighlightMessageInfo): void;
					public setChannel(param0: com.sendbird.android.GroupChannel): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.MyUserMessageView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewMyUserMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMyUserMessageComponentBinding>;
					public brBottom: androidx.constraintlayout.widget.Barrier;
					public contentPanel: androidx.constraintlayout.widget.ConstraintLayout;
					public emojiReactionListBackground: globalAndroid.view.View;
					public ivStatus: com.sendbird.uikit.widgets.MyMessageStatusView;
					public ogtagBackground: globalAndroid.view.View;
					public ovOgtag: globalAndroid.widget.FrameLayout;
					public root: androidx.constraintlayout.widget.ConstraintLayout;
					public rvEmojiReactionList: com.sendbird.uikit.widgets.EmojiReactionListView;
					public tvMessage: com.sendbird.uikit.widgets.AutoLinkTextView;
					public tvSentAt: androidx.appcompat.widget.AppCompatTextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewMyUserMessageComponentBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.Barrier, param4: androidx.constraintlayout.widget.ConstraintLayout, param5: globalAndroid.view.View, param6: com.sendbird.uikit.widgets.MyMessageStatusView, param7: globalAndroid.view.View, param8: globalAndroid.widget.FrameLayout, param9: androidx.constraintlayout.widget.ConstraintLayout, param10: com.sendbird.uikit.widgets.EmojiReactionListView, param11: com.sendbird.uikit.widgets.AutoLinkTextView, param12: androidx.appcompat.widget.AppCompatTextView);
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewMyUserMessageComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewMyUserMessageComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewMyUserMessageComponentBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewMyUserMessageComponentBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewMyUserMessageComponentBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewMyUserMessageComponentBindingImpl extends com.sendbird.uikit.databinding.SbViewMyUserMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewMyUserMessageComponentBindingImpl>;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.Barrier, param4: androidx.constraintlayout.widget.ConstraintLayout, param5: globalAndroid.view.View, param6: com.sendbird.uikit.widgets.MyMessageStatusView, param7: globalAndroid.view.View, param8: globalAndroid.widget.FrameLayout, param9: androidx.constraintlayout.widget.ConstraintLayout, param10: com.sendbird.uikit.widgets.EmojiReactionListView, param11: com.sendbird.uikit.widgets.AutoLinkTextView, param12: androidx.appcompat.widget.AppCompatTextView);
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewOgtagBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOgtagBinding>;
					public contentBarrier: androidx.constraintlayout.widget.Barrier;
					public ivOgImage: androidx.appcompat.widget.AppCompatImageView;
					public ivOgImageOveray: androidx.appcompat.widget.AppCompatImageView;
					public phOgBottom: androidx.constraintlayout.widget.Placeholder;
					public phOgTop: androidx.constraintlayout.widget.Placeholder;
					public tvOgDescription: androidx.appcompat.widget.AppCompatTextView;
					public tvOgTitle: androidx.appcompat.widget.AppCompatTextView;
					public tvOgUrl: androidx.appcompat.widget.AppCompatTextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewOgtagBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewOgtagBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewOgtagBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewOgtagBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewOgtagBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewOgtagBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.Barrier, param4: androidx.appcompat.widget.AppCompatImageView, param5: androidx.appcompat.widget.AppCompatImageView, param6: androidx.constraintlayout.widget.Placeholder, param7: androidx.constraintlayout.widget.Placeholder, param8: androidx.appcompat.widget.AppCompatTextView, param9: androidx.appcompat.widget.AppCompatTextView, param10: androidx.appcompat.widget.AppCompatTextView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewOgtagBindingImpl extends com.sendbird.uikit.databinding.SbViewOgtagBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOgtagBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.Barrier, param4: androidx.appcompat.widget.AppCompatImageView, param5: androidx.appcompat.widget.AppCompatImageView, param6: androidx.constraintlayout.widget.Placeholder, param7: androidx.constraintlayout.widget.Placeholder, param8: androidx.appcompat.widget.AppCompatTextView, param9: androidx.appcompat.widget.AppCompatTextView, param10: androidx.appcompat.widget.AppCompatTextView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewOpenChannelAdminMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelAdminMessageBinding>;
					public mMessage: com.sendbird.android.AdminMessage;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelAdminMessageBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewOpenChannelAdminMessageBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewOpenChannelAdminMessageBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelAdminMessageBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewOpenChannelAdminMessageBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewOpenChannelAdminMessageBinding;
					public getMessage(): com.sendbird.android.AdminMessage;
					public setMessage(param0: com.sendbird.android.AdminMessage): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewOpenChannelAdminMessageBindingImpl extends com.sendbird.uikit.databinding.SbViewOpenChannelAdminMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelAdminMessageBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public setMessage(param0: com.sendbird.android.AdminMessage): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewOpenChannelAdminMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelAdminMessageComponentBinding>;
					public tvMessage: androidx.appcompat.widget.AppCompatTextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewOpenChannelAdminMessageComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelAdminMessageComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewOpenChannelAdminMessageComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewOpenChannelAdminMessageComponentBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewOpenChannelAdminMessageComponentBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelAdminMessageComponentBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatTextView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewOpenChannelAdminMessageComponentBindingImpl extends com.sendbird.uikit.databinding.SbViewOpenChannelAdminMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelAdminMessageComponentBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatTextView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewOpenChannelFileImageMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelFileImageMessageBinding>;
					public mMessage: com.sendbird.android.FileMessage;
					public mChannel: com.sendbird.android.OpenChannel;
					public mMessageGroupType: com.sendbird.uikit.consts.MessageGroupType;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewOpenChannelFileImageMessageBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewOpenChannelFileImageMessageBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelFileImageMessageBinding;
					public getMessageGroupType(): com.sendbird.uikit.consts.MessageGroupType;
					public getMessage(): com.sendbird.android.FileMessage;
					public setChannel(param0: com.sendbird.android.OpenChannel): void;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelFileImageMessageBinding;
					public getChannel(): com.sendbird.android.OpenChannel;
					public setMessage(param0: com.sendbird.android.FileMessage): void;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewOpenChannelFileImageMessageBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewOpenChannelFileImageMessageBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewOpenChannelFileImageMessageBindingImpl extends com.sendbird.uikit.databinding.SbViewOpenChannelFileImageMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelFileImageMessageBindingImpl>;
					public setChannel(param0: com.sendbird.android.OpenChannel): void;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setMessage(param0: com.sendbird.android.FileMessage): void;
					public setVariable(param0: number, param1: any): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewOpenChannelFileImageMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelFileImageMessageComponentBinding>;
					public contentPanel: androidx.constraintlayout.widget.ConstraintLayout;
					public guideline: androidx.constraintlayout.widget.Guideline;
					public ivProfileView: androidx.appcompat.widget.AppCompatImageView;
					public ivStatus: com.sendbird.uikit.widgets.MyMessageStatusView;
					public ivThumbnail: com.sendbird.uikit.widgets.RoundCornerView;
					public ivThumbnailIcon: androidx.appcompat.widget.AppCompatImageView;
					public ivThumbnailOveray: androidx.appcompat.widget.AppCompatImageView;
					public tvNickname: androidx.appcompat.widget.AppCompatTextView;
					public tvSentAt: androidx.appcompat.widget.AppCompatTextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewOpenChannelFileImageMessageComponentBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelFileImageMessageComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelFileImageMessageComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewOpenChannelFileImageMessageComponentBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.ConstraintLayout, param4: androidx.constraintlayout.widget.Guideline, param5: androidx.appcompat.widget.AppCompatImageView, param6: com.sendbird.uikit.widgets.MyMessageStatusView, param7: com.sendbird.uikit.widgets.RoundCornerView, param8: androidx.appcompat.widget.AppCompatImageView, param9: androidx.appcompat.widget.AppCompatImageView, param10: androidx.appcompat.widget.AppCompatTextView, param11: androidx.appcompat.widget.AppCompatTextView);
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewOpenChannelFileImageMessageComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewOpenChannelFileImageMessageComponentBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewOpenChannelFileImageMessageComponentBindingImpl extends com.sendbird.uikit.databinding.SbViewOpenChannelFileImageMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelFileImageMessageComponentBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.ConstraintLayout, param4: androidx.constraintlayout.widget.Guideline, param5: androidx.appcompat.widget.AppCompatImageView, param6: com.sendbird.uikit.widgets.MyMessageStatusView, param7: com.sendbird.uikit.widgets.RoundCornerView, param8: androidx.appcompat.widget.AppCompatImageView, param9: androidx.appcompat.widget.AppCompatImageView, param10: androidx.appcompat.widget.AppCompatTextView, param11: androidx.appcompat.widget.AppCompatTextView);
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewOpenChannelFileMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelFileMessageBinding>;
					public mMessage: com.sendbird.android.FileMessage;
					public mChannel: com.sendbird.android.OpenChannel;
					public mMessageGroupType: com.sendbird.uikit.consts.MessageGroupType;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelFileMessageBinding;
					public getMessageGroupType(): com.sendbird.uikit.consts.MessageGroupType;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewOpenChannelFileMessageBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewOpenChannelFileMessageBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewOpenChannelFileMessageBinding;
					public getMessage(): com.sendbird.android.FileMessage;
					public setChannel(param0: com.sendbird.android.OpenChannel): void;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					public getChannel(): com.sendbird.android.OpenChannel;
					public setMessage(param0: com.sendbird.android.FileMessage): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewOpenChannelFileMessageBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelFileMessageBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewOpenChannelFileMessageBindingImpl extends com.sendbird.uikit.databinding.SbViewOpenChannelFileMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelFileMessageBindingImpl>;
					public setChannel(param0: com.sendbird.android.OpenChannel): void;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setMessage(param0: com.sendbird.android.FileMessage): void;
					public setVariable(param0: number, param1: any): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewOpenChannelFileMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelFileMessageComponentBinding>;
					public contentPanel: androidx.constraintlayout.widget.ConstraintLayout;
					public guideline: androidx.constraintlayout.widget.Guideline;
					public ivIcon: androidx.appcompat.widget.AppCompatImageView;
					public ivProfileView: androidx.appcompat.widget.AppCompatImageView;
					public ivStatus: com.sendbird.uikit.widgets.MyMessageStatusView;
					public tvFileName: androidx.appcompat.widget.AppCompatTextView;
					public tvNickname: androidx.appcompat.widget.AppCompatTextView;
					public tvSentAt: androidx.appcompat.widget.AppCompatTextView;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.ConstraintLayout, param4: androidx.constraintlayout.widget.Guideline, param5: androidx.appcompat.widget.AppCompatImageView, param6: androidx.appcompat.widget.AppCompatImageView, param7: com.sendbird.uikit.widgets.MyMessageStatusView, param8: androidx.appcompat.widget.AppCompatTextView, param9: androidx.appcompat.widget.AppCompatTextView, param10: androidx.appcompat.widget.AppCompatTextView);
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewOpenChannelFileMessageComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelFileMessageComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewOpenChannelFileMessageComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewOpenChannelFileMessageComponentBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelFileMessageComponentBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewOpenChannelFileMessageComponentBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewOpenChannelFileMessageComponentBindingImpl extends com.sendbird.uikit.databinding.SbViewOpenChannelFileMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelFileMessageComponentBindingImpl>;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.ConstraintLayout, param4: androidx.constraintlayout.widget.Guideline, param5: androidx.appcompat.widget.AppCompatImageView, param6: androidx.appcompat.widget.AppCompatImageView, param7: com.sendbird.uikit.widgets.MyMessageStatusView, param8: androidx.appcompat.widget.AppCompatTextView, param9: androidx.appcompat.widget.AppCompatTextView, param10: androidx.appcompat.widget.AppCompatTextView);
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewOpenChannelFileVideoMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelFileVideoMessageBinding>;
					public mMessage: com.sendbird.android.FileMessage;
					public mChannel: com.sendbird.android.OpenChannel;
					public mMessageGroupType: com.sendbird.uikit.consts.MessageGroupType;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelFileVideoMessageBinding;
					public getMessageGroupType(): com.sendbird.uikit.consts.MessageGroupType;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewOpenChannelFileVideoMessageBinding;
					public getMessage(): com.sendbird.android.FileMessage;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewOpenChannelFileVideoMessageBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelFileVideoMessageBinding;
					public setChannel(param0: com.sendbird.android.OpenChannel): void;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					public getChannel(): com.sendbird.android.OpenChannel;
					public setMessage(param0: com.sendbird.android.FileMessage): void;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewOpenChannelFileVideoMessageBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewOpenChannelFileVideoMessageBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewOpenChannelFileVideoMessageBindingImpl extends com.sendbird.uikit.databinding.SbViewOpenChannelFileVideoMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelFileVideoMessageBindingImpl>;
					public setChannel(param0: com.sendbird.android.OpenChannel): void;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setMessage(param0: com.sendbird.android.FileMessage): void;
					public setVariable(param0: number, param1: any): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewOpenChannelFileVideoMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelFileVideoMessageComponentBinding>;
					public contentPanel: androidx.constraintlayout.widget.ConstraintLayout;
					public guideline: androidx.constraintlayout.widget.Guideline;
					public ivProfileView: androidx.appcompat.widget.AppCompatImageView;
					public ivStatus: com.sendbird.uikit.widgets.MyMessageStatusView;
					public ivThumbnail: com.sendbird.uikit.widgets.RoundCornerView;
					public ivThumbnailIcon: androidx.appcompat.widget.AppCompatImageView;
					public ivThumbnailOveray: androidx.appcompat.widget.AppCompatImageView;
					public tvNickname: androidx.appcompat.widget.AppCompatTextView;
					public tvSentAt: androidx.appcompat.widget.AppCompatTextView;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelFileVideoMessageComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewOpenChannelFileVideoMessageComponentBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewOpenChannelFileVideoMessageComponentBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelFileVideoMessageComponentBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.ConstraintLayout, param4: androidx.constraintlayout.widget.Guideline, param5: androidx.appcompat.widget.AppCompatImageView, param6: com.sendbird.uikit.widgets.MyMessageStatusView, param7: com.sendbird.uikit.widgets.RoundCornerView, param8: androidx.appcompat.widget.AppCompatImageView, param9: androidx.appcompat.widget.AppCompatImageView, param10: androidx.appcompat.widget.AppCompatTextView, param11: androidx.appcompat.widget.AppCompatTextView);
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewOpenChannelFileVideoMessageComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewOpenChannelFileVideoMessageComponentBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewOpenChannelFileVideoMessageComponentBindingImpl extends com.sendbird.uikit.databinding.SbViewOpenChannelFileVideoMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelFileVideoMessageComponentBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.ConstraintLayout, param4: androidx.constraintlayout.widget.Guideline, param5: androidx.appcompat.widget.AppCompatImageView, param6: com.sendbird.uikit.widgets.MyMessageStatusView, param7: com.sendbird.uikit.widgets.RoundCornerView, param8: androidx.appcompat.widget.AppCompatImageView, param9: androidx.appcompat.widget.AppCompatImageView, param10: androidx.appcompat.widget.AppCompatTextView, param11: androidx.appcompat.widget.AppCompatTextView);
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewOpenChannelOgtagBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelOgtagBinding>;
					public ivOgImage: com.sendbird.uikit.widgets.RoundCornerView;
					public tvOgDescription: androidx.appcompat.widget.AppCompatTextView;
					public tvOgTitle: androidx.appcompat.widget.AppCompatTextView;
					public tvOgUrl: androidx.appcompat.widget.AppCompatTextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewOpenChannelOgtagBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.RoundCornerView, param4: androidx.appcompat.widget.AppCompatTextView, param5: androidx.appcompat.widget.AppCompatTextView, param6: androidx.appcompat.widget.AppCompatTextView);
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewOpenChannelOgtagBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewOpenChannelOgtagBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelOgtagBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelOgtagBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewOpenChannelOgtagBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewOpenChannelOgtagBindingImpl extends com.sendbird.uikit.databinding.SbViewOpenChannelOgtagBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelOgtagBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.RoundCornerView, param4: androidx.appcompat.widget.AppCompatTextView, param5: androidx.appcompat.widget.AppCompatTextView, param6: androidx.appcompat.widget.AppCompatTextView);
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewOpenChannelSettingsBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelSettingsBinding>;
					public ccvChannelImage: com.sendbird.uikit.widgets.ChannelCoverView;
					public channelDeleteItem: androidx.constraintlayout.widget.ConstraintLayout;
					public divider0: globalAndroid.view.View;
					public divider1: globalAndroid.view.View;
					public divider2: globalAndroid.view.View;
					public divider3: globalAndroid.view.View;
					public ivChannelDeleteIcon: androidx.appcompat.widget.AppCompatImageView;
					public ivNext: globalAndroid.widget.ImageView;
					public ivParticipantsIcon: androidx.appcompat.widget.AppCompatImageView;
					public participantsItem: androidx.constraintlayout.widget.ConstraintLayout;
					public tvChannelDeleteTitle: androidx.appcompat.widget.AppCompatTextView;
					public tvChannelName: androidx.appcompat.widget.AppCompatTextView;
					public tvInformationContent: androidx.appcompat.widget.AppCompatTextView;
					public tvInformationTitle: androidx.appcompat.widget.AppCompatTextView;
					public tvParticipantsCount: androidx.appcompat.widget.AppCompatTextView;
					public tvParticipantsTitle: androidx.appcompat.widget.AppCompatTextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewOpenChannelSettingsBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewOpenChannelSettingsBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelSettingsBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewOpenChannelSettingsBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewOpenChannelSettingsBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelSettingsBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.ChannelCoverView, param4: androidx.constraintlayout.widget.ConstraintLayout, param5: globalAndroid.view.View, param6: globalAndroid.view.View, param7: globalAndroid.view.View, param8: globalAndroid.view.View, param9: androidx.appcompat.widget.AppCompatImageView, param10: globalAndroid.widget.ImageView, param11: androidx.appcompat.widget.AppCompatImageView, param12: androidx.constraintlayout.widget.ConstraintLayout, param13: androidx.appcompat.widget.AppCompatTextView, param14: androidx.appcompat.widget.AppCompatTextView, param15: androidx.appcompat.widget.AppCompatTextView, param16: androidx.appcompat.widget.AppCompatTextView, param17: androidx.appcompat.widget.AppCompatTextView, param18: androidx.appcompat.widget.AppCompatTextView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewOpenChannelSettingsBindingImpl extends com.sendbird.uikit.databinding.SbViewOpenChannelSettingsBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelSettingsBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.ChannelCoverView, param4: androidx.constraintlayout.widget.ConstraintLayout, param5: globalAndroid.view.View, param6: globalAndroid.view.View, param7: globalAndroid.view.View, param8: globalAndroid.view.View, param9: androidx.appcompat.widget.AppCompatImageView, param10: globalAndroid.widget.ImageView, param11: androidx.appcompat.widget.AppCompatImageView, param12: androidx.constraintlayout.widget.ConstraintLayout, param13: androidx.appcompat.widget.AppCompatTextView, param14: androidx.appcompat.widget.AppCompatTextView, param15: androidx.appcompat.widget.AppCompatTextView, param16: androidx.appcompat.widget.AppCompatTextView, param17: androidx.appcompat.widget.AppCompatTextView, param18: androidx.appcompat.widget.AppCompatTextView);
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewOpenChannelUserMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelUserMessageBinding>;
					public otherMessageView: com.sendbird.uikit.widgets.OpenChannelUserMessageView;
					public mMessage: com.sendbird.android.BaseMessage;
					public mChannel: com.sendbird.android.OpenChannel;
					public mMessageGroupType: com.sendbird.uikit.consts.MessageGroupType;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.OpenChannelUserMessageView);
					public getMessage(): com.sendbird.android.BaseMessage;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewOpenChannelUserMessageBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewOpenChannelUserMessageBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelUserMessageBinding;
					public setMessage(param0: com.sendbird.android.BaseMessage): void;
					public getMessageGroupType(): com.sendbird.uikit.consts.MessageGroupType;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewOpenChannelUserMessageBinding;
					public setChannel(param0: com.sendbird.android.OpenChannel): void;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					public getChannel(): com.sendbird.android.OpenChannel;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewOpenChannelUserMessageBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelUserMessageBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewOpenChannelUserMessageBindingImpl extends com.sendbird.uikit.databinding.SbViewOpenChannelUserMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelUserMessageBindingImpl>;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.OpenChannelUserMessageView);
					public setChannel(param0: com.sendbird.android.OpenChannel): void;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public setMessage(param0: com.sendbird.android.BaseMessage): void;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewOpenChannelUserMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelUserMessageComponentBinding>;
					public brBottom: androidx.constraintlayout.widget.Barrier;
					public contentPanel: androidx.constraintlayout.widget.ConstraintLayout;
					public guideline: androidx.constraintlayout.widget.Guideline;
					public ivProfileView: androidx.appcompat.widget.AppCompatImageView;
					public ivStatus: com.sendbird.uikit.widgets.MyMessageStatusView;
					public ogTag: com.sendbird.uikit.widgets.OpenChannelOgtagView;
					public tvMessage: com.sendbird.uikit.widgets.AutoLinkTextView;
					public tvNickname: androidx.appcompat.widget.AppCompatTextView;
					public tvSentAt: androidx.appcompat.widget.AppCompatTextView;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelUserMessageComponentBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewOpenChannelUserMessageComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewOpenChannelUserMessageComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewOpenChannelUserMessageComponentBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.Barrier, param4: androidx.constraintlayout.widget.ConstraintLayout, param5: androidx.constraintlayout.widget.Guideline, param6: androidx.appcompat.widget.AppCompatImageView, param7: com.sendbird.uikit.widgets.MyMessageStatusView, param8: com.sendbird.uikit.widgets.OpenChannelOgtagView, param9: com.sendbird.uikit.widgets.AutoLinkTextView, param10: androidx.appcompat.widget.AppCompatTextView, param11: androidx.appcompat.widget.AppCompatTextView);
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewOpenChannelUserMessageComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewOpenChannelUserMessageComponentBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewOpenChannelUserMessageComponentBindingImpl extends com.sendbird.uikit.databinding.SbViewOpenChannelUserMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOpenChannelUserMessageComponentBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.Barrier, param4: androidx.constraintlayout.widget.ConstraintLayout, param5: androidx.constraintlayout.widget.Guideline, param6: androidx.appcompat.widget.AppCompatImageView, param7: com.sendbird.uikit.widgets.MyMessageStatusView, param8: com.sendbird.uikit.widgets.OpenChannelOgtagView, param9: com.sendbird.uikit.widgets.AutoLinkTextView, param10: androidx.appcompat.widget.AppCompatTextView, param11: androidx.appcompat.widget.AppCompatTextView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewOtherFileImageMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOtherFileImageMessageBinding>;
					public mMessage: com.sendbird.android.FileMessage;
					public mChannel: com.sendbird.android.GroupChannel;
					public mMessageGroupType: com.sendbird.uikit.consts.MessageGroupType;
					public getChannel(): com.sendbird.android.GroupChannel;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewOtherFileImageMessageBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewOtherFileImageMessageBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewOtherFileImageMessageBinding;
					public getMessageGroupType(): com.sendbird.uikit.consts.MessageGroupType;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewOtherFileImageMessageBinding;
					public getMessage(): com.sendbird.android.FileMessage;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					public setMessage(param0: com.sendbird.android.FileMessage): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewOtherFileImageMessageBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewOtherFileImageMessageBinding;
					public setChannel(param0: com.sendbird.android.GroupChannel): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewOtherFileImageMessageBindingImpl extends com.sendbird.uikit.databinding.SbViewOtherFileImageMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOtherFileImageMessageBindingImpl>;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setMessage(param0: com.sendbird.android.FileMessage): void;
					public setVariable(param0: number, param1: any): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public setChannel(param0: com.sendbird.android.GroupChannel): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewOtherFileImageMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOtherFileImageMessageComponentBinding>;
					public brBottom: androidx.constraintlayout.widget.Barrier;
					public contentBarrier: androidx.constraintlayout.widget.Barrier;
					public contentPanel: androidx.constraintlayout.widget.ConstraintLayout;
					public emojiReactionListBackground: globalAndroid.view.View;
					public ivProfileView: androidx.appcompat.widget.AppCompatImageView;
					public ivThumbnail: com.sendbird.uikit.widgets.RoundCornerView;
					public ivThumbnailIcon: androidx.appcompat.widget.AppCompatImageView;
					public ivThumbnailOveray: androidx.appcompat.widget.AppCompatImageView;
					public root: androidx.constraintlayout.widget.ConstraintLayout;
					public rvEmojiReactionList: com.sendbird.uikit.widgets.EmojiReactionListView;
					public tvNickname: androidx.appcompat.widget.AppCompatTextView;
					public tvSentAt: androidx.appcompat.widget.AppCompatTextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewOtherFileImageMessageComponentBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewOtherFileImageMessageComponentBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.Barrier, param4: androidx.constraintlayout.widget.Barrier, param5: androidx.constraintlayout.widget.ConstraintLayout, param6: globalAndroid.view.View, param7: androidx.appcompat.widget.AppCompatImageView, param8: com.sendbird.uikit.widgets.RoundCornerView, param9: androidx.appcompat.widget.AppCompatImageView, param10: androidx.appcompat.widget.AppCompatImageView, param11: androidx.constraintlayout.widget.ConstraintLayout, param12: com.sendbird.uikit.widgets.EmojiReactionListView, param13: androidx.appcompat.widget.AppCompatTextView, param14: androidx.appcompat.widget.AppCompatTextView);
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewOtherFileImageMessageComponentBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewOtherFileImageMessageComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewOtherFileImageMessageComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewOtherFileImageMessageComponentBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewOtherFileImageMessageComponentBindingImpl extends com.sendbird.uikit.databinding.SbViewOtherFileImageMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOtherFileImageMessageComponentBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.Barrier, param4: androidx.constraintlayout.widget.Barrier, param5: androidx.constraintlayout.widget.ConstraintLayout, param6: globalAndroid.view.View, param7: androidx.appcompat.widget.AppCompatImageView, param8: com.sendbird.uikit.widgets.RoundCornerView, param9: androidx.appcompat.widget.AppCompatImageView, param10: androidx.appcompat.widget.AppCompatImageView, param11: androidx.constraintlayout.widget.ConstraintLayout, param12: com.sendbird.uikit.widgets.EmojiReactionListView, param13: androidx.appcompat.widget.AppCompatTextView, param14: androidx.appcompat.widget.AppCompatTextView);
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewOtherFileMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOtherFileMessageBinding>;
					public mMessage: com.sendbird.android.FileMessage;
					public mChannel: com.sendbird.android.GroupChannel;
					public mMessageGroupType: com.sendbird.uikit.consts.MessageGroupType;
					public mHighlightInfo: com.sendbird.uikit.model.HighlightMessageInfo;
					public getChannel(): com.sendbird.android.GroupChannel;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewOtherFileMessageBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewOtherFileMessageBinding;
					public getMessageGroupType(): com.sendbird.uikit.consts.MessageGroupType;
					public setHighlightInfo(param0: com.sendbird.uikit.model.HighlightMessageInfo): void;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewOtherFileMessageBinding;
					public getMessage(): com.sendbird.android.FileMessage;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewOtherFileMessageBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewOtherFileMessageBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewOtherFileMessageBinding;
					public getHighlightInfo(): com.sendbird.uikit.model.HighlightMessageInfo;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					public setMessage(param0: com.sendbird.android.FileMessage): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public setChannel(param0: com.sendbird.android.GroupChannel): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewOtherFileMessageBindingImpl extends com.sendbird.uikit.databinding.SbViewOtherFileMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOtherFileMessageBindingImpl>;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setMessage(param0: com.sendbird.android.FileMessage): void;
					public setVariable(param0: number, param1: any): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public setHighlightInfo(param0: com.sendbird.uikit.model.HighlightMessageInfo): void;
					public setChannel(param0: com.sendbird.android.GroupChannel): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewOtherFileMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOtherFileMessageComponentBinding>;
					public brBottom: androidx.constraintlayout.widget.Barrier;
					public contentBarrier: androidx.constraintlayout.widget.Barrier;
					public contentPanel: globalAndroid.widget.LinearLayout;
					public contentPanelWithReactions: androidx.constraintlayout.widget.ConstraintLayout;
					public emojiReactionListBackground: globalAndroid.view.View;
					public ivIcon: androidx.appcompat.widget.AppCompatImageView;
					public ivProfileView: androidx.appcompat.widget.AppCompatImageView;
					public root: androidx.constraintlayout.widget.ConstraintLayout;
					public rvEmojiReactionList: com.sendbird.uikit.widgets.EmojiReactionListView;
					public tvFileName: androidx.appcompat.widget.AppCompatTextView;
					public tvNickname: androidx.appcompat.widget.AppCompatTextView;
					public tvSentAt: androidx.appcompat.widget.AppCompatTextView;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewOtherFileMessageComponentBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewOtherFileMessageComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewOtherFileMessageComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewOtherFileMessageComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewOtherFileMessageComponentBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.Barrier, param4: androidx.constraintlayout.widget.Barrier, param5: globalAndroid.widget.LinearLayout, param6: androidx.constraintlayout.widget.ConstraintLayout, param7: globalAndroid.view.View, param8: androidx.appcompat.widget.AppCompatImageView, param9: androidx.appcompat.widget.AppCompatImageView, param10: androidx.constraintlayout.widget.ConstraintLayout, param11: com.sendbird.uikit.widgets.EmojiReactionListView, param12: androidx.appcompat.widget.AppCompatTextView, param13: androidx.appcompat.widget.AppCompatTextView, param14: androidx.appcompat.widget.AppCompatTextView);
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewOtherFileMessageComponentBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewOtherFileMessageComponentBindingImpl extends com.sendbird.uikit.databinding.SbViewOtherFileMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOtherFileMessageComponentBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.Barrier, param4: androidx.constraintlayout.widget.Barrier, param5: globalAndroid.widget.LinearLayout, param6: androidx.constraintlayout.widget.ConstraintLayout, param7: globalAndroid.view.View, param8: androidx.appcompat.widget.AppCompatImageView, param9: androidx.appcompat.widget.AppCompatImageView, param10: androidx.constraintlayout.widget.ConstraintLayout, param11: com.sendbird.uikit.widgets.EmojiReactionListView, param12: androidx.appcompat.widget.AppCompatTextView, param13: androidx.appcompat.widget.AppCompatTextView, param14: androidx.appcompat.widget.AppCompatTextView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewOtherFileVideoMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOtherFileVideoMessageBinding>;
					public mMessage: com.sendbird.android.FileMessage;
					public mChannel: com.sendbird.android.GroupChannel;
					public mMessageGroupType: com.sendbird.uikit.consts.MessageGroupType;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewOtherFileVideoMessageBinding;
					public getChannel(): com.sendbird.android.GroupChannel;
					public getMessageGroupType(): com.sendbird.uikit.consts.MessageGroupType;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewOtherFileVideoMessageBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewOtherFileVideoMessageBinding;
					public getMessage(): com.sendbird.android.FileMessage;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewOtherFileVideoMessageBinding;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					public setMessage(param0: com.sendbird.android.FileMessage): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewOtherFileVideoMessageBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewOtherFileVideoMessageBinding;
					public setChannel(param0: com.sendbird.android.GroupChannel): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewOtherFileVideoMessageBindingImpl extends com.sendbird.uikit.databinding.SbViewOtherFileVideoMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOtherFileVideoMessageBindingImpl>;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setMessage(param0: com.sendbird.android.FileMessage): void;
					public setVariable(param0: number, param1: any): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public setChannel(param0: com.sendbird.android.GroupChannel): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewOtherFileVideoMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOtherFileVideoMessageComponentBinding>;
					public brBottom: androidx.constraintlayout.widget.Barrier;
					public contentBarrier: androidx.constraintlayout.widget.Barrier;
					public contentPanel: androidx.constraintlayout.widget.ConstraintLayout;
					public emojiReactionListBackground: globalAndroid.view.View;
					public ivProfileView: androidx.appcompat.widget.AppCompatImageView;
					public ivThumbnail: com.sendbird.uikit.widgets.RoundCornerView;
					public ivThumbnailIcon: androidx.appcompat.widget.AppCompatImageView;
					public ivThumbnailOveray: androidx.appcompat.widget.AppCompatImageView;
					public root: androidx.constraintlayout.widget.ConstraintLayout;
					public rvEmojiReactionList: com.sendbird.uikit.widgets.EmojiReactionListView;
					public tvNickname: androidx.appcompat.widget.AppCompatTextView;
					public tvSentAt: androidx.appcompat.widget.AppCompatTextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewOtherFileVideoMessageComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewOtherFileVideoMessageComponentBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.Barrier, param4: androidx.constraintlayout.widget.Barrier, param5: androidx.constraintlayout.widget.ConstraintLayout, param6: globalAndroid.view.View, param7: androidx.appcompat.widget.AppCompatImageView, param8: com.sendbird.uikit.widgets.RoundCornerView, param9: androidx.appcompat.widget.AppCompatImageView, param10: androidx.appcompat.widget.AppCompatImageView, param11: androidx.constraintlayout.widget.ConstraintLayout, param12: com.sendbird.uikit.widgets.EmojiReactionListView, param13: androidx.appcompat.widget.AppCompatTextView, param14: androidx.appcompat.widget.AppCompatTextView);
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewOtherFileVideoMessageComponentBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewOtherFileVideoMessageComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewOtherFileVideoMessageComponentBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewOtherFileVideoMessageComponentBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewOtherFileVideoMessageComponentBindingImpl extends com.sendbird.uikit.databinding.SbViewOtherFileVideoMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOtherFileVideoMessageComponentBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.Barrier, param4: androidx.constraintlayout.widget.Barrier, param5: androidx.constraintlayout.widget.ConstraintLayout, param6: globalAndroid.view.View, param7: androidx.appcompat.widget.AppCompatImageView, param8: com.sendbird.uikit.widgets.RoundCornerView, param9: androidx.appcompat.widget.AppCompatImageView, param10: androidx.appcompat.widget.AppCompatImageView, param11: androidx.constraintlayout.widget.ConstraintLayout, param12: com.sendbird.uikit.widgets.EmojiReactionListView, param13: androidx.appcompat.widget.AppCompatTextView, param14: androidx.appcompat.widget.AppCompatTextView);
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewOtherUserMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOtherUserMessageBinding>;
					public otherMessageView: com.sendbird.uikit.widgets.OtherUserMessageView;
					public mMessage: com.sendbird.android.BaseMessage;
					public mChannel: com.sendbird.android.GroupChannel;
					public mMessageGroupType: com.sendbird.uikit.consts.MessageGroupType;
					public mHighlightInfo: com.sendbird.uikit.model.HighlightMessageInfo;
					public getChannel(): com.sendbird.android.GroupChannel;
					public getMessage(): com.sendbird.android.BaseMessage;
					public setMessage(param0: com.sendbird.android.BaseMessage): void;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewOtherUserMessageBinding;
					public getMessageGroupType(): com.sendbird.uikit.consts.MessageGroupType;
					public setHighlightInfo(param0: com.sendbird.uikit.model.HighlightMessageInfo): void;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewOtherUserMessageBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewOtherUserMessageBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewOtherUserMessageBinding;
					public getHighlightInfo(): com.sendbird.uikit.model.HighlightMessageInfo;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewOtherUserMessageBinding;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewOtherUserMessageBinding;
					public setChannel(param0: com.sendbird.android.GroupChannel): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.OtherUserMessageView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewOtherUserMessageBindingImpl extends com.sendbird.uikit.databinding.SbViewOtherUserMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOtherUserMessageBindingImpl>;
					public setMessageGroupType(param0: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public setMessage(param0: com.sendbird.android.BaseMessage): void;
					public invalidateAll(): void;
					public executeBindings(): void;
					public setHighlightInfo(param0: com.sendbird.uikit.model.HighlightMessageInfo): void;
					public setChannel(param0: com.sendbird.android.GroupChannel): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.OtherUserMessageView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewOtherUserMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOtherUserMessageComponentBinding>;
					public brBottom: androidx.constraintlayout.widget.Barrier;
					public contentPanel: androidx.constraintlayout.widget.ConstraintLayout;
					public emojiReactionListBackground: globalAndroid.view.View;
					public ivProfileView: androidx.appcompat.widget.AppCompatImageView;
					public ogtagBackground: globalAndroid.view.View;
					public ovOgtag: globalAndroid.widget.FrameLayout;
					public root: androidx.constraintlayout.widget.ConstraintLayout;
					public rvEmojiReactionList: com.sendbird.uikit.widgets.EmojiReactionListView;
					public tvMessage: com.sendbird.uikit.widgets.AutoLinkTextView;
					public tvNickname: androidx.appcompat.widget.AppCompatTextView;
					public tvSentAt: androidx.appcompat.widget.AppCompatTextView;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewOtherUserMessageComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewOtherUserMessageComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewOtherUserMessageComponentBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewOtherUserMessageComponentBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.Barrier, param4: androidx.constraintlayout.widget.ConstraintLayout, param5: globalAndroid.view.View, param6: androidx.appcompat.widget.AppCompatImageView, param7: globalAndroid.view.View, param8: globalAndroid.widget.FrameLayout, param9: androidx.constraintlayout.widget.ConstraintLayout, param10: com.sendbird.uikit.widgets.EmojiReactionListView, param11: com.sendbird.uikit.widgets.AutoLinkTextView, param12: androidx.appcompat.widget.AppCompatTextView, param13: androidx.appcompat.widget.AppCompatTextView);
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewOtherUserMessageComponentBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewOtherUserMessageComponentBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewOtherUserMessageComponentBindingImpl extends com.sendbird.uikit.databinding.SbViewOtherUserMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewOtherUserMessageComponentBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.constraintlayout.widget.Barrier, param4: androidx.constraintlayout.widget.ConstraintLayout, param5: globalAndroid.view.View, param6: androidx.appcompat.widget.AppCompatImageView, param7: globalAndroid.view.View, param8: globalAndroid.widget.FrameLayout, param9: androidx.constraintlayout.widget.ConstraintLayout, param10: com.sendbird.uikit.widgets.EmojiReactionListView, param11: com.sendbird.uikit.widgets.AutoLinkTextView, param12: androidx.appcompat.widget.AppCompatTextView, param13: androidx.appcompat.widget.AppCompatTextView);
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewSearchBarBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewSearchBarBinding>;
					public etInputText: androidx.appcompat.widget.AppCompatEditText;
					public ivClear: androidx.appcompat.widget.AppCompatImageView;
					public ivDivider: androidx.appcompat.widget.AppCompatImageView;
					public ivSearchIcon: androidx.appcompat.widget.AppCompatImageView;
					public searchBar: androidx.constraintlayout.widget.ConstraintLayout;
					public searchEditBox: globalAndroid.widget.LinearLayout;
					public tvSearch: androidx.appcompat.widget.AppCompatTextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewSearchBarBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewSearchBarBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewSearchBarBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewSearchBarBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewSearchBarBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewSearchBarBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatEditText, param4: androidx.appcompat.widget.AppCompatImageView, param5: androidx.appcompat.widget.AppCompatImageView, param6: androidx.appcompat.widget.AppCompatImageView, param7: androidx.constraintlayout.widget.ConstraintLayout, param8: globalAndroid.widget.LinearLayout, param9: androidx.appcompat.widget.AppCompatTextView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewSearchBarBindingImpl extends com.sendbird.uikit.databinding.SbViewSearchBarBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewSearchBarBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatEditText, param4: androidx.appcompat.widget.AppCompatImageView, param5: androidx.appcompat.widget.AppCompatImageView, param6: androidx.appcompat.widget.AppCompatImageView, param7: androidx.constraintlayout.widget.ConstraintLayout, param8: globalAndroid.widget.LinearLayout, param9: androidx.appcompat.widget.AppCompatTextView);
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewSearchResultPreviewBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewSearchResultPreviewBinding>;
					public messagePreview: com.sendbird.uikit.widgets.MessagePreview;
					public mMessage: com.sendbird.android.BaseMessage;
					public getMessage(): com.sendbird.android.BaseMessage;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewSearchResultPreviewBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewSearchResultPreviewBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.MessagePreview);
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewSearchResultPreviewBinding;
					public setMessage(param0: com.sendbird.android.BaseMessage): void;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewSearchResultPreviewBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewSearchResultPreviewBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewSearchResultPreviewBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewSearchResultPreviewBindingImpl extends com.sendbird.uikit.databinding.SbViewSearchResultPreviewBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewSearchResultPreviewBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.MessagePreview);
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public setMessage(param0: com.sendbird.android.BaseMessage): void;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewSelectChannelTypeBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewSelectChannelTypeBinding>;
					public ivIconBroadcast: globalAndroid.widget.ImageView;
					public ivIconGroup: globalAndroid.widget.ImageView;
					public ivIconSuperGroup: globalAndroid.widget.ImageView;
					public root: globalAndroid.widget.LinearLayout;
					public tvMenuBroadcastChant: globalAndroid.widget.TextView;
					public tvMenuGroupChat: globalAndroid.widget.TextView;
					public tvMenuSuperGroupChat: globalAndroid.widget.TextView;
					public tvTitle: globalAndroid.widget.TextView;
					public vgBroadcast: globalAndroid.widget.LinearLayout;
					public vgGroup: globalAndroid.widget.LinearLayout;
					public vgSuperGroup: globalAndroid.widget.LinearLayout;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewSelectChannelTypeBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewSelectChannelTypeBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewSelectChannelTypeBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewSelectChannelTypeBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: globalAndroid.widget.ImageView, param4: globalAndroid.widget.ImageView, param5: globalAndroid.widget.ImageView, param6: globalAndroid.widget.LinearLayout, param7: globalAndroid.widget.TextView, param8: globalAndroid.widget.TextView, param9: globalAndroid.widget.TextView, param10: globalAndroid.widget.TextView, param11: globalAndroid.widget.LinearLayout, param12: globalAndroid.widget.LinearLayout, param13: globalAndroid.widget.LinearLayout);
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewSelectChannelTypeBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewSelectChannelTypeBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewSelectChannelTypeBindingImpl extends com.sendbird.uikit.databinding.SbViewSelectChannelTypeBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewSelectChannelTypeBindingImpl>;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: globalAndroid.widget.ImageView, param4: globalAndroid.widget.ImageView, param5: globalAndroid.widget.ImageView, param6: globalAndroid.widget.LinearLayout, param7: globalAndroid.widget.TextView, param8: globalAndroid.widget.TextView, param9: globalAndroid.widget.TextView, param10: globalAndroid.widget.TextView, param11: globalAndroid.widget.LinearLayout, param12: globalAndroid.widget.LinearLayout, param13: globalAndroid.widget.LinearLayout);
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewSingleMenuItemBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewSingleMenuItemBinding>;
					public divider: globalAndroid.view.View;
					public ivIcon: androidx.appcompat.widget.AppCompatImageView;
					public ivNext: globalAndroid.widget.ImageView;
					public scSwitch: androidx.appcompat.widget.SwitchCompat;
					public tvName: androidx.appcompat.widget.AppCompatTextView;
					public vgAction: globalAndroid.widget.FrameLayout;
					public vgMenuItem: androidx.constraintlayout.widget.ConstraintLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewSingleMenuItemBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewSingleMenuItemBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewSingleMenuItemBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: globalAndroid.view.View, param4: androidx.appcompat.widget.AppCompatImageView, param5: globalAndroid.widget.ImageView, param6: androidx.appcompat.widget.SwitchCompat, param7: androidx.appcompat.widget.AppCompatTextView, param8: globalAndroid.widget.FrameLayout, param9: androidx.constraintlayout.widget.ConstraintLayout);
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewSingleMenuItemBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewSingleMenuItemBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewSingleMenuItemBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewSingleMenuItemBindingImpl extends com.sendbird.uikit.databinding.SbViewSingleMenuItemBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewSingleMenuItemBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: globalAndroid.view.View, param4: androidx.appcompat.widget.AppCompatImageView, param5: globalAndroid.widget.ImageView, param6: androidx.appcompat.widget.SwitchCompat, param7: androidx.appcompat.widget.AppCompatTextView, param8: globalAndroid.widget.FrameLayout, param9: androidx.constraintlayout.widget.ConstraintLayout);
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewStatusFrameBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewStatusFrameBinding>;
					public actionPanel: globalAndroid.widget.LinearLayout;
					public alertPanel: globalAndroid.widget.LinearLayout;
					public frameParentPanel: globalAndroid.widget.FrameLayout;
					public ivAction: androidx.appcompat.widget.AppCompatImageView;
					public ivAlertIcon: androidx.appcompat.widget.AppCompatImageView;
					public ivAlertText: androidx.appcompat.widget.AppCompatTextView;
					public progress: com.sendbird.uikit.widgets.ProgressView;
					public progressPanel: globalAndroid.widget.FrameLayout;
					public tvAction: androidx.appcompat.widget.AppCompatTextView;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: globalAndroid.widget.LinearLayout, param4: globalAndroid.widget.LinearLayout, param5: globalAndroid.widget.FrameLayout, param6: androidx.appcompat.widget.AppCompatImageView, param7: androidx.appcompat.widget.AppCompatImageView, param8: androidx.appcompat.widget.AppCompatTextView, param9: com.sendbird.uikit.widgets.ProgressView, param10: globalAndroid.widget.FrameLayout, param11: androidx.appcompat.widget.AppCompatTextView);
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewStatusFrameBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewStatusFrameBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewStatusFrameBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewStatusFrameBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewStatusFrameBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewStatusFrameBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewStatusFrameBindingImpl extends com.sendbird.uikit.databinding.SbViewStatusFrameBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewStatusFrameBindingImpl>;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: globalAndroid.widget.LinearLayout, param4: globalAndroid.widget.LinearLayout, param5: globalAndroid.widget.FrameLayout, param6: androidx.appcompat.widget.AppCompatImageView, param7: androidx.appcompat.widget.AppCompatImageView, param8: androidx.appcompat.widget.AppCompatTextView, param9: com.sendbird.uikit.widgets.ProgressView, param10: globalAndroid.widget.FrameLayout, param11: androidx.appcompat.widget.AppCompatTextView);
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewTimeLineMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewTimeLineMessageBinding>;
					public mMessage: com.sendbird.android.BaseMessage;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewTimeLineMessageBinding;
					public getMessage(): com.sendbird.android.BaseMessage;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewTimeLineMessageBinding;
					public setMessage(param0: com.sendbird.android.BaseMessage): void;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewTimeLineMessageBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewTimeLineMessageBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewTimeLineMessageBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewTimeLineMessageBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewTimeLineMessageBindingImpl extends com.sendbird.uikit.databinding.SbViewTimeLineMessageBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewTimeLineMessageBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number);
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public setMessage(param0: com.sendbird.android.BaseMessage): void;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewTimeLineMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewTimeLineMessageComponentBinding>;
					public tvTimeline: androidx.appcompat.widget.AppCompatTextView;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewTimeLineMessageComponentBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewTimeLineMessageComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewTimeLineMessageComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewTimeLineMessageComponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewTimeLineMessageComponentBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewTimeLineMessageComponentBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatTextView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewTimeLineMessageComponentBindingImpl extends com.sendbird.uikit.databinding.SbViewTimeLineMessageComponentBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewTimeLineMessageComponentBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatTextView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewToastBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewToastBinding>;
					public iconPanel: globalAndroid.widget.FrameLayout;
					public ivError: androidx.appcompat.widget.AppCompatImageView;
					public ivSuccess: androidx.appcompat.widget.AppCompatImageView;
					public toastPanel: globalAndroid.widget.LinearLayout;
					public tvToastText: androidx.appcompat.widget.AppCompatTextView;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewToastBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewToastBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewToastBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: globalAndroid.widget.FrameLayout, param4: androidx.appcompat.widget.AppCompatImageView, param5: androidx.appcompat.widget.AppCompatImageView, param6: globalAndroid.widget.LinearLayout, param7: androidx.appcompat.widget.AppCompatTextView);
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewToastBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewToastBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewToastBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewToastBindingImpl extends com.sendbird.uikit.databinding.SbViewToastBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewToastBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: globalAndroid.widget.FrameLayout, param4: androidx.appcompat.widget.AppCompatImageView, param5: androidx.appcompat.widget.AppCompatImageView, param6: globalAndroid.widget.LinearLayout, param7: androidx.appcompat.widget.AppCompatTextView);
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewUserListItemBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewUserListItemBinding>;
					public cbUserPreview: androidx.appcompat.widget.AppCompatCheckBox;
					public ivUserCover: com.sendbird.uikit.widgets.ChannelCoverView;
					public tvNickname: androidx.appcompat.widget.AppCompatTextView;
					public vgUserItem: androidx.constraintlayout.widget.ConstraintLayout;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatCheckBox, param4: com.sendbird.uikit.widgets.ChannelCoverView, param5: androidx.appcompat.widget.AppCompatTextView, param6: androidx.constraintlayout.widget.ConstraintLayout);
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewUserListItemBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewUserListItemBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewUserListItemBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewUserListItemBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewUserListItemBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewUserListItemBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewUserListItemBindingImpl extends com.sendbird.uikit.databinding.SbViewUserListItemBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewUserListItemBindingImpl>;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatCheckBox, param4: com.sendbird.uikit.widgets.ChannelCoverView, param5: androidx.appcompat.widget.AppCompatTextView, param6: androidx.constraintlayout.widget.ConstraintLayout);
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewUserPreviewBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewUserPreviewBinding>;
					public userViewHolder: com.sendbird.uikit.widgets.UserPreview;
					public mUserInfo: com.sendbird.uikit.interfaces.UserInfo;
					public mEnabled: java.lang.Boolean;
					public mSelected: java.lang.Boolean;
					public getUserInfo(): com.sendbird.uikit.interfaces.UserInfo;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewUserPreviewBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewUserPreviewBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewUserPreviewBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewUserPreviewBinding;
					public setSelected(param0: java.lang.Boolean): void;
					public getSelected(): java.lang.Boolean;
					public getEnabled(): java.lang.Boolean;
					public setUserInfo(param0: com.sendbird.uikit.interfaces.UserInfo): void;
					public setEnabled(param0: java.lang.Boolean): void;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewUserPreviewBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewUserPreviewBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.UserPreview);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewUserPreviewBindingImpl extends com.sendbird.uikit.databinding.SbViewUserPreviewBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewUserPreviewBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public setSelected(param0: java.lang.Boolean): void;
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public setUserInfo(param0: com.sendbird.uikit.interfaces.UserInfo): void;
					public setEnabled(param0: java.lang.Boolean): void;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: com.sendbird.uikit.widgets.UserPreview);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export abstract class SbViewUserProfileBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewUserProfileBinding>;
					public btCreateChannel: androidx.appcompat.widget.AppCompatButton;
					public ivDivider: androidx.appcompat.widget.AppCompatImageView;
					public parent: globalAndroid.widget.LinearLayout;
					public profileView: com.sendbird.uikit.widgets.ChannelCoverView;
					public tvName: androidx.appcompat.widget.AppCompatTextView;
					public tvTitleUserId: androidx.appcompat.widget.AppCompatTextView;
					public tvUserId: androidx.appcompat.widget.AppCompatTextView;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.sendbird.uikit.databinding.SbViewUserProfileBinding;
					public static bind(param0: globalAndroid.view.View): com.sendbird.uikit.databinding.SbViewUserProfileBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.sendbird.uikit.databinding.SbViewUserProfileBinding;
					/** @deprecated */
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.sendbird.uikit.databinding.SbViewUserProfileBinding;
					/** @deprecated */
					public static bind(param0: globalAndroid.view.View, param1: any): com.sendbird.uikit.databinding.SbViewUserProfileBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.sendbird.uikit.databinding.SbViewUserProfileBinding;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatButton, param4: androidx.appcompat.widget.AppCompatImageView, param5: globalAndroid.widget.LinearLayout, param6: com.sendbird.uikit.widgets.ChannelCoverView, param7: androidx.appcompat.widget.AppCompatTextView, param8: androidx.appcompat.widget.AppCompatTextView, param9: androidx.appcompat.widget.AppCompatTextView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module databinding {
				export class SbViewUserProfileBindingImpl extends com.sendbird.uikit.databinding.SbViewUserProfileBinding {
					public static class: java.lang.Class<com.sendbird.uikit.databinding.SbViewUserProfileBindingImpl>;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public hasPendingBindings(): boolean;
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public invalidateAll(): void;
					public executeBindings(): void;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: androidx.appcompat.widget.AppCompatButton, param4: androidx.appcompat.widget.AppCompatImageView, param5: globalAndroid.widget.LinearLayout, param6: com.sendbird.uikit.widgets.ChannelCoverView, param7: androidx.appcompat.widget.AppCompatTextView, param8: androidx.appcompat.widget.AppCompatTextView, param9: androidx.appcompat.widget.AppCompatTextView);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export class BannedListFragment extends com.sendbird.uikit.fragments.UserTypeListFragment {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.BannedListFragment>;
					public onOperatorDismissed(): void;
					public onConfigure(): void;
					public showWaitingDialog(): void;
					public dismissWaitingDialog(): void;
					public constructor();
					public shouldDismissLoadingDialog(): void;
					public toastError(param0: number): void;
					public toastError(param0: string): void;
					public shouldShowLoadingDialog(): boolean;
					public toastSuccess(param0: number): void;
					public onActionItemClicked(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.User): void;
				}
				export module BannedListFragment {
					export class BannedMembersQueryHandler extends com.sendbird.uikit.interfaces.CustomMemberListQueryHandler<com.sendbird.android.User> {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.BannedListFragment.BannedMembersQueryHandler>;
						public load(param0: com.sendbird.uikit.interfaces.OnListResultHandler<com.sendbird.android.User>): void;
						public load(param0: com.sendbird.uikit.interfaces.OnListResultHandler<any>): void;
						public loadInitial(param0: com.sendbird.uikit.interfaces.OnListResultHandler<com.sendbird.android.User>): void;
						public hasMore(): boolean;
						public loadInitial(param0: com.sendbird.uikit.interfaces.OnListResultHandler<any>): void;
					}
					export class Builder {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.BannedListFragment.Builder>;
						public setHeaderRightButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.BannedListFragment.Builder;
						public setLoadingDialogHandler(param0: com.sendbird.uikit.interfaces.LoadingDialogHandler): com.sendbird.uikit.fragments.BannedListFragment.Builder;
						public setHeaderLeftButtonIconResId(param0: number): com.sendbird.uikit.fragments.BannedListFragment.Builder;
						public setHeaderRightButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.BannedListFragment.Builder;
						public setItemLongClickListener(param0: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.User>): com.sendbird.uikit.fragments.BannedListFragment.Builder;
						public setHeaderLeftButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.BannedListFragment.Builder;
						public setUseHeader(param0: boolean): com.sendbird.uikit.fragments.BannedListFragment.Builder;
						public constructor(param0: string, param1: com.sendbird.uikit.SendBirdUIKit.ThemeMode);
						public constructor(param0: string, param1: number);
						public setEmptyIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.BannedListFragment.Builder;
						public setEmptyIcon(param0: number): com.sendbird.uikit.fragments.BannedListFragment.Builder;
						public setActionItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.User>): com.sendbird.uikit.fragments.BannedListFragment.Builder;
						public setEmptyText(param0: number): com.sendbird.uikit.fragments.BannedListFragment.Builder;
						public setCustomBannedMemberFragment(param0: com.sendbird.uikit.fragments.BannedListFragment): com.sendbird.uikit.fragments.BannedListFragment.Builder;
						public setHeaderRightButtonIconResId(param0: number): com.sendbird.uikit.fragments.BannedListFragment.Builder;
						public setHeaderLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.BannedListFragment.Builder;
						public setUseUserProfile(param0: boolean): com.sendbird.uikit.fragments.BannedListFragment.Builder;
						public setOnProfileClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.User>): com.sendbird.uikit.fragments.BannedListFragment.Builder;
						public build(): com.sendbird.uikit.fragments.BannedListFragment;
						public setHeaderTitle(param0: string): com.sendbird.uikit.fragments.BannedListFragment.Builder;
						public setUseHeaderRightButton(param0: boolean): com.sendbird.uikit.fragments.BannedListFragment.Builder;
						public setUserListAdapter(param0: com.sendbird.uikit.activities.adapter.UserTypeListAdapter): com.sendbird.uikit.fragments.BannedListFragment.Builder;
						public setUseHeaderLeftButton(param0: boolean): com.sendbird.uikit.fragments.BannedListFragment.Builder;
						public constructor(param0: string);
						public setItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.User>): com.sendbird.uikit.fragments.BannedListFragment.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export abstract class BaseFragment extends com.sendbird.uikit.fragments.PermissionFragment implements com.sendbird.uikit.interfaces.DialogProvider {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.BaseFragment>;
					public dismissWaitingDialog(): void;
					public onReady(param0: com.sendbird.android.User, param1: com.sendbird.uikit.model.ReadyStatus): void;
					public toastError(param0: number): void;
					public toastSuccess(param0: number): void;
					public finish(): void;
					public onDestroy(): void;
					public isActive(): boolean;
					public showWaitingDialog(): void;
					public containsExtra(param0: string): boolean;
					public getStringExtra(param0: string): string;
					public connect(): void;
					public toastError(param0: string): void;
					public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export abstract class BaseGroupChannelFragment extends com.sendbird.uikit.fragments.BaseFragment {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.BaseGroupChannelFragment>;
					public channel: com.sendbird.android.GroupChannel;
					public onDrawPage(): void;
					public onConfigure(): void;
					public showWaitingDialog(): void;
					public dismissWaitingDialog(): void;
					public onReady(param0: com.sendbird.android.User, param1: com.sendbird.uikit.model.ReadyStatus): void;
					public toastError(param0: number): void;
					public toastError(param0: string): void;
					public toastSuccess(param0: number): void;
					public onReadyFailure(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export abstract class BaseOpenChannelFragment extends com.sendbird.uikit.fragments.BaseFragment {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.BaseOpenChannelFragment>;
					public channel: com.sendbird.android.OpenChannel;
					public onDrawPage(): void;
					public onConfigure(): void;
					public showWaitingDialog(): void;
					public dismissWaitingDialog(): void;
					public onReady(param0: com.sendbird.android.User, param1: com.sendbird.uikit.model.ReadyStatus): void;
					public toastError(param0: number): void;
					public toastError(param0: string): void;
					public toastSuccess(param0: number): void;
					public onReadyFailure(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export class ChannelFragment extends com.sendbird.uikit.fragments.BaseGroupChannelFragment {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.ChannelFragment>;
					public onDrawPage(): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public dismissWaitingDialog(): void;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public onItemLongClick(param0: globalAndroid.view.View, param1: number, param2: any): void;
					public onDestroy(): void;
					public takeCamera(): void;
					public resendMessage(param0: com.sendbird.android.BaseMessage): void;
					public updateUserMessage(param0: number, param1: com.sendbird.android.UserMessageParams): void;
					public takeFile(): void;
					public onBeforeUpdateUserMessage(param0: com.sendbird.android.UserMessageParams): void;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public onConfigure(): void;
					public constructor();
					public onBeforeSendUserMessage(param0: com.sendbird.android.UserMessageParams): void;
					public sendFileMessage(param0: globalAndroid.net.Uri): void;
					public onItemClick(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.BaseMessage): void;
					public toastError(param0: string): void;
					public deleteMessage(param0: com.sendbird.android.BaseMessage): void;
					public onItemClick(param0: globalAndroid.view.View, param1: number, param2: any): void;
					public takePhoto(): void;
					public sendUserMessage(param0: com.sendbird.android.UserMessageParams): void;
					public toastError(param0: number): void;
					public toastSuccess(param0: number): void;
					public onReadyFailure(): void;
					public showMediaSelectDialog(): void;
					public showWaitingDialog(): void;
					public shouldDismissLoadingDialog(): void;
					public onPause(): void;
					public shouldShowLoadingDialog(): boolean;
					public onItemLongClick(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.BaseMessage): void;
					public scrollToFoundPosition(param0: number, param1: number): number;
					public onBeforeSendFileMessage(param0: com.sendbird.android.FileMessageParams): void;
					public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
				}
				export module ChannelFragment {
					export class Builder {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.ChannelFragment.Builder>;
						public setInputLeftButtonIconResId(param0: number): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setUseUserProfile(param0: boolean): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setEmojiReactionClickListener(param0: com.sendbird.uikit.interfaces.OnEmojiReactionClickListener): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setOnProfileClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.BaseMessage>): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setEmptyIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setMessageListAdapter(param0: com.sendbird.uikit.activities.adapter.MessageListAdapter): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public build(): com.sendbird.uikit.fragments.ChannelFragment;
						public setHeaderRightButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setLoadingDialogHandler(param0: com.sendbird.uikit.interfaces.LoadingDialogHandler): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setStartingPoint(param0: number): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setUseInputLeftButton(param0: boolean): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setUseHeaderRightButton(param0: boolean): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setMessageListParams(param0: com.sendbird.android.MessageListParams): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setUseHeaderLeftButton(param0: boolean): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setEmojiReactionMoreButtonClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.BaseMessage>): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setHeaderLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setUseHeader(param0: boolean): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public constructor(param0: string, param1: com.sendbird.uikit.SendBirdUIKit.ThemeMode);
						public constructor(param0: string, param1: number);
						public setOnEditModeTextChangedListener(param0: com.sendbird.uikit.interfaces.OnInputTextChangedListener): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setUseTypingIndicator(param0: boolean): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setHighlightMessageInfo(param0: com.sendbird.uikit.model.HighlightMessageInfo): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setUseMessageGroupUI(param0: boolean): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.BaseMessage>): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setHeaderTitle(param0: string): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setHeaderRightButtonIconResId(param0: number): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setHeaderRightButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setCustomChannelFragment(param0: com.sendbird.uikit.fragments.ChannelFragment): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setInputLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setInputHint(param0: string): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setInputText(param0: string): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						/** @deprecated */
						public setUseLastSeenAt(param0: boolean): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setHeaderLeftButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setHeaderLeftButtonIconResId(param0: number): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setEmptyIcon(param0: number): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setInputLeftButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setInputRightButtonIconResId(param0: number): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setOnInputTextChangedListener(param0: com.sendbird.uikit.interfaces.OnInputTextChangedListener): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setEmojiReactionLongClickListener(param0: com.sendbird.uikit.interfaces.OnEmojiReactionLongClickListener): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setEmptyText(param0: number): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setInputRightButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public showInputRightButtonAlways(): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public setItemLongClickListener(param0: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.BaseMessage>): com.sendbird.uikit.fragments.ChannelFragment.Builder;
						public constructor(param0: string);
						public setKeyboardDisplayType(param0: com.sendbird.uikit.consts.KeyboardDisplayType): com.sendbird.uikit.fragments.ChannelFragment.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export class ChannelListFragment extends com.sendbird.uikit.fragments.BaseGroupChannelFragment {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.ChannelListFragment>;
					public onDrawPage(): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public dismissWaitingDialog(): void;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public toastError(param0: number): void;
					public toastSuccess(param0: number): void;
					public onSelectedChannelType(param0: com.sendbird.uikit.consts.CreateableChannelType): void;
					public onReadyFailure(): void;
					public setErrorFrame(): void;
					public leaveChannel(param0: com.sendbird.android.GroupChannel): void;
					public onConfigure(): void;
					public showWaitingDialog(): void;
					public constructor();
					public toastError(param0: string): void;
					public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
				}
				export module ChannelListFragment {
					export class Builder {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.ChannelListFragment.Builder>;
						public setUseHeader(param0: boolean): com.sendbird.uikit.fragments.ChannelListFragment.Builder;
						public setUseHeaderLeftButton(param0: boolean): com.sendbird.uikit.fragments.ChannelListFragment.Builder;
						public setEmptyIcon(param0: number): com.sendbird.uikit.fragments.ChannelListFragment.Builder;
						public constructor();
						public setHeaderRightButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.ChannelListFragment.Builder;
						public setEmptyIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.ChannelListFragment.Builder;
						public setEmptyText(param0: number): com.sendbird.uikit.fragments.ChannelListFragment.Builder;
						public setChannelListAdapter(param0: com.sendbird.uikit.activities.adapter.ChannelListAdapter): com.sendbird.uikit.fragments.ChannelListFragment.Builder;
						public build(): com.sendbird.uikit.fragments.ChannelListFragment;
						public setHeaderLeftButtonIconResId(param0: number): com.sendbird.uikit.fragments.ChannelListFragment.Builder;
						public setCustomChannelListFragment(param0: com.sendbird.uikit.fragments.ChannelListFragment): com.sendbird.uikit.fragments.ChannelListFragment.Builder;
						public setHeaderTitle(param0: string): com.sendbird.uikit.fragments.ChannelListFragment.Builder;
						/** @deprecated */
						public setIsIncludeEmpty(param0: boolean): com.sendbird.uikit.fragments.ChannelListFragment.Builder;
						public setHeaderLeftButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.ChannelListFragment.Builder;
						public setHeaderRightButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.ChannelListFragment.Builder;
						public setItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.GroupChannel>): com.sendbird.uikit.fragments.ChannelListFragment.Builder;
						public setHeaderRightButtonIconResId(param0: number): com.sendbird.uikit.fragments.ChannelListFragment.Builder;
						public setItemLongClickListener(param0: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.GroupChannel>): com.sendbird.uikit.fragments.ChannelListFragment.Builder;
						public constructor(param0: number);
						public setUseHeaderRightButton(param0: boolean): com.sendbird.uikit.fragments.ChannelListFragment.Builder;
						public constructor(param0: com.sendbird.uikit.SendBirdUIKit.ThemeMode);
						public setGroupChannelListQuery(param0: com.sendbird.android.GroupChannelListQuery): com.sendbird.uikit.fragments.ChannelListFragment.Builder;
						public setHeaderLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.ChannelListFragment.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export class ChannelSettingsFragment extends com.sendbird.uikit.fragments.BaseFragment implements com.sendbird.uikit.fragments.PermissionFragment.IPermissionHandler, com.sendbird.uikit.interfaces.LoadingDialogHandler {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.ChannelSettingsFragment>;
					public headerLeftButtonListener: globalAndroid.view.View.OnClickListener;
					public menuItemClickListener: com.sendbird.uikit.interfaces.OnMenuItemClickListener<com.sendbird.uikit.widgets.ChannelSettingsView.ChannelSettingMenu,com.sendbird.android.GroupChannel>;
					public onBeforeUpdateGroupChannel(param0: com.sendbird.android.GroupChannelParams): void;
					public onDrawPage(): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public dismissWaitingDialog(): void;
					public onReady(param0: com.sendbird.android.User, param1: com.sendbird.uikit.model.ReadyStatus): void;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public setOnMenuItemClickListener(param0: com.sendbird.uikit.interfaces.OnMenuItemClickListener<com.sendbird.uikit.widgets.ChannelSettingsView.ChannelSettingMenu,com.sendbird.android.GroupChannel>): void;
					public updateGroupChannel(param0: com.sendbird.android.GroupChannelParams): void;
					public setHeaderLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): void;
					public toastError(param0: number): void;
					public getPermissions(param0: number): androidNative.Array<string>;
					public toastSuccess(param0: number): void;
					public onDestroy(): void;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public onConfigure(): void;
					public onPermissionGranted(param0: number): void;
					public showWaitingDialog(): void;
					public constructor();
					public leaveChannel(): void;
					public shouldDismissLoadingDialog(): void;
					public toastError(param0: string): void;
					public shouldShowLoadingDialog(): boolean;
					public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
				}
				export module ChannelSettingsFragment {
					export class Builder {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.ChannelSettingsFragment.Builder>;
						public setUseHeaderRightButton(param0: boolean): com.sendbird.uikit.fragments.ChannelSettingsFragment.Builder;
						public setUseHeader(param0: boolean): com.sendbird.uikit.fragments.ChannelSettingsFragment.Builder;
						public setHeaderTitle(param0: string): com.sendbird.uikit.fragments.ChannelSettingsFragment.Builder;
						public setOnSettingMenuClickListener(param0: com.sendbird.uikit.interfaces.OnMenuItemClickListener<com.sendbird.uikit.widgets.ChannelSettingsView.ChannelSettingMenu,com.sendbird.android.GroupChannel>): com.sendbird.uikit.fragments.ChannelSettingsFragment.Builder;
						public setCustomChannelSettingsFragment(param0: com.sendbird.uikit.fragments.ChannelSettingsFragment): com.sendbird.uikit.fragments.ChannelSettingsFragment.Builder;
						public setHeaderLeftButtonIconResId(param0: number): com.sendbird.uikit.fragments.ChannelSettingsFragment.Builder;
						public setHeaderLeftButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.ChannelSettingsFragment.Builder;
						public setHeaderLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.ChannelSettingsFragment.Builder;
						public constructor(param0: string, param1: com.sendbird.uikit.SendBirdUIKit.ThemeMode);
						public constructor(param0: string, param1: number);
						public build(): com.sendbird.uikit.fragments.ChannelSettingsFragment;
						public setUseHeaderLeftButton(param0: boolean): com.sendbird.uikit.fragments.ChannelSettingsFragment.Builder;
						/** @deprecated */
						public setMemberSettingClickListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.ChannelSettingsFragment.Builder;
						public setLoadingDialogHandler(param0: com.sendbird.uikit.interfaces.LoadingDialogHandler): com.sendbird.uikit.fragments.ChannelSettingsFragment.Builder;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export class CreateChannelFragment extends com.sendbird.uikit.fragments.SelectUserFragment {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.CreateChannelFragment>;
					public createGroupChannel(param0: com.sendbird.android.GroupChannelParams): void;
					public dismissWaitingDialog(): void;
					public onUserSelectComplete(param0: java.util.List<string>): void;
					public onBeforeCreateGroupChannel(param0: com.sendbird.android.GroupChannelParams): void;
					public onNewChannelCreated(param0: com.sendbird.android.GroupChannel): void;
					public toastError(param0: number): void;
					public toastSuccess(param0: number): void;
					public onConfigure(): void;
					public setCreateButtonEnabled(param0: boolean): void;
					public showWaitingDialog(): void;
					public constructor();
					public setCreateButtonText(param0: string): void;
					public toastError(param0: string): void;
				}
				export module CreateChannelFragment {
					export class Builder {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.CreateChannelFragment.Builder>;
						public setIsDistinct(param0: boolean): com.sendbird.uikit.fragments.CreateChannelFragment.Builder;
						public constructor();
						public setUseHeader(param0: boolean): com.sendbird.uikit.fragments.CreateChannelFragment.Builder;
						public setEmptyText(param0: number): com.sendbird.uikit.fragments.CreateChannelFragment.Builder;
						public setCustomUserListQueryHandler(param0: com.sendbird.uikit.interfaces.CustomUserListQueryHandler): com.sendbird.uikit.fragments.CreateChannelFragment.Builder;
						public setUseHeaderLeftButton(param0: boolean): com.sendbird.uikit.fragments.CreateChannelFragment.Builder;
						public setHeaderTitle(param0: string): com.sendbird.uikit.fragments.CreateChannelFragment.Builder;
						public constructor(param0: number, param1: com.sendbird.uikit.consts.CreateableChannelType);
						public setCreateButtonText(param0: string): com.sendbird.uikit.fragments.CreateChannelFragment.Builder;
						public setHeaderLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.CreateChannelFragment.Builder;
						public setUserListAdapter(param0: com.sendbird.uikit.activities.adapter.UserListAdapter): com.sendbird.uikit.fragments.CreateChannelFragment.Builder;
						public setHeaderLeftButtonIconResId(param0: number): com.sendbird.uikit.fragments.CreateChannelFragment.Builder;
						public constructor(param0: number);
						public setEmptyIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.CreateChannelFragment.Builder;
						public constructor(param0: com.sendbird.uikit.SendBirdUIKit.ThemeMode);
						public build(): com.sendbird.uikit.fragments.CreateChannelFragment;
						public setCustomCreateChannelFragment(param0: com.sendbird.uikit.fragments.CreateChannelFragment): com.sendbird.uikit.fragments.CreateChannelFragment.Builder;
						public setHeaderLeftButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.CreateChannelFragment.Builder;
						public constructor(param0: com.sendbird.uikit.consts.CreateableChannelType);
						public setUseHeaderRightButton(param0: boolean): com.sendbird.uikit.fragments.CreateChannelFragment.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export class DialogListAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.sendbird.uikit.fragments.DialogListAdapter.ListViewHolder> {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.DialogListAdapter>;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.sendbird.uikit.fragments.DialogListAdapter.ListViewHolder;
					public onBindViewHolder(param0: com.sendbird.uikit.fragments.DialogListAdapter.ListViewHolder, param1: number): void;
					public getItemCount(): number;
				}
				export module DialogListAdapter {
					export class ListViewHolder {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.DialogListAdapter.ListViewHolder>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export class DialogView {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.DialogView>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export class InviteChannelFragment extends com.sendbird.uikit.fragments.SelectUserFragment {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.InviteChannelFragment>;
					public inviteUser(param0: java.util.List<string>): void;
					public setInviteButtonEnabled(param0: boolean): void;
					public dismissWaitingDialog(): void;
					public onUserSelectComplete(param0: java.util.List<string>): void;
					public getDisabledUserIds(): java.util.List<string>;
					public toastError(param0: number): void;
					public toastSuccess(param0: number): void;
					public setInviteButtonText(param0: string): void;
					public showWaitingDialog(): void;
					public constructor();
					public onBeforeInviteUsers(param0: java.util.List<string>): void;
					public toastError(param0: string): void;
					public onNewUserInvited(param0: com.sendbird.android.GroupChannel): void;
				}
				export module InviteChannelFragment {
					export class Builder {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.InviteChannelFragment.Builder>;
						public setHeaderLeftButtonIconResId(param0: number): com.sendbird.uikit.fragments.InviteChannelFragment.Builder;
						public setEmptyText(param0: number): com.sendbird.uikit.fragments.InviteChannelFragment.Builder;
						public setCustomInviteChannelFragment(param0: com.sendbird.uikit.fragments.InviteChannelFragment): com.sendbird.uikit.fragments.InviteChannelFragment.Builder;
						public setEmptyIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.InviteChannelFragment.Builder;
						public setUserListAdapter(param0: com.sendbird.uikit.activities.adapter.UserListAdapter): com.sendbird.uikit.fragments.InviteChannelFragment.Builder;
						public setHeaderLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.InviteChannelFragment.Builder;
						public setUseHeaderLeftButton(param0: boolean): com.sendbird.uikit.fragments.InviteChannelFragment.Builder;
						public setUseHeaderRightButton(param0: boolean): com.sendbird.uikit.fragments.InviteChannelFragment.Builder;
						public setHeaderTitle(param0: string): com.sendbird.uikit.fragments.InviteChannelFragment.Builder;
						public constructor(param0: string, param1: com.sendbird.uikit.SendBirdUIKit.ThemeMode);
						public constructor(param0: string, param1: number);
						public setInviteButtonText(param0: string): com.sendbird.uikit.fragments.InviteChannelFragment.Builder;
						public setCustomUserListQueryHandler(param0: com.sendbird.uikit.interfaces.CustomUserListQueryHandler): com.sendbird.uikit.fragments.InviteChannelFragment.Builder;
						public setHeaderLeftButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.InviteChannelFragment.Builder;
						public build(): com.sendbird.uikit.fragments.InviteChannelFragment;
						public constructor(param0: string);
						public setUseHeader(param0: boolean): com.sendbird.uikit.fragments.InviteChannelFragment.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export class ItemAnimator {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.ItemAnimator>;
					public constructor();
					public animateChange(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: number, param3: number, param4: number, param5: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export class MemberListFragment extends com.sendbird.uikit.fragments.MemberTypeListFragment {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.MemberListFragment>;
					public onActionItemClicked(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.Member): void;
					public onConfigure(): void;
					public showWaitingDialog(): void;
					public dismissWaitingDialog(): void;
					public constructor();
					public shouldDismissLoadingDialog(): void;
					public toastError(param0: number): void;
					public toastError(param0: string): void;
					public shouldShowLoadingDialog(): boolean;
					public toastSuccess(param0: number): void;
				}
				export module MemberListFragment {
					export class Builder {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.MemberListFragment.Builder>;
						public setItemLongClickListener(param0: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.Member>): com.sendbird.uikit.fragments.MemberListFragment.Builder;
						public setHeaderTitle(param0: string): com.sendbird.uikit.fragments.MemberListFragment.Builder;
						public setMemberListAdapter(param0: com.sendbird.uikit.activities.adapter.MemberListAdapter): com.sendbird.uikit.fragments.MemberListFragment.Builder;
						public setHeaderRightButtonIconResId(param0: number): com.sendbird.uikit.fragments.MemberListFragment.Builder;
						public setEmptyText(param0: number): com.sendbird.uikit.fragments.MemberListFragment.Builder;
						public setActionItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.Member>): com.sendbird.uikit.fragments.MemberListFragment.Builder;
						public constructor(param0: string, param1: com.sendbird.uikit.SendBirdUIKit.ThemeMode);
						public constructor(param0: string, param1: number);
						public setHeaderLeftButtonIconResId(param0: number): com.sendbird.uikit.fragments.MemberListFragment.Builder;
						public setEmptyIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.MemberListFragment.Builder;
						public setHeaderLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.MemberListFragment.Builder;
						public setUseUserProfile(param0: boolean): com.sendbird.uikit.fragments.MemberListFragment.Builder;
						public setItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.Member>): com.sendbird.uikit.fragments.MemberListFragment.Builder;
						public setHeaderLeftButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.MemberListFragment.Builder;
						public setUseHeaderLeftButton(param0: boolean): com.sendbird.uikit.fragments.MemberListFragment.Builder;
						public setUseHeader(param0: boolean): com.sendbird.uikit.fragments.MemberListFragment.Builder;
						public setLoadingDialogHandler(param0: com.sendbird.uikit.interfaces.LoadingDialogHandler): com.sendbird.uikit.fragments.MemberListFragment.Builder;
						public setEmptyIcon(param0: number): com.sendbird.uikit.fragments.MemberListFragment.Builder;
						public setOnProfileClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.Member>): com.sendbird.uikit.fragments.MemberListFragment.Builder;
						public setCustomMemberListFragment(param0: com.sendbird.uikit.fragments.MemberListFragment): com.sendbird.uikit.fragments.MemberListFragment.Builder;
						public setHeaderRightButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.MemberListFragment.Builder;
						public setUseHeaderRightButton(param0: boolean): com.sendbird.uikit.fragments.MemberListFragment.Builder;
						public build(): com.sendbird.uikit.fragments.MemberListFragment;
						public setHeaderRightButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.MemberListFragment.Builder;
						public constructor(param0: string);
					}
					export class MemberListQuery extends com.sendbird.uikit.interfaces.CustomMemberListQueryHandler<com.sendbird.android.Member> {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.MemberListFragment.MemberListQuery>;
						public load(param0: com.sendbird.uikit.interfaces.OnListResultHandler<com.sendbird.android.Member>): void;
						public load(param0: com.sendbird.uikit.interfaces.OnListResultHandler<any>): void;
						public loadInitial(param0: com.sendbird.uikit.interfaces.OnListResultHandler<com.sendbird.android.Member>): void;
						public hasMore(): boolean;
						public loadInitial(param0: com.sendbird.uikit.interfaces.OnListResultHandler<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export abstract class MemberTypeListFragment extends com.sendbird.uikit.fragments.BaseGroupChannelFragment implements com.sendbird.uikit.interfaces.LoadingDialogHandler {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.MemberTypeListFragment>;
					public headerLeftButtonListener: globalAndroid.view.View.OnClickListener;
					public headerRightButtonListener: globalAndroid.view.View.OnClickListener;
					public adapter: com.sendbird.uikit.activities.adapter.MemberListAdapter;
					public itemClickListener: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.Member>;
					public itemLongClickListener: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.Member>;
					public actionItemClickListener: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.Member>;
					public customQueryHandler: com.sendbird.uikit.interfaces.CustomMemberListQueryHandler<com.sendbird.android.Member>;
					public profileClickListener: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.Member>;
					public loadingDialogHandler: com.sendbird.uikit.interfaces.LoadingDialogHandler;
					public onDrawPage(): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public dismissWaitingDialog(): void;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public setHeaderRightButtonListener(param0: globalAndroid.view.View.OnClickListener): void;
					public setItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.Member>): void;
					public onActionItemClicked(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.Member): void;
					public onConfigure(): void;
					public onItemClicked(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.Member): void;
					public constructor();
					public toastError(param0: string): void;
					public onItemLongClicked(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.Member): void;
					public onOperatorDismissed(): void;
					public setHeaderLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): void;
					public toastError(param0: number): void;
					public onProfileClicked(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.Member): void;
					public toastSuccess(param0: number): void;
					public setMemberListAdapter(param0: com.sendbird.uikit.activities.adapter.MemberListAdapter): void;
					public onReadyFailure(): void;
					public onChannelDeleted(): void;
					public setActionItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.Member>): void;
					public setErrorFrame(): void;
					public showWaitingDialog(): void;
					public shouldDismissLoadingDialog(): void;
					public shouldShowLoadingDialog(): boolean;
					public setItemLongClickListener(param0: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.Member>): void;
					public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export class MessageAnchorDialog {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.MessageAnchorDialog>;
					public show(): void;
					public isShowing(): boolean;
					public dismiss(): void;
				}
				export module MessageAnchorDialog {
					export class Builder {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.MessageAnchorDialog.Builder>;
						public constructor(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: androidNative.Array<com.sendbird.uikit.model.DialogListItem>);
						public setOnDismissListener(param0: globalAndroid.widget.PopupWindow.OnDismissListener): com.sendbird.uikit.fragments.MessageAnchorDialog.Builder;
						public setOnItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<java.lang.Integer>): com.sendbird.uikit.fragments.MessageAnchorDialog.Builder;
						public build(): com.sendbird.uikit.fragments.MessageAnchorDialog;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export class MessageSearchFragment extends com.sendbird.uikit.fragments.BaseGroupChannelFragment implements com.sendbird.uikit.interfaces.LoadingDialogHandler {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.MessageSearchFragment>;
					public onDrawPage(): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public dismissWaitingDialog(): void;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public toastError(param0: number): void;
					public toastSuccess(param0: number): void;
					public onReadyFailure(): void;
					public search(param0: string): void;
					public setErrorFrame(): void;
					public onConfigure(): void;
					public showWaitingDialog(): void;
					public constructor();
					public onItemClicked(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.BaseMessage): void;
					public shouldDismissLoadingDialog(): void;
					public toastError(param0: string): void;
					public shouldShowLoadingDialog(): boolean;
					public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
					public onSearchResultReceived(param0: java.util.List<com.sendbird.android.BaseMessage>): void;
				}
				export module MessageSearchFragment {
					export class Builder {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.MessageSearchFragment.Builder>;
						public build(): com.sendbird.uikit.fragments.MessageSearchFragment;
						public setEmptyIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.MessageSearchFragment.Builder;
						public setMessageSearchAdapter(param0: com.sendbird.uikit.activities.adapter.MessageSearchAdapter): com.sendbird.uikit.fragments.MessageSearchFragment.Builder;
						public setOnSearchEventListener(param0: com.sendbird.uikit.interfaces.OnSearchEventListener): com.sendbird.uikit.fragments.MessageSearchFragment.Builder;
						public setUseSearchBar(param0: boolean): com.sendbird.uikit.fragments.MessageSearchFragment.Builder;
						public setSearchBarButtonText(param0: string): com.sendbird.uikit.fragments.MessageSearchFragment.Builder;
						public setEmptyIcon(param0: number): com.sendbird.uikit.fragments.MessageSearchFragment.Builder;
						public constructor(param0: string, param1: com.sendbird.uikit.SendBirdUIKit.ThemeMode);
						public constructor(param0: string, param1: number);
						public setCustomMessageSearchFragment(param0: com.sendbird.uikit.fragments.MessageSearchFragment): com.sendbird.uikit.fragments.MessageSearchFragment.Builder;
						public setMessageSearchQuery(param0: com.sendbird.android.MessageSearchQuery): com.sendbird.uikit.fragments.MessageSearchFragment.Builder;
						public setEmptyText(param0: number): com.sendbird.uikit.fragments.MessageSearchFragment.Builder;
						public setLoadingDialogHandler(param0: com.sendbird.uikit.interfaces.LoadingDialogHandler): com.sendbird.uikit.fragments.MessageSearchFragment.Builder;
						public setItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.BaseMessage>): com.sendbird.uikit.fragments.MessageSearchFragment.Builder;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export class ModerationFragment extends com.sendbird.uikit.fragments.BaseGroupChannelFragment implements com.sendbird.uikit.interfaces.LoadingDialogHandler {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.ModerationFragment>;
					public headerLeftButtonListener: globalAndroid.view.View.OnClickListener;
					public menuItemClickListener: com.sendbird.uikit.interfaces.OnMenuItemClickListener<com.sendbird.uikit.fragments.ModerationFragment.ModerationMenu,com.sendbird.android.BaseChannel>;
					public onDrawPage(): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public dismissWaitingDialog(): void;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public setHeaderLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): void;
					public toastError(param0: number): void;
					public toastSuccess(param0: number): void;
					public onDestroy(): void;
					public onReadyFailure(): void;
					public onConfigure(): void;
					public showWaitingDialog(): void;
					public constructor();
					public shouldDismissLoadingDialog(): void;
					public toastError(param0: string): void;
					public shouldShowLoadingDialog(): boolean;
					public setOnMenuItemClickListener(param0: com.sendbird.uikit.interfaces.OnMenuItemClickListener<com.sendbird.uikit.fragments.ModerationFragment.ModerationMenu,com.sendbird.android.BaseChannel>): void;
					public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
				}
				export module ModerationFragment {
					export class Builder {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.ModerationFragment.Builder>;
						public setHeaderLeftButtonIconResId(param0: number): com.sendbird.uikit.fragments.ModerationFragment.Builder;
						public setLoadingDialogHandler(param0: com.sendbird.uikit.interfaces.LoadingDialogHandler): com.sendbird.uikit.fragments.ModerationFragment.Builder;
						public build(): com.sendbird.uikit.fragments.ModerationFragment;
						public setUseHeaderLeftButton(param0: boolean): com.sendbird.uikit.fragments.ModerationFragment.Builder;
						public setUseHeader(param0: boolean): com.sendbird.uikit.fragments.ModerationFragment.Builder;
						public setHeaderLeftButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.ModerationFragment.Builder;
						public setOnMenuItemClickListener(param0: com.sendbird.uikit.interfaces.OnMenuItemClickListener<com.sendbird.uikit.fragments.ModerationFragment.ModerationMenu,com.sendbird.android.BaseChannel>): com.sendbird.uikit.fragments.ModerationFragment.Builder;
						public setHeaderTitle(param0: string): com.sendbird.uikit.fragments.ModerationFragment.Builder;
						public constructor(param0: string, param1: com.sendbird.uikit.SendBirdUIKit.ThemeMode);
						public constructor(param0: string, param1: number);
						public setCustomModerationFragment(param0: com.sendbird.uikit.fragments.ModerationFragment): com.sendbird.uikit.fragments.ModerationFragment.Builder;
						public setHeaderLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.ModerationFragment.Builder;
						public constructor(param0: string);
					}
					export class ModerationMenu {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.ModerationFragment.ModerationMenu>;
						public static OPERATORS: com.sendbird.uikit.fragments.ModerationFragment.ModerationMenu;
						public static MUTED_MEMBERS: com.sendbird.uikit.fragments.ModerationFragment.ModerationMenu;
						public static BANNED_MEMBERS: com.sendbird.uikit.fragments.ModerationFragment.ModerationMenu;
						public static FREEZE_CHANNEL: com.sendbird.uikit.fragments.ModerationFragment.ModerationMenu;
						public static values(): androidNative.Array<com.sendbird.uikit.fragments.ModerationFragment.ModerationMenu>;
						public static valueOf(param0: string): com.sendbird.uikit.fragments.ModerationFragment.ModerationMenu;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export class MutedMemberListFragment extends com.sendbird.uikit.fragments.MemberTypeListFragment implements com.sendbird.uikit.interfaces.LoadingDialogHandler {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.MutedMemberListFragment>;
					public onActionItemClicked(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.Member): void;
					public onOperatorDismissed(): void;
					public onConfigure(): void;
					public showWaitingDialog(): void;
					public dismissWaitingDialog(): void;
					public constructor();
					public shouldDismissLoadingDialog(): void;
					public toastError(param0: number): void;
					public toastError(param0: string): void;
					public shouldShowLoadingDialog(): boolean;
					public toastSuccess(param0: number): void;
				}
				export module MutedMemberListFragment {
					export class Builder {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.MutedMemberListFragment.Builder>;
						public setActionItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.Member>): com.sendbird.uikit.fragments.MutedMemberListFragment.Builder;
						public setMemberListAdpater(param0: com.sendbird.uikit.activities.adapter.MemberListAdapter): com.sendbird.uikit.fragments.MutedMemberListFragment.Builder;
						public setUseUserProfile(param0: boolean): com.sendbird.uikit.fragments.MutedMemberListFragment.Builder;
						public setEmptyText(param0: number): com.sendbird.uikit.fragments.MutedMemberListFragment.Builder;
						public build(): com.sendbird.uikit.fragments.MutedMemberListFragment;
						public setHeaderLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.MutedMemberListFragment.Builder;
						public constructor(param0: string, param1: com.sendbird.uikit.SendBirdUIKit.ThemeMode);
						public constructor(param0: string, param1: number);
						public setHeaderRightButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.MutedMemberListFragment.Builder;
						public setEmptyIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.MutedMemberListFragment.Builder;
						public setUseHeaderLeftButton(param0: boolean): com.sendbird.uikit.fragments.MutedMemberListFragment.Builder;
						public setEmptyIcon(param0: number): com.sendbird.uikit.fragments.MutedMemberListFragment.Builder;
						public setUseHeaderRightButton(param0: boolean): com.sendbird.uikit.fragments.MutedMemberListFragment.Builder;
						public setHeaderRightButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.MutedMemberListFragment.Builder;
						public setOnProfileClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.Member>): com.sendbird.uikit.fragments.MutedMemberListFragment.Builder;
						public setUseHeader(param0: boolean): com.sendbird.uikit.fragments.MutedMemberListFragment.Builder;
						public setLoadingDialogHandler(param0: com.sendbird.uikit.interfaces.LoadingDialogHandler): com.sendbird.uikit.fragments.MutedMemberListFragment.Builder;
						public setHeaderTitle(param0: string): com.sendbird.uikit.fragments.MutedMemberListFragment.Builder;
						public setHeaderLeftButtonIconResId(param0: number): com.sendbird.uikit.fragments.MutedMemberListFragment.Builder;
						public setHeaderLeftButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.MutedMemberListFragment.Builder;
						public setItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.Member>): com.sendbird.uikit.fragments.MutedMemberListFragment.Builder;
						public setItemLongClickListener(param0: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.Member>): com.sendbird.uikit.fragments.MutedMemberListFragment.Builder;
						public setCustomMutedMemberFragment(param0: com.sendbird.uikit.fragments.MutedMemberListFragment): com.sendbird.uikit.fragments.MutedMemberListFragment.Builder;
						public setHeaderRightButtonIconResId(param0: number): com.sendbird.uikit.fragments.MutedMemberListFragment.Builder;
						public constructor(param0: string);
					}
					export class MutedMembersQueryHandler extends com.sendbird.uikit.interfaces.CustomMemberListQueryHandler<com.sendbird.android.Member> {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.MutedMemberListFragment.MutedMembersQueryHandler>;
						public load(param0: com.sendbird.uikit.interfaces.OnListResultHandler<com.sendbird.android.Member>): void;
						public load(param0: com.sendbird.uikit.interfaces.OnListResultHandler<any>): void;
						public loadInitial(param0: com.sendbird.uikit.interfaces.OnListResultHandler<com.sendbird.android.Member>): void;
						public hasMore(): boolean;
						public loadInitial(param0: com.sendbird.uikit.interfaces.OnListResultHandler<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export class OpenChannelFragment extends com.sendbird.uikit.fragments.BaseOpenChannelFragment {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.OpenChannelFragment>;
					public onDrawPage(): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public dismissWaitingDialog(): void;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public onItemLongClick(param0: globalAndroid.view.View, param1: number, param2: any): void;
					public onDestroy(): void;
					public takeCamera(): void;
					public resendMessage(param0: com.sendbird.android.BaseMessage): void;
					public updateUserMessage(param0: number, param1: com.sendbird.android.UserMessageParams): void;
					public takeFile(): void;
					public onBeforeUpdateUserMessage(param0: com.sendbird.android.UserMessageParams): void;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public onConfigure(): void;
					public constructor();
					public onBeforeSendUserMessage(param0: com.sendbird.android.UserMessageParams): void;
					public sendFileMessage(param0: globalAndroid.net.Uri): void;
					public onItemClick(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.BaseMessage): void;
					public toastError(param0: string): void;
					public deleteMessage(param0: com.sendbird.android.BaseMessage): void;
					public onItemClick(param0: globalAndroid.view.View, param1: number, param2: any): void;
					public takePhoto(): void;
					public sendUserMessage(param0: com.sendbird.android.UserMessageParams): void;
					public toastError(param0: number): void;
					public toastSuccess(param0: number): void;
					public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
					public onReadyFailure(): void;
					public showMediaSelectDialog(): void;
					public showWaitingDialog(): void;
					public shouldDismissLoadingDialog(): void;
					public shouldShowLoadingDialog(): boolean;
					public onItemLongClick(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.BaseMessage): void;
					public onBeforeSendFileMessage(param0: com.sendbird.android.FileMessageParams): void;
					public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
				}
				export module OpenChannelFragment {
					export class Builder {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.OpenChannelFragment.Builder>;
						public setCustomOpenChannelFragment(param0: com.sendbird.uikit.fragments.OpenChannelFragment): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setUseHeaderLeftButton(param0: boolean): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setItemLongClickListener(param0: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.BaseMessage>): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setInputRightButtonIconResId(param0: number): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setHeaderRightButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setInputRightButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setUseHeader(param0: boolean): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setInputLeftButtonIconResId(param0: number): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setInputLeftButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setUseUserProfile(param0: boolean): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setInputText(param0: string): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setMessageListParams(param0: com.sendbird.android.MessageListParams): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public constructor(param0: string, param1: com.sendbird.uikit.SendBirdUIKit.ThemeMode);
						public setUseHeaderRightButton(param0: boolean): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public showInputRightButtonAlways(): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public useOverlayMode(): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public constructor(param0: string, param1: number);
						public setUseInputLeftButton(param0: boolean): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setKeyboardDisplayType(param0: com.sendbird.uikit.consts.KeyboardDisplayType): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setLoadingDialogHandler(param0: com.sendbird.uikit.interfaces.LoadingDialogHandler): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setHeaderLeftButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setHeaderLeftButtonIconResId(param0: number): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setUseMessageGroupUI(param0: boolean): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setEmptyIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setHeaderDescription(param0: string): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setInputLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setOnEditModeTextChangedListener(param0: com.sendbird.uikit.interfaces.OnInputTextChangedListener): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setEmptyText(param0: number): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setOpenChannelMessageListAdapter(param0: com.sendbird.uikit.activities.adapter.OpenChannelMessageListAdapter): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setOnProfileClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.BaseMessage>): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setEmptyIcon(param0: number): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setOnInputTextChangedListener(param0: com.sendbird.uikit.interfaces.OnInputTextChangedListener): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setHeaderLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setInputHint(param0: string): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setHeaderRightButtonIconResId(param0: number): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.BaseMessage>): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setHeaderRightButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public setHeaderTitle(param0: string): com.sendbird.uikit.fragments.OpenChannelFragment.Builder;
						public build(): com.sendbird.uikit.fragments.OpenChannelFragment;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export class OpenChannelSettingsFragment extends com.sendbird.uikit.fragments.BaseOpenChannelFragment implements com.sendbird.uikit.fragments.PermissionFragment.IPermissionHandler, com.sendbird.uikit.interfaces.LoadingDialogHandler {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.OpenChannelSettingsFragment>;
					public headerLeftButtonListener: globalAndroid.view.View.OnClickListener;
					public menuItemClickListener: com.sendbird.uikit.interfaces.OnMenuItemClickListener<com.sendbird.uikit.widgets.OpenChannelSettingsView.OpenChannelSettingMenu,com.sendbird.android.OpenChannel>;
					public deleteChannel(): void;
					public onDrawPage(): void;
					public updateOpenChannel(param0: com.sendbird.android.OpenChannelParams): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public dismissWaitingDialog(): void;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public setHeaderLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): void;
					public toastError(param0: number): void;
					public getPermissions(param0: number): androidNative.Array<string>;
					public toastSuccess(param0: number): void;
					public onDestroy(): void;
					public onBeforeUpdateOpenChannel(param0: com.sendbird.android.OpenChannelParams): void;
					public onReadyFailure(): void;
					public setOnMenuItemClickListener(param0: com.sendbird.uikit.interfaces.OnMenuItemClickListener<com.sendbird.uikit.widgets.OpenChannelSettingsView.OpenChannelSettingMenu,com.sendbird.android.OpenChannel>): void;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public onConfigure(): void;
					public onPermissionGranted(param0: number): void;
					public showWaitingDialog(): void;
					public constructor();
					public shouldDismissLoadingDialog(): void;
					public toastError(param0: string): void;
					public shouldShowLoadingDialog(): boolean;
					public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
				}
				export module OpenChannelSettingsFragment {
					export class Builder {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.OpenChannelSettingsFragment.Builder>;
						public setUseHeader(param0: boolean): com.sendbird.uikit.fragments.OpenChannelSettingsFragment.Builder;
						public setUseHeaderRightButton(param0: boolean): com.sendbird.uikit.fragments.OpenChannelSettingsFragment.Builder;
						public setOnSettingMenuClickListener(param0: com.sendbird.uikit.interfaces.OnMenuItemClickListener<com.sendbird.uikit.widgets.OpenChannelSettingsView.OpenChannelSettingMenu,com.sendbird.android.OpenChannel>): com.sendbird.uikit.fragments.OpenChannelSettingsFragment.Builder;
						public setHeaderLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.OpenChannelSettingsFragment.Builder;
						public setHeaderLeftButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.OpenChannelSettingsFragment.Builder;
						public setHeaderTitle(param0: string): com.sendbird.uikit.fragments.OpenChannelSettingsFragment.Builder;
						public setUseHeaderLeftButton(param0: boolean): com.sendbird.uikit.fragments.OpenChannelSettingsFragment.Builder;
						public setHeaderLeftButtonIconResId(param0: number): com.sendbird.uikit.fragments.OpenChannelSettingsFragment.Builder;
						public constructor(param0: string, param1: com.sendbird.uikit.SendBirdUIKit.ThemeMode);
						public setLoadingDialogHandler(param0: com.sendbird.uikit.interfaces.LoadingDialogHandler): com.sendbird.uikit.fragments.OpenChannelSettingsFragment.Builder;
						public constructor(param0: string, param1: number);
						public setCustomOpenChannelSettingsFragment(param0: com.sendbird.uikit.fragments.OpenChannelSettingsFragment): com.sendbird.uikit.fragments.OpenChannelSettingsFragment.Builder;
						public build(): com.sendbird.uikit.fragments.OpenChannelSettingsFragment;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export class OperatorListFragment extends com.sendbird.uikit.fragments.UserTypeListFragment implements com.sendbird.uikit.interfaces.LoadingDialogHandler {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.OperatorListFragment>;
					public onOperatorDismissed(): void;
					public onConfigure(): void;
					public showWaitingDialog(): void;
					public dismissWaitingDialog(): void;
					public constructor();
					public shouldDismissLoadingDialog(): void;
					public toastError(param0: number): void;
					public toastError(param0: string): void;
					public shouldShowLoadingDialog(): boolean;
					public toastSuccess(param0: number): void;
					public onActionItemClicked(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.User): void;
				}
				export module OperatorListFragment {
					export class Builder {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.OperatorListFragment.Builder>;
						public setHeaderLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.OperatorListFragment.Builder;
						public setUseHeader(param0: boolean): com.sendbird.uikit.fragments.OperatorListFragment.Builder;
						public setOnProfileClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.User>): com.sendbird.uikit.fragments.OperatorListFragment.Builder;
						public setActionItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.User>): com.sendbird.uikit.fragments.OperatorListFragment.Builder;
						public setUseHeaderLeftButton(param0: boolean): com.sendbird.uikit.fragments.OperatorListFragment.Builder;
						public setHeaderLeftButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.OperatorListFragment.Builder;
						public setCustomOperatorListFragment(param0: com.sendbird.uikit.fragments.OperatorListFragment): com.sendbird.uikit.fragments.OperatorListFragment.Builder;
						public constructor(param0: string, param1: com.sendbird.uikit.SendBirdUIKit.ThemeMode);
						public constructor(param0: string, param1: number);
						public setEmptyIcon(param0: number): com.sendbird.uikit.fragments.OperatorListFragment.Builder;
						public setEmptyIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.OperatorListFragment.Builder;
						public build(): com.sendbird.uikit.fragments.OperatorListFragment;
						public setEmptyText(param0: number): com.sendbird.uikit.fragments.OperatorListFragment.Builder;
						public setHeaderTitle(param0: string): com.sendbird.uikit.fragments.OperatorListFragment.Builder;
						public setHeaderRightButtonIconResId(param0: number): com.sendbird.uikit.fragments.OperatorListFragment.Builder;
						public setHeaderRightButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.OperatorListFragment.Builder;
						public setHeaderLeftButtonIconResId(param0: number): com.sendbird.uikit.fragments.OperatorListFragment.Builder;
						public setItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.User>): com.sendbird.uikit.fragments.OperatorListFragment.Builder;
						public setUseHeaderRightButton(param0: boolean): com.sendbird.uikit.fragments.OperatorListFragment.Builder;
						public setLoadingDialogHandler(param0: com.sendbird.uikit.interfaces.LoadingDialogHandler): com.sendbird.uikit.fragments.OperatorListFragment.Builder;
						public setHeaderRightButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.OperatorListFragment.Builder;
						public setItemLongClickListener(param0: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.User>): com.sendbird.uikit.fragments.OperatorListFragment.Builder;
						public setUserListAdapter(param0: com.sendbird.uikit.activities.adapter.UserTypeListAdapter): com.sendbird.uikit.fragments.OperatorListFragment.Builder;
						public setUseUserProfile(param0: boolean): com.sendbird.uikit.fragments.OperatorListFragment.Builder;
						public constructor(param0: string);
					}
					export class OperatorQueryHandler extends com.sendbird.uikit.interfaces.CustomMemberListQueryHandler<com.sendbird.android.User> {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.OperatorListFragment.OperatorQueryHandler>;
						public load(param0: com.sendbird.uikit.interfaces.OnListResultHandler<com.sendbird.android.User>): void;
						public load(param0: com.sendbird.uikit.interfaces.OnListResultHandler<any>): void;
						public loadInitial(param0: com.sendbird.uikit.interfaces.OnListResultHandler<com.sendbird.android.User>): void;
						public hasMore(): boolean;
						public loadInitial(param0: com.sendbird.uikit.interfaces.OnListResultHandler<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export class ParticipantsListFragment extends com.sendbird.uikit.fragments.BaseOpenChannelFragment {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.ParticipantsListFragment>;
					public headerLeftButtonListener: globalAndroid.view.View.OnClickListener;
					public adapter: com.sendbird.uikit.activities.adapter.UserTypeListAdapter;
					public itemClickListener: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.User>;
					public itemLongClickListener: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.User>;
					public profileClickListener: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.User>;
					public onItemLongClicked(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.User): void;
					public onDrawPage(): void;
					public setUserListAdapter(param0: com.sendbird.uikit.activities.adapter.UserTypeListAdapter): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public setItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.User>): void;
					public dismissWaitingDialog(): void;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public setHeaderLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): void;
					public toastError(param0: number): void;
					public toastSuccess(param0: number): void;
					public onItemClicked(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.User): void;
					public setItemLongClickListener(param0: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.User>): void;
					public onReadyFailure(): void;
					public onProfileClicked(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.User): void;
					public setErrorFrame(): void;
					public onConfigure(): void;
					public showWaitingDialog(): void;
					public constructor();
					public toastError(param0: string): void;
					public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
				}
				export module ParticipantsListFragment {
					export class Builder {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.ParticipantsListFragment.Builder>;
						public setItemLongClickListener(param0: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.User>): com.sendbird.uikit.fragments.ParticipantsListFragment.Builder;
						public setUseHeader(param0: boolean): com.sendbird.uikit.fragments.ParticipantsListFragment.Builder;
						public setHeaderLeftButtonIconResId(param0: number): com.sendbird.uikit.fragments.ParticipantsListFragment.Builder;
						public setUseHeaderLeftButton(param0: boolean): com.sendbird.uikit.fragments.ParticipantsListFragment.Builder;
						public setEmptyIcon(param0: number): com.sendbird.uikit.fragments.ParticipantsListFragment.Builder;
						public build(): com.sendbird.uikit.fragments.ParticipantsListFragment;
						public setHeaderLeftButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.ParticipantsListFragment.Builder;
						public setHeaderLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.ParticipantsListFragment.Builder;
						public setEmptyText(param0: number): com.sendbird.uikit.fragments.ParticipantsListFragment.Builder;
						public setOnProfileClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.User>): com.sendbird.uikit.fragments.ParticipantsListFragment.Builder;
						public constructor(param0: string, param1: com.sendbird.uikit.SendBirdUIKit.ThemeMode);
						public setHeaderTitle(param0: string): com.sendbird.uikit.fragments.ParticipantsListFragment.Builder;
						public setEmptyIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.ParticipantsListFragment.Builder;
						public constructor(param0: string, param1: number);
						public setParticipantsListAdapter(param0: com.sendbird.uikit.activities.adapter.UserTypeListAdapter): com.sendbird.uikit.fragments.ParticipantsListFragment.Builder;
						public setCustomParticipantsListFragment(param0: com.sendbird.uikit.fragments.ParticipantsListFragment): com.sendbird.uikit.fragments.ParticipantsListFragment.Builder;
						public setItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.User>): com.sendbird.uikit.fragments.ParticipantsListFragment.Builder;
						public setUseUserProfile(param0: boolean): com.sendbird.uikit.fragments.ParticipantsListFragment.Builder;
						public constructor(param0: string);
					}
					export class ParticipantsListQuery extends com.sendbird.uikit.interfaces.CustomMemberListQueryHandler<com.sendbird.android.User> {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.ParticipantsListFragment.ParticipantsListQuery>;
						public load(param0: com.sendbird.uikit.interfaces.OnListResultHandler<com.sendbird.android.User>): void;
						public load(param0: com.sendbird.uikit.interfaces.OnListResultHandler<any>): void;
						public loadInitial(param0: com.sendbird.uikit.interfaces.OnListResultHandler<com.sendbird.android.User>): void;
						public hasMore(): boolean;
						public loadInitial(param0: com.sendbird.uikit.interfaces.OnListResultHandler<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export abstract class PermissionFragment {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.PermissionFragment>;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public constructor();
					public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
				}
				export module PermissionFragment {
					export class IPermissionHandler {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.PermissionFragment.IPermissionHandler>;
						/**
						 * Constructs a new instance of the com.sendbird.uikit.fragments.PermissionFragment$IPermissionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getPermissions(param0: number): androidNative.Array<string>;
							onPermissionGranted(param0: number): void;
						});
						public constructor();
						public onPermissionGranted(param0: number): void;
						public getPermissions(param0: number): androidNative.Array<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export class PhotoViewFragment extends com.sendbird.uikit.fragments.BaseFragment implements com.sendbird.uikit.fragments.PermissionFragment.IPermissionHandler, com.sendbird.uikit.interfaces.LoadingDialogHandler {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.PhotoViewFragment>;
					public onDrawPage(): void;
					public dismissWaitingDialog(): void;
					public onReady(param0: com.sendbird.android.User, param1: com.sendbird.uikit.model.ReadyStatus): void;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public toastError(param0: number): void;
					public getPermissions(param0: number): androidNative.Array<string>;
					public toastSuccess(param0: number): void;
					public onConfigure(): void;
					public onPermissionGranted(param0: number): void;
					public showWaitingDialog(): void;
					public constructor();
					public shouldDismissLoadingDialog(): void;
					public toastError(param0: string): void;
					public shouldShowLoadingDialog(): boolean;
					public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
				}
				export module PhotoViewFragment {
					export class Builder {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.PhotoViewFragment.Builder>;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: number, param7: number, param8: com.sendbird.android.BaseChannel.ChannelType, param9: com.sendbird.uikit.SendBirdUIKit.ThemeMode);
						public setLoadingDialogHandler(param0: com.sendbird.uikit.interfaces.LoadingDialogHandler): com.sendbird.uikit.fragments.PhotoViewFragment.Builder;
						public build(): com.sendbird.uikit.fragments.PhotoViewFragment;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export class PromoteOperatorsFragment extends com.sendbird.uikit.fragments.SelectUserFragment {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.PromoteOperatorsFragment>;
					public onConfigure(): void;
					public showWaitingDialog(): void;
					public dismissWaitingDialog(): void;
					public constructor();
					public onUserSelectComplete(param0: java.util.List<string>): void;
					public getDisabledUserIds(): java.util.List<string>;
					public toastError(param0: number): void;
					public toastError(param0: string): void;
					public toastSuccess(param0: number): void;
				}
				export module PromoteOperatorsFragment {
					export class Builder {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.PromoteOperatorsFragment.Builder>;
						public bundle: globalAndroid.os.Bundle;
						public customFragment: com.sendbird.uikit.fragments.PromoteOperatorsFragment;
						public customUserListQueryHandler: com.sendbird.uikit.interfaces.CustomUserListQueryHandler;
						public adapter: com.sendbird.uikit.activities.adapter.UserListAdapter;
						public headerLeftButtonListener: globalAndroid.view.View.OnClickListener;
						public setUserListAdapter(param0: com.sendbird.uikit.activities.adapter.UserListAdapter): com.sendbird.uikit.fragments.PromoteOperatorsFragment.Builder;
						public constructor();
						public setHeaderTitle(param0: string): com.sendbird.uikit.fragments.PromoteOperatorsFragment.Builder;
						public setCustomPromoteOperatorFragment(param0: com.sendbird.uikit.fragments.PromoteOperatorsFragment): com.sendbird.uikit.fragments.PromoteOperatorsFragment.Builder;
						public setCustomUserListQueryHandler(param0: com.sendbird.uikit.interfaces.CustomUserListQueryHandler): com.sendbird.uikit.fragments.PromoteOperatorsFragment.Builder;
						public setRightButtonText(param0: string): com.sendbird.uikit.fragments.PromoteOperatorsFragment.Builder;
						public setUseHeader(param0: boolean): com.sendbird.uikit.fragments.PromoteOperatorsFragment.Builder;
						public setHeaderLeftButtonIconResId(param0: number): com.sendbird.uikit.fragments.PromoteOperatorsFragment.Builder;
						public setUseHeaderLeftButton(param0: boolean): com.sendbird.uikit.fragments.PromoteOperatorsFragment.Builder;
						public setEmptyIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.PromoteOperatorsFragment.Builder;
						public constructor(param0: string, param1: com.sendbird.uikit.SendBirdUIKit.ThemeMode);
						public setEmptyText(param0: number): com.sendbird.uikit.fragments.PromoteOperatorsFragment.Builder;
						public constructor(param0: string, param1: number);
						public build(): androidx.fragment.app.Fragment;
						public constructor(param0: com.sendbird.uikit.SendBirdUIKit.ThemeMode);
						public setUseHeaderRightButton(param0: boolean): com.sendbird.uikit.fragments.PromoteOperatorsFragment.Builder;
						public setHeaderLeftButtonIcon(param0: number, param1: globalAndroid.content.res.ColorStateList): com.sendbird.uikit.fragments.PromoteOperatorsFragment.Builder;
						public setHeaderLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.PromoteOperatorsFragment.Builder;
						public constructor(param0: string);
					}
					export class MemberListQuery extends com.sendbird.uikit.interfaces.CustomUserListQueryHandler {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.PromoteOperatorsFragment.MemberListQuery>;
						public loadInitial(param0: com.sendbird.uikit.interfaces.UserListResultHandler): void;
						public hasMore(): boolean;
						public loadNext(param0: com.sendbird.uikit.interfaces.UserListResultHandler): void;
						public getMember(param0: com.sendbird.uikit.interfaces.UserInfo): com.sendbird.android.Member;
					}
					export class PromoteOperatorListAdapter extends com.sendbird.uikit.activities.adapter.UserListAdapter {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.PromoteOperatorsFragment.PromoteOperatorListAdapter>;
						public isDisabled(param0: com.sendbird.uikit.interfaces.UserInfo): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export abstract class SelectUserFragment extends com.sendbird.uikit.fragments.BaseGroupChannelFragment {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.SelectUserFragment>;
					public adapter: com.sendbird.uikit.activities.adapter.UserListAdapter;
					public headerLeftButtonListener: globalAndroid.view.View.OnClickListener;
					public customUserListQueryHandler: com.sendbird.uikit.interfaces.CustomUserListQueryHandler;
					public headerRightButtonText: string;
					public onDrawPage(): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public dismissWaitingDialog(): void;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public onUserSelectComplete(param0: java.util.List<string>): void;
					public setRightButtonText(param0: string): void;
					public getDisabledUserIds(): java.util.List<string>;
					public setHeaderLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): void;
					public toastError(param0: number): void;
					public toastSuccess(param0: number): void;
					public onReadyFailure(): void;
					public setCustomUserListQueryHandler(param0: com.sendbird.uikit.interfaces.CustomUserListQueryHandler): void;
					public setErrorFrame(): void;
					public onConfigure(): void;
					public showWaitingDialog(): void;
					public constructor();
					public setRightButtonEnabled(param0: boolean): void;
					public toastError(param0: string): void;
					public setUserListAdapter(param0: com.sendbird.uikit.activities.adapter.UserListAdapter): void;
					public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export class SendBirdDialogFragment {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.SendBirdDialogFragment>;
					public show(param0: androidx.fragment.app.FragmentTransaction, param1: string): number;
					public constructor();
					public showNow(param0: androidx.fragment.app.FragmentManager, param1: string): void;
					public showSingle(param0: androidx.fragment.app.FragmentManager): void;
					public show(param0: androidx.fragment.app.FragmentManager, param1: string): void;
					public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
				}
				export module SendBirdDialogFragment {
					export class Builder {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.SendBirdDialogFragment.Builder>;
						public constructor();
						public setContentView(param0: globalAndroid.view.View): com.sendbird.uikit.fragments.SendBirdDialogFragment.Builder;
						public setDialogGravity(param0: com.sendbird.uikit.fragments.SendBirdDialogFragment.DialogGravity): com.sendbird.uikit.fragments.SendBirdDialogFragment.Builder;
						public setNeutralButton(param0: string, param1: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.SendBirdDialogFragment.Builder;
						public create(): com.sendbird.uikit.fragments.SendBirdDialogFragment;
						public setDialogHeight(param0: number): com.sendbird.uikit.fragments.SendBirdDialogFragment.Builder;
						public setItems(param0: androidNative.Array<com.sendbird.uikit.model.DialogListItem>, param1: com.sendbird.uikit.interfaces.OnItemClickListener<java.lang.Integer>, param2: com.sendbird.uikit.fragments.SendBirdDialogFragment.ItemIconGravity): com.sendbird.uikit.fragments.SendBirdDialogFragment.Builder;
						public setNeutralButton(param0: string, param1: number, param2: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.SendBirdDialogFragment.Builder;
						public setPositiveButton(param0: string, param1: number, param2: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.SendBirdDialogFragment.Builder;
						public setTitle(param0: string): com.sendbird.uikit.fragments.SendBirdDialogFragment.Builder;
						public setPositiveButton(param0: string, param1: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.SendBirdDialogFragment.Builder;
						public setNegativeButton(param0: string, param1: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.SendBirdDialogFragment.Builder;
						public setNegativeButton(param0: string, param1: number, param2: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.SendBirdDialogFragment.Builder;
						public setDialogWidth(param0: number): com.sendbird.uikit.fragments.SendBirdDialogFragment.Builder;
						public setEditText(param0: com.sendbird.uikit.consts.DialogEditTextParams, param1: com.sendbird.uikit.interfaces.OnEditTextResultListener): com.sendbird.uikit.fragments.SendBirdDialogFragment.Builder;
					}
					export class DialogGravity {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.SendBirdDialogFragment.DialogGravity>;
						public static CENTER: com.sendbird.uikit.fragments.SendBirdDialogFragment.DialogGravity;
						public static BOTTOM: com.sendbird.uikit.fragments.SendBirdDialogFragment.DialogGravity;
						public static TOP: com.sendbird.uikit.fragments.SendBirdDialogFragment.DialogGravity;
						public static valueOf(param0: string): com.sendbird.uikit.fragments.SendBirdDialogFragment.DialogGravity;
						public static values(): androidNative.Array<com.sendbird.uikit.fragments.SendBirdDialogFragment.DialogGravity>;
					}
					export class ItemIconGravity {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.SendBirdDialogFragment.ItemIconGravity>;
						public static START: com.sendbird.uikit.fragments.SendBirdDialogFragment.ItemIconGravity;
						public static END: com.sendbird.uikit.fragments.SendBirdDialogFragment.ItemIconGravity;
						public static valueOf(param0: string): com.sendbird.uikit.fragments.SendBirdDialogFragment.ItemIconGravity;
						public static values(): androidNative.Array<com.sendbird.uikit.fragments.SendBirdDialogFragment.ItemIconGravity>;
					}
					export class Params {
						public static class: java.lang.Class<com.sendbird.uikit.fragments.SendBirdDialogFragment.Params>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module fragments {
				export abstract class UserTypeListFragment extends com.sendbird.uikit.fragments.BaseGroupChannelFragment implements com.sendbird.uikit.interfaces.LoadingDialogHandler {
					public static class: java.lang.Class<com.sendbird.uikit.fragments.UserTypeListFragment>;
					public headerLeftButtonListener: globalAndroid.view.View.OnClickListener;
					public headerRightButtonListener: globalAndroid.view.View.OnClickListener;
					public adapter: com.sendbird.uikit.activities.adapter.UserTypeListAdapter;
					public itemClickListener: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.User>;
					public itemLongClickListener: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.User>;
					public actionItemClickListener: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.User>;
					public customQueryHandler: com.sendbird.uikit.interfaces.CustomMemberListQueryHandler<com.sendbird.android.User>;
					public profileClickListener: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.User>;
					public loadingDialogHandler: com.sendbird.uikit.interfaces.LoadingDialogHandler;
					public onDrawPage(): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public setItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.User>): void;
					public dismissWaitingDialog(): void;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public onItemClicked(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.User): void;
					public setHeaderRightButtonListener(param0: globalAndroid.view.View.OnClickListener): void;
					public onProfileClicked(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.User): void;
					public onConfigure(): void;
					public constructor();
					public toastError(param0: string): void;
					public onItemLongClicked(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.User): void;
					public onOperatorDismissed(): void;
					public setUserListAdapter(param0: com.sendbird.uikit.activities.adapter.UserTypeListAdapter): void;
					public setHeaderLeftButtonListener(param0: globalAndroid.view.View.OnClickListener): void;
					public toastError(param0: number): void;
					public toastSuccess(param0: number): void;
					public onActionItemClicked(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.User): void;
					public setItemLongClickListener(param0: com.sendbird.uikit.interfaces.OnItemLongClickListener<com.sendbird.android.User>): void;
					public onReadyFailure(): void;
					public onChannelDeleted(): void;
					public setErrorFrame(): void;
					public showWaitingDialog(): void;
					public shouldDismissLoadingDialog(): void;
					public shouldShowLoadingDialog(): boolean;
					public setActionItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.User>): void;
					public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module interfaces {
				export class CustomMemberListQueryHandler<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.sendbird.uikit.interfaces.CustomMemberListQueryHandler<any>>;
					/**
					 * Constructs a new instance of the com.sendbird.uikit.interfaces.CustomMemberListQueryHandler<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						loadInitial(param0: com.sendbird.uikit.interfaces.OnListResultHandler<T>): void;
						load(param0: com.sendbird.uikit.interfaces.OnListResultHandler<T>): void;
						hasMore(): boolean;
					});
					public constructor();
					public loadInitial(param0: com.sendbird.uikit.interfaces.OnListResultHandler<T>): void;
					public load(param0: com.sendbird.uikit.interfaces.OnListResultHandler<T>): void;
					public hasMore(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module interfaces {
				export class CustomParamsHandler {
					public static class: java.lang.Class<com.sendbird.uikit.interfaces.CustomParamsHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.uikit.interfaces.CustomParamsHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onBeforeCreateGroupChannel(param0: com.sendbird.android.GroupChannelParams): void;
						onBeforeUpdateGroupChannel(param0: com.sendbird.android.GroupChannelParams): void;
						onBeforeSendUserMessage(param0: com.sendbird.android.UserMessageParams): void;
						onBeforeSendFileMessage(param0: com.sendbird.android.FileMessageParams): void;
						onBeforeUpdateUserMessage(param0: com.sendbird.android.UserMessageParams): void;
						onBeforeUpdateOpenChannel(param0: com.sendbird.android.OpenChannelParams): void;
					});
					public constructor();
					public onBeforeUpdateGroupChannel(param0: com.sendbird.android.GroupChannelParams): void;
					public onBeforeUpdateUserMessage(param0: com.sendbird.android.UserMessageParams): void;
					public onBeforeCreateGroupChannel(param0: com.sendbird.android.GroupChannelParams): void;
					public onBeforeSendUserMessage(param0: com.sendbird.android.UserMessageParams): void;
					public onBeforeUpdateOpenChannel(param0: com.sendbird.android.OpenChannelParams): void;
					public onBeforeSendFileMessage(param0: com.sendbird.android.FileMessageParams): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module interfaces {
				export class CustomUserListQueryHandler {
					public static class: java.lang.Class<com.sendbird.uikit.interfaces.CustomUserListQueryHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.uikit.interfaces.CustomUserListQueryHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						loadInitial(param0: com.sendbird.uikit.interfaces.UserListResultHandler): void;
						loadNext(param0: com.sendbird.uikit.interfaces.UserListResultHandler): void;
						hasMore(): boolean;
					});
					public constructor();
					public loadInitial(param0: com.sendbird.uikit.interfaces.UserListResultHandler): void;
					public loadNext(param0: com.sendbird.uikit.interfaces.UserListResultHandler): void;
					public hasMore(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module interfaces {
				export class DialogProvider {
					public static class: java.lang.Class<com.sendbird.uikit.interfaces.DialogProvider>;
					/**
					 * Constructs a new instance of the com.sendbird.uikit.interfaces.DialogProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						showWaitingDialog(): void;
						dismissWaitingDialog(): void;
						toastError(param0: number): void;
						toastError(param0: string): void;
						toastSuccess(param0: number): void;
					});
					public constructor();
					public showWaitingDialog(): void;
					public dismissWaitingDialog(): void;
					public toastError(param0: number): void;
					public toastError(param0: string): void;
					public toastSuccess(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module interfaces {
				export class LoadingDialogHandler {
					public static class: java.lang.Class<com.sendbird.uikit.interfaces.LoadingDialogHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.uikit.interfaces.LoadingDialogHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						shouldShowLoadingDialog(): boolean;
						shouldDismissLoadingDialog(): void;
					});
					public constructor();
					public shouldDismissLoadingDialog(): void;
					public shouldShowLoadingDialog(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module interfaces {
				export class OnEditTextResultListener {
					public static class: java.lang.Class<com.sendbird.uikit.interfaces.OnEditTextResultListener>;
					/**
					 * Constructs a new instance of the com.sendbird.uikit.interfaces.OnEditTextResultListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: string): void;
					});
					public constructor();
					public onResult(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module interfaces {
				export class OnEmojiClickListener {
					public static class: java.lang.Class<com.sendbird.uikit.interfaces.OnEmojiClickListener>;
					/**
					 * Constructs a new instance of the com.sendbird.uikit.interfaces.OnEmojiClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onEmojiClick(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.Emoji, param3: number): void;
					});
					public constructor();
					public onEmojiClick(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.Emoji, param3: number): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module interfaces {
				export class OnEmojiReactionClickListener {
					public static class: java.lang.Class<com.sendbird.uikit.interfaces.OnEmojiReactionClickListener>;
					/**
					 * Constructs a new instance of the com.sendbird.uikit.interfaces.OnEmojiReactionClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onEmojiReactionClick(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.BaseMessage, param3: string): void;
					});
					public constructor();
					public onEmojiReactionClick(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.BaseMessage, param3: string): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module interfaces {
				export class OnEmojiReactionLongClickListener {
					public static class: java.lang.Class<com.sendbird.uikit.interfaces.OnEmojiReactionLongClickListener>;
					/**
					 * Constructs a new instance of the com.sendbird.uikit.interfaces.OnEmojiReactionLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onEmojiReactionLongClick(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.BaseMessage, param3: string): void;
					});
					public constructor();
					public onEmojiReactionLongClick(param0: globalAndroid.view.View, param1: number, param2: com.sendbird.android.BaseMessage, param3: string): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module interfaces {
				export class OnInputTextChangedListener {
					public static class: java.lang.Class<com.sendbird.uikit.interfaces.OnInputTextChangedListener>;
					/**
					 * Constructs a new instance of the com.sendbird.uikit.interfaces.OnInputTextChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onInputTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					});
					public constructor();
					public onInputTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module interfaces {
				export class OnItemClickListener<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.sendbird.uikit.interfaces.OnItemClickListener<any>>;
					/**
					 * Constructs a new instance of the com.sendbird.uikit.interfaces.OnItemClickListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onItemClick(param0: globalAndroid.view.View, param1: number, param2: T): void;
					});
					public constructor();
					public onItemClick(param0: globalAndroid.view.View, param1: number, param2: T): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module interfaces {
				export class OnItemLongClickListener<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.sendbird.uikit.interfaces.OnItemLongClickListener<any>>;
					/**
					 * Constructs a new instance of the com.sendbird.uikit.interfaces.OnItemLongClickListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onItemLongClick(param0: globalAndroid.view.View, param1: number, param2: T): void;
					});
					public constructor();
					public onItemLongClick(param0: globalAndroid.view.View, param1: number, param2: T): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module interfaces {
				export class OnListResultHandler<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.sendbird.uikit.interfaces.OnListResultHandler<any>>;
					/**
					 * Constructs a new instance of the com.sendbird.uikit.interfaces.OnListResultHandler<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.List<T>, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.List<T>, param1: com.sendbird.android.SendBirdException): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module interfaces {
				export class OnMenuItemClickListener<T, R>  extends java.lang.Object {
					public static class: java.lang.Class<com.sendbird.uikit.interfaces.OnMenuItemClickListener<any,any>>;
					/**
					 * Constructs a new instance of the com.sendbird.uikit.interfaces.OnMenuItemClickListener<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMenuItemClicked(param0: globalAndroid.view.View, param1: T, param2: R): boolean;
					});
					public constructor();
					public onMenuItemClicked(param0: globalAndroid.view.View, param1: T, param2: R): boolean;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module interfaces {
				export class OnResultHandler<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.sendbird.uikit.interfaces.OnResultHandler<any>>;
					/**
					 * Constructs a new instance of the com.sendbird.uikit.interfaces.OnResultHandler<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: T): void;
						onError(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onError(param0: com.sendbird.android.SendBirdException): void;
					public onResult(param0: T): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module interfaces {
				export class OnSearchEventListener {
					public static class: java.lang.Class<com.sendbird.uikit.interfaces.OnSearchEventListener>;
					/**
					 * Constructs a new instance of the com.sendbird.uikit.interfaces.OnSearchEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSearchRequested(param0: string): void;
					});
					public constructor();
					public onSearchRequested(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module interfaces {
				export class OnUserSelectChangedListener {
					public static class: java.lang.Class<com.sendbird.uikit.interfaces.OnUserSelectChangedListener>;
					/**
					 * Constructs a new instance of the com.sendbird.uikit.interfaces.OnUserSelectChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onUserSelectChanged(param0: java.util.List<string>, param1: boolean): void;
					});
					public constructor();
					public onUserSelectChanged(param0: java.util.List<string>, param1: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module interfaces {
				export class UserInfo {
					public static class: java.lang.Class<com.sendbird.uikit.interfaces.UserInfo>;
					/**
					 * Constructs a new instance of the com.sendbird.uikit.interfaces.UserInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getUserId(): string;
						getNickname(): string;
						getProfileUrl(): string;
					});
					public constructor();
					public getNickname(): string;
					public getProfileUrl(): string;
					public getUserId(): string;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module interfaces {
				export class UserListResultHandler {
					public static class: java.lang.Class<com.sendbird.uikit.interfaces.UserListResultHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.uikit.interfaces.UserListResultHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.List<any>, param1: java.lang.Exception): void;
					});
					public constructor();
					public onResult(param0: java.util.List<any>, param1: java.lang.Exception): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module log {
				export class Logger {
					public static class: java.lang.Class<com.sendbird.uikit.log.Logger>;
					public static dt(param0: com.sendbird.uikit.log.Tag, param1: java.lang.Throwable): number;
					public static e(param0: string, param1: java.lang.Throwable): number;
					public static et(param0: com.sendbird.uikit.log.Tag, param1: java.lang.Throwable): number;
					public static d(param0: string): number;
					public static devt(param0: com.sendbird.uikit.log.Tag, param1: java.lang.Throwable): number;
					public static devt(param0: com.sendbird.uikit.log.Tag, param1: string): number;
					public static setLogLevel(param0: number): void;
					public static v(param0: string, param1: java.lang.Throwable): number;
					public static vt(param0: com.sendbird.uikit.log.Tag, param1: java.lang.Throwable): number;
					public static w(param0: string, param1: androidNative.Array<any>): number;
					public static dev(param0: string): number;
					public static v(param0: string, param1: androidNative.Array<any>): number;
					public static e(param0: java.lang.Throwable): number;
					public static d(param0: java.lang.Throwable): number;
					public static i(param0: string, param1: androidNative.Array<any>): number;
					public static wt(param0: com.sendbird.uikit.log.Tag, param1: java.lang.Throwable): number;
					public static et(param0: com.sendbird.uikit.log.Tag, param1: string, param2: java.lang.Throwable): number;
					public static devt(param0: com.sendbird.uikit.log.Tag, param1: string, param2: java.lang.Throwable): number;
					public static dev(param0: string, param1: androidNative.Array<any>): number;
					public static vt(param0: com.sendbird.uikit.log.Tag, param1: string): number;
					public static dt(param0: com.sendbird.uikit.log.Tag, param1: string, param2: java.lang.Throwable): number;
					public static e(param0: string, param1: androidNative.Array<any>): number;
					public static it(param0: com.sendbird.uikit.log.Tag, param1: string): number;
					public static w(param0: string, param1: java.lang.Throwable): number;
					public static dev(param0: java.lang.Throwable): number;
					public static et(param0: com.sendbird.uikit.log.Tag, param1: string): number;
					public static v(param0: java.lang.Throwable): number;
					public static it(param0: com.sendbird.uikit.log.Tag, param1: java.lang.Throwable): number;
					public static w(param0: java.lang.Throwable): number;
					public static d(param0: string, param1: java.lang.Throwable): number;
					public static wt(param0: com.sendbird.uikit.log.Tag, param1: string, param2: java.lang.Throwable): number;
					public static i(param0: string, param1: java.lang.Throwable): number;
					public static w(param0: string): number;
					public static wt(param0: com.sendbird.uikit.log.Tag, param1: string): number;
					public static i(param0: java.lang.Throwable): number;
					public static vt(param0: com.sendbird.uikit.log.Tag, param1: string, param2: java.lang.Throwable): number;
					public static dev(param0: string, param1: java.lang.Throwable): number;
					public static d(param0: string, param1: androidNative.Array<any>): number;
					public static it(param0: com.sendbird.uikit.log.Tag, param1: string, param2: java.lang.Throwable): number;
					public static getCallerTraceInfo(param0: java.lang.Class): string;
					public static dt(param0: com.sendbird.uikit.log.Tag, param1: string): number;
					public static e(param0: string): number;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module log {
				export class LoggerConfig {
					public static class: java.lang.Class<com.sendbird.uikit.log.LoggerConfig>;
				}
				export module LoggerConfig {
					export class Builder {
						public static class: java.lang.Class<com.sendbird.uikit.log.LoggerConfig.Builder>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module log {
				export class Tag {
					public static class: java.lang.Class<com.sendbird.uikit.log.Tag>;
					public static DEFAULT: com.sendbird.uikit.log.Tag;
					public static values(): androidNative.Array<com.sendbird.uikit.log.Tag>;
					public static valueOf(param0: string): com.sendbird.uikit.log.Tag;
					public tag(): string;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module model {
				export class ChatMessageCollection {
					public static class: java.lang.Class<com.sendbird.uikit.model.ChatMessageCollection>;
					public add(param0: com.sendbird.android.BaseMessage): void;
					public updateAll(param0: java.util.List<com.sendbird.android.BaseMessage>): void;
					public size(): number;
					public addAll(param0: java.util.Collection<com.sendbird.android.BaseMessage>): void;
					public remove(param0: com.sendbird.android.BaseMessage): boolean;
					public get(param0: number): com.sendbird.android.BaseMessage;
					public first(): com.sendbird.android.BaseMessage;
					public last(): com.sendbird.android.BaseMessage;
					public update(param0: com.sendbird.android.BaseMessage): void;
					public constructor();
					public clear(): void;
					public hasMessage(): boolean;
					public copyToList(): java.util.List<com.sendbird.android.BaseMessage>;
					public removeByMessageId(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module model {
				export class DialogListItem {
					public static class: java.lang.Class<com.sendbird.uikit.model.DialogListItem>;
					public constructor(param0: number, param1: number, param2: boolean);
					public getIcon(): number;
					public isAlert(): boolean;
					public getKey(): number;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module model {
				export class EmojiManager {
					public static class: java.lang.Class<com.sendbird.uikit.model.EmojiManager>;
					public upsertEmojiContainer(param0: com.sendbird.android.EmojiContainer): void;
					public getEmojis(param0: number): java.util.List<com.sendbird.android.Emoji>;
					public getAllEmojiCategories(): java.util.List<com.sendbird.android.EmojiCategory>;
					public static getInstance(): com.sendbird.uikit.model.EmojiManager;
					public getAllEmojis(): java.util.List<com.sendbird.android.Emoji>;
					public getEmojiHash(): string;
					public getEmojiUrl(param0: string): string;
				}
				export module EmojiManager {
					export class EmojiManagerHolder {
						public static class: java.lang.Class<com.sendbird.uikit.model.EmojiManager.EmojiManagerHolder>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module model {
				export class FileInfo {
					public static class: java.lang.Class<com.sendbird.uikit.model.FileInfo>;
					public getFileName(): string;
					public getThumbnailHeight(): number;
					public getThumbnailFile(): java.io.File;
					public getFile(): java.io.File;
					public getMimeType(): string;
					public getSize(): number;
					public static fromUri(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri, param2: boolean, param3: com.sendbird.uikit.interfaces.OnResultHandler<com.sendbird.uikit.model.FileInfo>): java.util.concurrent.Future<com.sendbird.uikit.model.FileInfo>;
					public constructor(param0: string, param1: number, param2: string, param3: string, param4: globalAndroid.net.Uri, param5: number, param6: number, param7: string);
					public getPath(): string;
					public equals(param0: any): boolean;
					public toString(): string;
					public clear(): void;
					public getUri(): globalAndroid.net.Uri;
					public getThumbnailPath(): string;
					public hashCode(): number;
					public toFileParams(): com.sendbird.android.FileMessageParams;
					public getThumbnailWidth(): number;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module model {
				export class HighlightMessageInfo {
					public static class: java.lang.Class<com.sendbird.uikit.model.HighlightMessageInfo>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.sendbird.uikit.model.HighlightMessageInfo>;
					public equals(param0: any): boolean;
					public constructor(param0: globalAndroid.os.Parcel);
					public toString(): string;
					public getMessageId(): number;
					public static fromMessage(param0: com.sendbird.android.BaseMessage): com.sendbird.uikit.model.HighlightMessageInfo;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
					public getUpdatedAt(): number;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module model {
				export class ReadyStatus {
					public static class: java.lang.Class<com.sendbird.uikit.model.ReadyStatus>;
					public static READY: com.sendbird.uikit.model.ReadyStatus;
					public static ERROR: com.sendbird.uikit.model.ReadyStatus;
					public static values(): androidNative.Array<com.sendbird.uikit.model.ReadyStatus>;
					public static valueOf(param0: string): com.sendbird.uikit.model.ReadyStatus;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module model {
				export class TimelineMessage {
					public static class: java.lang.Class<com.sendbird.uikit.model.TimelineMessage>;
					public getRequestId(): string;
					public getMessage(): string;
					public getSender(): com.sendbird.android.Sender;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module tasks {
				export abstract class JobResultTask<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.sendbird.uikit.tasks.JobResultTask<any>>;
					public call(): T;
					public constructor();
					public onResultForUiThread(param0: T, param1: com.sendbird.android.SendBirdException): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module tasks {
				export abstract class JobTask<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.sendbird.uikit.tasks.JobTask<any>>;
					public call(): T;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module tasks {
				export class TaskQueue {
					public static class: java.lang.Class<com.sendbird.uikit.tasks.TaskQueue>;
					public constructor();
					public static addTask(param0: com.sendbird.uikit.tasks.JobResultTask<any>): java.util.concurrent.Future;
					public static addTask(param0: com.sendbird.uikit.tasks.JobTask<any>): java.util.concurrent.Future;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module utils {
				export class Available {
					public static class: java.lang.Class<com.sendbird.uikit.utils.Available>;
					public static isSupportBroadcast(): boolean;
					public static isSupportOgTag(): boolean;
					public constructor();
					public static isSupportReaction(): boolean;
					public static isSupportSuper(): boolean;
					public static isSupportMessageSearch(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module utils {
				export class ChannelUtils {
					public static class: java.lang.Class<com.sendbird.uikit.utils.ChannelUtils>;
					public static makeProfileUrlsFromChannel(param0: com.sendbird.android.GroupChannel): java.util.List<string>;
					public static makeMemberCountText(param0: number): string;
					public constructor();
					public static makeTypingText(param0: globalAndroid.content.Context, param1: java.util.List<any>): string;
					public static makeTitleText(param0: globalAndroid.content.Context, param1: com.sendbird.android.GroupChannel): string;
					public static getLastMessage(param0: globalAndroid.content.Context, param1: com.sendbird.android.GroupChannel): string;
					public static isChannelPushOff(param0: com.sendbird.android.GroupChannel): boolean;
					public static loadImage(param0: com.sendbird.uikit.widgets.ChannelCoverView, param1: string): void;
					public static loadChannelCover(param0: com.sendbird.uikit.widgets.ChannelCoverView, param1: com.sendbird.android.BaseChannel): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module utils {
				export class ContextUtils {
					public static class: java.lang.Class<com.sendbird.uikit.utils.ContextUtils>;
					public static toastSuccess(param0: globalAndroid.content.Context, param1: number): void;
					public static getApplicationName(param0: globalAndroid.content.Context): string;
					public constructor();
					public static toastError(param0: globalAndroid.content.Context, param1: string): void;
					public static toastSuccess(param0: globalAndroid.content.Context, param1: string): void;
					public static toastError(param0: globalAndroid.content.Context, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module utils {
				export class DateUtils {
					public static class: java.lang.Class<com.sendbird.uikit.utils.DateUtils>;
					public static hasSameTimeInMinute(param0: number, param1: number): boolean;
					public static hasSameDate(param0: number, param1: number): boolean;
					public static getTimeDiff(param0: number): string;
					public static formatTime(param0: globalAndroid.content.Context, param1: number): string;
					public static formatDate2(param0: number): string;
					public static isYesterday(param0: number): boolean;
					public static formatDateTime(param0: globalAndroid.content.Context, param1: number): string;
					public static formatDate(param0: number): string;
					public static isToday(param0: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module utils {
				export class DialogUtils {
					public static class: java.lang.Class<com.sendbird.uikit.utils.DialogUtils>;
					public static buildItems(param0: string, param1: number, param2: androidNative.Array<com.sendbird.uikit.model.DialogListItem>, param3: com.sendbird.uikit.interfaces.OnItemClickListener<java.lang.Integer>): com.sendbird.uikit.fragments.SendBirdDialogFragment;
					public static buildWarning(param0: string, param1: number, param2: string, param3: globalAndroid.view.View.OnClickListener, param4: string, param5: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.SendBirdDialogFragment;
					public static buildEditText(param0: string, param1: number, param2: com.sendbird.uikit.consts.DialogEditTextParams, param3: com.sendbird.uikit.interfaces.OnEditTextResultListener, param4: string, param5: globalAndroid.view.View.OnClickListener, param6: string, param7: globalAndroid.view.View.OnClickListener): com.sendbird.uikit.fragments.SendBirdDialogFragment;
					public static buildUserProfile(param0: globalAndroid.content.Context, param1: com.sendbird.android.User, param2: boolean, param3: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.User>, param4: com.sendbird.uikit.interfaces.LoadingDialogHandler): com.sendbird.uikit.fragments.SendBirdDialogFragment;
					public static buildItemsBottom(param0: androidNative.Array<com.sendbird.uikit.model.DialogListItem>, param1: com.sendbird.uikit.interfaces.OnItemClickListener<java.lang.Integer>): com.sendbird.uikit.fragments.SendBirdDialogFragment;
					public static buildContentView(param0: globalAndroid.view.View): com.sendbird.uikit.fragments.SendBirdDialogFragment;
					public static buildContentViewTop(param0: globalAndroid.view.View): com.sendbird.uikit.fragments.SendBirdDialogFragment;
					public static buildContentViewAndItems(param0: globalAndroid.view.View, param1: androidNative.Array<com.sendbird.uikit.model.DialogListItem>, param2: com.sendbird.uikit.interfaces.OnItemClickListener<java.lang.Integer>): com.sendbird.uikit.fragments.SendBirdDialogFragment;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module utils {
				export class DrawableUtils {
					public static class: java.lang.Class<com.sendbird.uikit.utils.DrawableUtils>;
					public static createRoundedRectangle(param0: number, param1: number): globalAndroid.graphics.drawable.Drawable;
					public static createOvalIcon(param0: globalAndroid.content.Context, param1: number, param2: number, param3: number): globalAndroid.graphics.drawable.Drawable;
					public static setTintList(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.content.res.ColorStateList): globalAndroid.graphics.drawable.Drawable;
					public static createLayerIcon(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable, param2: number): globalAndroid.graphics.drawable.Drawable;
					public constructor();
					public static createOvalIcon(param0: globalAndroid.content.Context, param1: number, param2: number, param3: number, param4: number): globalAndroid.graphics.drawable.Drawable;
					public static createDividerDrawable(param0: number, param1: number): globalAndroid.graphics.drawable.Drawable;
					public static setTintList(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.content.res.ColorStateList): globalAndroid.graphics.drawable.Drawable;
					public static setTintList(param0: globalAndroid.content.Context, param1: number, param2: number): globalAndroid.graphics.drawable.Drawable;
					public static setTintList(param0: globalAndroid.content.Context, param1: globalAndroid.graphics.drawable.Drawable, param2: number): globalAndroid.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module utils {
				export class EventProvider {
					public static class: java.lang.Class<com.sendbird.uikit.utils.EventProvider>;
					public register(param0: java.lang.Class, param1: string, param2: com.sendbird.uikit.utils.EventProvider.OnEventListener<any>): void;
					public notify(param0: string, param1: number): void;
					public toString(): string;
					public static getInstance(): com.sendbird.uikit.utils.EventProvider;
					public unRegister(param0: java.lang.Class<any>): void;
					public notify(param0: string, param1: any, param2: number): void;
					public notify(param0: string, param1: any): void;
					public register(param0: java.lang.Class, param1: androidNative.Array<string>, param2: com.sendbird.uikit.utils.EventProvider.OnEventListener<any>): void;
					public notify(param0: string): void;
				}
				export module EventProvider {
					export class EventBusHolder {
						public static class: java.lang.Class<com.sendbird.uikit.utils.EventProvider.EventBusHolder>;
					}
					export class OnEventListener<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.sendbird.uikit.utils.EventProvider.OnEventListener<any>>;
						/**
						 * Constructs a new instance of the com.sendbird.uikit.utils.EventProvider$OnEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onEvent(param0: string, param1: T): void;
						});
						public constructor();
						public onEvent(param0: string, param1: T): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module utils {
				export class FileUtils {
					public static class: java.lang.Class<com.sendbird.uikit.utils.FileUtils>;
					public static uriToFile(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): java.io.File;
					public static fileToUri(param0: globalAndroid.content.Context, param1: java.io.File): globalAndroid.net.Uri;
					public static createDownloadFileUri(param0: globalAndroid.content.Context, param1: string, param2: string): globalAndroid.net.Uri;
					public static removeDeletableDir(param0: globalAndroid.content.Context): void;
					public static getDownloadFileFromMessage(param0: com.sendbird.android.FileMessage): java.io.File;
					public static createCachedDirFile(param0: globalAndroid.content.Context, param1: string): java.io.File;
					public static getDocumentCacheDir(param0: globalAndroid.content.Context): java.io.File;
					public static bitmapToFile(param0: globalAndroid.graphics.Bitmap, param1: java.io.File, param2: globalAndroid.graphics.Bitmap.CompressFormat): java.io.File;
					public constructor();
					public static saveFile(param0: globalAndroid.content.Context, param1: java.io.File, param2: string, param3: string): void;
					public static hasDownloadFileFromMessage(param0: com.sendbird.android.FileMessage): boolean;
					public static createDeletableFile(param0: globalAndroid.content.Context, param1: string): java.io.File;
					public static saveFile(param0: globalAndroid.content.Context, param1: java.io.File, param2: java.io.File): java.io.File;
					public static bitmapToFile(param0: globalAndroid.graphics.Bitmap, param1: java.io.File, param2: number, param3: globalAndroid.graphics.Bitmap.CompressFormat): java.io.File;
					public static getDeletableDir(param0: globalAndroid.content.Context): java.io.File;
					public static extractBitmapFormat(param0: string): globalAndroid.graphics.Bitmap.CompressFormat;
					public static createPictureImageUri(param0: globalAndroid.content.Context): globalAndroid.net.Uri;
					public static createDownloadFile(param0: string): java.io.File;
					public static extractExtension(param0: string): string;
					public static uriToPath(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): string;
					public static extractExtension(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): string;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module utils {
				export class ImageUtils {
					public static class: java.lang.Class<com.sendbird.uikit.utils.ImageUtils>;
					public static DEFAULT_THUMBNAIL_WIDTH: number;
					public static DEFAULT_THUMBNAIL_HEIGHT: number;
					public constructor();
					public static calculateInSampleSize(param0: string, param1: number, param2: number): number;
					public static getThumbnailBitmap(param0: string, param1: string): globalAndroid.graphics.Bitmap;
					public static getBitmap(param0: string, param1: number, param2: number): globalAndroid.graphics.Bitmap;
					public static resize(param0: globalAndroid.content.res.Resources, param1: globalAndroid.graphics.drawable.Drawable, param2: number, param3: number): globalAndroid.graphics.drawable.Drawable;
					public static getDimensions(param0: string, param1: string): globalAndroid.util.Pair<java.lang.Integer,java.lang.Integer>;
					public static exifOrientationToDegrees(param0: number): number;
					public static rotate(param0: globalAndroid.graphics.Bitmap, param1: number): globalAndroid.graphics.Bitmap;
					public static calculateInSampleSize(param0: java.io.InputStream, param1: number, param2: number): number;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module utils {
				export class IntentUtils {
					public static class: java.lang.Class<com.sendbird.uikit.utils.IntentUtils>;
					public constructor();
					public static getWebViewerIntent(param0: string): globalAndroid.content.Intent;
					public static getFileViewerIntent(param0: globalAndroid.net.Uri, param1: string): globalAndroid.content.Intent;
					public static getFileChooserIntent(): globalAndroid.content.Intent;
					public static getCameraIntent(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): globalAndroid.content.Intent;
					public static getGalleryIntent(): globalAndroid.content.Intent;
					public static hasIntent(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): boolean;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module utils {
				export class MessageUtils {
					public static class: java.lang.Class<com.sendbird.uikit.utils.MessageUtils>;
					public static getMessageGroupType(param0: com.sendbird.android.BaseMessage, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.android.BaseMessage): com.sendbird.uikit.consts.MessageGroupType;
					public constructor();
					public static isMine(param0: string): boolean;
					public static isGroupChanged(param0: com.sendbird.android.BaseMessage, param1: com.sendbird.android.BaseMessage): boolean;
					public static isUnknownType(param0: com.sendbird.android.BaseMessage): boolean;
					public static isMine(param0: com.sendbird.android.BaseMessage): boolean;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module utils {
				export class MetricsUtils {
					public static class: java.lang.Class<com.sendbird.uikit.utils.MetricsUtils>;
					public static dipToPixel(param0: globalAndroid.content.Context, param1: number): number;
					public static getDensityDpi(param0: globalAndroid.content.Context): number;
					public static getDensity(param0: globalAndroid.content.Context): number;
					public static getDefaultDensity(): number;
					public static spToPixel(param0: globalAndroid.content.Context, param1: number): number;
					public static rotateRect(param0: globalAndroid.graphics.RectF, param1: number, param2: number, param3: number): globalAndroid.graphics.RectF;
					public static pixelInDensity(param0: globalAndroid.content.Context, param1: number): number;
					public static getStatusBarHeight(param0: globalAndroid.content.Context): number;
					public static getScreenSize(param0: globalAndroid.content.Context): globalAndroid.util.Pair<java.lang.Integer,java.lang.Integer>;
					public static pixelInDensityF(param0: globalAndroid.content.Context, param1: number): number;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module utils {
				export class PermissionUtils {
					public static class: java.lang.Class<com.sendbird.uikit.utils.PermissionUtils>;
					public static getShowRequestPermissionRationale(param0: globalAndroid.app.Activity, param1: androidNative.Array<string>): java.util.List<string>;
					public static hasPermissions(param0: globalAndroid.content.Context, param1: androidNative.Array<string>): boolean;
					public static getNotGrantedPermissions(param0: globalAndroid.content.Context, param1: androidNative.Array<string>): androidNative.Array<string>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module utils {
				export class ReactionUtils {
					public static class: java.lang.Class<com.sendbird.uikit.utils.ReactionUtils>;
					public constructor();
					public static useReaction(param0: com.sendbird.android.BaseChannel): boolean;
					public static canSendReaction(param0: com.sendbird.android.BaseChannel): boolean;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module utils {
				export class SoftInputUtils {
					public static class: java.lang.Class<com.sendbird.uikit.utils.SoftInputUtils>;
					public static setSoftInputMode(param0: globalAndroid.content.Context, param1: number): void;
					public static getSoftInputMode(param0: globalAndroid.content.Context): number;
					public static showSoftKeyboard(param0: globalAndroid.widget.EditText): void;
					public constructor();
					public static hideSoftKeyboard(param0: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module utils {
				export class SpannableStringBuilder {
					public static class: java.lang.Class<com.sendbird.uikit.utils.SpannableStringBuilder>;
					public addHighlightTextSpan(param0: string, param1: string, param2: number, param3: number): com.sendbird.uikit.utils.SpannableStringBuilder;
					public build(): string;
					public addImageSpan(param0: string, param1: number): com.sendbird.uikit.utils.SpannableStringBuilder;
					public addText(param0: string): com.sendbird.uikit.utils.SpannableStringBuilder;
					public constructor(param0: globalAndroid.content.Context, param1: number);
					public addTextColorSpan(param0: string, param1: number): com.sendbird.uikit.utils.SpannableStringBuilder;
					public addStrikeSpan(param0: string): com.sendbird.uikit.utils.SpannableStringBuilder;
					public addImageSpan(param0: string, param1: globalAndroid.graphics.drawable.Drawable): com.sendbird.uikit.utils.SpannableStringBuilder;
					public constructor(param0: globalAndroid.content.Context, param1: string);
					public addUnderlineSpan(param0: number): com.sendbird.uikit.utils.SpannableStringBuilder;
					public addSizeSpan(param0: string, param1: number): com.sendbird.uikit.utils.SpannableStringBuilder;
					public length(): number;
					public constructor(param0: globalAndroid.content.Context);
					public setSizeSpan(param0: number, param1: number, param2: number): com.sendbird.uikit.utils.SpannableStringBuilder;
					public addStyleSpan(param0: number, param1: number): com.sendbird.uikit.utils.SpannableStringBuilder;
					public addStyleSpan(param0: string, param1: number): com.sendbird.uikit.utils.SpannableStringBuilder;
					public setStrikeSpan(param0: number, param1: number): com.sendbird.uikit.utils.SpannableStringBuilder;
					public addText(param0: number): com.sendbird.uikit.utils.SpannableStringBuilder;
					public addUnderlineSpan(param0: string): com.sendbird.uikit.utils.SpannableStringBuilder;
					public addTextColorSpan(param0: number, param1: number): com.sendbird.uikit.utils.SpannableStringBuilder;
					public addStrikeSpan(param0: number): com.sendbird.uikit.utils.SpannableStringBuilder;
				}
				export module SpannableStringBuilder {
					export class CenteredImageSpan {
						public static class: java.lang.Class<com.sendbird.uikit.utils.SpannableStringBuilder.CenteredImageSpan>;
						public draw(param0: globalAndroid.graphics.Canvas, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: globalAndroid.graphics.Paint): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.graphics.drawable.Drawable);
						public constructor(param0: globalAndroid.content.Context, param1: number);
						public getSize(param0: globalAndroid.graphics.Paint, param1: string, param2: number, param3: number, param4: globalAndroid.graphics.Paint.FontMetricsInt): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module utils {
				export class TextUtils {
					public static class: java.lang.Class<com.sendbird.uikit.utils.TextUtils>;
					public constructor();
					public static isEmpty(param0: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module utils {
				export class UserUtils {
					public static class: java.lang.Class<com.sendbird.uikit.utils.UserUtils>;
					public static toUserInfo(param0: com.sendbird.android.User): com.sendbird.uikit.interfaces.UserInfo;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module utils {
				export class ViewUtils {
					public static class: java.lang.Class<com.sendbird.uikit.utils.ViewUtils>;
					public static drawThumbnail(param0: com.sendbird.uikit.widgets.RoundCornerView, param1: com.sendbird.android.FileMessage): void;
					public static drawOgtag(param0: globalAndroid.view.ViewGroup, param1: com.sendbird.android.OGMetaData): void;
					public static drawTextMessage(param0: globalAndroid.widget.TextView, param1: com.sendbird.android.BaseMessage, param2: number): void;
					public constructor();
					public static drawProfile(param0: globalAndroid.widget.ImageView, param1: string): void;
					public static drawProfile(param0: globalAndroid.widget.ImageView, param1: com.sendbird.android.BaseMessage): void;
					public static drawTextMessage(param0: globalAndroid.widget.TextView, param1: com.sendbird.android.BaseMessage, param2: number, param3: com.sendbird.uikit.model.HighlightMessageInfo, param4: number, param5: number): void;
					public static drawReactionEnabled(param0: com.sendbird.uikit.widgets.EmojiReactionListView, param1: com.sendbird.android.BaseChannel): void;
					public static drawThumbnailIcon(param0: globalAndroid.widget.ImageView, param1: com.sendbird.android.FileMessage): void;
					public static drawNickname(param0: globalAndroid.widget.TextView, param1: com.sendbird.android.BaseMessage): void;
					public static drawFileIcon(param0: globalAndroid.widget.ImageView, param1: com.sendbird.android.FileMessage): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module vm {
				export class BaseViewModel {
					public static class: java.lang.Class<com.sendbird.uikit.vm.BaseViewModel>;
					public errorToast: androidx.lifecycle.MutableLiveData<java.lang.Integer>;
					public onCleared(): void;
					public getErrorToast(): androidx.lifecycle.LiveData<java.lang.Integer>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module vm {
				export class ChannelChangeLogsPager {
					public static class: java.lang.Class<com.sendbird.uikit.vm.ChannelChangeLogsPager>;
				}
				export module ChannelChangeLogsPager {
					export class ChannelChangeLogsResultHandler {
						public static class: java.lang.Class<com.sendbird.uikit.vm.ChannelChangeLogsPager.ChannelChangeLogsResultHandler>;
						/**
						 * Constructs a new instance of the com.sendbird.uikit.vm.ChannelChangeLogsPager$ChannelChangeLogsResultHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onError(param0: com.sendbird.android.SendBirdException): void;
							onResult(param0: java.util.List<com.sendbird.android.GroupChannel>, param1: java.util.List<string>): void;
						});
						public constructor();
						public onResult(param0: java.util.List<com.sendbird.android.GroupChannel>, param1: java.util.List<string>): void;
						public onError(param0: com.sendbird.android.SendBirdException): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module vm {
				export class ChannelListViewModel extends com.sendbird.uikit.vm.BaseViewModel {
					public static class: java.lang.Class<com.sendbird.uikit.vm.ChannelListViewModel>;
					public loadInitial(): void;
					public loadNext(): any;
					public getChannelList(): androidx.lifecycle.LiveData<java.util.List<com.sendbird.android.GroupChannel>>;
					public loadPrevious(): java.util.List<com.sendbird.android.GroupChannel>;
					public leaveChannel(param0: com.sendbird.android.GroupChannel): void;
					public getStatusFrame(): androidx.lifecycle.LiveData<com.sendbird.uikit.widgets.StatusFrameView.Status>;
					public setPushNotification(param0: com.sendbird.android.GroupChannel, param1: boolean): void;
					public loadNext(): java.util.List<com.sendbird.android.GroupChannel>;
					public loadPrevious(): any;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module vm {
				export class ChannelViewModel extends com.sendbird.uikit.vm.BaseViewModel {
					public static class: java.lang.Class<com.sendbird.uikit.vm.ChannelViewModel>;
					public getTypingMembers(): androidx.lifecycle.LiveData<java.util.List<com.sendbird.android.User>>;
					public getStatusFrame(): androidx.lifecycle.LiveData<com.sendbird.uikit.widgets.StatusFrameView.Status>;
					public getNewRequestedMessage(): androidx.lifecycle.LiveData<com.sendbird.android.BaseMessage>;
					public loadInitial(param0: number): void;
					public resendMessage(param0: com.sendbird.android.BaseMessage): void;
					public updateUserMessage(param0: number, param1: com.sendbird.android.UserMessageParams): void;
					public hasNext(): boolean;
					public sendFileMessage(param0: com.sendbird.android.FileMessageParams, param1: com.sendbird.uikit.model.FileInfo): void;
					public loadNext(): java.util.List<com.sendbird.android.BaseMessage>;
					public hasPrevious(): boolean;
					public onCleared(): void;
					public deleteMessage(param0: com.sendbird.android.BaseMessage): void;
					public toggleReaction(param0: globalAndroid.view.View, param1: com.sendbird.android.BaseMessage, param2: string): void;
					public getMessageLoadState(): androidx.lifecycle.LiveData<com.sendbird.uikit.consts.MessageLoadState>;
					public sendUserMessage(param0: com.sendbird.android.UserMessageParams): void;
					public loadPrevious(): any;
					public getMessageDeleted(): androidx.lifecycle.LiveData<java.lang.Long>;
					public getChannel(): com.sendbird.android.GroupChannel;
					public setTyping(param0: boolean): void;
					public getChannelDeleted(): androidx.lifecycle.LiveData<java.lang.Boolean>;
					public getIncomingMessage(): androidx.lifecycle.LiveData<com.sendbird.android.BaseMessage>;
					public loadNext(): any;
					public getMessageList(): androidx.lifecycle.LiveData<java.util.List<com.sendbird.android.BaseMessage>>;
					public getStartingPoint(): number;
					public isChannelChanged(): androidx.lifecycle.LiveData<com.sendbird.android.GroupChannel>;
					public getReactionUserInfo(param0: java.util.List<com.sendbird.android.Reaction>): java.util.Map<com.sendbird.android.Reaction,java.util.List<com.sendbird.android.User>>;
					public loadPrevious(): java.util.List<com.sendbird.android.BaseMessage>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module vm {
				export class FileDownloader {
					public static class: java.lang.Class<com.sendbird.uikit.vm.FileDownloader>;
					public downloadToCache(param0: globalAndroid.content.Context, param1: com.sendbird.android.FileMessage): java.io.File;
					public static downloadFile(param0: globalAndroid.content.Context, param1: com.sendbird.android.FileMessage, param2: com.sendbird.uikit.interfaces.OnResultHandler<java.io.File>): boolean;
					public hasFile(param0: globalAndroid.content.Context, param1: com.sendbird.android.FileMessage): boolean;
					public saveFile(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string): void;
					public static getInstance(): com.sendbird.uikit.vm.FileDownloader;
					public isDownloading(param0: string): boolean;
				}
				export module FileDownloader {
					export class FileDownloadHolder {
						public static class: java.lang.Class<com.sendbird.uikit.vm.FileDownloader.FileDownloadHolder>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module vm {
				export class MessageChangeLogsPager {
					public static class: java.lang.Class<com.sendbird.uikit.vm.MessageChangeLogsPager>;
				}
				export module MessageChangeLogsPager {
					export class MessageChangeLogsResultHandler {
						public static class: java.lang.Class<com.sendbird.uikit.vm.MessageChangeLogsPager.MessageChangeLogsResultHandler>;
						/**
						 * Constructs a new instance of the com.sendbird.uikit.vm.MessageChangeLogsPager$MessageChangeLogsResultHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onError(param0: com.sendbird.android.SendBirdException): void;
							onResult(param0: java.util.List<com.sendbird.android.BaseMessage>, param1: java.util.List<com.sendbird.android.BaseMessage>, param2: java.util.List<java.lang.Long>): void;
						});
						public constructor();
						public onResult(param0: java.util.List<com.sendbird.android.BaseMessage>, param1: java.util.List<com.sendbird.android.BaseMessage>, param2: java.util.List<java.lang.Long>): void;
						public onError(param0: com.sendbird.android.SendBirdException): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module vm {
				export class OpenChannelViewModel extends com.sendbird.uikit.vm.BaseViewModel {
					public static class: java.lang.Class<com.sendbird.uikit.vm.OpenChannelViewModel>;
					public getMessageDeleted(): androidx.lifecycle.LiveData<java.lang.Long>;
					public getStatusFrame(): androidx.lifecycle.LiveData<com.sendbird.uikit.widgets.StatusFrameView.Status>;
					public getChannelDeleted(): androidx.lifecycle.LiveData<java.lang.Boolean>;
					public load(): void;
					public resendMessage(param0: com.sendbird.android.BaseMessage): void;
					public updateUserMessage(param0: number, param1: com.sendbird.android.UserMessageParams): void;
					public sendFileMessage(param0: com.sendbird.android.FileMessageParams, param1: com.sendbird.uikit.model.FileInfo): void;
					public loadNext(): any;
					public loadNext(): java.util.List<com.sendbird.android.BaseMessage>;
					public isChannelChanged(): androidx.lifecycle.LiveData<com.sendbird.android.OpenChannel>;
					public getMessageList(): androidx.lifecycle.LiveData<java.util.List<com.sendbird.android.BaseMessage>>;
					public getChannel(): com.sendbird.android.OpenChannel;
					public onCleared(): void;
					public deleteMessage(param0: com.sendbird.android.BaseMessage): void;
					public getMessageLoadState(): androidx.lifecycle.LiveData<com.sendbird.uikit.consts.MessageLoadState>;
					public sendUserMessage(param0: com.sendbird.android.UserMessageParams): void;
					public loadPrevious(): java.util.List<com.sendbird.android.BaseMessage>;
					public loadPrevious(): any;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module vm {
				export class PendingMessageRepository {
					public static class: java.lang.Class<com.sendbird.uikit.vm.PendingMessageRepository>;
					public static getInstance(): com.sendbird.uikit.vm.PendingMessageRepository;
					public getFileInfo(param0: com.sendbird.android.BaseMessage): com.sendbird.uikit.model.FileInfo;
					public addFileInfo(param0: com.sendbird.android.FileMessage, param1: com.sendbird.uikit.model.FileInfo): void;
				}
				export module PendingMessageRepository {
					export class PendingMessageManagerHolder {
						public static class: java.lang.Class<com.sendbird.uikit.vm.PendingMessageRepository.PendingMessageManagerHolder>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module vm {
				export class SearchViewModel extends com.sendbird.uikit.vm.BaseViewModel {
					public static class: java.lang.Class<com.sendbird.uikit.vm.SearchViewModel>;
					public search(param0: string, param1: com.sendbird.uikit.interfaces.OnListResultHandler<com.sendbird.android.BaseMessage>): void;
					public getKeyword(): string;
					public loadNext(): any;
					public loadNext(): java.util.List<com.sendbird.android.BaseMessage>;
					public getSearchResultList(): androidx.lifecycle.LiveData<java.util.List<com.sendbird.android.BaseMessage>>;
					public loadPrevious(): java.util.List<com.sendbird.android.BaseMessage>;
					public loadPrevious(): any;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module vm {
				export class SelectableUserInfoListViewModel extends com.sendbird.uikit.vm.BaseViewModel {
					public static class: java.lang.Class<com.sendbird.uikit.vm.SelectableUserInfoListViewModel>;
					public loadPrevious(): java.util.List<any>;
					public loadNext(): any;
					public getUserList(): androidx.lifecycle.LiveData<java.util.List<com.sendbird.uikit.interfaces.UserInfo>>;
					public onResult(param0: java.util.List<any>, param1: java.lang.Exception): void;
					public getStatusFrame(): androidx.lifecycle.LiveData<com.sendbird.uikit.widgets.StatusFrameView.Status>;
					public loadNext(): java.util.List<any>;
					public loadPrevious(): any;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module vm {
				export class SuperChannelViewModel extends com.sendbird.uikit.vm.ChannelViewModel {
					public static class: java.lang.Class<com.sendbird.uikit.vm.SuperChannelViewModel>;
					public loadNext(): any;
					public loadNext(): java.util.List<com.sendbird.android.BaseMessage>;
					public loadPrevious(): java.util.List<com.sendbird.android.BaseMessage>;
					public loadPrevious(): any;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module vm {
				export class UserTypeListViewModel extends com.sendbird.uikit.vm.BaseViewModel {
					public static class: java.lang.Class<com.sendbird.uikit.vm.UserTypeListViewModel>;
					public channel: com.sendbird.android.BaseChannel;
					public getMemberList(): androidx.lifecycle.LiveData<any>;
					public loadInitial(): void;
					public loadNext(): any;
					public notifyDataSetChanged(param0: java.util.Collection<com.sendbird.android.User>): void;
					public getOperatorDismissed(): androidx.lifecycle.LiveData<java.lang.Boolean>;
					public changeAlertStatus(param0: com.sendbird.uikit.widgets.StatusFrameView.Status): void;
					public hasData(): boolean;
					public getStatusFrame(): androidx.lifecycle.LiveData<com.sendbird.uikit.widgets.StatusFrameView.Status>;
					public loadNext(): java.util.List<com.sendbird.android.User>;
					public getChannelDeleted(): androidx.lifecycle.LiveData<java.lang.Boolean>;
					public loadPrevious(): java.util.List<com.sendbird.android.User>;
					public loadPrevious(): any;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module vm {
				export class ViewModelFactory {
					public static class: java.lang.Class<com.sendbird.uikit.vm.ViewModelFactory>;
					public constructor();
					public constructor(param0: androidNative.Array<any>);
					public create(param0: java.lang.Class): androidx.lifecycle.ViewModel;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class AdminMessageView extends com.sendbird.uikit.widgets.BaseMessageView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.AdminMessageView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getLayout(): globalAndroid.view.View;
					public static drawMessage(param0: com.sendbird.uikit.widgets.AdminMessageView, param1: com.sendbird.android.AdminMessage): void;
					public getBinding(): com.sendbird.uikit.databinding.SbViewAdminMessageComponentBinding;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public drawMessage(param0: com.sendbird.android.BaseMessage): void;
					public getBinding(): androidx.databinding.ViewDataBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class AppBarView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.AppBarView>;
					public setUseLeftImageButton(param0: boolean): void;
					public getLeftImageButton(): globalAndroid.widget.ImageButton;
					public getRightImageButton(): globalAndroid.widget.ImageButton;
					public getTitleTextView(): globalAndroid.widget.TextView;
					public setLeftImageButtonTint(param0: globalAndroid.content.res.ColorStateList): void;
					public getProfileView(): com.sendbird.uikit.widgets.ChannelCoverView;
					public getDescriptionTextView(): globalAndroid.widget.TextView;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setLeftImageButtonClickListener(param0: globalAndroid.view.View.OnClickListener): void;
					public getRightTextButton(): globalAndroid.widget.TextView;
					public setRightImageButtonClickListener(param0: globalAndroid.view.View.OnClickListener): void;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getLeftTextButton(): globalAndroid.widget.TextView;
					public setLeftImageButtonResource(param0: number): void;
					public setRightTextButtonClickListener(param0: globalAndroid.view.View.OnClickListener): void;
					public setRightTextButtonEnabled(param0: boolean): void;
					public setUseRightButton(param0: boolean): void;
					public setRightTextButtonString(param0: string): void;
					public setRightImageButtonTint(param0: globalAndroid.content.res.ColorStateList): void;
					public setRightImageButtonResource(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class AutoLinkTextView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.AutoLinkTextView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setOnLinkLongClickListener(param0: com.sendbird.uikit.widgets.SBLinkMovementMethod.OnLinkLongClickListener): void;
					public setOnLinkClickListener(param0: com.sendbird.uikit.widgets.SBLinkMovementMethod.OnLinkClickListener): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setText(param0: string, param1: globalAndroid.widget.TextView.BufferType): void;
					public getLinkifyMask(): number;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export abstract class BaseMessageView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.BaseMessageView>;
					public highlightMessageInfo: com.sendbird.uikit.model.HighlightMessageInfo;
					public highlightBackgroundColor: number;
					public highlightForegroundColor: number;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getLayout(): globalAndroid.view.View;
					public setHighlightMessageInfo(param0: com.sendbird.uikit.model.HighlightMessageInfo): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getBinding(): androidx.databinding.ViewDataBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class ChannelCoverView extends com.sendbird.uikit.widgets.ImageWaffleView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.ChannelCoverView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setDefaultImageResId(param0: number): void;
					public drawBroadcastChannelCover(): void;
					public loadImages(param0: java.util.List<string>): void;
					public loadImage(param0: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class ChannelPreview {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.ChannelPreview>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getLayout(): globalAndroid.view.View;
					public static drawChannel(param0: com.sendbird.uikit.widgets.ChannelPreview, param1: com.sendbird.android.GroupChannel): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setChannel(param0: com.sendbird.android.GroupChannel): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class ChannelSettingsView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.ChannelSettingsView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setOnItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.uikit.widgets.ChannelSettingsView.ChannelSettingMenu>): void;
					public getLayout(): com.sendbird.uikit.widgets.ChannelSettingsView;
					public getBinding(): com.sendbird.uikit.databinding.SbViewChannelSettingsBinding;
					public drawSettingsView(param0: com.sendbird.android.GroupChannel): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
				export module ChannelSettingsView {
					export class ChannelSettingMenu {
						public static class: java.lang.Class<com.sendbird.uikit.widgets.ChannelSettingsView.ChannelSettingMenu>;
						public static MODERATIONS: com.sendbird.uikit.widgets.ChannelSettingsView.ChannelSettingMenu;
						public static NOTIFICATIONS: com.sendbird.uikit.widgets.ChannelSettingsView.ChannelSettingMenu;
						public static MEMBERS: com.sendbird.uikit.widgets.ChannelSettingsView.ChannelSettingMenu;
						public static LEAVE_CHANNEL: com.sendbird.uikit.widgets.ChannelSettingsView.ChannelSettingMenu;
						public static SEARCH_IN_CHANNEL: com.sendbird.uikit.widgets.ChannelSettingsView.ChannelSettingMenu;
						public static valueOf(param0: string): com.sendbird.uikit.widgets.ChannelSettingsView.ChannelSettingMenu;
						public static values(): androidNative.Array<com.sendbird.uikit.widgets.ChannelSettingsView.ChannelSettingMenu>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class EmoijReactionUserView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.EmoijReactionUserView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getLayout(): globalAndroid.view.View;
					public static drawUser(param0: com.sendbird.uikit.widgets.EmoijReactionUserView, param1: com.sendbird.android.User): void;
					public drawUser(param0: com.sendbird.android.User): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getBinding(): com.sendbird.uikit.databinding.SbViewEmojiReactionUserComponentBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class EmojiListView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.EmojiListView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onMeasure(param0: number, param1: number): void;
					public setEmojiClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<string>): void;
					public setMoreButtonClickListener(param0: globalAndroid.view.View.OnClickListener): void;
					public init(param0: globalAndroid.content.Context): void;
					public initAdapter(param0: com.sendbird.uikit.widgets.EmojiListView.Params): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
				export module EmojiListView {
					export class Builder {
						public static class: java.lang.Class<com.sendbird.uikit.widgets.EmojiListView.Builder>;
						public setShowMoreButton(param0: boolean): com.sendbird.uikit.widgets.EmojiListView.Builder;
						public constructor(param0: globalAndroid.content.Context);
						public create(): com.sendbird.uikit.widgets.EmojiListView;
						public setReactionList(param0: java.util.List<com.sendbird.android.Reaction>): com.sendbird.uikit.widgets.EmojiListView.Builder;
						public setEmojiList(param0: java.util.List<com.sendbird.android.Emoji>): com.sendbird.uikit.widgets.EmojiListView.Builder;
					}
					export class Params {
						public static class: java.lang.Class<com.sendbird.uikit.widgets.EmojiListView.Params>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class EmojiReactionCountView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.EmojiReactionCountView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setCount(param0: number): void;
					public getLayout(): com.sendbird.uikit.widgets.EmojiReactionCountView;
					public getBinding(): com.sendbird.uikit.databinding.SbViewEmojiReactionCountComponentBinding;
					public setEmojiUrl(param0: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public static drawReaction(param0: com.sendbird.uikit.widgets.EmojiReactionCountView, param1: com.sendbird.android.Reaction): void;
					public drawReaction(param0: com.sendbird.android.Reaction): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class EmojiReactionListView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.EmojiReactionListView>;
					public setReactionList(param0: java.util.List<com.sendbird.android.Reaction>): void;
					public getLayout(): com.sendbird.uikit.widgets.EmojiReactionListView;
					public setMoreButtonClickListener(param0: globalAndroid.view.View.OnClickListener): void;
					public setEmojiReactionLongClickListener(param0: com.sendbird.uikit.interfaces.OnItemLongClickListener<string>): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setUseMoreButton(param0: boolean): void;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public refresh(): void;
					public setClickable(param0: boolean): void;
					public getBinding(): com.sendbird.uikit.databinding.SbViewEmojiReactionListBinding;
					public setEmojiReactionClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<string>): void;
					public useMoreButton(): boolean;
					public setLongClickable(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class EmojiReactionUserListView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.EmojiReactionUserListView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public init(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number): void;
					public setEmojiReactionUserData(param0: androidx.fragment.app.Fragment, param1: number, param2: java.util.List<com.sendbird.android.Reaction>, param3: java.util.Map<com.sendbird.android.Reaction,java.util.List<com.sendbird.android.User>>): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
				export module EmojiReactionUserListView {
					export class UserListFragment {
						public static class: java.lang.Class<com.sendbird.uikit.widgets.EmojiReactionUserListView.UserListFragment>;
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					}
					export class UserListPagerAdapter {
						public static class: java.lang.Class<com.sendbird.uikit.widgets.EmojiReactionUserListView.UserListPagerAdapter>;
						public getItemCount(): number;
						public createFragment(param0: number): androidx.fragment.app.Fragment;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class EmojiReactionView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.EmojiReactionView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setCount(param0: number): void;
					public setImageDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getLayout(): globalAndroid.view.View;
					public static drawReaction(param0: com.sendbird.uikit.widgets.EmojiReactionView, param1: com.sendbird.android.Reaction): void;
					public getBinding(): com.sendbird.uikit.databinding.SbViewEmojiReactionComponentBinding;
					public setBackgroundResource(param0: number): void;
					public setEmojiUrl(param0: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public drawReaction(param0: com.sendbird.android.Reaction): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class EmojiView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.EmojiView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setImageDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getLayout(): globalAndroid.view.View;
					public static drawEmoji(param0: com.sendbird.uikit.widgets.EmojiView, param1: com.sendbird.android.Emoji): void;
					public setBackgroundResource(param0: number): void;
					public getBinding(): com.sendbird.uikit.databinding.SbViewEmojiComponentBinding;
					public setEmojiUrl(param0: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public drawEmoji(param0: com.sendbird.android.Emoji): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export abstract class GroupChannelMessageView extends com.sendbird.uikit.widgets.BaseMessageView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.GroupChannelMessageView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public static drawMessageWithChannel(param0: com.sendbird.uikit.widgets.GroupChannelMessageView, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.android.GroupChannel, param3: com.sendbird.uikit.consts.MessageGroupType, param4: com.sendbird.uikit.model.HighlightMessageInfo): void;
					public drawMessage(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
					public static drawMessageWithChannel(param0: com.sendbird.uikit.widgets.GroupChannelMessageView, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.android.GroupChannel, param3: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class ImageWaffleView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.ImageWaffleView>;
					public DIVIDER_WIDTH: number;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onDetachedFromWindow(): void;
					public onMeasure(param0: number, param1: number): void;
					public prepareSingleImageView(): globalAndroid.widget.ImageView;
					public prepareImageViews(param0: number): java.util.List<globalAndroid.widget.ImageView>;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
				}
				export module ImageWaffleView {
					export class KillerWaffleChildImageView {
						public static class: java.lang.Class<com.sendbird.uikit.widgets.ImageWaffleView.KillerWaffleChildImageView>;
						public invalidate(): void;
						public requestLayout(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class MemberPreview {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.MemberPreview>;
					public setOnProfileClickListener(param0: globalAndroid.view.View.OnClickListener): void;
					public setOnActionMenuClickListener(param0: globalAndroid.view.View.OnClickListener): void;
					public setDescription(param0: string): void;
					public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setImageFromUrl(param0: string): void;
					public setName(param0: string): void;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setVisibleOverlay(param0: number): void;
					public getLayout(): globalAndroid.view.View;
					public setOnLongClickListener(param0: globalAndroid.view.View.OnLongClickListener): void;
					public static drawMember(param0: com.sendbird.uikit.widgets.MemberPreview, param1: com.sendbird.android.Member): void;
					public static drawMemberFromUser(param0: com.sendbird.uikit.widgets.MemberPreview, param1: com.sendbird.android.User): void;
					public getBinding(): com.sendbird.uikit.databinding.SbViewMemberListItemBinding;
					public useActionMenu(param0: boolean): void;
					public enableActionMenu(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class MessageInputView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.MessageInputView>;
					public isEditMode(): boolean;
					public setSendImageResource(param0: number): void;
					public getBinding(): com.sendbird.uikit.databinding.SbViewMessageInputBinding;
					public getInputText(): string;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setOnInputTextChangedListener(param0: com.sendbird.uikit.interfaces.OnInputTextChangedListener): void;
					public setOnEditCancelClickListener(param0: globalAndroid.view.View.OnClickListener): void;
					public setOnEditModeTextChangedListener(param0: com.sendbird.uikit.interfaces.OnInputTextChangedListener): void;
					public setAddButtonVisibility(param0: number): void;
					public setOnAddClickListener(param0: globalAndroid.view.View.OnClickListener): void;
					public setIsEditMode(param0: boolean): void;
					public setInputTextHint(param0: string): void;
					public showEditMode(param0: string): void;
					public setSendImageButtonTint(param0: globalAndroid.content.res.ColorStateList): void;
					public setEnabled(param0: boolean): void;
					public setAddImageButtonTint(param0: globalAndroid.content.res.ColorStateList): void;
					public setKeyboardDisplayType(param0: androidx.fragment.app.FragmentManager, param1: com.sendbird.uikit.consts.KeyboardDisplayType): void;
					public setEditPanelVisibility(param0: number): void;
					public showSendButtonAlways(param0: boolean): void;
					public setOnEditSaveClickListener(param0: globalAndroid.view.View.OnClickListener): void;
					public getInputEditText(): globalAndroid.widget.EditText;
					public setAddImageResource(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public hideEditMode(): void;
					public constructor(param0: globalAndroid.content.Context);
					public getLayout(): globalAndroid.view.View;
					public setSendButtonVisibility(param0: number): void;
					public setInputText(param0: string): void;
					public setOnSendClickListener(param0: globalAndroid.view.View.OnClickListener): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class MessagePreview {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.MessagePreview>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public static drawMessage(param0: com.sendbird.uikit.widgets.MessagePreview, param1: com.sendbird.android.BaseMessage): void;
					public drawMessage(param0: com.sendbird.android.BaseMessage): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class MessageProgressView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.MessageProgressView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class MessageRecyclerView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.MessageRecyclerView>;
					public showTypingIndicator(param0: string): void;
					public hideTypingIndicator(): void;
					public hideScrollBottomButton(): void;
					public getTooltipView(): globalAndroid.view.View;
					public hideNewMessageTooltip(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getTypingIndicator(): globalAndroid.view.View;
					public getScrollBottomView(): globalAndroid.view.View;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getLayout(): globalAndroid.view.View;
					public getRecyclerView(): com.sendbird.uikit.widgets.PagerRecyclerView;
					public showNewMessageTooltip(param0: string): void;
					public showScrollBottomButton(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class MyFileMessageView extends com.sendbird.uikit.widgets.GroupChannelMessageView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.MyFileMessageView>;
					public getBinding(): com.sendbird.uikit.databinding.SbViewMyFileMessageComponentBinding;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getLayout(): globalAndroid.view.View;
					public drawMessage(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getBinding(): androidx.databinding.ViewDataBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class MyImageFileMessageView extends com.sendbird.uikit.widgets.GroupChannelMessageView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.MyImageFileMessageView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getLayout(): globalAndroid.view.View;
					public drawMessage(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getBinding(): com.sendbird.uikit.databinding.SbViewMyFileImageMessageComponentBinding;
					public getBinding(): androidx.databinding.ViewDataBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class MyMessageStatusView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.MyMessageStatusView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public drawError(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public drawSent(): void;
					public drawStatus(param0: com.sendbird.android.BaseMessage, param1: com.sendbird.android.BaseChannel): void;
					public drawRead(): void;
					public drawDelivered(): void;
					public drawProgress(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class MyUserMessageView extends com.sendbird.uikit.widgets.GroupChannelMessageView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.MyUserMessageView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getLayout(): globalAndroid.view.View;
					public drawMessage(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getBinding(): com.sendbird.uikit.databinding.SbViewMyUserMessageComponentBinding;
					public getBinding(): androidx.databinding.ViewDataBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class MyVideoFileMessageView extends com.sendbird.uikit.widgets.GroupChannelMessageView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.MyVideoFileMessageView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getLayout(): globalAndroid.view.View;
					public drawMessage(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
					public getBinding(): com.sendbird.uikit.databinding.SbViewMyFileVideoMessageComponentBinding;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getBinding(): androidx.databinding.ViewDataBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class OgtagView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.OgtagView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public drawOgtag(param0: com.sendbird.android.OGMetaData): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public static inflate(param0: globalAndroid.content.Context, param1: globalAndroid.view.ViewGroup): com.sendbird.uikit.widgets.OgtagView;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class OpenChannelAdminMessageView extends com.sendbird.uikit.widgets.BaseMessageView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.OpenChannelAdminMessageView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getLayout(): globalAndroid.view.View;
					public static drawMessage(param0: com.sendbird.uikit.widgets.OpenChannelAdminMessageView, param1: com.sendbird.android.BaseMessage): void;
					public getBinding(): com.sendbird.uikit.databinding.SbViewOpenChannelAdminMessageComponentBinding;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public drawMessage(param0: com.sendbird.android.BaseMessage): void;
					public getBinding(): androidx.databinding.ViewDataBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class OpenChannelFileMessageView extends com.sendbird.uikit.widgets.OpenChannelMessageView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.OpenChannelFileMessageView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getLayout(): globalAndroid.view.View;
					public getBinding(): com.sendbird.uikit.databinding.SbViewOpenChannelFileMessageComponentBinding;
					public drawMessage(param0: com.sendbird.android.OpenChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getBinding(): androidx.databinding.ViewDataBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class OpenChannelImageFileMessageView extends com.sendbird.uikit.widgets.OpenChannelMessageView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.OpenChannelImageFileMessageView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getBinding(): com.sendbird.uikit.databinding.SbViewOpenChannelFileImageMessageComponentBinding;
					public getLayout(): globalAndroid.view.View;
					public drawMessage(param0: com.sendbird.android.OpenChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getBinding(): androidx.databinding.ViewDataBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export abstract class OpenChannelMessageView extends com.sendbird.uikit.widgets.BaseMessageView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.OpenChannelMessageView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public drawMessage(param0: com.sendbird.android.OpenChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
					public static drawOpenChannelMessage(param0: com.sendbird.uikit.widgets.OpenChannelMessageView, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.android.OpenChannel, param3: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class OpenChannelOgtagView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.OpenChannelOgtagView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public static inflate(param0: globalAndroid.content.Context, param1: globalAndroid.view.ViewGroup): com.sendbird.uikit.widgets.OpenChannelOgtagView;
					public drawOgtag(param0: com.sendbird.android.OGMetaData): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class OpenChannelSettingsView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.OpenChannelSettingsView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getLayout(): com.sendbird.uikit.widgets.OpenChannelSettingsView;
					public setOnItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.uikit.widgets.OpenChannelSettingsView.OpenChannelSettingMenu>): void;
					public drawSettingsView(param0: com.sendbird.android.OpenChannel): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getBinding(): com.sendbird.uikit.databinding.SbViewOpenChannelSettingsBinding;
				}
				export module OpenChannelSettingsView {
					export class OpenChannelSettingMenu {
						public static class: java.lang.Class<com.sendbird.uikit.widgets.OpenChannelSettingsView.OpenChannelSettingMenu>;
						public static PARTICIPANTS: com.sendbird.uikit.widgets.OpenChannelSettingsView.OpenChannelSettingMenu;
						public static DELETE_CHANNEL: com.sendbird.uikit.widgets.OpenChannelSettingsView.OpenChannelSettingMenu;
						public static values(): androidNative.Array<com.sendbird.uikit.widgets.OpenChannelSettingsView.OpenChannelSettingMenu>;
						public static valueOf(param0: string): com.sendbird.uikit.widgets.OpenChannelSettingsView.OpenChannelSettingMenu;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class OpenChannelUserMessageView extends com.sendbird.uikit.widgets.OpenChannelMessageView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.OpenChannelUserMessageView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getLayout(): globalAndroid.view.View;
					public drawMessage(param0: com.sendbird.android.OpenChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getBinding(): androidx.databinding.ViewDataBinding;
					public getBinding(): com.sendbird.uikit.databinding.SbViewOpenChannelUserMessageComponentBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class OpenChannelVideoFileMessageView extends com.sendbird.uikit.widgets.OpenChannelMessageView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.OpenChannelVideoFileMessageView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getLayout(): globalAndroid.view.View;
					public drawMessage(param0: com.sendbird.android.OpenChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getBinding(): androidx.databinding.ViewDataBinding;
					public getBinding(): com.sendbird.uikit.databinding.SbViewOpenChannelFileVideoMessageComponentBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class OtherFileMessageView extends com.sendbird.uikit.widgets.GroupChannelMessageView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.OtherFileMessageView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getLayout(): globalAndroid.view.View;
					public getBinding(): com.sendbird.uikit.databinding.SbViewOtherFileMessageComponentBinding;
					public drawMessage(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getBinding(): androidx.databinding.ViewDataBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class OtherImageFileMessageView extends com.sendbird.uikit.widgets.GroupChannelMessageView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.OtherImageFileMessageView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getLayout(): globalAndroid.view.View;
					public drawMessage(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getBinding(): androidx.databinding.ViewDataBinding;
					public getBinding(): com.sendbird.uikit.databinding.SbViewOtherFileImageMessageComponentBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class OtherUserMessageView extends com.sendbird.uikit.widgets.GroupChannelMessageView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.OtherUserMessageView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getBinding(): com.sendbird.uikit.databinding.SbViewOtherUserMessageComponentBinding;
					public getLayout(): globalAndroid.view.View;
					public drawMessage(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getBinding(): androidx.databinding.ViewDataBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class OtherVideoFileMessageView extends com.sendbird.uikit.widgets.GroupChannelMessageView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.OtherVideoFileMessageView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getLayout(): globalAndroid.view.View;
					public drawMessage(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.android.BaseMessage, param2: com.sendbird.uikit.consts.MessageGroupType): void;
					public getBinding(): com.sendbird.uikit.databinding.SbViewOtherFileVideoMessageComponentBinding;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getBinding(): androidx.databinding.ViewDataBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class PagerRecyclerView extends com.sendbird.uikit.widgets.ThemeableRecyclerView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.PagerRecyclerView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public findFirstVisibleItemPosition(): number;
					public onDetachedFromWindow(): void;
					public findLastVisibleItemPosition(): number;
					public performClick(): boolean;
					public setPager(param0: com.sendbird.uikit.widgets.PagerRecyclerView.Pageable<any>): void;
					public getLayoutManager(): androidx.recyclerview.widget.LinearLayoutManager;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setThreshold(param0: number): void;
					public setOnScrollEndDetectListener(param0: com.sendbird.uikit.widgets.PagerRecyclerView.OnScrollEndDetectListener): void;
					public setLayoutManager(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager): void;
				}
				export module PagerRecyclerView {
					export class OnScrollEndDetectListener {
						public static class: java.lang.Class<com.sendbird.uikit.widgets.PagerRecyclerView.OnScrollEndDetectListener>;
						/**
						 * Constructs a new instance of the com.sendbird.uikit.widgets.PagerRecyclerView$OnScrollEndDetectListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onScrollEnd(param0: com.sendbird.uikit.widgets.PagerRecyclerView.ScrollDirection): void;
						});
						public constructor();
						public onScrollEnd(param0: com.sendbird.uikit.widgets.PagerRecyclerView.ScrollDirection): void;
					}
					export class OnScrollListener {
						public static class: java.lang.Class<com.sendbird.uikit.widgets.PagerRecyclerView.OnScrollListener>;
						public constructor();
						public setThreshold(param0: number): void;
						public setLayoutManager(param0: androidx.recyclerview.widget.LinearLayoutManager): void;
						public setOnScrollEndDetectListener(param0: com.sendbird.uikit.widgets.PagerRecyclerView.OnScrollEndDetectListener): void;
						public setPager(param0: com.sendbird.uikit.widgets.PagerRecyclerView.Pageable<any>): void;
						public onScrolled(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number): void;
						public dispose(): void;
					}
					export class Pageable<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.sendbird.uikit.widgets.PagerRecyclerView.Pageable<any>>;
						/**
						 * Constructs a new instance of the com.sendbird.uikit.widgets.PagerRecyclerView$Pageable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							loadPrevious(): T;
							loadNext(): T;
						});
						public constructor();
						public loadNext(): T;
						public loadPrevious(): T;
					}
					export class ScrollDirection {
						public static class: java.lang.Class<com.sendbird.uikit.widgets.PagerRecyclerView.ScrollDirection>;
						public static Top: com.sendbird.uikit.widgets.PagerRecyclerView.ScrollDirection;
						public static Bottom: com.sendbird.uikit.widgets.PagerRecyclerView.ScrollDirection;
						public static values(): androidNative.Array<com.sendbird.uikit.widgets.PagerRecyclerView.ScrollDirection>;
						public static valueOf(param0: string): com.sendbird.uikit.widgets.PagerRecyclerView.ScrollDirection;
						public getDirection(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class ProgressView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.ProgressView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class RoundCornerView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.RoundCornerView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onDetachedFromWindow(): void;
					public onMeasure(param0: number, param1: number): void;
					public setRadius(param0: number): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public getContent(): globalAndroid.widget.ImageView;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class SBLinkMovementMethod {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.SBLinkMovementMethod>;
					public onTouchEvent(param0: globalAndroid.widget.TextView, param1: globalAndroid.text.Spannable, param2: globalAndroid.view.MotionEvent): boolean;
				}
				export module SBLinkMovementMethod {
					export class Builder {
						public static class: java.lang.Class<com.sendbird.uikit.widgets.SBLinkMovementMethod.Builder>;
						public constructor();
						public setOnLinkClickListener(param0: com.sendbird.uikit.widgets.SBLinkMovementMethod.OnLinkClickListener): com.sendbird.uikit.widgets.SBLinkMovementMethod.Builder;
						public setClickedLinkBackgroundColor(param0: number): com.sendbird.uikit.widgets.SBLinkMovementMethod.Builder;
						public create(): com.sendbird.uikit.widgets.SBLinkMovementMethod;
						public setClickedLinkTextColor(param0: number): com.sendbird.uikit.widgets.SBLinkMovementMethod.Builder;
						public setOnLinkLongClickListener(param0: com.sendbird.uikit.widgets.SBLinkMovementMethod.OnLinkLongClickListener): com.sendbird.uikit.widgets.SBLinkMovementMethod.Builder;
					}
					export class LongPressTimer {
						public static class: java.lang.Class<com.sendbird.uikit.widgets.SBLinkMovementMethod.LongPressTimer>;
						public run(): void;
						public setOnTimerReachedListener(param0: com.sendbird.uikit.widgets.SBLinkMovementMethod.LongPressTimer.OnTimerReachedListener): void;
					}
					export module LongPressTimer {
						export class OnTimerReachedListener {
							public static class: java.lang.Class<com.sendbird.uikit.widgets.SBLinkMovementMethod.LongPressTimer.OnTimerReachedListener>;
							/**
							 * Constructs a new instance of the com.sendbird.uikit.widgets.SBLinkMovementMethod$LongPressTimer$OnTimerReachedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onTimerReached(): void;
							});
							public constructor();
							public onTimerReached(): void;
						}
					}
					export class OnLinkClickListener {
						public static class: java.lang.Class<com.sendbird.uikit.widgets.SBLinkMovementMethod.OnLinkClickListener>;
						/**
						 * Constructs a new instance of the com.sendbird.uikit.widgets.SBLinkMovementMethod$OnLinkClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onClick(param0: globalAndroid.widget.TextView, param1: string): boolean;
						});
						public constructor();
						public onClick(param0: globalAndroid.widget.TextView, param1: string): boolean;
					}
					export class OnLinkLongClickListener {
						public static class: java.lang.Class<com.sendbird.uikit.widgets.SBLinkMovementMethod.OnLinkLongClickListener>;
						/**
						 * Constructs a new instance of the com.sendbird.uikit.widgets.SBLinkMovementMethod$OnLinkLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onLongClick(param0: globalAndroid.widget.TextView, param1: string): boolean;
						});
						public constructor();
						public onLongClick(param0: globalAndroid.widget.TextView, param1: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class SearchBarView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.SearchBarView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getSearchButton(): globalAndroid.widget.TextView;
					public getLayout(): globalAndroid.view.View;
					public getBinding(): com.sendbird.uikit.databinding.SbViewSearchBarBinding;
					public setText(param0: string): void;
					public setOnInputTextChangedListener(param0: com.sendbird.uikit.interfaces.OnInputTextChangedListener): void;
					public setHintText(param0: string): void;
					public setOnSearchEventListener(param0: com.sendbird.uikit.interfaces.OnSearchEventListener): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class SelectChannelTypeView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.SelectChannelTypeView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public canCreateSuperGroupChannel(param0: boolean): void;
					public canCreateBroadcastGroupChannel(param0: boolean): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setOnItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.uikit.consts.CreateableChannelType>): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class SingleMenuItemView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.SingleMenuItemView>;
					public setOnActionMenuClickListener(param0: globalAndroid.view.View.OnClickListener): void;
					public useDivider(param0: boolean): void;
					public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
					public getBinding(): com.sendbird.uikit.databinding.SbViewSingleMenuItemBinding;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setName(param0: string): void;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getLayout(): globalAndroid.view.View;
					public setOnLongClickListener(param0: globalAndroid.view.View.OnLongClickListener): void;
					public setIcon(param0: number): void;
					public setIconTint(param0: number): void;
					public useActionMenu(param0: boolean): void;
					public setChecked(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class StatusFrameView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.StatusFrameView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setEmptyText(param0: number): void;
					public setEmptyIcon(param0: number): void;
					public setIconTint(param0: globalAndroid.content.res.ColorStateList): void;
					public setActionText(param0: number): void;
					public setErrorIcon(param0: number): void;
					public setShowAction(param0: boolean): void;
					public setOnActionEventListener(param0: globalAndroid.view.View.OnClickListener): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setStatus(param0: com.sendbird.uikit.widgets.StatusFrameView.Status): void;
					public setErrorText(param0: number): void;
				}
				export module StatusFrameView {
					export class Status {
						public static class: java.lang.Class<com.sendbird.uikit.widgets.StatusFrameView.Status>;
						public static LOADING: com.sendbird.uikit.widgets.StatusFrameView.Status;
						public static CONNECTION_ERROR: com.sendbird.uikit.widgets.StatusFrameView.Status;
						public static ERROR: com.sendbird.uikit.widgets.StatusFrameView.Status;
						public static EMPTY: com.sendbird.uikit.widgets.StatusFrameView.Status;
						public static NONE: com.sendbird.uikit.widgets.StatusFrameView.Status;
						public static values(): androidNative.Array<com.sendbird.uikit.widgets.StatusFrameView.Status>;
						public static valueOf(param0: string): com.sendbird.uikit.widgets.StatusFrameView.Status;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class ThemeableRecyclerView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.ThemeableRecyclerView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setDividerHeight(param0: number): void;
					public setUseDivider(param0: boolean): void;
					public setDividerColor(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class TimelineMessageView extends com.sendbird.uikit.widgets.BaseMessageView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.TimelineMessageView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getLayout(): globalAndroid.view.View;
					public getBinding(): com.sendbird.uikit.databinding.SbViewTimeLineMessageComponentBinding;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public static drawTimeline(param0: com.sendbird.uikit.widgets.TimelineMessageView, param1: com.sendbird.android.BaseMessage): void;
					public drawTimeline(param0: com.sendbird.android.BaseMessage): void;
					public getBinding(): androidx.databinding.ViewDataBinding;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class ToastView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.ToastView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setText(param0: string): void;
					public setStatus(param0: com.sendbird.uikit.widgets.ToastView.ToastStatus): void;
					public setText(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
				export module ToastView {
					export class ToastStatus {
						public static class: java.lang.Class<com.sendbird.uikit.widgets.ToastView.ToastStatus>;
						public static SUCCESS: com.sendbird.uikit.widgets.ToastView.ToastStatus;
						public static ERROR: com.sendbird.uikit.widgets.ToastView.ToastStatus;
						public static values(): androidNative.Array<com.sendbird.uikit.widgets.ToastView.ToastStatus>;
						public static valueOf(param0: string): com.sendbird.uikit.widgets.ToastView.ToastStatus;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class UserPreview {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.UserPreview>;
					public setEnabled(param0: boolean): void;
					public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getLayout(): globalAndroid.view.View;
					public setOnLongClickListener(param0: globalAndroid.view.View.OnLongClickListener): void;
					public getBinding(): com.sendbird.uikit.databinding.SbViewUserListItemBinding;
					public setOnSelectedStateChangedListener(param0: globalAndroid.widget.CompoundButton.OnCheckedChangeListener): void;
					public drawUser(param0: com.sendbird.uikit.interfaces.UserInfo, param1: boolean, param2: boolean): void;
					public setUserSelected(param0: boolean): void;
					public static drawUser(param0: com.sendbird.uikit.widgets.UserPreview, param1: com.sendbird.uikit.interfaces.UserInfo, param2: boolean, param3: boolean): void;
					public isSelected(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class UserProfile {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.UserProfile>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setUseChannelCreateButton(param0: boolean): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setOnItemClickListener(param0: com.sendbird.uikit.interfaces.OnItemClickListener<com.sendbird.android.User>): void;
					public drawUserProfile(param0: com.sendbird.android.User): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class WaitingDialog {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.WaitingDialog>;
					public constructor();
					public static show(param0: globalAndroid.content.Context): void;
					public static show(param0: globalAndroid.content.Context, param1: number): void;
					public static dismiss(): void;
					public static show(param0: globalAndroid.content.Context, param1: boolean, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): void;
					public static show(param0: globalAndroid.content.Context, param1: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module uikit {
			export module widgets {
				export class WrapHeightImageView {
					public static class: java.lang.Class<com.sendbird.uikit.widgets.WrapHeightImageView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onMeasure(param0: number, param1: number): void;
					public setSize(param0: number, param1: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
			}
		}
	}
}

//Generics information:
//com.sendbird.uikit.activities.adapter.BaseAdapter:2
//com.sendbird.uikit.activities.adapter.BaseMessageAdapter:2
//com.sendbird.uikit.activities.viewholder.BaseViewHolder:1
//com.sendbird.uikit.interfaces.CustomMemberListQueryHandler:1
//com.sendbird.uikit.interfaces.OnItemClickListener:1
//com.sendbird.uikit.interfaces.OnItemLongClickListener:1
//com.sendbird.uikit.interfaces.OnListResultHandler:1
//com.sendbird.uikit.interfaces.OnMenuItemClickListener:2
//com.sendbird.uikit.interfaces.OnResultHandler:1
//com.sendbird.uikit.tasks.JobResultTask:1
//com.sendbird.uikit.tasks.JobTask:1
//com.sendbird.uikit.utils.EventProvider.OnEventListener:1
//com.sendbird.uikit.widgets.PagerRecyclerView.Pageable:1

