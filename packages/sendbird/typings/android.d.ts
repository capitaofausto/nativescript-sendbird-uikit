/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module sendbird {
		export module android {
			export class AES256Chiper {
				public static class: java.lang.Class<com.sendbird.android.AES256Chiper>;
				public static INSTANCE: com.sendbird.android.AES256Chiper;
				public decrypt(param0: string, param1: string): string;
				public encrypt(param0: string, param1: string): string;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class API {
				public static class: java.lang.Class<com.sendbird.android.API>;
				public static USERS: com.sendbird.android.API;
				public static USERS_USERID_LOGIN: com.sendbird.android.API;
				public static USERS_USERID: com.sendbird.android.API;
				public static USERS_USERID_UNREADCOUNT: com.sendbird.android.API;
				public static USERS_USERID_UNREADMESSAGECOUNT: com.sendbird.android.API;
				public static USERS_USERID_UNREADITEMCOUNT: com.sendbird.android.API;
				public static USERS_USERID_UNREADCHANNELCOUNT: com.sendbird.android.API;
				public static USERS_USERID_GROUPCHANNELCOUNT: com.sendbird.android.API;
				public static USERS_USERID_MARKASREADALL: com.sendbird.android.API;
				public static USERS_USERID_PUSH_REGISTER: com.sendbird.android.API;
				public static USERS_USERID_PUSH_UNREGISTER: com.sendbird.android.API;
				public static USERS_USERID_PUSH_TOKENTYPE_DEVICETOKENS: com.sendbird.android.API;
				public static USERS_USERID_PUSH: com.sendbird.android.API;
				public static USERS_USERID_PUSH_TEMPLATE: com.sendbird.android.API;
				public static USERS_USERID_PUSHPREFERENCE_CHANNELURL: com.sendbird.android.API;
				public static USERS_USERID_PUSHPREFERENCE: com.sendbird.android.API;
				public static USERS_USERID_COUNTPREFERENCE_CHANNELURL: com.sendbird.android.API;
				public static USERS_USERID_BLOCK: com.sendbird.android.API;
				public static USERS_USERID_BLOCK_TARGETID: com.sendbird.android.API;
				public static USERS_USERID_FRIENDS: com.sendbird.android.API;
				public static USERS_USERID_FRIENDS_USERID: com.sendbird.android.API;
				public static USERS_USERID_FRIENDDISCOVERIES: com.sendbird.android.API;
				public static USERS_USERID_FRIENDDISCOVERIES_DISCOVERYKEY: com.sendbird.android.API;
				public static USERS_USERID_ALLOW_FRIEND_DISCOVERY: com.sendbird.android.API;
				public static USERS_USERID_FRIENDS_CHANGELOGS: com.sendbird.android.API;
				public static USERS_USERID_MYGROUPCHANNELS_CHANGELOGS: com.sendbird.android.API;
				public static USERS_USERID_MYGROUPCHANNELS: com.sendbird.android.API;
				public static USERS_USERID_MYGROUPCHANNELS_CHANNELURL_MEMBERS: com.sendbird.android.API;
				public static USERS_USERID_CHANNELINVITATIONPREFERENCE: com.sendbird.android.API;
				public static USERS_USERID_METADATA: com.sendbird.android.API;
				public static USERS_USERID_METADATA_KEY: com.sendbird.android.API;
				public static USERS_USERID_SESSION_KEY: com.sendbird.android.API;
				public static OPENCHANNELS: com.sendbird.android.API;
				public static OPENCHANNELS_CHANNELURL: com.sendbird.android.API;
				public static OPENCHANNELS_CHANNELURL_MESSAGES: com.sendbird.android.API;
				public static OPENCHANNELS_CHANNELURL_MESSAGES_MESSAGEID_TRANSLATION: com.sendbird.android.API;
				public static OPENCHANNELS_CHANNELURL_SCHEDULED_MESSAGES: com.sendbird.android.API;
				public static OPENCHANNELS_CHANNELURL_MESSAGES_CHANGELOGS: com.sendbird.android.API;
				public static OPENCHANNELS_CHANNELURL_MESSAGES_MESSAGEID: com.sendbird.android.API;
				public static OPENCHANNELS_CHANNELURL_MESSAGES_MESSAGEID_METAARRAY: com.sendbird.android.API;
				public static OPENCHANNELS_CHANNELURL_MESSAGES_MESSAGEID_REACTIONS: com.sendbird.android.API;
				public static OPENCHANNELS_CHANNELURL_PARTICIPANTS: com.sendbird.android.API;
				public static OPENCHANNELS_CHANNELURL_METADATA: com.sendbird.android.API;
				public static OPENCHANNELS_CHANNELURL_METADATA_KEY: com.sendbird.android.API;
				public static OPENCHANNELS_CHANNELURL_METACOUNTER: com.sendbird.android.API;
				public static OPENCHANNELS_CHANNELURL_METACOUNTER_KEY: com.sendbird.android.API;
				public static OPENCHANNELS_CHANNELURL_BAN: com.sendbird.android.API;
				public static OPENCHANNELS_CHANNELURL_BAN_USERID: com.sendbird.android.API;
				public static OPENCHANNELS_CHANNELURL_MUTE: com.sendbird.android.API;
				public static OPENCHANNELS_CHANNELURL_MUTE_USERID: com.sendbird.android.API;
				public static OPENCHANNELS_CHANNELURL_OPERATORS: com.sendbird.android.API;
				public static GROUPCHANNELS: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_INVITE: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_JOIN: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_HIDE: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_LEAVE: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_ACCEPT: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_DECLINE: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_MESSAGES: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_MESSAGES_MESSAGEID_TRANSLATION: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_SCHEDULED_MESSAGES: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_MESSAGES_CHANGELOGS: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_MESSAGES_MARKASREAD: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_MESSAGES_MARKASDELIVERED: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_MESSAGES_TOTALCOUNT: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_MESSAGES_UNREADCOUNT: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_MESSAGES_MESSAGEID: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_MESSAGES_MESSAGEID_METAARRAY: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_MESSAGES_MESSAGEID_REACTIONS: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_MEMBERS: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_METADATA: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_METADATA_KEY: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_METACOUNTER: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_METACOUNTER_KEY: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_RESETUSERHISTORY: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_BAN: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_BAN_USERID: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_MUTE: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_MUTE_USERID: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_FREEZE: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_OPERATORS: com.sendbird.android.API;
				public static STORAGE_FILE: com.sendbird.android.API;
				public static STORAGE_PROFILEIMAGE: com.sendbird.android.API;
				public static REPORT_OPENCHANNELS_CHANNELURL: com.sendbird.android.API;
				public static REPORT_GROUPCHANNELS_CHANNELURL: com.sendbird.android.API;
				public static REPORT_USERS_OFFENDINGUSERID: com.sendbird.android.API;
				public static REPORT_OPENCHANNELS_CHANNELURL_MESSAGES_MESSAGEID: com.sendbird.android.API;
				public static REPORT_GROUPCHANNELS_CHANNELURL_MESSAGES_MESSAGEID: com.sendbird.android.API;
				public static SEARCH_MESSAGES: com.sendbird.android.API;
				public static EMOJI_CATEGORIES: com.sendbird.android.API;
				public static EMOJI_CATEGORY: com.sendbird.android.API;
				public static EMOJI: com.sendbird.android.API;
				public static GROUPCHANNELS_CHANNELURL_MESSAGES_GAP: com.sendbird.android.API;
				public static Companion: com.sendbird.android.API.Companion;
				public url(param0: boolean): string;
				public static values(): androidNative.Array<com.sendbird.android.API>;
				public static valueOf(param0: string): com.sendbird.android.API;
				public internalUrl(): string;
				public static urlEncodeUTF8(param0: string): string;
				public publicUrl(): string;
				public static urlEncodeUTF8(param0: java.util.Map<any,any>): string;
				public static urlEncodeUTF8(param0: java.util.Collection<string>): string;
			}
			export module API {
				export class Companion {
					public static class: java.lang.Class<com.sendbird.android.API.Companion>;
					public urlEncodeUTF8(param0: java.util.Collection<string>): string;
					public urlEncodeUTF8(param0: string): string;
					public urlEncodeUTF8(param0: java.util.Map<any,any>): string;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class APIClient {
				public static class: java.lang.Class<com.sendbird.android.APIClient>;
				public makeDummyCallToKeepConnectionAlive(): void;
				public constructor();
			}
			export module APIClient {
				export class APIClientProgressHandler {
					public static class: java.lang.Class<com.sendbird.android.APIClient.APIClientProgressHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.APIClient$APIClientProgressHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onProgress(param0: string, param1: number, param2: number, param3: number): void;
					});
					public constructor();
					public onProgress(param0: string, param1: number, param2: number, param3: number): void;
				}
				export class FixedLengthMultipartRequestBody extends com.sendbird.android.shadow.okhttp3.RequestBody {
					public static class: java.lang.Class<com.sendbird.android.APIClient.FixedLengthMultipartRequestBody>;
					public writeTo(param0: com.sendbird.android.shadow.okio.BufferedSink): void;
					public contentType(): com.sendbird.android.shadow.okhttp3.MediaType;
					public contentLength(): number;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class APIRequest {
				public static class: java.lang.Class<com.sendbird.android.APIRequest>;
				public request(param0: com.sendbird.android.shadow.okhttp3.Request): com.sendbird.android.shadow.com.google.gson.JsonElement;
				public handleApiException(param0: com.sendbird.android.SendBirdException, param1: com.sendbird.android.shadow.okhttp3.Request): com.sendbird.android.shadow.com.google.gson.JsonElement;
				public constructor(param0: com.sendbird.android.shadow.okhttp3.OkHttpClient, param1: java.util.Map<string,string>);
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class APITaskQueue {
				public static class: java.lang.Class<com.sendbird.android.APITaskQueue>;
				public static Companion: com.sendbird.android.APITaskQueue.Companion;
				public isEnable(): boolean;
				public shutdown(): void;
				public cancelAll(param0: boolean): void;
				public static addTask(param0: com.sendbird.android.JobTask<any>): java.util.concurrent.Future;
				public cancelAll(): void;
				public shutdownNow(): java.util.List<java.lang.Runnable>;
				public static addTask(param0: com.sendbird.android.JobResultTask<any>): java.util.concurrent.Future;
				public constructor();
			}
			export module APITaskQueue {
				export class Companion {
					public static class: java.lang.Class<com.sendbird.android.APITaskQueue.Companion>;
					public addTask(param0: com.sendbird.android.JobResultTask<any>): java.util.concurrent.Future;
					public addTask(param0: com.sendbird.android.JobTask<any>): java.util.concurrent.Future;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export abstract class AbstractPushHandler<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.sendbird.android.AbstractPushHandler<any>>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class AckSession extends com.sendbird.android.TimeoutScheduler.TimeoutEventhandler {
				public static class: java.lang.Class<com.sendbird.android.AckSession>;
				public onTimeout(param0: any): void;
				public constructor(param0: number, param1: com.sendbird.android.Command.SendCommandHandler);
				public start(): void;
				public ackReceived(): void;
				public cancel(): void;
				public sendResult(param0: com.sendbird.android.Command, param1: com.sendbird.android.SendBirdException): void;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class AdminMessage extends com.sendbird.android.BaseMessage {
				public static class: java.lang.Class<com.sendbird.android.AdminMessage>;
				public getSender(): com.sendbird.android.Sender;
				public getMessageSurvivalSeconds(): number;
				public getSendingStatus(): com.sendbird.android.BaseMessage.SendingStatus;
				public isResendable(): boolean;
				public toString(): string;
				public getRequestId(): string;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class AppInfo {
				public static class: java.lang.Class<com.sendbird.android.AppInfo>;
				public getEmojiHash(): string;
				public toJson(): com.sendbird.android.shadow.com.google.gson.JsonElement;
				public needUpdateEmoji(param0: string): boolean;
				public getUploadSizeLimit(): number;
				public getPremiumFeatureList(): java.util.List<string>;
				public useReaction(): boolean;
				public toString(): string;
				public getAttributesInUse(): java.util.List<string>;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class AppleCriticalAlertOptions {
				public static class: java.lang.Class<com.sendbird.android.AppleCriticalAlertOptions>;
				public static DEFAULT_VOLUME: number;
				public hashCode(): number;
				public constructor(param0: string, param1: number);
				public equals(param0: any): boolean;
				public constructor(param0: number);
				public getName(): string;
				public toJson(): com.sendbird.android.shadow.com.google.gson.JsonObject;
				public toString(): string;
				public constructor(param0: string);
				public constructor();
				public getVolume(): number;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class ApplicationStateHandler {
				public static class: java.lang.Class<com.sendbird.android.ApplicationStateHandler>;
				public onActivityResumedInternal(): void;
				public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
				public onActivityResumed(param0: globalAndroid.app.Activity): void;
				public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
				public onActivityStarted(param0: globalAndroid.app.Activity): void;
				public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
				public onActivityStopped(param0: globalAndroid.app.Activity): void;
				public onActivityPaused(param0: globalAndroid.app.Activity): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class ApplicationUserListQuery extends com.sendbird.android.UserListQuery {
				public static class: java.lang.Class<com.sendbird.android.ApplicationUserListQuery>;
				public setMetaDataFilter(param0: string, param1: java.util.List<string>): void;
				/** @deprecated */
				public setMetaDataFilter(param0: string, param1: java.util.List<string>): void;
				public setNicknameStartsWithFilter(param0: string): void;
				public setUserIdsFilter(param0: java.util.List<string>): void;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class Authentication {
				public static class: java.lang.Class<com.sendbird.android.Authentication>;
				public toString(): string;
			}
			export module Authentication {
				export class RefreshResult {
					public static class: java.lang.Class<com.sendbird.android.Authentication.RefreshResult>;
					public static ALREADY_REFRESHED: com.sendbird.android.Authentication.RefreshResult;
					public static REFRESHED: com.sendbird.android.Authentication.RefreshResult;
					public static DECLINED: com.sendbird.android.Authentication.RefreshResult;
					public static values(): androidNative.Array<com.sendbird.android.Authentication.RefreshResult>;
					public static valueOf(param0: string): com.sendbird.android.Authentication.RefreshResult;
				}
				export class UpdateSessionKeyJobResultTask extends com.sendbird.android.JobResultTask<com.sendbird.android.Authentication.RefreshResult> {
					public static class: java.lang.Class<com.sendbird.android.Authentication.UpdateSessionKeyJobResultTask>;
					public constructor(param0: com.sendbird.android.Authentication, param1: number, param2: number);
					public call(): com.sendbird.android.Authentication.RefreshResult;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class BannedUserListQuery extends com.sendbird.android.UserListQuery {
				public static class: java.lang.Class<com.sendbird.android.BannedUserListQuery>;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export abstract class BaseChannel {
				public static class: java.lang.Class<com.sendbird.android.BaseChannel>;
				public static CHANNEL_TYPE_OPEN: string;
				public static CHANNEL_TYPE_GROUP: string;
				public mUrl: string;
				public mName: string;
				public mCoverUrl: string;
				public mCreatedAt: number;
				public mData: string;
				public mFreeze: boolean;
				public mIsEphemeral: boolean;
				public copyFileMessage(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.FileMessage, param2: com.sendbird.android.BaseChannel.CopyFileMessageHandler): com.sendbird.android.FileMessage;
				public updateMetaCounters(param0: java.util.Map<string,java.lang.Integer>, param1: com.sendbird.android.BaseChannel.MetaCounterHandler): void;
				public sendFileMessage(param0: string, param1: string, param2: string, param3: number, param4: string, param5: string, param6: com.sendbird.android.BaseChannel.SendFileMessageHandler): com.sendbird.android.FileMessage;
				public getCachedMetaData(): java.util.Map<string,string>;
				public addOperators(param0: java.util.Collection<string>, param1: com.sendbird.android.handlers.AddOperatorsHandler): void;
				public createPreviousMessageListQuery(): com.sendbird.android.PreviousMessageListQuery;
				public reportUser(param0: com.sendbird.android.User, param1: com.sendbird.android.BaseChannel.ReportCategory, param2: string, param3: com.sendbird.android.BaseChannel.ReportUserHandler): void;
				public getMessageChangeLogsByToken(param0: string, param1: boolean, param2: com.sendbird.android.BaseChannel.GetMessageChangeLogsByTokenHandler): void;
				public removeAllOperators(param0: com.sendbird.android.handlers.RemoveAllOperatorsHandler): void;
				public deleteMetaCounter(param0: string, param1: com.sendbird.android.BaseChannel.DeleteMetaCounterHandler): void;
				public getPreviousMessagesByTimestamp(param0: number, param1: boolean, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public sendFileMessage(param0: java.io.File, param1: string, param2: string, param3: number, param4: string, param5: com.sendbird.android.BaseChannel.SendFileMessageWithProgressHandler): com.sendbird.android.FileMessage;
				public createMetaData(param0: java.util.Map<string,string>, param1: com.sendbird.android.BaseChannel.MetaDataHandler): void;
				/** @deprecated */
				public sendFileMessage(param0: java.io.File, param1: string, param2: string, param3: number, param4: string, param5: string, param6: com.sendbird.android.BaseChannel.SendFileMessageWithProgressHandler): com.sendbird.android.FileMessage;
				public getCreatedAt(): number;
				public getAllMetaCounters(param0: com.sendbird.android.BaseChannel.MetaCounterHandler): void;
				/** @deprecated */
				public sendUserMessage(param0: string, param1: string, param2: string, param3: com.sendbird.android.BaseChannel.SendUserMessageHandler): com.sendbird.android.UserMessage;
				public getMessageChangeLogsByTimestamp(param0: number, param1: com.sendbird.android.BaseChannel.GetMessageChangeLogsHandler): void;
				/** @deprecated */
				public createMessageListQuery(): com.sendbird.android.MessageListQuery;
				public resendMessage(param0: com.sendbird.android.FileMessage, param1: java.io.File, param2: com.sendbird.android.BaseChannel.ResendFileMessageWithProgressHandler): com.sendbird.android.FileMessage;
				public addMessageMetaArrayValues(param0: com.sendbird.android.BaseMessage, param1: java.util.List<com.sendbird.android.MessageMetaArray>, param2: com.sendbird.android.BaseChannel.MessageMetaArrayHandler): void;
				public getMetaData(param0: java.util.Collection<string>, param1: com.sendbird.android.BaseChannel.MetaDataHandler): void;
				/** @deprecated */
				public addMessageMetaArrayValues(param0: com.sendbird.android.BaseMessage, param1: java.util.Map<string,java.util.List<string>>, param2: com.sendbird.android.BaseChannel.MessageMetaArrayHandler): void;
				public sendFileMessage(param0: com.sendbird.android.FileMessageParams, param1: com.sendbird.android.BaseChannel.SendFileMessageHandler): com.sendbird.android.FileMessage;
				public createMetaCounters(param0: java.util.Map<string,java.lang.Integer>, param1: com.sendbird.android.BaseChannel.MetaCounterHandler): void;
				public getPreviousAndNextMessagesByTimestamp(param0: number, param1: number, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: java.util.List<string>, param7: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public getPreviousMessagesById(param0: number, param1: boolean, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: java.util.List<string>, param7: boolean, param8: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public getPreviousAndNextMessagesByTimestamp(param0: number, param1: number, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: java.util.List<string>, param7: boolean, param8: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public getPreviousAndNextMessagesById(param0: number, param1: number, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: java.util.List<string>, param7: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public increaseMetaCounters(param0: java.util.Map<string,java.lang.Integer>, param1: com.sendbird.android.BaseChannel.MetaCounterHandler): void;
				public getCoverUrl(): string;
				public decreaseMetaCounters(param0: java.util.Map<string,java.lang.Integer>, param1: com.sendbird.android.BaseChannel.MetaCounterHandler): void;
				public getPreviousMessagesById(param0: number, param1: boolean, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: java.util.List<string>, param7: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public deleteAllMetaData(param0: com.sendbird.android.BaseChannel.DeleteMetaDataHandler): void;
				public getNextMessagesByTimestamp(param0: number, param1: boolean, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: java.util.List<string>, param7: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public deleteMetaData(param0: string, param1: com.sendbird.android.BaseChannel.DeleteMetaDataHandler): void;
				public serialize(): androidNative.Array<number>;
				public sendFileMessage(param0: string, param1: string, param2: string, param3: number, param4: string, param5: com.sendbird.android.BaseChannel.SendFileMessageHandler): com.sendbird.android.FileMessage;
				public translateUserMessage(param0: com.sendbird.android.UserMessage, param1: java.util.List<string>, param2: com.sendbird.android.BaseChannel.TranslateUserMessageHandler): void;
				public sendFileMessage(param0: java.io.File, param1: string, param2: string, param3: number, param4: string, param5: string, param6: java.util.List<com.sendbird.android.FileMessage.ThumbnailSize>, param7: com.sendbird.android.BaseChannel.SendFileMessageHandler): com.sendbird.android.FileMessage;
				public getMessageChangeLogsByToken(param0: string, param1: com.sendbird.android.BaseChannel.GetMessageChangeLogsByTokenHandler): void;
				public getMessageChangeLogsByToken(param0: string, param1: boolean, param2: boolean, param3: com.sendbird.android.BaseChannel.GetMessageChangeLogsHandler): void;
				public isDirty(): boolean;
				public updateUserMessage(param0: number, param1: com.sendbird.android.UserMessageParams, param2: com.sendbird.android.BaseChannel.UpdateUserMessageHandler): void;
				public getPreviousAndNextMessagesById(param0: number, param1: number, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: java.util.List<string>, param7: boolean, param8: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public getPreviousAndNextMessagesById(param0: number, param1: number, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: java.util.List<string>, param7: boolean, param8: boolean, param9: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public updateFileMessage(param0: number, param1: com.sendbird.android.FileMessageParams, param2: com.sendbird.android.BaseChannel.UpdateFileMessageHandler): void;
				public createMessageMetaArrayKeys(param0: com.sendbird.android.BaseMessage, param1: java.util.List<string>, param2: com.sendbird.android.BaseChannel.MessageMetaArrayHandler): void;
				public getNextMessagesByTimestamp(param0: number, param1: boolean, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public getData(): string;
				public updateMetaData(param0: java.util.Map<string,string>, param1: com.sendbird.android.BaseChannel.MetaDataHandler): void;
				public sendUserMessage(param0: string, param1: com.sendbird.android.BaseChannel.SendUserMessageHandler): com.sendbird.android.UserMessage;
				public getAllMetaData(param0: com.sendbird.android.BaseChannel.MetaDataHandler): void;
				public getNextMessagesById(param0: number, param1: boolean, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: java.util.List<string>, param7: boolean, param8: boolean, param9: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public getMessageChangeLogsByTimestamp(param0: number, param1: boolean, param2: com.sendbird.android.BaseChannel.GetMessageChangeLogsHandler): void;
				public copyUserMessage(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.UserMessage, param2: com.sendbird.android.BaseChannel.CopyUserMessageHandler): com.sendbird.android.UserMessage;
				public getMessagesByMessageId(param0: number, param1: com.sendbird.android.MessageListParams, param2: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public sendFileMessage(param0: java.io.File, param1: string, param2: string, param3: number, param4: string, param5: string, param6: java.util.List<com.sendbird.android.FileMessage.ThumbnailSize>, param7: com.sendbird.android.BaseChannel.SendFileMessageWithProgressHandler): com.sendbird.android.FileMessage;
				public resendFileMessage(param0: com.sendbird.android.FileMessage, param1: java.io.File, param2: com.sendbird.android.BaseChannel.ResendFileMessageWithProgressHandler): void;
				public updateUserMessage(param0: number, param1: string, param2: string, param3: string, param4: com.sendbird.android.BaseChannel.UpdateUserMessageHandler): void;
				public hashCode(): number;
				public addReaction(param0: com.sendbird.android.BaseMessage, param1: string, param2: com.sendbird.android.BaseChannel.ReactionHandler): void;
				public equals(param0: any): boolean;
				public getPreviousAndNextMessagesByTimestamp(param0: number, param1: number, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public getPreviousMessagesByTimestamp(param0: number, param1: boolean, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: java.util.List<string>, param7: boolean, param8: boolean, param9: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public reportMessage(param0: com.sendbird.android.BaseMessage, param1: com.sendbird.android.BaseChannel.ReportCategory, param2: string, param3: com.sendbird.android.BaseChannel.ReportMessageHandler): void;
				public update(param0: com.sendbird.android.shadow.com.google.gson.JsonElement): void;
				public getPreviousMessagesByTimestamp(param0: number, param1: boolean, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: java.util.List<string>, param7: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public getNextMessagesByTimestamp(param0: number, param1: boolean, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: java.util.List<string>, param7: boolean, param8: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				/** @deprecated */
				public removeMessageMetaArrayValues(param0: com.sendbird.android.BaseMessage, param1: java.util.Map<string,java.util.List<string>>, param2: com.sendbird.android.BaseChannel.MessageMetaArrayHandler): void;
				public getUrl(): string;
				public getName(): string;
				public getNextMessagesById(param0: number, param1: boolean, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: java.util.List<string>, param7: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public setDirty(param0: boolean): void;
				public deleteAllMetaCounters(param0: com.sendbird.android.BaseChannel.DeleteMetaCounterHandler): void;
				public toString(): string;
				public deleteReaction(param0: com.sendbird.android.BaseMessage, param1: string, param2: com.sendbird.android.BaseChannel.ReactionHandler): void;
				public getMessagesByTimestamp(param0: number, param1: com.sendbird.android.MessageListParams, param2: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				/** @deprecated */
				public sendUserMessage(param0: string, param1: string, param2: com.sendbird.android.BaseChannel.SendUserMessageHandler): com.sendbird.android.UserMessage;
				public getPreviousMessagesById(param0: number, param1: boolean, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: java.util.List<string>, param7: boolean, param8: boolean, param9: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public isEphemeral(): boolean;
				public removeMessageMetaArrayValues(param0: com.sendbird.android.BaseMessage, param1: java.util.List<com.sendbird.android.MessageMetaArray>, param2: com.sendbird.android.BaseChannel.MessageMetaArrayHandler): void;
				public static buildFromSerializedData(param0: androidNative.Array<number>): com.sendbird.android.BaseChannel;
				public getPreviousMessagesByTimestamp(param0: number, param1: boolean, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: java.util.List<string>, param7: boolean, param8: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public isGroupChannel(): boolean;
				public getMetaCounters(param0: java.util.Collection<string>, param1: com.sendbird.android.BaseChannel.MetaCounterHandler): void;
				/** @deprecated */
				public sendFileMessage(param0: java.io.File, param1: string, param2: string, param3: number, param4: string, param5: string, param6: com.sendbird.android.BaseChannel.SendFileMessageHandler): com.sendbird.android.FileMessage;
				public createOperatorListQuery(): com.sendbird.android.OperatorListQuery;
				public getNextMessagesByTimestamp(param0: number, param1: boolean, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: java.util.List<string>, param7: boolean, param8: boolean, param9: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public getMyMutedInfo(param0: com.sendbird.android.BaseChannel.GetMyMutedInfoHandler): void;
				public isFrozen(): boolean;
				public getNextMessagesById(param0: number, param1: boolean, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public getPreviousMessagesById(param0: number, param1: boolean, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public resendUserMessage(param0: com.sendbird.android.UserMessage, param1: com.sendbird.android.BaseChannel.ResendUserMessageHandler): void;
				public getMessageChangeLogsByTimestamp(param0: number, param1: boolean, param2: boolean, param3: com.sendbird.android.BaseChannel.GetMessageChangeLogsHandler): void;
				public removeOperators(param0: java.util.Collection<string>, param1: com.sendbird.android.handlers.RemoveOperatorsHandler): void;
				public resendMessage(param0: com.sendbird.android.FileMessage, param1: java.io.File, param2: com.sendbird.android.BaseChannel.ResendFileMessageHandler): com.sendbird.android.FileMessage;
				public sendFileMessages(param0: java.util.List<com.sendbird.android.FileMessageParams>, param1: com.sendbird.android.BaseChannel.SendFileMessagesWithProgressHandler): java.util.List<com.sendbird.android.FileMessage>;
				public sendUserMessage(param0: string, param1: string, param2: string, param3: java.util.List<string>, param4: com.sendbird.android.BaseChannel.SendUserMessageHandler): com.sendbird.android.UserMessage;
				public sendFileMessage(param0: java.io.File, param1: string, param2: string, param3: number, param4: string, param5: com.sendbird.android.BaseChannel.SendFileMessageHandler): com.sendbird.android.FileMessage;
				public getNextMessagesById(param0: number, param1: boolean, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: java.util.List<string>, param7: boolean, param8: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public sendFileMessages(param0: java.util.List<com.sendbird.android.FileMessageParams>, param1: com.sendbird.android.BaseChannel.SendFileMessagesHandler): java.util.List<com.sendbird.android.FileMessage>;
				public resendMessage(param0: com.sendbird.android.UserMessage, param1: com.sendbird.android.BaseChannel.ResendUserMessageHandler): com.sendbird.android.UserMessage;
				public constructor(param0: com.sendbird.android.shadow.com.google.gson.JsonElement);
				public cancelFileMessageUpload(param0: string): boolean;
				public sendFileMessage(param0: com.sendbird.android.FileMessageParams, param1: com.sendbird.android.BaseChannel.SendFileMessageWithProgressHandler): com.sendbird.android.FileMessage;
				public sendUserMessage(param0: com.sendbird.android.UserMessageParams, param1: com.sendbird.android.BaseChannel.SendUserMessageHandler): com.sendbird.android.UserMessage;
				public getMessageChangeLogsSinceToken(param0: string, param1: com.sendbird.android.MessageChangeLogsParams, param2: com.sendbird.android.BaseChannel.GetMessageChangeLogsHandler): void;
				public deleteMessage(param0: com.sendbird.android.BaseMessage, param1: com.sendbird.android.BaseChannel.DeleteMessageHandler): void;
				public report(param0: com.sendbird.android.BaseChannel.ReportCategory, param1: string, param2: com.sendbird.android.BaseChannel.ReportHandler): void;
				public getPreviousAndNextMessagesByTimestamp(param0: number, param1: number, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: java.util.List<string>, param7: boolean, param8: boolean, param9: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public getPreviousAndNextMessagesById(param0: number, param1: number, param2: number, param3: boolean, param4: com.sendbird.android.BaseChannel.MessageTypeFilter, param5: string, param6: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public updateFileMessage(param0: number, param1: string, param2: string, param3: com.sendbird.android.BaseChannel.UpdateFileMessageHandler): void;
				public isOpenChannel(): boolean;
				public deleteMessageMetaArrayKeys(param0: com.sendbird.android.BaseMessage, param1: java.util.List<string>, param2: com.sendbird.android.BaseChannel.MessageMetaArrayHandler): void;
				public resendFileMessage(param0: com.sendbird.android.FileMessage, param1: java.io.File, param2: com.sendbird.android.BaseChannel.ResendFileMessageHandler): void;
				public getMessageChangeLogsSinceTimestamp(param0: number, param1: com.sendbird.android.MessageChangeLogsParams, param2: com.sendbird.android.BaseChannel.GetMessageChangeLogsHandler): void;
			}
			export module BaseChannel {
				export class ChannelType {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.ChannelType>;
					public static OPEN: com.sendbird.android.BaseChannel.ChannelType;
					public static GROUP: com.sendbird.android.BaseChannel.ChannelType;
					public static values(): androidNative.Array<com.sendbird.android.BaseChannel.ChannelType>;
					public static fromValue(param0: string): com.sendbird.android.BaseChannel.ChannelType;
					public static valueOf(param0: string): com.sendbird.android.BaseChannel.ChannelType;
					public value(): string;
				}
				export class CopyFileMessageHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.CopyFileMessageHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$CopyFileMessageHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCopied(param0: com.sendbird.android.FileMessage, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onCopied(param0: com.sendbird.android.FileMessage, param1: com.sendbird.android.SendBirdException): void;
				}
				export class CopyUserMessageHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.CopyUserMessageHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$CopyUserMessageHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCopied(param0: com.sendbird.android.UserMessage, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onCopied(param0: com.sendbird.android.UserMessage, param1: com.sendbird.android.SendBirdException): void;
				}
				export class DeleteMessageHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.DeleteMessageHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$DeleteMessageHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class DeleteMetaCounterHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.DeleteMetaCounterHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$DeleteMetaCounterHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class DeleteMetaDataHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.DeleteMetaDataHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$DeleteMetaDataHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class GetMessageChangeLogsByTokenHandler extends com.sendbird.android.BaseChannel.GetMessageChangeLogsHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.GetMessageChangeLogsByTokenHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$GetMessageChangeLogsByTokenHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.List<com.sendbird.android.BaseMessage>, param1: java.util.List<java.lang.Long>, param2: boolean, param3: string, param4: com.sendbird.android.SendBirdException): void;
						onResult(param0: java.util.List<com.sendbird.android.BaseMessage>, param1: java.util.List<java.lang.Long>, param2: boolean, param3: string, param4: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.List<com.sendbird.android.BaseMessage>, param1: java.util.List<java.lang.Long>, param2: boolean, param3: string, param4: com.sendbird.android.SendBirdException): void;
				}
				export class GetMessageChangeLogsHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.GetMessageChangeLogsHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$GetMessageChangeLogsHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.List<com.sendbird.android.BaseMessage>, param1: java.util.List<java.lang.Long>, param2: boolean, param3: string, param4: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.List<com.sendbird.android.BaseMessage>, param1: java.util.List<java.lang.Long>, param2: boolean, param3: string, param4: com.sendbird.android.SendBirdException): void;
				}
				export class GetMessagesHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.GetMessagesHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$GetMessagesHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.List<com.sendbird.android.BaseMessage>, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.List<com.sendbird.android.BaseMessage>, param1: com.sendbird.android.SendBirdException): void;
				}
				export class GetMyMutedInfoHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.GetMyMutedInfoHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$GetMyMutedInfoHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: boolean, param1: string, param2: number, param3: number, param4: number, param5: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: boolean, param1: string, param2: number, param3: number, param4: number, param5: com.sendbird.android.SendBirdException): void;
				}
				export class MessageMetaArrayHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.MessageMetaArrayHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$MessageMetaArrayHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.BaseMessage, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.BaseMessage, param1: com.sendbird.android.SendBirdException): void;
				}
				export class MessageTypeFilter {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.MessageTypeFilter>;
					public static ALL: com.sendbird.android.BaseChannel.MessageTypeFilter;
					public static USER: com.sendbird.android.BaseChannel.MessageTypeFilter;
					public static FILE: com.sendbird.android.BaseChannel.MessageTypeFilter;
					public static ADMIN: com.sendbird.android.BaseChannel.MessageTypeFilter;
					public static fromValue(param0: string): com.sendbird.android.BaseChannel.MessageTypeFilter;
					public static valueOf(param0: string): com.sendbird.android.BaseChannel.MessageTypeFilter;
					public value(): string;
					public static values(): androidNative.Array<com.sendbird.android.BaseChannel.MessageTypeFilter>;
				}
				export class MetaCounterHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.MetaCounterHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$MetaCounterHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.Map<string,java.lang.Integer>, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.Map<string,java.lang.Integer>, param1: com.sendbird.android.SendBirdException): void;
				}
				export class MetaDataHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.MetaDataHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$MetaDataHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.Map<string,string>, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.Map<string,string>, param1: com.sendbird.android.SendBirdException): void;
				}
				export class ReactionHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.ReactionHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$ReactionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.ReactionEvent, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.ReactionEvent, param1: com.sendbird.android.SendBirdException): void;
				}
				export class ReportCategory {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.ReportCategory>;
					public static SUSPICIOUS: com.sendbird.android.BaseChannel.ReportCategory;
					public static HARASSING: com.sendbird.android.BaseChannel.ReportCategory;
					public static SPAM: com.sendbird.android.BaseChannel.ReportCategory;
					public static INAPPROPRIATE: com.sendbird.android.BaseChannel.ReportCategory;
					public static valueOf(param0: string): com.sendbird.android.BaseChannel.ReportCategory;
					public static values(): androidNative.Array<com.sendbird.android.BaseChannel.ReportCategory>;
				}
				export class ReportHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.ReportHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$ReportHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class ReportMessageHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.ReportMessageHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$ReportMessageHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class ReportUserHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.ReportUserHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$ReportUserHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class ResendFileMessageHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.ResendFileMessageHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$ResendFileMessageHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSent(param0: com.sendbird.android.FileMessage, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onSent(param0: com.sendbird.android.FileMessage, param1: com.sendbird.android.SendBirdException): void;
				}
				export class ResendFileMessageWithProgressHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.ResendFileMessageWithProgressHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$ResendFileMessageWithProgressHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onProgress(param0: number, param1: number, param2: number): void;
						onSent(param0: com.sendbird.android.FileMessage, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onProgress(param0: number, param1: number, param2: number): void;
					public onSent(param0: com.sendbird.android.FileMessage, param1: com.sendbird.android.SendBirdException): void;
				}
				export class ResendUserMessageHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.ResendUserMessageHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$ResendUserMessageHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSent(param0: com.sendbird.android.UserMessage, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onSent(param0: com.sendbird.android.UserMessage, param1: com.sendbird.android.SendBirdException): void;
				}
				export class SendFileMessageData {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.SendFileMessageData>;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
				}
				export module SendFileMessageData {
					export class ServerSideData {
						public static class: java.lang.Class<com.sendbird.android.BaseChannel.SendFileMessageData.ServerSideData>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
				}
				export class SendFileMessageHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.SendFileMessageHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$SendFileMessageHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSent(param0: com.sendbird.android.FileMessage, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onSent(param0: com.sendbird.android.FileMessage, param1: com.sendbird.android.SendBirdException): void;
				}
				export class SendFileMessageWithProgressHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.SendFileMessageWithProgressHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$SendFileMessageWithProgressHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onProgress(param0: number, param1: number, param2: number): void;
						onSent(param0: com.sendbird.android.FileMessage, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onProgress(param0: number, param1: number, param2: number): void;
					public onSent(param0: com.sendbird.android.FileMessage, param1: com.sendbird.android.SendBirdException): void;
				}
				export class SendFileMessagesHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.SendFileMessagesHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$SendFileMessagesHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSent(param0: com.sendbird.android.FileMessage, param1: com.sendbird.android.SendBirdException): void;
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onSent(param0: com.sendbird.android.FileMessage, param1: com.sendbird.android.SendBirdException): void;
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class SendFileMessagesWithProgressHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.SendFileMessagesWithProgressHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$SendFileMessagesWithProgressHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onProgress(param0: string, param1: number, param2: number, param3: number): void;
						onSent(param0: com.sendbird.android.FileMessage, param1: com.sendbird.android.SendBirdException): void;
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onSent(param0: com.sendbird.android.FileMessage, param1: com.sendbird.android.SendBirdException): void;
					public onResult(param0: com.sendbird.android.SendBirdException): void;
					public onProgress(param0: string, param1: number, param2: number, param3: number): void;
				}
				export class SendUserMessageHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.SendUserMessageHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$SendUserMessageHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSent(param0: com.sendbird.android.UserMessage, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onSent(param0: com.sendbird.android.UserMessage, param1: com.sendbird.android.SendBirdException): void;
				}
				export class TranslateUserMessageHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.TranslateUserMessageHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$TranslateUserMessageHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onTranslated(param0: com.sendbird.android.UserMessage, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onTranslated(param0: com.sendbird.android.UserMessage, param1: com.sendbird.android.SendBirdException): void;
				}
				export class UpdateFileMessageHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.UpdateFileMessageHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$UpdateFileMessageHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onUpdated(param0: com.sendbird.android.FileMessage, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onUpdated(param0: com.sendbird.android.FileMessage, param1: com.sendbird.android.SendBirdException): void;
				}
				export class UpdateUserMessageHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseChannel.UpdateUserMessageHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseChannel$UpdateUserMessageHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onUpdated(param0: com.sendbird.android.UserMessage, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onUpdated(param0: com.sendbird.android.UserMessage, param1: com.sendbird.android.SendBirdException): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export abstract class BaseCollection {
				public static class: java.lang.Class<com.sendbird.android.BaseCollection>;
				public isLive(): boolean;
				public onReconnected(): void;
				public onChannelDeleted(param0: com.sendbird.android.handlers.Source, param1: com.sendbird.android.GroupChannel): void;
				public onResume(): void;
				public onMessageAdded(param0: com.sendbird.android.handlers.Source, param1: com.sendbird.android.GroupChannel, param2: com.sendbird.android.BaseMessage): void;
				public dispose(): void;
				public onPause(): void;
				public onChannelChanged(param0: com.sendbird.android.handlers.Source, param1: com.sendbird.android.GroupChannel): void;
				public onMessageDeleted(param0: com.sendbird.android.handlers.Source, param1: com.sendbird.android.GroupChannel, param2: number): void;
				public onMessageUpdated(param0: com.sendbird.android.handlers.Source, param1: com.sendbird.android.GroupChannel, param2: com.sendbird.android.BaseMessage): void;
				public onChannelsChanged(param0: com.sendbird.android.handlers.Source, param1: java.util.List<com.sendbird.android.GroupChannel>): void;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export abstract class BaseMessage {
				public static class: java.lang.Class<com.sendbird.android.BaseMessage>;
				public static RESENDABLE_ERROR_CODES: java.util.Set<java.lang.Integer>;
				public mReqId: string;
				public mMessageId: number;
				public rootMessageId: number;
				public parentMessageId: number;
				public mChannelUrl: string;
				public channelType: com.sendbird.android.BaseChannel.ChannelType;
				public mMessage: string;
				public mData: string;
				public mCustomType: string;
				public mCreatedAt: number;
				public mUpdatedAt: number;
				public mMentionType: com.sendbird.android.BaseMessageParams.MentionType;
				public mMentionedUserIds: java.util.List<string>;
				public mMentionedUsers: java.util.List<com.sendbird.android.User>;
				public mMetaArrays: java.util.List<com.sendbird.android.MessageMetaArray>;
				public mIsGlobalBlocked: boolean;
				public mErrorCode: number;
				public mSender: com.sendbird.android.Sender;
				public getMessageSurvivalSeconds(): number;
				public getUpdatedAt(): number;
				public static clone(param0: com.sendbird.android.BaseMessage): com.sendbird.android.BaseMessage;
				public static belongsTo(param0: com.sendbird.android.BaseMessage, param1: string): boolean;
				/** @deprecated */
				public getAllMetaArray(): java.util.Map<string,java.util.List<string>>;
				public getMentionType(): com.sendbird.android.BaseMessageParams.MentionType;
				public getChannelUrl(): string;
				public getReactions(): java.util.List<com.sendbird.android.Reaction>;
				public getSender(): com.sendbird.android.Sender;
				public getMessageId(): number;
				public applyReactionEvent(param0: com.sendbird.android.ReactionEvent): boolean;
				public hashCode(): number;
				public getParentMessageText(): string;
				public equals(param0: any): boolean;
				public getMessage(): string;
				/** @deprecated */
				public static build(param0: com.sendbird.android.shadow.com.google.gson.JsonElement, param1: string, param2: string): com.sendbird.android.BaseMessage;
				public static belongsTo(param0: com.sendbird.android.BaseMessage, param1: com.sendbird.android.User): boolean;
				public serialize(): androidNative.Array<number>;
				public static buildFromSerializedData(param0: androidNative.Array<number>): com.sendbird.android.BaseMessage;
				public getAppleCriticalAlertOptions(): com.sendbird.android.AppleCriticalAlertOptions;
				/** @deprecated */
				public getMetaArray(param0: java.util.Collection<string>): java.util.Map<string,java.util.List<string>>;
				public static createMessage(param0: com.sendbird.android.shadow.com.google.gson.JsonElement, param1: string, param2: com.sendbird.android.BaseChannel.ChannelType): com.sendbird.android.BaseMessage;
				public isSilent(): boolean;
				public constructor(param0: com.sendbird.android.shadow.com.google.gson.JsonElement);
				public getParentMessageId(): number;
				public getThreadedMessagesByTimestamp(param0: number, param1: com.sendbird.android.ThreadMessageListParams, param2: com.sendbird.android.BaseMessage.GetThreadedMessagesHandler): void;
				public constructor(param0: string, param1: number, param2: number);
				public isResendable(): boolean;
				public getErrorCode(): number;
				public toString(): string;
				public getRequestId(): string;
				public getCreatedAt(): number;
				public getMentionedUsers(): java.util.List<com.sendbird.android.User>;
				public isOperatorMessage(): boolean;
				public getCustomType(): string;
				public getAllMetaArrays(): java.util.List<com.sendbird.android.MessageMetaArray>;
				public getMetaArrays(param0: java.util.Collection<string>): java.util.List<com.sendbird.android.MessageMetaArray>;
				public getThreadInfo(): com.sendbird.android.ThreadInfo;
				public static buildFromSerializedData(param0: androidNative.Array<number>, param1: com.sendbird.android.BaseMessage.SendingStatus): com.sendbird.android.BaseMessage;
				public setAppleCriticalAlertOptions(param0: com.sendbird.android.AppleCriticalAlertOptions): void;
				public getData(): string;
				public applyThreadInfoUpdateEvent(param0: com.sendbird.android.ThreadInfoUpdateEvent): boolean;
				public getSendingStatus(): com.sendbird.android.BaseMessage.SendingStatus;
				public isOpenChannel(): boolean;
				public isGroupChannel(): boolean;
				public static getMessage(param0: com.sendbird.android.MessageRetrievalParams, param1: com.sendbird.android.BaseMessage.GetMessageHandler): void;
				public getOgMetaData(): com.sendbird.android.OGMetaData;
			}
			export module BaseMessage {
				export class GetMessageHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseMessage.GetMessageHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseMessage$GetMessageHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.BaseMessage, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.BaseMessage, param1: com.sendbird.android.SendBirdException): void;
				}
				export class GetThreadedMessagesHandler {
					public static class: java.lang.Class<com.sendbird.android.BaseMessage.GetThreadedMessagesHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.BaseMessage$GetThreadedMessagesHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.BaseMessage, param1: java.util.List<com.sendbird.android.BaseMessage>, param2: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.BaseMessage, param1: java.util.List<com.sendbird.android.BaseMessage>, param2: com.sendbird.android.SendBirdException): void;
				}
				export class SendingStatus {
					public static class: java.lang.Class<com.sendbird.android.BaseMessage.SendingStatus>;
					public static NONE: com.sendbird.android.BaseMessage.SendingStatus;
					public static PENDING: com.sendbird.android.BaseMessage.SendingStatus;
					public static FAILED: com.sendbird.android.BaseMessage.SendingStatus;
					public static SUCCEEDED: com.sendbird.android.BaseMessage.SendingStatus;
					public static CANCELED: com.sendbird.android.BaseMessage.SendingStatus;
					public static fromValue(param0: string): com.sendbird.android.BaseMessage.SendingStatus;
					public getValue(): string;
					public static valueOf(param0: string): com.sendbird.android.BaseMessage.SendingStatus;
					public static values(): androidNative.Array<com.sendbird.android.BaseMessage.SendingStatus>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class BaseMessageListParams {
				public static class: java.lang.Class<com.sendbird.android.BaseMessageListParams>;
				public previousResultSize: number;
				public nextResultSize: number;
				public messageType: com.sendbird.android.BaseChannel.MessageTypeFilter;
				public customTypes: java.util.Collection<string>;
				public senderUserIds: java.util.List<string>;
				public reverse: boolean;
				public includeMetaArray: boolean;
				public includeReactions: boolean;
				public includeParentMessageText: boolean;
				public constructor(param0: number, param1: number, param2: com.sendbird.android.BaseChannel.MessageTypeFilter, param3: string, param4: java.util.List<string>, param5: boolean, param6: boolean, param7: boolean, param8: boolean, param9: boolean);
				public getMessageType(): com.sendbird.android.BaseChannel.MessageTypeFilter;
				public setCustomType(param0: string): void;
				public shouldReverse(): boolean;
				public getSenderUserIds(): java.util.List<string>;
				public setNextResultSize(param0: number): void;
				public constructor();
				public setIncludeReactions(param0: boolean): void;
				public getNextResultSize(): number;
				public shouldIncludeMetaArray(): boolean;
				public belongsTo(param0: com.sendbird.android.BaseMessage): boolean;
				public setIncludeParentMessageText(param0: boolean): void;
				public setMessageType(param0: com.sendbird.android.BaseChannel.MessageTypeFilter): void;
				public constructor(param0: number, param1: number, param2: com.sendbird.android.BaseChannel.MessageTypeFilter, param3: java.util.Collection<string>, param4: java.util.List<string>, param5: boolean, param6: boolean, param7: boolean, param8: boolean, param9: boolean);
				public setReverse(param0: boolean): void;
				public getPreviousResultSize(): number;
				public shouldIncludeParentMessageText(): boolean;
				public setSenderUserIds(param0: java.util.List<string>): void;
				public getCustomTypes(): java.util.Collection<string>;
				public toString(): string;
				public setPreviousResultSize(param0: number): void;
				public setInclusive(param0: boolean): void;
				public getCustomType(): string;
				public setIncludeMetaArray(param0: boolean): void;
				public shouldIncludeReactions(): boolean;
				public setCustomTypes(param0: java.util.Collection<string>): void;
				public isInclusive(): boolean;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export abstract class BaseMessageParams {
				public static class: java.lang.Class<com.sendbird.android.BaseMessageParams>;
				public toString(): string;
				public setAppleCriticalAlertOptions(param0: com.sendbird.android.AppleCriticalAlertOptions): com.sendbird.android.BaseMessageParams;
				public constructor();
			}
			export module BaseMessageParams {
				export class MentionType {
					public static class: java.lang.Class<com.sendbird.android.BaseMessageParams.MentionType>;
					public static USERS: com.sendbird.android.BaseMessageParams.MentionType;
					public static CHANNEL: com.sendbird.android.BaseMessageParams.MentionType;
					public getValue(): string;
					public static from(param0: string): com.sendbird.android.BaseMessageParams.MentionType;
					public static valueOf(param0: string): com.sendbird.android.BaseMessageParams.MentionType;
					public static values(): androidNative.Array<com.sendbird.android.BaseMessageParams.MentionType>;
				}
				export class PushNotificationDeliveryOption {
					public static class: java.lang.Class<com.sendbird.android.BaseMessageParams.PushNotificationDeliveryOption>;
					public static DEFAULT: com.sendbird.android.BaseMessageParams.PushNotificationDeliveryOption;
					public static SUPPRESS: com.sendbird.android.BaseMessageParams.PushNotificationDeliveryOption;
					public static valueOf(param0: string): com.sendbird.android.BaseMessageParams.PushNotificationDeliveryOption;
					public static values(): androidNative.Array<com.sendbird.android.BaseMessageParams.PushNotificationDeliveryOption>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class BlockedUserListQuery extends com.sendbird.android.UserListQuery {
				public static class: java.lang.Class<com.sendbird.android.BlockedUserListQuery>;
				public setUserIdsFilter(param0: java.util.List<string>): void;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class BuildConfig {
				public static class: java.lang.Class<com.sendbird.android.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public static DEBUG_API_HOST: string;
				public static DEBUG_ROUTING_URL: string;
				public static DEBUG_WS_HOST: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class CancelableExecutorService {
				public static class: java.lang.Class<com.sendbird.android.CancelableExecutorService>;
				public invokeAll(param0: java.util.Collection, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List;
				public static newSingleThreadExecutor(): com.sendbird.android.CancelableExecutorService;
				public isTerminated(): boolean;
				public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
				public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future;
				public invokeAny(param0: java.util.Collection): any;
				public static newCachedThreadExecutor(): com.sendbird.android.CancelableExecutorService;
				public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
				public submit(param0: java.util.concurrent.Callable): java.util.concurrent.Future;
				public shutdown(): void;
				public cancelAll(param0: boolean): void;
				public cancelAll(): void;
				public shutdownNow(): java.util.List<java.lang.Runnable>;
				public execute(param0: java.lang.Runnable): void;
				public isShutdown(): boolean;
				public isEnabled(): boolean;
				public invokeAll(param0: java.util.Collection): java.util.List;
				public static newFixedThreadExecutor(param0: number): com.sendbird.android.CancelableExecutorService;
				public invokeAny(param0: java.util.Collection, param1: number, param2: java.util.concurrent.TimeUnit): any;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class ChannelChangeLogsPager {
				public static class: java.lang.Class<com.sendbird.android.ChannelChangeLogsPager>;
				public constructor(param0: com.sendbird.android.GroupChannelChangeLogsParams);
				public dispose(): void;
				public request(param0: com.sendbird.android.handlers.TokenDataSource, param1: com.sendbird.android.handlers.ChannelChangeLogsHandler): java.util.concurrent.Future<string>;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class ChannelCollection extends com.sendbird.android.BaseCollection {
				public static class: java.lang.Class<com.sendbird.android.ChannelCollection>;
				public onReconnected(): void;
				public onChannelDeleted(param0: com.sendbird.android.handlers.Source, param1: com.sendbird.android.GroupChannel): void;
				public onResume(): void;
				public static getChannelFromCache(param0: string): com.sendbird.android.BaseChannel;
				public setChannelCollectionHandler(param0: com.sendbird.android.handlers.ChannelCollectionHandler): void;
				public hasNext(): boolean;
				public dispose(): void;
				public onPause(): void;
				public onChannelChanged(param0: com.sendbird.android.handlers.Source, param1: com.sendbird.android.GroupChannel): void;
				public getChannelList(): androidx.lifecycle.LiveData<java.util.List<com.sendbird.android.GroupChannel>>;
				public onChannelsChanged(param0: com.sendbird.android.handlers.Source, param1: java.util.List<com.sendbird.android.GroupChannel>): void;
				public loadNext(param0: com.sendbird.android.handlers.OnChannelLoadResultHandler): void;
			}
			export module ChannelCollection {
				export class Builder {
					public static class: java.lang.Class<com.sendbird.android.ChannelCollection.Builder>;
					public build(): com.sendbird.android.ChannelCollection;
					public constructor();
					public constructor(param0: com.sendbird.android.GroupChannelListQuery);
					public setChannelCollectionHandler(param0: com.sendbird.android.handlers.ChannelCollectionHandler): com.sendbird.android.ChannelCollection.Builder;
				}
				export class UpdateAction {
					public static class: java.lang.Class<com.sendbird.android.ChannelCollection.UpdateAction>;
					public static ADD: com.sendbird.android.ChannelCollection.UpdateAction;
					public static DELETE: com.sendbird.android.ChannelCollection.UpdateAction;
					public static UPDATE: com.sendbird.android.ChannelCollection.UpdateAction;
					public static valueOf(param0: string): com.sendbird.android.ChannelCollection.UpdateAction;
					public static values(): androidNative.Array<com.sendbird.android.ChannelCollection.UpdateAction>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class ChannelDataSource {
				public static class: java.lang.Class<com.sendbird.android.ChannelDataSource>;
				public static getInstance(): com.sendbird.android.ChannelDataSource;
			}
			export module ChannelDataSource {
				export class ChannelCacheHolder {
					public static class: java.lang.Class<com.sendbird.android.ChannelDataSource.ChannelCacheHolder>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class ChannelEvent {
				public static class: java.lang.Class<com.sendbird.android.ChannelEvent>;
				public getCategory(): com.sendbird.android.ChannelEventCategory;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: com.sendbird.android.shadow.com.google.gson.JsonElement);
				public getData(): com.sendbird.android.shadow.com.google.gson.JsonElement;
				public toJsonObject(): com.sendbird.android.shadow.com.google.gson.JsonObject;
				public isGroupChannel(): boolean;
				public isOpenChannel(): boolean;
				public toString(): string;
				public getChannelUrl(): string;
				public getTs(): number;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class ChannelEventCategory {
				public static class: java.lang.Class<com.sendbird.android.ChannelEventCategory>;
				public static CATEGORY_NONE: com.sendbird.android.ChannelEventCategory;
				public static CHANNEL_ENTER: com.sendbird.android.ChannelEventCategory;
				public static CHANNEL_EXIT: com.sendbird.android.ChannelEventCategory;
				public static USER_CHANNEL_MUTE: com.sendbird.android.ChannelEventCategory;
				public static USER_CHANNEL_UNMUTE: com.sendbird.android.ChannelEventCategory;
				public static USER_CHANNEL_BAN: com.sendbird.android.ChannelEventCategory;
				public static USER_CHANNEL_UNBAN: com.sendbird.android.ChannelEventCategory;
				public static CHANNEL_FREEZE: com.sendbird.android.ChannelEventCategory;
				public static CHANNEL_UNFREEZE: com.sendbird.android.ChannelEventCategory;
				public static PROFANITY_MESSAGE_BLOCK: com.sendbird.android.ChannelEventCategory;
				public static TYPING_START: com.sendbird.android.ChannelEventCategory;
				public static TYPING_END: com.sendbird.android.ChannelEventCategory;
				public static CHANNEL_JOIN: com.sendbird.android.ChannelEventCategory;
				public static CHANNEL_LEAVE: com.sendbird.android.ChannelEventCategory;
				public static CHANNEL_OPERATOR_CHANGED: com.sendbird.android.ChannelEventCategory;
				public static CHANNEL_INVITE: com.sendbird.android.ChannelEventCategory;
				public static CHANNEL_DECLINE_INVITE: com.sendbird.android.ChannelEventCategory;
				public static CHANNEL_PROP_CHANGED: com.sendbird.android.ChannelEventCategory;
				public static CHANNEL_DELETED: com.sendbird.android.ChannelEventCategory;
				public static CHANNEL_META_DATA_CHANGED: com.sendbird.android.ChannelEventCategory;
				public static CHANNEL_META_COUNTERS_CHANGED: com.sendbird.android.ChannelEventCategory;
				public static CHANNEL_HIDDEN: com.sendbird.android.ChannelEventCategory;
				public static CHANNEL_UNHIDDEN: com.sendbird.android.ChannelEventCategory;
				public static Companion: com.sendbird.android.ChannelEventCategory.Companion;
				public static valueOf(param0: string): com.sendbird.android.ChannelEventCategory;
				public static from(param0: number): com.sendbird.android.ChannelEventCategory;
				public getCategory(): number;
				public static values(): androidNative.Array<com.sendbird.android.ChannelEventCategory>;
				public useWithoutCache(): boolean;
			}
			export module ChannelEventCategory {
				export class Companion {
					public static class: java.lang.Class<com.sendbird.android.ChannelEventCategory.Companion>;
					public from(param0: number): com.sendbird.android.ChannelEventCategory;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class ChannelRepository {
				public static class: java.lang.Class<com.sendbird.android.ChannelRepository>;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class ChannelSyncManager {
				public static class: java.lang.Class<com.sendbird.android.ChannelSyncManager>;
			}
			export module ChannelSyncManager {
				export class ChannelSyncManagerHolder {
					public static class: java.lang.Class<com.sendbird.android.ChannelSyncManager.ChannelSyncManagerHolder>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class CollectionUtils {
				public static class: java.lang.Class<com.sendbird.android.CollectionUtils>;
				public static INSTANCE: com.sendbird.android.CollectionUtils;
				public static toCSV(param0: java.util.Collection<string>): string;
				public static copiedListOrNull(param0: java.util.Collection): java.util.List;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class Command {
				public static class: java.lang.Class<com.sendbird.android.Command>;
				public getCommandType(): com.sendbird.android.CommandType;
				public hasRequestId(): boolean;
				public constructor(param0: string, param1: com.sendbird.android.shadow.com.google.gson.JsonElement);
				public static bTypeEnd(param0: string, param1: number): com.sendbird.android.Command;
				public static bMsgAck(param0: string, param1: number): com.sendbird.android.Command;
				public static bUpdateFile(param0: string, param1: number, param2: string, param3: string, param4: com.sendbird.android.BaseMessageParams.MentionType, param5: java.util.List<string>, param6: java.util.List<com.sendbird.android.MessageMetaArray>, param7: java.lang.Boolean, param8: java.lang.Boolean): com.sendbird.android.Command;
				public static bPing(): com.sendbird.android.Command;
				public static generateRequestId(): string;
				public getJsonElement(): com.sendbird.android.shadow.com.google.gson.JsonElement;
				public static bExit(param0: string): com.sendbird.android.Command;
				public static bEnter(param0: string): com.sendbird.android.Command;
				public constructor(param0: string);
				public isAckRequired(): boolean;
				public static bLogi(param0: string): com.sendbird.android.Command;
				public constructor(param0: string, param1: com.sendbird.android.shadow.com.google.gson.JsonElement, param2: string);
				public hashCode(): number;
				public static bUnrd(): com.sendbird.android.Command;
				public equals(param0: any): boolean;
				public encode(): string;
				public isRequestIdCommand(): boolean;
				public getPayload(): string;
				public toString(): string;
				public getRequestId(): string;
				public static bFile(param0: string, param1: number, param2: number, param3: string, param4: string, param5: string, param6: string, param7: number, param8: string, param9: string, param10: string, param11: boolean, param12: com.sendbird.android.BaseMessageParams.MentionType, param13: java.util.List<string>, param14: com.sendbird.android.BaseMessageParams.PushNotificationDeliveryOption, param15: java.util.List<com.sendbird.android.MessageMetaArray>): com.sendbird.android.Command;
				public static bRead(param0: string): com.sendbird.android.Command;
				public static sendMACK(param0: com.sendbird.android.BaseMessage): void;
				public static bTypeStart(param0: string, param1: number): com.sendbird.android.Command;
			}
			export module Command {
				export class SendCommandHandler {
					public static class: java.lang.Class<com.sendbird.android.Command.SendCommandHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.Command$SendCommandHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.Command, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.Command, param1: com.sendbird.android.SendBirdException): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class CommandType {
				public static class: java.lang.Class<com.sendbird.android.CommandType>;
				public static EROR: com.sendbird.android.CommandType;
				public static LOGI: com.sendbird.android.CommandType;
				public static MESG: com.sendbird.android.CommandType;
				public static FILE: com.sendbird.android.CommandType;
				public static EXIT: com.sendbird.android.CommandType;
				public static READ: com.sendbird.android.CommandType;
				public static MEDI: com.sendbird.android.CommandType;
				public static FEDI: com.sendbird.android.CommandType;
				public static ENTR: com.sendbird.android.CommandType;
				public static BRDM: com.sendbird.android.CommandType;
				public static ADMM: com.sendbird.android.CommandType;
				public static AEDI: com.sendbird.android.CommandType;
				public static TPST: com.sendbird.android.CommandType;
				public static TPEN: com.sendbird.android.CommandType;
				public static MTIO: com.sendbird.android.CommandType;
				public static SYEV: com.sendbird.android.CommandType;
				public static USEV: com.sendbird.android.CommandType;
				public static DELM: com.sendbird.android.CommandType;
				public static LEAV: com.sendbird.android.CommandType;
				public static UNRD: com.sendbird.android.CommandType;
				public static DLVR: com.sendbird.android.CommandType;
				public static NOOP: com.sendbird.android.CommandType;
				public static MRCT: com.sendbird.android.CommandType;
				public static PING: com.sendbird.android.CommandType;
				public static PONG: com.sendbird.android.CommandType;
				public static MACK: com.sendbird.android.CommandType;
				public static JOIN: com.sendbird.android.CommandType;
				public static MTHD: com.sendbird.android.CommandType;
				public static EXPR: com.sendbird.android.CommandType;
				public static MCNT: com.sendbird.android.CommandType;
				public static NONE: com.sendbird.android.CommandType;
				public static Companion: com.sendbird.android.CommandType.Companion;
				public static valueOf(param0: string): com.sendbird.android.CommandType;
				public static from(param0: string): com.sendbird.android.CommandType;
				public static values(): androidNative.Array<com.sendbird.android.CommandType>;
				public isAckRequired(): boolean;
			}
			export module CommandType {
				export class Companion {
					public static class: java.lang.Class<com.sendbird.android.CommandType.Companion>;
					public from(param0: string): com.sendbird.android.CommandType;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class Connection extends com.sendbird.android.shadow.okhttp3.WebSocketListener {
				public static class: java.lang.Class<com.sendbird.android.Connection>;
			}
			export module Connection {
				export class Pinger {
					public static class: java.lang.Class<com.sendbird.android.Connection.Pinger>;
				}
				export class WSClientHandler {
					public static class: java.lang.Class<com.sendbird.android.Connection.WSClientHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.Connection$WSClientHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMessage(param0: com.sendbird.android.Command): void;
						onError(param0: boolean, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onError(param0: boolean, param1: com.sendbird.android.SendBirdException): void;
					public onMessage(param0: com.sendbird.android.Command): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class ConnectionConfig {
				public static class: java.lang.Class<com.sendbird.android.ConnectionConfig>;
				public static defaultBgConnectionDurationMs: number;
				public static Companion: com.sendbird.android.ConnectionConfig.Companion;
				public getRetryDelayMillis(param0: number): number;
				public getMaxInterval(): number;
				public upsert(param0: com.sendbird.android.shadow.com.google.gson.JsonElement): void;
				public constructor(param0: com.sendbird.android.shadow.com.google.gson.JsonElement);
				public getLastConnectedAt(): number;
				public toJson(): com.sendbird.android.shadow.com.google.gson.JsonObject;
				public toString(): string;
				public getPingInterval(): number;
				public getBcDuration(): number;
				public constructor();
				public getMultiplier(): number;
				public getMaxRetryCount(): number;
				public getBaseInterval(): number;
				public getBackoffPeriod(): number;
				public getPongTimeout(): number;
				public getMaxUnreadCountOnSuperGroup(): number;
				public getReconnectObj(): com.sendbird.android.shadow.com.google.gson.JsonObject;
			}
			export module ConnectionConfig {
				export class Companion {
					public static class: java.lang.Class<com.sendbird.android.ConnectionConfig.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class ConnectionManager {
				public static class: java.lang.Class<com.sendbird.android.ConnectionManager>;
				public static removeNetworkHandler(param0: string): void;
				public static removeAllNetworkHandlers(): void;
				public static authenticate(param0: com.sendbird.android.ConnectionManager.AuthInfoRequestHandler, param1: com.sendbird.android.ConnectionManager.AuthenticateHandler): void;
				public static addNetworkHandler(param0: string, param1: com.sendbird.android.ConnectionManager.NetworkHandler): void;
				public constructor();
			}
			export module ConnectionManager {
				export class AuthInfoRequestHandler {
					public static class: java.lang.Class<com.sendbird.android.ConnectionManager.AuthInfoRequestHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.ConnectionManager$AuthInfoRequestHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAuthInfoRequest(param0: com.sendbird.android.ConnectionManager.AuthInfoRequester): void;
					});
					public constructor();
					public onAuthInfoRequest(param0: com.sendbird.android.ConnectionManager.AuthInfoRequester): void;
				}
				export class AuthInfoRequester {
					public static class: java.lang.Class<com.sendbird.android.ConnectionManager.AuthInfoRequester>;
					/**
					 * Constructs a new instance of the com.sendbird.android.ConnectionManager$AuthInfoRequester interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setAuthInfo(param0: string, param1: string): void;
						setAuthInfoWithHostInfo(param0: string, param1: string, param2: string, param3: string): void;
					});
					public constructor();
					public setAuthInfoWithHostInfo(param0: string, param1: string, param2: string, param3: string): void;
					public setAuthInfo(param0: string, param1: string): void;
				}
				export class AuthenticateHandler {
					public static class: java.lang.Class<com.sendbird.android.ConnectionManager.AuthenticateHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.ConnectionManager$AuthenticateHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAuthenticated(param0: com.sendbird.android.User, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onAuthenticated(param0: com.sendbird.android.User, param1: com.sendbird.android.SendBirdException): void;
				}
				export abstract class NetworkHandler {
					public static class: java.lang.Class<com.sendbird.android.ConnectionManager.NetworkHandler>;
					public constructor();
					public onReconnected(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class ConsoleLogWriter extends com.sendbird.android.LogWriter {
				public static class: java.lang.Class<com.sendbird.android.ConsoleLogWriter>;
				public print(param0: com.sendbird.android.LogLevel, param1: string, param2: string): number;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class DB {
				public static class: java.lang.Class<com.sendbird.android.DB>;
			}
			export module DB {
				export class DBHolder {
					public static class: java.lang.Class<com.sendbird.android.DB.DBHolder>;
				}
				export class SendBirdDataBaseHelper {
					public static class: java.lang.Class<com.sendbird.android.DB.SendBirdDataBaseHelper>;
					public onOpen(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
					public onConfigure(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
					public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
					public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class Emoji {
				public static class: java.lang.Class<com.sendbird.android.Emoji>;
				public serialize(): androidNative.Array<number>;
				public hashCode(): number;
				public static buildFromSerializedData(param0: androidNative.Array<number>): com.sendbird.android.Emoji;
				public equals(param0: any): boolean;
				public getUrl(): string;
				public toString(): string;
				public getKey(): string;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class EmojiCategory {
				public static class: java.lang.Class<com.sendbird.android.EmojiCategory>;
				public serialize(): androidNative.Array<number>;
				public hashCode(): number;
				public getId(): number;
				public getEmojis(): java.util.List<com.sendbird.android.Emoji>;
				public equals(param0: any): boolean;
				public getName(): string;
				public getUrl(): string;
				public toString(): string;
				public static buildFromSerializedData(param0: androidNative.Array<number>): com.sendbird.android.EmojiCategory;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class EmojiContainer {
				public static class: java.lang.Class<com.sendbird.android.EmojiContainer>;
				public serialize(): androidNative.Array<number>;
				public getEmojiHash(): string;
				public static buildFromSerializedData(param0: androidNative.Array<number>): com.sendbird.android.EmojiContainer;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public toString(): string;
				public getEmojiCategories(): java.util.List<com.sendbird.android.EmojiCategory>;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class EqualsUtil {
				public static class: java.lang.Class<com.sendbird.android.EqualsUtil>;
				public static INSTANCE: com.sendbird.android.EqualsUtil;
				public static equals(param0: any, param1: any): boolean;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class EventController {
				public static class: java.lang.Class<com.sendbird.android.EventController>;
				public static getInstance(): com.sendbird.android.EventController;
			}
			export module EventController {
				export class MsgCtlrHolder {
					public static class: java.lang.Class<com.sendbird.android.EventController.MsgCtlrHolder>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class FileMessage extends com.sendbird.android.BaseMessage {
				public static class: java.lang.Class<com.sendbird.android.FileMessage>;
				public getType(): string;
				public getSize(): number;
				/** @deprecated */
				public getRequestState(): com.sendbird.android.FileMessage.RequestState;
				public getUrl(): string;
				public getName(): string;
				public getThumbnails(): java.util.List<com.sendbird.android.FileMessage.Thumbnail>;
				public static getMessage(param0: com.sendbird.android.MessageRetrievalParams, param1: com.sendbird.android.BaseMessage.GetMessageHandler): void;
				public getMessage(): string;
				public getPlainUrl(): string;
				public toString(): string;
				public getRequestId(): string;
				public getRequestedMentionUserIds(): java.util.List<string>;
			}
			export module FileMessage {
				export class RequestState {
					public static class: java.lang.Class<com.sendbird.android.FileMessage.RequestState>;
					public static NONE: com.sendbird.android.FileMessage.RequestState;
					public static PENDING: com.sendbird.android.FileMessage.RequestState;
					public static FAILED: com.sendbird.android.FileMessage.RequestState;
					public static SUCCEEDED: com.sendbird.android.FileMessage.RequestState;
					public static values(): androidNative.Array<com.sendbird.android.FileMessage.RequestState>;
					public static valueOf(param0: string): com.sendbird.android.FileMessage.RequestState;
				}
				export class Thumbnail {
					public static class: java.lang.Class<com.sendbird.android.FileMessage.Thumbnail>;
					public equals(param0: any): boolean;
					public getMaxWidth(): number;
					public getRealWidth(): number;
					public toString(): string;
					public getUrl(): string;
					public getPlainUrl(): string;
					public getMaxHeight(): number;
					public getRealHeight(): number;
					public hashCode(): number;
				}
				export class ThumbnailSize {
					public static class: java.lang.Class<com.sendbird.android.FileMessage.ThumbnailSize>;
					public equals(param0: any): boolean;
					public getMaxWidth(): number;
					public toString(): string;
					public getMaxHeight(): number;
					public hashCode(): number;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class FileMessageParams extends com.sendbird.android.BaseMessageParams {
				public static class: java.lang.Class<com.sendbird.android.FileMessageParams>;
				public setPushNotificationDeliveryOption(param0: com.sendbird.android.BaseMessageParams.PushNotificationDeliveryOption): com.sendbird.android.FileMessageParams;
				public constructor(param0: java.io.File);
				public setFile(param0: java.io.File): com.sendbird.android.FileMessageParams;
				public setFileName(param0: string): com.sendbird.android.FileMessageParams;
				/** @deprecated */
				public setMetaArrayKeys(param0: java.util.List<string>): com.sendbird.android.FileMessageParams;
				public toString(): string;
				public setAppleCriticalAlertOptions(param0: com.sendbird.android.AppleCriticalAlertOptions): com.sendbird.android.BaseMessageParams;
				public setAppleCriticalAlertOptions(param0: com.sendbird.android.AppleCriticalAlertOptions): com.sendbird.android.FileMessageParams;
				public constructor(param0: string);
				public constructor();
				public setFileUrl(param0: string): com.sendbird.android.FileMessageParams;
				public setFileSize(param0: number): com.sendbird.android.FileMessageParams;
				public setMimeType(param0: string): com.sendbird.android.FileMessageParams;
				public setMetaArrays(param0: java.util.List<com.sendbird.android.MessageMetaArray>): com.sendbird.android.FileMessageParams;
				public setThumbnailSizes(param0: java.util.List<com.sendbird.android.FileMessage.ThumbnailSize>): com.sendbird.android.FileMessageParams;
				public setData(param0: string): com.sendbird.android.FileMessageParams;
				public setMentionType(param0: com.sendbird.android.BaseMessageParams.MentionType): com.sendbird.android.FileMessageParams;
				public setMentionedUsers(param0: java.util.List<com.sendbird.android.User>): com.sendbird.android.FileMessageParams;
				public setCustomType(param0: string): com.sendbird.android.FileMessageParams;
				public setMentionedUserIds(param0: java.util.List<string>): com.sendbird.android.FileMessageParams;
				public setParentMessageId(param0: number): com.sendbird.android.FileMessageParams;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class FriendListQuery {
				public static class: java.lang.Class<com.sendbird.android.FriendListQuery>;
				public isLoading(): boolean;
				public setLimit(param0: number): void;
				public next(param0: com.sendbird.android.FriendListQuery.FriendListQueryResultHandler): void;
				public hasNext(): boolean;
			}
			export module FriendListQuery {
				export class FriendListQueryResultHandler {
					public static class: java.lang.Class<com.sendbird.android.FriendListQuery.FriendListQueryResultHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.FriendListQuery$FriendListQueryResultHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.List<com.sendbird.android.User>, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.List<com.sendbird.android.User>, param1: com.sendbird.android.SendBirdException): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class GapCheckParams {
				public static class: java.lang.Class<com.sendbird.android.GapCheckParams>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class GapCheckResult {
				public static class: java.lang.Class<com.sendbird.android.GapCheckResult>;
				public prevHasMore(): boolean;
				public getNextMessages(): java.util.List<com.sendbird.android.BaseMessage>;
				public nextHasMore(): boolean;
				public getPrevMessages(): java.util.List<com.sendbird.android.BaseMessage>;
				public constructor(param0: java.util.List<com.sendbird.android.BaseMessage>, param1: java.util.List<com.sendbird.android.BaseMessage>, param2: boolean, param3: boolean);
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class GroupChannel extends com.sendbird.android.BaseChannel {
				public static class: java.lang.Class<com.sendbird.android.GroupChannel>;
				public mMemberMap: java.util.Map<string,com.sendbird.android.Member>;
				public mMarkAsReadLastSentAt: number;
				public createdBy: com.sendbird.android.User;
				public getJoinedAt(): number;
				public getTypingUsers(): java.util.List<com.sendbird.android.User>;
				public getMessageSurvivalSeconds(): number;
				public unfreeze(param0: com.sendbird.android.GroupChannel.GroupChannelUnfreezeHandler): void;
				public getMyRole(): com.sendbird.android.Member.Role;
				public muteUser(param0: com.sendbird.android.User, param1: com.sendbird.android.GroupChannel.GroupChannelMuteHandler): void;
				public updateTypingStatus(param0: com.sendbird.android.User, param1: boolean): boolean;
				/** @deprecated */
				public static getTotalUnreadMessageCount(param0: java.util.List<string>, param1: com.sendbird.android.GroupChannel.GroupChannelTotalUnreadMessageCountHandler): void;
				public inviteWithUserId(param0: string, param1: com.sendbird.android.GroupChannel.GroupChannelInviteHandler): void;
				public removeMember(param0: com.sendbird.android.User): com.sendbird.android.Member;
				public getUnreadMemberCount(param0: com.sendbird.android.BaseMessage): number;
				/** @deprecated */
				public getPushPreference(param0: com.sendbird.android.GroupChannel.GroupChannelGetPushPreferenceHandler): void;
				public declineInvitation(param0: com.sendbird.android.GroupChannel.GroupChannelDeclineInvitationHandler): void;
				public static createChannel(param0: java.util.List<com.sendbird.android.User>, param1: boolean, param2: string, param3: any, param4: string, param5: string, param6: com.sendbird.android.GroupChannel.GroupChannelCreateHandler): void;
				/** @deprecated */
				public static markAsReadAll(param0: com.sendbird.android.GroupChannel.GroupChannelMarkAsReadHandler): void;
				public muteUser(param0: com.sendbird.android.User, param1: string, param2: number, param3: com.sendbird.android.GroupChannel.GroupChannelMuteHandler): void;
				/** @deprecated */
				public static getChannelCount(param0: com.sendbird.android.GroupChannelListQuery.MemberStateFilter, param1: com.sendbird.android.GroupChannel.GroupChannelChannelCountHandler): void;
				public isPublic(): boolean;
				public createMemberListQuery(): com.sendbird.android.GroupChannelMemberListQuery;
				public getHiddenState(): com.sendbird.android.GroupChannel.HiddenState;
				public join(param0: com.sendbird.android.GroupChannel.GroupChannelJoinHandler): void;
				public getUndeliveredMemberCount(param0: com.sendbird.android.BaseMessage): number;
				/** @deprecated */
				public markAsDelivered(): void;
				public updateReadReceipt(param0: string, param1: number): void;
				/** @deprecated */
				public static createChannelWithUserIds(param0: java.util.List<string>, param1: boolean, param2: string, param3: any, param4: string, param5: com.sendbird.android.GroupChannel.GroupChannelCreateHandler): void;
				public startTyping(): void;
				public getUnreadMessageCount(): number;
				public static createPublicGroupChannelListQuery(): com.sendbird.android.PublicGroupChannelListQuery;
				public getReadMembers(param0: com.sendbird.android.BaseMessage, param1: boolean): java.util.List<com.sendbird.android.Member>;
				/** @deprecated */
				public getTypingMembers(): java.util.List<com.sendbird.android.Member>;
				public getMyMemberState(): com.sendbird.android.Member.MemberState;
				public getMemberCount(): number;
				/** @deprecated */
				public updateChannel(param0: boolean, param1: string, param2: any, param3: string, param4: com.sendbird.android.GroupChannel.GroupChannelUpdateHandler): void;
				public static getChannelWithoutCache(param0: string, param1: com.sendbird.android.GroupChannel.GroupChannelGetHandler): void;
				/** @deprecated */
				public getReadStatus(): java.util.Map<string,com.sendbird.android.ReadStatus>;
				public isDistinct(): boolean;
				public join(param0: string, param1: com.sendbird.android.GroupChannel.GroupChannelJoinHandler): void;
				public getMyLastRead(): number;
				public isDiscoverable(): boolean;
				public static clone(param0: com.sendbird.android.GroupChannel): com.sendbird.android.GroupChannel;
				/** @deprecated */
				public static getTotalUnreadMessageCount(param0: com.sendbird.android.GroupChannel.GroupChannelTotalUnreadMessageCountHandler): void;
				public isTyping(): boolean;
				public isBroadcast(): boolean;
				public hide(param0: boolean, param1: boolean, param2: com.sendbird.android.GroupChannel.GroupChannelHideHandler): void;
				public static createMyGroupChannelListQuery(): com.sendbird.android.GroupChannelListQuery;
				public isHidden(): boolean;
				/** @deprecated */
				public getLastSeenAtByWithUserId(param0: string): number;
				public setMyCountPreference(param0: com.sendbird.android.GroupChannel.CountPreference, param1: com.sendbird.android.GroupChannel.GroupChannelSetMyCountPreferenceHandler): void;
				public getInviter(): com.sendbird.android.User;
				public refresh(param0: com.sendbird.android.GroupChannel.GroupChannelRefreshHandler): void;
				public freeze(param0: com.sendbird.android.GroupChannel.GroupChannelFreezeHandler): void;
				/** @deprecated */
				public static createChannel(param0: java.util.List<com.sendbird.android.User>, param1: boolean, param2: string, param3: any, param4: string, param5: com.sendbird.android.GroupChannel.GroupChannelCreateHandler): void;
				public markAsRead(): void;
				public getUnreadMembers(param0: com.sendbird.android.BaseMessage, param1: boolean): java.util.List<com.sendbird.android.Member>;
				public getMessageOffsetTimestamp(): number;
				public updateChannel(param0: string, param1: any, param2: string, param3: com.sendbird.android.GroupChannel.GroupChannelUpdateHandler): void;
				public getInvitedAt(): number;
				public setLastMessage(param0: com.sendbird.android.BaseMessage): void;
				public muteUserWithUserId(param0: string, param1: com.sendbird.android.GroupChannel.GroupChannelMuteHandler): void;
				public resetMyHistory(param0: com.sendbird.android.GroupChannel.GroupChannelResetMyHistoryHandler): void;
				public updateChannel(param0: com.sendbird.android.GroupChannelParams, param1: com.sendbird.android.GroupChannel.GroupChannelUpdateHandler): void;
				public static createChannelWithUserIds(param0: java.util.List<string>, param1: boolean, param2: com.sendbird.android.GroupChannel.GroupChannelCreateHandler): void;
				public unmuteUserWithUserId(param0: string, param1: com.sendbird.android.GroupChannel.GroupChannelUnmuteHandler): void;
				public getCustomType(): string;
				public getLastMessage(): com.sendbird.android.BaseMessage;
				public invite(param0: java.util.List<com.sendbird.android.User>, param1: com.sendbird.android.GroupChannel.GroupChannelInviteHandler): void;
				public invite(param0: com.sendbird.android.User, param1: com.sendbird.android.GroupChannel.GroupChannelInviteHandler): void;
				/** @deprecated */
				public getDeliveryReceipt(param0: com.sendbird.android.BaseMessage): number;
				public setMyPushTriggerOption(param0: com.sendbird.android.GroupChannel.PushTriggerOption, param1: com.sendbird.android.GroupChannel.GroupChannelSetMyPushTriggerOptionHandler): void;
				/** @deprecated */
				public static getTotalUnreadChannelCount(param0: com.sendbird.android.GroupChannel.GroupChannelTotalUnreadChannelCountHandler): void;
				public isAccessCodeRequired(): boolean;
				public getCreator(): com.sendbird.android.User;
				public static createChannel(param0: java.util.List<com.sendbird.android.User>, param1: boolean, param2: com.sendbird.android.GroupChannel.GroupChannelCreateHandler): void;
				public createBannedUserListQuery(): com.sendbird.android.BannedUserListQuery;
				public banUserWithUserId(param0: string, param1: string, param2: number, param3: com.sendbird.android.GroupChannel.GroupChannelBanHandler): void;
				public getMembers(): java.util.List<com.sendbird.android.Member>;
				public getUnreadMentionCount(): number;
				public static getChannel(param0: string, param1: com.sendbird.android.GroupChannel.GroupChannelGetHandler): void;
				public invalidateTypingStatus(): boolean;
				public endTyping(): void;
				public hide(param0: boolean, param1: com.sendbird.android.GroupChannel.GroupChannelHideHandler): void;
				public setUnreadMentionCount(param0: number): void;
				/** @deprecated */
				public setPushPreference(param0: boolean, param1: com.sendbird.android.GroupChannel.GroupChannelSetPushPreferenceHandler): void;
				public update(param0: com.sendbird.android.shadow.com.google.gson.JsonElement): void;
				public unmuteUser(param0: com.sendbird.android.User, param1: com.sendbird.android.GroupChannel.GroupChannelUnmuteHandler): void;
				public updateJoinedMemberCount(): void;
				public setUnreadMessageCount(param0: number): void;
				public toString(): string;
				public getMyCountPreference(): com.sendbird.android.GroupChannel.CountPreference;
				public unbanUser(param0: com.sendbird.android.User, param1: com.sendbird.android.GroupChannel.GroupChannelUnbanHandler): void;
				/** @deprecated */
				public getUnreadMembers(param0: com.sendbird.android.BaseMessage): java.util.List<com.sendbird.android.Member>;
				/** @deprecated */
				public getReadReceipt(param0: com.sendbird.android.BaseMessage): number;
				public muteUserWithUserId(param0: string, param1: string, param2: number, param3: com.sendbird.android.GroupChannel.GroupChannelMuteHandler): void;
				public addMember(param0: com.sendbird.android.Member, param1: number): void;
				public hide(param0: com.sendbird.android.GroupChannel.GroupChannelHideHandler): void;
				public static compareTo(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.android.GroupChannel, param2: com.sendbird.android.GroupChannelListQuery.Order): number;
				public sendMarkAsRead(param0: com.sendbird.android.GroupChannel.GroupChannelMarkAsReadHandler): void;
				public getMyPushTriggerOption(): com.sendbird.android.GroupChannel.PushTriggerOption;
				public delete(param0: com.sendbird.android.GroupChannel.GroupChannelDeleteHandler): void;
				/** @deprecated */
				public getLastSeenAtBy(param0: com.sendbird.android.User): number;
				public getJoinedMemberCount(): number;
				public updateChannel(param0: boolean, param1: string, param2: any, param3: string, param4: string, param5: com.sendbird.android.GroupChannel.GroupChannelUpdateHandler): void;
				public acceptInvitation(param0: com.sendbird.android.GroupChannel.GroupChannelAcceptInvitationHandler): void;
				public inviteWithUserIds(param0: java.util.List<string>, param1: com.sendbird.android.GroupChannel.GroupChannelInviteHandler): void;
				public unhide(param0: com.sendbird.android.GroupChannel.GroupChannelUnhideHandler): void;
				public banUser(param0: com.sendbird.android.User, param1: string, param2: number, param3: com.sendbird.android.GroupChannel.GroupChannelBanHandler): void;
				/** @deprecated */
				public static getChannelCount(param0: com.sendbird.android.GroupChannel.MemberState, param1: com.sendbird.android.GroupChannel.GroupChannelChannelCountHandler): void;
				public getMyMutedState(): com.sendbird.android.Member.MutedState;
				public isSuper(): boolean;
				public acceptInvitation(param0: string, param1: com.sendbird.android.GroupChannel.GroupChannelAcceptInvitationHandler): void;
				/** @deprecated */
				public getReadMembers(param0: com.sendbird.android.BaseMessage): java.util.List<com.sendbird.android.Member>;
				/** @deprecated */
				public static getUnreadItemCount(param0: java.util.Collection<com.sendbird.android.GroupChannel.UnreadItemKey>, param1: com.sendbird.android.GroupChannel.GroupChannelGetUnreadItemCountHandler): void;
				public static createDistinctChannelIfNotExist(param0: com.sendbird.android.GroupChannelParams, param1: com.sendbird.android.GroupChannel.GroupChannelCreateDistinctChannelIfNotExistHandler): void;
				public unbanUserWithUserId(param0: string, param1: com.sendbird.android.GroupChannel.GroupChannelUnbanHandler): void;
				public registerScheduledUserMessage(param0: com.sendbird.android.ScheduledUserMessageParams, param1: com.sendbird.android.GroupChannel.RegisterScheduledUserMessageHandler): void;
				public constructor(param0: com.sendbird.android.shadow.com.google.gson.JsonElement);
				public static createChannel(param0: com.sendbird.android.GroupChannelParams, param1: com.sendbird.android.GroupChannel.GroupChannelCreateHandler): void;
				public getMyPushTriggerOption(param0: com.sendbird.android.GroupChannel.GroupChannelGetMyPushTriggerOptionHandler): void;
				/** @deprecated */
				public isPushEnabled(): boolean;
				/** @deprecated */
				public static getTotalUnreadMessageCount(param0: com.sendbird.android.GroupChannelTotalUnreadMessageCountParams, param1: com.sendbird.android.GroupChannel.GroupChannelTotalUnreadMessageCountHandler): void;
				public getReadStatus(param0: boolean): java.util.Map<string,com.sendbird.android.ReadStatus>;
				public static createChannelWithUserIds(param0: java.util.List<string>, param1: boolean, param2: string, param3: any, param4: string, param5: string, param6: com.sendbird.android.GroupChannel.GroupChannelCreateHandler): void;
				public leave(param0: com.sendbird.android.GroupChannel.GroupChannelLeaveHandler): void;
			}
			export module GroupChannel {
				export class CountPreference {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.CountPreference>;
					public static ALL: com.sendbird.android.GroupChannel.CountPreference;
					public static UNREAD_MESSAGE_COUNT_ONLY: com.sendbird.android.GroupChannel.CountPreference;
					public static UNREAD_MENTION_COUNT_ONLY: com.sendbird.android.GroupChannel.CountPreference;
					public static OFF: com.sendbird.android.GroupChannel.CountPreference;
					public static values(): androidNative.Array<com.sendbird.android.GroupChannel.CountPreference>;
					public static valueOf(param0: string): com.sendbird.android.GroupChannel.CountPreference;
				}
				export class GroupChannelAcceptInvitationHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelAcceptInvitationHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelAcceptInvitationHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelBanHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelBanHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelBanHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelChannelCountHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelChannelCountHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelChannelCountHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: number, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: number, param1: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelCreateDistinctChannelIfNotExistHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelCreateDistinctChannelIfNotExistHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelCreateDistinctChannelIfNotExistHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.GroupChannel, param1: boolean, param2: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.GroupChannel, param1: boolean, param2: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelCreateHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelCreateHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelCreateHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelDeclineInvitationHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelDeclineInvitationHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelDeclineInvitationHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelDeleteHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelDeleteHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelDeleteHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelFreezeHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelFreezeHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelFreezeHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelGetHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelGetHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelGetHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelGetMyPushTriggerOptionHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelGetMyPushTriggerOptionHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelGetMyPushTriggerOptionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.GroupChannel.PushTriggerOption, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.GroupChannel.PushTriggerOption, param1: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelGetPushPreferenceHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelGetPushPreferenceHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelGetPushPreferenceHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: boolean, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					/** @deprecated */
					public onResult(param0: boolean, param1: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelGetUnreadItemCountHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelGetUnreadItemCountHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelGetUnreadItemCountHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.Map<com.sendbird.android.GroupChannel.UnreadItemKey,java.lang.Integer>, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.Map<com.sendbird.android.GroupChannel.UnreadItemKey,java.lang.Integer>, param1: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelHideHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelHideHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelHideHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelInviteHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelInviteHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelInviteHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelJoinHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelJoinHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelJoinHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelLeaveHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelLeaveHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelLeaveHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelMarkAsReadHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelMarkAsReadHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelMarkAsReadHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelMuteHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelMuteHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelMuteHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelRefreshHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelRefreshHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelRefreshHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelResetMyHistoryHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelResetMyHistoryHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelResetMyHistoryHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelSetMyCountPreferenceHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelSetMyCountPreferenceHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelSetMyCountPreferenceHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelSetMyPushTriggerOptionHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelSetMyPushTriggerOptionHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelSetMyPushTriggerOptionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelSetPushPreferenceHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelSetPushPreferenceHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelSetPushPreferenceHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelTotalUnreadChannelCountHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelTotalUnreadChannelCountHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelTotalUnreadChannelCountHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: number, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: number, param1: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelTotalUnreadMessageCountHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelTotalUnreadMessageCountHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelTotalUnreadMessageCountHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: number, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: number, param1: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelUnbanHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelUnbanHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelUnbanHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelUnfreezeHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelUnfreezeHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelUnfreezeHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelUnhideHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelUnhideHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelUnhideHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelUnmuteHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelUnmuteHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelUnmuteHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class GroupChannelUpdateHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.GroupChannelUpdateHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$GroupChannelUpdateHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.android.SendBirdException): void;
				}
				export class HiddenState {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.HiddenState>;
					public static UNHIDDEN: com.sendbird.android.GroupChannel.HiddenState;
					public static HIDDEN_ALLOW_AUTO_UNHIDE: com.sendbird.android.GroupChannel.HiddenState;
					public static HIDDEN_PREVENT_AUTO_UNHIDE: com.sendbird.android.GroupChannel.HiddenState;
					public static values(): androidNative.Array<com.sendbird.android.GroupChannel.HiddenState>;
					public static valueOf(param0: string): com.sendbird.android.GroupChannel.HiddenState;
				}
				export class MemberState {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.MemberState>;
					public static ALL: com.sendbird.android.GroupChannel.MemberState;
					public static INVITED: com.sendbird.android.GroupChannel.MemberState;
					public static INVITED_BY_FRIEND: com.sendbird.android.GroupChannel.MemberState;
					public static INVITED_BY_NON_FRIEND: com.sendbird.android.GroupChannel.MemberState;
					public static JOINED: com.sendbird.android.GroupChannel.MemberState;
					public static values(): androidNative.Array<com.sendbird.android.GroupChannel.MemberState>;
					public static valueOf(param0: string): com.sendbird.android.GroupChannel.MemberState;
				}
				export class PushTriggerOption {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.PushTriggerOption>;
					public static ALL: com.sendbird.android.GroupChannel.PushTriggerOption;
					public static OFF: com.sendbird.android.GroupChannel.PushTriggerOption;
					public static MENTION_ONLY: com.sendbird.android.GroupChannel.PushTriggerOption;
					public static DEFAULT: com.sendbird.android.GroupChannel.PushTriggerOption;
					public static valueOf(param0: string): com.sendbird.android.GroupChannel.PushTriggerOption;
					public static values(): androidNative.Array<com.sendbird.android.GroupChannel.PushTriggerOption>;
				}
				export class RegisterScheduledUserMessageHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.RegisterScheduledUserMessageHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannel$RegisterScheduledUserMessageHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onRegistered(param0: com.sendbird.android.ScheduledUserMessage, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onRegistered(param0: com.sendbird.android.ScheduledUserMessage, param1: com.sendbird.android.SendBirdException): void;
				}
				export class UnreadItemKey {
					public static class: java.lang.Class<com.sendbird.android.GroupChannel.UnreadItemKey>;
					public static GROUP_CHANNEL_UNREAD_MESSAGE_COUNT: com.sendbird.android.GroupChannel.UnreadItemKey;
					public static GROUP_CHANNEL_UNREAD_MENTION_COUNT: com.sendbird.android.GroupChannel.UnreadItemKey;
					public static GROUP_CHANNEL_INVITATION_COUNT: com.sendbird.android.GroupChannel.UnreadItemKey;
					public static NONSUPER_UNREAD_MESSAGE_COUNT: com.sendbird.android.GroupChannel.UnreadItemKey;
					public static SUPER_UNREAD_MESSAGE_COUNT: com.sendbird.android.GroupChannel.UnreadItemKey;
					public static NONSUPER_UNREAD_MENTION_COUNT: com.sendbird.android.GroupChannel.UnreadItemKey;
					public static SUPER_UNREAD_MENTION_COUNT: com.sendbird.android.GroupChannel.UnreadItemKey;
					public static NONSUPER_INVITATION_COUNT: com.sendbird.android.GroupChannel.UnreadItemKey;
					public static SUPER_INVITATION_COUNT: com.sendbird.android.GroupChannel.UnreadItemKey;
					public static valueOf(param0: string): com.sendbird.android.GroupChannel.UnreadItemKey;
					public static values(): androidNative.Array<com.sendbird.android.GroupChannel.UnreadItemKey>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class GroupChannelChangeLogsParams {
				public static class: java.lang.Class<com.sendbird.android.GroupChannelChangeLogsParams>;
				public customTypes: java.util.List<string>;
				public includeEmpty: boolean;
				public includeFrozen: boolean;
				public shouldIncludeFrozen(): boolean;
				public static from(param0: com.sendbird.android.GroupChannelListQuery): com.sendbird.android.GroupChannelChangeLogsParams;
				public shouldIncludeEmpty(): boolean;
				public constructor(param0: java.util.List<string>, param1: boolean, param2: boolean);
				public setCustomTypes(param0: java.util.List<string>): void;
				public setIncludeFrozen(param0: boolean): void;
				public clone(): com.sendbird.android.GroupChannelChangeLogsParams;
				public toString(): string;
				public constructor();
				public setIncludeEmpty(param0: boolean): void;
				public getCustomTypes(): java.util.List<string>;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class GroupChannelListQuery {
				public static class: java.lang.Class<com.sendbird.android.GroupChannelListQuery>;
				public isIncludeMetadata(): boolean;
				public setUserIdsIncludeFilter(param0: java.util.List<string>, param1: com.sendbird.android.GroupChannelListQuery.QueryType): void;
				public getMemberStateFilter(): com.sendbird.android.GroupChannelListQuery.MemberStateFilter;
				public setSearchFilter(param0: java.util.List<com.sendbird.android.GroupChannelListQuery.SearchField>, param1: string): void;
				public belongsTo(param0: com.sendbird.android.GroupChannel): boolean;
				public setUserIdsExactFilter(param0: java.util.List<string>): void;
				/** @deprecated */
				public setMemberStateFilter(param0: com.sendbird.android.GroupChannelListQuery.MemberState): void;
				/** @deprecated */
				public setCustomTypeFilter(param0: string): void;
				public getPublicChannelFilter(): com.sendbird.android.GroupChannelListQuery.PublicChannelFilter;
				public getUnreadChannelFilter(): com.sendbird.android.GroupChannelListQuery.UnreadChannelFilter;
				public setChannelUrlsFilter(param0: java.util.List<string>): void;
				public setNicknameContainsFilter(param0: string): void;
				public setMemberStateFilter(param0: com.sendbird.android.GroupChannelListQuery.MemberStateFilter): void;
				public getUserIdsIncludeFilterQueryType(): com.sendbird.android.GroupChannelListQuery.QueryType;
				public setPublicChannelFilter(param0: com.sendbird.android.GroupChannelListQuery.PublicChannelFilter): void;
				/** @deprecated */
				public setMemberStateFilter(param0: com.sendbird.android.GroupChannel.MemberState): void;
				public setUnreadChannelFilter(param0: com.sendbird.android.GroupChannelListQuery.UnreadChannelFilter): void;
				public getHiddenChannelFilter(): com.sendbird.android.GroupChannelListQuery.HiddenChannelFilter;
				public getOrder(): com.sendbird.android.GroupChannelListQuery.Order;
				/** @deprecated */
				public setUserIdsFilter(param0: java.util.List<string>, param1: boolean): void;
				public next(param0: com.sendbird.android.GroupChannelListQuery.GroupChannelListQueryResultHandler): void;
				public getCustomTypesFilter(): java.util.List<string>;
				public setChannelNameContainsFilter(param0: string): void;
				public setCustomTypesFilter(param0: java.util.List<string>): void;
				public isLoading(): boolean;
				public getChannelNameContainsFilter(): string;
				public getUserIdsExactFilter(): java.util.List<string>;
				public isIncludeFrozen(): boolean;
				public getNicknameContainsFilter(): string;
				public getSuperChannelFilter(): com.sendbird.android.GroupChannelListQuery.SuperChannelFilter;
				public getLimit(): number;
				public serialize(): androidNative.Array<number>;
				public setLimit(param0: number): void;
				public getChannelUrlsFilter(): java.util.List<string>;
				public getSearchFields(): java.util.List<com.sendbird.android.GroupChannelListQuery.SearchField>;
				public setIncludeMetadata(param0: boolean): void;
				public getUserIdsIncludeFilter(): java.util.List<string>;
				public setCustomTypeStartsWithFilter(param0: string): void;
				public setIncludeEmpty(param0: boolean): void;
				public getSearchQuery(): string;
				public setMetaDataOrderKeyFilter(param0: string): void;
				public setSuperChannelFilter(param0: com.sendbird.android.GroupChannelListQuery.SuperChannelFilter): void;
				public getCustomTypeStartsWithFilter(): string;
				public getMetaDataOrderKeyFilter(): string;
				public static buildFromSerializedData(param0: androidNative.Array<number>): com.sendbird.android.GroupChannelListQuery;
				public setOrder(param0: com.sendbird.android.GroupChannelListQuery.Order): void;
				public hasNext(): boolean;
				public setIncludeFrozen(param0: boolean): void;
				public isIncludeEmpty(): boolean;
				public setHiddenChannelFilter(param0: com.sendbird.android.GroupChannelListQuery.HiddenChannelFilter): void;
			}
			export module GroupChannelListQuery {
				export class FilterMode {
					public static class: java.lang.Class<com.sendbird.android.GroupChannelListQuery.FilterMode>;
					public static ALL: com.sendbird.android.GroupChannelListQuery.FilterMode;
					public static MEMBERS_EXACTLY_IN: com.sendbird.android.GroupChannelListQuery.FilterMode;
					public static MEMBERS_NICKNAME_CONTAINS: com.sendbird.android.GroupChannelListQuery.FilterMode;
					public static MEMBERS_INCLUDE_IN: com.sendbird.android.GroupChannelListQuery.FilterMode;
					public static valueOf(param0: string): com.sendbird.android.GroupChannelListQuery.FilterMode;
					public static values(): androidNative.Array<com.sendbird.android.GroupChannelListQuery.FilterMode>;
				}
				export class GroupChannelListQueryResultHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannelListQuery.GroupChannelListQueryResultHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannelListQuery$GroupChannelListQueryResultHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.List<com.sendbird.android.GroupChannel>, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.List<com.sendbird.android.GroupChannel>, param1: com.sendbird.android.SendBirdException): void;
				}
				export class HiddenChannelFilter {
					public static class: java.lang.Class<com.sendbird.android.GroupChannelListQuery.HiddenChannelFilter>;
					public static UNHIDDEN: com.sendbird.android.GroupChannelListQuery.HiddenChannelFilter;
					public static HIDDEN: com.sendbird.android.GroupChannelListQuery.HiddenChannelFilter;
					public static HIDDEN_ALLOW_AUTO_UNHIDE: com.sendbird.android.GroupChannelListQuery.HiddenChannelFilter;
					public static HIDDEN_PREVENT_AUTO_UNHIDE: com.sendbird.android.GroupChannelListQuery.HiddenChannelFilter;
					public static valueOf(param0: string): com.sendbird.android.GroupChannelListQuery.HiddenChannelFilter;
					public static values(): androidNative.Array<com.sendbird.android.GroupChannelListQuery.HiddenChannelFilter>;
				}
				export class MemberState {
					public static class: java.lang.Class<com.sendbird.android.GroupChannelListQuery.MemberState>;
					public static ALL: com.sendbird.android.GroupChannelListQuery.MemberState;
					public static INVITED_ONLY: com.sendbird.android.GroupChannelListQuery.MemberState;
					public static JOINED_ONLY: com.sendbird.android.GroupChannelListQuery.MemberState;
					public static valueOf(param0: string): com.sendbird.android.GroupChannelListQuery.MemberState;
					public static values(): androidNative.Array<com.sendbird.android.GroupChannelListQuery.MemberState>;
				}
				export class MemberStateFilter {
					public static class: java.lang.Class<com.sendbird.android.GroupChannelListQuery.MemberStateFilter>;
					public static ALL: com.sendbird.android.GroupChannelListQuery.MemberStateFilter;
					public static INVITED: com.sendbird.android.GroupChannelListQuery.MemberStateFilter;
					public static INVITED_BY_FRIEND: com.sendbird.android.GroupChannelListQuery.MemberStateFilter;
					public static INVITED_BY_NON_FRIEND: com.sendbird.android.GroupChannelListQuery.MemberStateFilter;
					public static JOINED: com.sendbird.android.GroupChannelListQuery.MemberStateFilter;
					public static values(): androidNative.Array<com.sendbird.android.GroupChannelListQuery.MemberStateFilter>;
					public static valueOf(param0: string): com.sendbird.android.GroupChannelListQuery.MemberStateFilter;
				}
				export class Order {
					public static class: java.lang.Class<com.sendbird.android.GroupChannelListQuery.Order>;
					public static CHRONOLOGICAL: com.sendbird.android.GroupChannelListQuery.Order;
					public static LATEST_LAST_MESSAGE: com.sendbird.android.GroupChannelListQuery.Order;
					public static CHANNEL_NAME_ALPHABETICAL: com.sendbird.android.GroupChannelListQuery.Order;
					public static METADATA_VALUE_ALPHABETICAL: com.sendbird.android.GroupChannelListQuery.Order;
					public getValue(): number;
					public static values(): androidNative.Array<com.sendbird.android.GroupChannelListQuery.Order>;
					public static from(param0: number): com.sendbird.android.GroupChannelListQuery.Order;
					public static valueOf(param0: string): com.sendbird.android.GroupChannelListQuery.Order;
				}
				export class PublicChannelFilter {
					public static class: java.lang.Class<com.sendbird.android.GroupChannelListQuery.PublicChannelFilter>;
					public static ALL: com.sendbird.android.GroupChannelListQuery.PublicChannelFilter;
					public static PUBLIC: com.sendbird.android.GroupChannelListQuery.PublicChannelFilter;
					public static PRIVATE: com.sendbird.android.GroupChannelListQuery.PublicChannelFilter;
					public static valueOf(param0: string): com.sendbird.android.GroupChannelListQuery.PublicChannelFilter;
					public static values(): androidNative.Array<com.sendbird.android.GroupChannelListQuery.PublicChannelFilter>;
				}
				export class QueryType {
					public static class: java.lang.Class<com.sendbird.android.GroupChannelListQuery.QueryType>;
					public static AND: com.sendbird.android.GroupChannelListQuery.QueryType;
					public static OR: com.sendbird.android.GroupChannelListQuery.QueryType;
					public static valueOf(param0: string): com.sendbird.android.GroupChannelListQuery.QueryType;
					public static values(): androidNative.Array<com.sendbird.android.GroupChannelListQuery.QueryType>;
				}
				export class SearchField {
					public static class: java.lang.Class<com.sendbird.android.GroupChannelListQuery.SearchField>;
					public static MEMBER_NICKNAME: com.sendbird.android.GroupChannelListQuery.SearchField;
					public static CHANNEL_NAME: com.sendbird.android.GroupChannelListQuery.SearchField;
					public static valueOf(param0: string): com.sendbird.android.GroupChannelListQuery.SearchField;
					public static values(): androidNative.Array<com.sendbird.android.GroupChannelListQuery.SearchField>;
				}
				export class SuperChannelFilter {
					public static class: java.lang.Class<com.sendbird.android.GroupChannelListQuery.SuperChannelFilter>;
					public static ALL: com.sendbird.android.GroupChannelListQuery.SuperChannelFilter;
					public static SUPER_CHANNEL_ONLY: com.sendbird.android.GroupChannelListQuery.SuperChannelFilter;
					public static NONSUPER_CHANNEL_ONLY: com.sendbird.android.GroupChannelListQuery.SuperChannelFilter;
					public static valueOf(param0: string): com.sendbird.android.GroupChannelListQuery.SuperChannelFilter;
					public static values(): androidNative.Array<com.sendbird.android.GroupChannelListQuery.SuperChannelFilter>;
				}
				export class UnreadChannelFilter {
					public static class: java.lang.Class<com.sendbird.android.GroupChannelListQuery.UnreadChannelFilter>;
					public static ALL: com.sendbird.android.GroupChannelListQuery.UnreadChannelFilter;
					public static UNREAD_MESSAGE: com.sendbird.android.GroupChannelListQuery.UnreadChannelFilter;
					public static values(): androidNative.Array<com.sendbird.android.GroupChannelListQuery.UnreadChannelFilter>;
					public static valueOf(param0: string): com.sendbird.android.GroupChannelListQuery.UnreadChannelFilter;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class GroupChannelMemberListQuery {
				public static class: java.lang.Class<com.sendbird.android.GroupChannelMemberListQuery>;
				public isLoading(): boolean;
				public setLimit(param0: number): void;
				public setMemberStateFilter(param0: com.sendbird.android.GroupChannelMemberListQuery.MemberStateFilter): void;
				public hasNext(): boolean;
				public setOperatorFilter(param0: com.sendbird.android.GroupChannelMemberListQuery.OperatorFilter): void;
				public setOrder(param0: com.sendbird.android.GroupChannelMemberListQuery.Order): void;
				public next(param0: com.sendbird.android.GroupChannelMemberListQuery.GroupChannelMemberListQueryResultHandler): void;
				public setMutedMemberFilter(param0: com.sendbird.android.GroupChannelMemberListQuery.MutedMemberFilter): void;
				public setNicknameStartsWithFilter(param0: string): void;
			}
			export module GroupChannelMemberListQuery {
				export class GroupChannelMemberListQueryResultHandler {
					public static class: java.lang.Class<com.sendbird.android.GroupChannelMemberListQuery.GroupChannelMemberListQueryResultHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.GroupChannelMemberListQuery$GroupChannelMemberListQueryResultHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.List<com.sendbird.android.Member>, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.List<com.sendbird.android.Member>, param1: com.sendbird.android.SendBirdException): void;
				}
				export class MemberStateFilter {
					public static class: java.lang.Class<com.sendbird.android.GroupChannelMemberListQuery.MemberStateFilter>;
					public static ALL: com.sendbird.android.GroupChannelMemberListQuery.MemberStateFilter;
					public static INVITED: com.sendbird.android.GroupChannelMemberListQuery.MemberStateFilter;
					public static INVITED_BY_FRIEND: com.sendbird.android.GroupChannelMemberListQuery.MemberStateFilter;
					public static INVITED_BY_NON_FRIEND: com.sendbird.android.GroupChannelMemberListQuery.MemberStateFilter;
					public static JOINED: com.sendbird.android.GroupChannelMemberListQuery.MemberStateFilter;
					public static valueOf(param0: string): com.sendbird.android.GroupChannelMemberListQuery.MemberStateFilter;
					public static values(): androidNative.Array<com.sendbird.android.GroupChannelMemberListQuery.MemberStateFilter>;
				}
				export class MutedMemberFilter {
					public static class: java.lang.Class<com.sendbird.android.GroupChannelMemberListQuery.MutedMemberFilter>;
					public static ALL: com.sendbird.android.GroupChannelMemberListQuery.MutedMemberFilter;
					public static MUTED: com.sendbird.android.GroupChannelMemberListQuery.MutedMemberFilter;
					public static UNMUTED: com.sendbird.android.GroupChannelMemberListQuery.MutedMemberFilter;
					public static values(): androidNative.Array<com.sendbird.android.GroupChannelMemberListQuery.MutedMemberFilter>;
					public static valueOf(param0: string): com.sendbird.android.GroupChannelMemberListQuery.MutedMemberFilter;
				}
				export class OperatorFilter {
					public static class: java.lang.Class<com.sendbird.android.GroupChannelMemberListQuery.OperatorFilter>;
					public static ALL: com.sendbird.android.GroupChannelMemberListQuery.OperatorFilter;
					public static OPERATOR: com.sendbird.android.GroupChannelMemberListQuery.OperatorFilter;
					public static NONOPERATOR: com.sendbird.android.GroupChannelMemberListQuery.OperatorFilter;
					public static values(): androidNative.Array<com.sendbird.android.GroupChannelMemberListQuery.OperatorFilter>;
					public getValue(): string;
					public static valueOf(param0: string): com.sendbird.android.GroupChannelMemberListQuery.OperatorFilter;
				}
				export class Order {
					public static class: java.lang.Class<com.sendbird.android.GroupChannelMemberListQuery.Order>;
					public static MEMBER_NICKNAME_ALPHABETICAL: com.sendbird.android.GroupChannelMemberListQuery.Order;
					public static OPERATOR_THEN_MEMBER_ALPHABETICAL: com.sendbird.android.GroupChannelMemberListQuery.Order;
					public static values(): androidNative.Array<com.sendbird.android.GroupChannelMemberListQuery.Order>;
					public static valueOf(param0: string): com.sendbird.android.GroupChannelMemberListQuery.Order;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class GroupChannelParams {
				public static class: java.lang.Class<com.sendbird.android.GroupChannelParams>;
				public addUsers(param0: java.util.List<com.sendbird.android.User>): com.sendbird.android.GroupChannelParams;
				public setEphemeral(param0: boolean): com.sendbird.android.GroupChannelParams;
				public setCoverUrl(param0: string): com.sendbird.android.GroupChannelParams;
				public setBroadcast(param0: boolean): com.sendbird.android.GroupChannelParams;
				public addUserId(param0: string): com.sendbird.android.GroupChannelParams;
				public setAccessCode(param0: string): com.sendbird.android.GroupChannelParams;
				public setCoverImage(param0: java.io.File): com.sendbird.android.GroupChannelParams;
				public toString(): string;
				public addUser(param0: com.sendbird.android.User): com.sendbird.android.GroupChannelParams;
				public setSuper(param0: boolean): com.sendbird.android.GroupChannelParams;
				public setData(param0: string): com.sendbird.android.GroupChannelParams;
				public constructor();
				public setName(param0: string): com.sendbird.android.GroupChannelParams;
				public setMessageSurvivalSeconds(param0: number): com.sendbird.android.GroupChannelParams;
				public setStrict(param0: boolean): com.sendbird.android.GroupChannelParams;
				public setCustomType(param0: string): com.sendbird.android.GroupChannelParams;
				public setOperators(param0: java.util.List<com.sendbird.android.User>): com.sendbird.android.GroupChannelParams;
				public setChannelUrl(param0: string): com.sendbird.android.GroupChannelParams;
				public setOperatorUserIds(param0: java.util.List<string>): com.sendbird.android.GroupChannelParams;
				public static clone(param0: com.sendbird.android.GroupChannelParams): com.sendbird.android.GroupChannelParams;
				public addUserIds(param0: java.util.List<string>): com.sendbird.android.GroupChannelParams;
				public setPublic(param0: boolean): com.sendbird.android.GroupChannelParams;
				public setDistinct(param0: boolean): com.sendbird.android.GroupChannelParams;
				public setDiscoverable(param0: boolean): com.sendbird.android.GroupChannelParams;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class GroupChannelTotalUnreadMessageCountParams {
				public static class: java.lang.Class<com.sendbird.android.GroupChannelTotalUnreadMessageCountParams>;
				public setSuperChannelFilter(param0: com.sendbird.android.GroupChannelTotalUnreadMessageCountParams.SuperChannelFilter): com.sendbird.android.GroupChannelTotalUnreadMessageCountParams;
				public setChannelCustomTypesFilter(param0: java.util.List<string>): com.sendbird.android.GroupChannelTotalUnreadMessageCountParams;
				public toString(): string;
				public constructor();
			}
			export module GroupChannelTotalUnreadMessageCountParams {
				export class SuperChannelFilter {
					public static class: java.lang.Class<com.sendbird.android.GroupChannelTotalUnreadMessageCountParams.SuperChannelFilter>;
					public static ALL: com.sendbird.android.GroupChannelTotalUnreadMessageCountParams.SuperChannelFilter;
					public static SUPER_CHANNEL_ONLY: com.sendbird.android.GroupChannelTotalUnreadMessageCountParams.SuperChannelFilter;
					public static NONSUPER_CHANNEL_ONLY: com.sendbird.android.GroupChannelTotalUnreadMessageCountParams.SuperChannelFilter;
					public static valueOf(param0: string): com.sendbird.android.GroupChannelTotalUnreadMessageCountParams.SuperChannelFilter;
					public static values(): androidNative.Array<com.sendbird.android.GroupChannelTotalUnreadMessageCountParams.SuperChannelFilter>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class HashUtils {
				public static class: java.lang.Class<com.sendbird.android.HashUtils>;
				public static INSTANCE: com.sendbird.android.HashUtils;
				public static generateHashCode(param0: androidNative.Array<any>): number;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export abstract class JobResultTask<T>  extends java.util.concurrent.Callable<any> {
				public static class: java.lang.Class<com.sendbird.android.JobResultTask<any>>;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export abstract class JobTask<T>  extends java.util.concurrent.Callable<any> {
				public static class: java.lang.Class<com.sendbird.android.JobTask<any>>;
				public getCallable(): java.util.concurrent.Callable<any>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class JsonObjectExtensionsKt {
				public static class: java.lang.Class<com.sendbird.android.JsonObjectExtensionsKt>;
				public static getAsLongOrNull(param0: com.sendbird.android.shadow.com.google.gson.JsonObject, param1: string): java.lang.Long;
				public static getAsStringOrNull(param0: com.sendbird.android.shadow.com.google.gson.JsonObject, param1: string): string;
				public static getAsJsonObjectOrNull(param0: com.sendbird.android.shadow.com.google.gson.JsonObject, param1: string): com.sendbird.android.shadow.com.google.gson.JsonObject;
				public static getAsIntOrNull(param0: com.sendbird.android.shadow.com.google.gson.JsonObject, param1: string): java.lang.Integer;
				public static getAsFloatOrNull(param0: com.sendbird.android.shadow.com.google.gson.JsonObject, param1: string): java.lang.Float;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class KeyStore {
				public static class: java.lang.Class<com.sendbird.android.KeyStore>;
				public static INSTANCE: com.sendbird.android.KeyStore;
				public static clearAll(): void;
				public static saveSessionKey(param0: string, param1: string): void;
				public static getSessionKey(): string;
				public static init(param0: globalAndroid.content.Context): void;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class LocalCachePrefs {
				public static class: java.lang.Class<com.sendbird.android.LocalCachePrefs>;
				public static getBoolean(param0: string, param1: boolean): boolean;
				public static getLong(param0: string, param1: number): number;
				public static putString(param0: string, param1: string): void;
				public static getInt(param0: string): number;
				public static getInt(param0: string, param1: number): number;
				public static getBoolean(param0: string): boolean;
				public static putInt(param0: string, param1: number): void;
				public static putBoolean(param0: string, param1: boolean): void;
				public static clearAll(): void;
				public static getString(param0: string): string;
				public static putLong(param0: string, param1: number): void;
				public static getString(param0: string, param1: string): string;
				public static getLong(param0: string): number;
				public static remove(param0: string): void;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class LogLevel {
				public static class: java.lang.Class<com.sendbird.android.LogLevel>;
				public static VERBOSE: com.sendbird.android.LogLevel;
				public static DEBUG: com.sendbird.android.LogLevel;
				public static INFO: com.sendbird.android.LogLevel;
				public static WARN: com.sendbird.android.LogLevel;
				public static ERROR: com.sendbird.android.LogLevel;
				public static NONE: com.sendbird.android.LogLevel;
				public static values(): androidNative.Array<com.sendbird.android.LogLevel>;
				public static valueOf(param0: string): com.sendbird.android.LogLevel;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class LogWriter {
				public static class: java.lang.Class<com.sendbird.android.LogWriter>;
				/**
				 * Constructs a new instance of the com.sendbird.android.LogWriter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					print(param0: com.sendbird.android.LogLevel, param1: string, param2: string): number;
				});
				public constructor();
				public print(param0: com.sendbird.android.LogLevel, param1: string, param2: string): number;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class LoggerV2 {
				public static class: java.lang.Class<com.sendbird.android.LoggerV2>;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class Member extends com.sendbird.android.User {
				public static class: java.lang.Class<com.sendbird.android.Member>;
				public isBlockedByMe(): boolean;
				public getRole(): com.sendbird.android.Member.Role;
				/** @deprecated */
				public getState(): com.sendbird.android.Member.InvitationState;
				public constructor(param0: com.sendbird.android.shadow.com.google.gson.JsonElement);
				public getMemberState(): com.sendbird.android.Member.MemberState;
				public isBlockingMe(): boolean;
				public toString(): string;
				public isMuted(): boolean;
			}
			export module Member {
				export class InvitationState {
					public static class: java.lang.Class<com.sendbird.android.Member.InvitationState>;
					public static INVITED: com.sendbird.android.Member.InvitationState;
					public static JOINED: com.sendbird.android.Member.InvitationState;
					public static values(): androidNative.Array<com.sendbird.android.Member.InvitationState>;
					public static valueOf(param0: string): com.sendbird.android.Member.InvitationState;
				}
				export class MemberState {
					public static class: java.lang.Class<com.sendbird.android.Member.MemberState>;
					public static NONE: com.sendbird.android.Member.MemberState;
					public static INVITED: com.sendbird.android.Member.MemberState;
					public static JOINED: com.sendbird.android.Member.MemberState;
					public getValue(): string;
					public static values(): androidNative.Array<com.sendbird.android.Member.MemberState>;
					public static from(param0: string): com.sendbird.android.Member.MemberState;
					public static valueOf(param0: string): com.sendbird.android.Member.MemberState;
				}
				export class MutedState {
					public static class: java.lang.Class<com.sendbird.android.Member.MutedState>;
					public static UNMUTED: com.sendbird.android.Member.MutedState;
					public static MUTED: com.sendbird.android.Member.MutedState;
					public static values(): androidNative.Array<com.sendbird.android.Member.MutedState>;
					public static valueOf(param0: string): com.sendbird.android.Member.MutedState;
				}
				export class Role {
					public static class: java.lang.Class<com.sendbird.android.Member.Role>;
					public static NONE: com.sendbird.android.Member.Role;
					public static OPERATOR: com.sendbird.android.Member.Role;
					public getValue(): string;
					public static valueOf(param0: string): com.sendbird.android.Member.Role;
					public static fromValue(param0: string): com.sendbird.android.Member.Role;
					public static values(): androidNative.Array<com.sendbird.android.Member.Role>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class MessageChangeLogsPager {
				public static class: java.lang.Class<com.sendbird.android.MessageChangeLogsPager>;
				public constructor(param0: com.sendbird.android.BaseChannel);
				public dispose(): void;
				public request(param0: com.sendbird.android.handlers.TokenDataSource, param1: com.sendbird.android.handlers.MessageChangeLogsHandler): java.util.concurrent.Future<string>;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class MessageChangeLogsParams {
				public static class: java.lang.Class<com.sendbird.android.MessageChangeLogsParams>;
				public includeMetaArray: boolean;
				public includeReactions: boolean;
				public includeThreadInfo: boolean;
				public includeReplies: boolean;
				public includeParentMessageText: boolean;
				public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean, param4: boolean);
				public static from(param0: com.sendbird.android.ThreadMessageListParams): com.sendbird.android.MessageChangeLogsParams;
				public toString(): string;
				public setIncludeReplies(param0: boolean): void;
				public constructor();
				public setIncludeReactions(param0: boolean): void;
				public clone(): com.sendbird.android.MessageChangeLogsParams;
				public static from(param0: com.sendbird.android.MessageListParams): com.sendbird.android.MessageChangeLogsParams;
				public isIncludeParentMessageText(): boolean;
				public shouldIncludeMetaArray(): boolean;
				public setIncludeMetaArray(param0: boolean): void;
				public setIncludeThreadInfo(param0: boolean): void;
				public shouldIncludeThreadInfo(): boolean;
				public shouldIncludeReplies(): boolean;
				public static from(param0: com.sendbird.android.PreviousMessageListQuery): com.sendbird.android.MessageChangeLogsParams;
				public shouldIncludeReactions(): boolean;
				public setIncludeParentMessageText(param0: boolean): void;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class MessageCollection extends com.sendbird.android.BaseCollection {
				public static class: java.lang.Class<com.sendbird.android.MessageCollection>;
				public loadNext(param0: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public getMessageList(): androidx.lifecycle.LiveData<java.util.List<com.sendbird.android.BaseMessage>>;
				public getMessages(): java.util.List<com.sendbird.android.BaseMessage>;
				public onChannelDeleted(param0: com.sendbird.android.handlers.Source, param1: com.sendbird.android.GroupChannel): void;
				public onResume(): void;
				public onMessageAdded(param0: com.sendbird.android.handlers.Source, param1: com.sendbird.android.GroupChannel, param2: com.sendbird.android.BaseMessage): void;
				public onPause(): void;
				public onMessageDeleted(param0: com.sendbird.android.handlers.Source, param1: com.sendbird.android.GroupChannel, param2: number): void;
				public onMessageUpdated(param0: com.sendbird.android.handlers.Source, param1: com.sendbird.android.GroupChannel, param2: com.sendbird.android.BaseMessage): void;
				public onReconnected(): void;
				public getStartingPoint(): number;
				public dispose(): void;
				public hasNext(): boolean;
				public onChannelChanged(param0: com.sendbird.android.handlers.Source, param1: com.sendbird.android.GroupChannel): void;
				public setMessageCollectionHandler(param0: com.sendbird.android.handlers.MessageCollectionHandler): void;
				public loadPrevious(param0: com.sendbird.android.BaseChannel.GetMessagesHandler): void;
				public hasPrevious(): boolean;
				public static getMessageFromCache(param0: number): com.sendbird.android.BaseMessage;
				public onChannelsChanged(param0: com.sendbird.android.handlers.Source, param1: java.util.List<com.sendbird.android.GroupChannel>): void;
				public init(param0: com.sendbird.android.handlers.InitPolicy, param1: com.sendbird.android.handlers.InitialLoadHandler): void;
			}
			export module MessageCollection {
				export class Builder {
					public static class: java.lang.Class<com.sendbird.android.MessageCollection.Builder>;
					public build(): com.sendbird.android.MessageCollection;
					public setStartingPoint(param0: number): com.sendbird.android.MessageCollection.Builder;
					public constructor(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.android.MessageListParams);
					public setMessageCollectionHandler(param0: com.sendbird.android.handlers.MessageCollectionHandler): com.sendbird.android.MessageCollection.Builder;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class MessageDataSource {
				public static class: java.lang.Class<com.sendbird.android.MessageDataSource>;
				public static getInstance(): com.sendbird.android.MessageDataSource;
			}
			export module MessageDataSource {
				export class ChannelCacheHolder {
					public static class: java.lang.Class<com.sendbird.android.MessageDataSource.ChannelCacheHolder>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class MessageLifecycleEventHandler {
				public static class: java.lang.Class<com.sendbird.android.MessageLifecycleEventHandler>;
				/**
				 * Constructs a new instance of the com.sendbird.android.MessageLifecycleEventHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onUpdated(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage): void;
					onSent(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage): void;
				});
				public constructor();
				public onSent(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage): void;
				public onUpdated(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage): void;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class MessageListParams extends com.sendbird.android.BaseMessageListParams {
				public static class: java.lang.Class<com.sendbird.android.MessageListParams>;
				public includeThreadInfo: boolean;
				public includeReplies: boolean;
				public showSubchannelMessagesOnly: boolean;
				public constructor(param0: number, param1: number, param2: com.sendbird.android.BaseChannel.MessageTypeFilter, param3: string, param4: java.util.List<string>, param5: boolean, param6: boolean, param7: boolean, param8: boolean, param9: boolean);
				public constructor(param0: number, param1: number, param2: com.sendbird.android.BaseChannel.MessageTypeFilter, param3: java.util.Collection<string>, param4: java.util.List<string>, param5: boolean, param6: boolean, param7: boolean, param8: boolean, param9: boolean, param10: boolean, param11: boolean);
				public constructor(param0: number, param1: number, param2: com.sendbird.android.BaseChannel.MessageTypeFilter, param3: java.util.Collection<string>, param4: java.util.List<string>, param5: boolean, param6: boolean, param7: boolean, param8: boolean, param9: boolean);
				public setShowSubchannelMessagesOnly(param0: boolean): void;
				public clone(): com.sendbird.android.MessageListParams;
				public toString(): string;
				public setIncludeReplies(param0: boolean): void;
				public constructor();
				public shouldShowSubchannelMessagesOnly(): boolean;
				public constructor(param0: number, param1: number, param2: com.sendbird.android.BaseChannel.MessageTypeFilter, param3: string, param4: java.util.List<string>, param5: boolean, param6: boolean, param7: boolean, param8: boolean, param9: boolean, param10: boolean, param11: boolean);
				public setIncludeThreadInfo(param0: boolean): void;
				public shouldIncludeThreadInfo(): boolean;
				public shouldIncludeReplies(): boolean;
				public belongsTo(param0: com.sendbird.android.BaseMessage): boolean;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class MessageListQuery {
				public static class: java.lang.Class<com.sendbird.android.MessageListQuery>;
				public isLoading(): boolean;
				public next(param0: number, param1: number, param2: boolean, param3: com.sendbird.android.MessageListQuery.MessageListQueryResult): void;
				public prev(param0: number, param1: number, param2: boolean, param3: com.sendbird.android.MessageListQuery.MessageListQueryResult): void;
				public load(param0: number, param1: number, param2: number, param3: boolean, param4: com.sendbird.android.MessageListQuery.MessageListQueryResult): void;
			}
			export module MessageListQuery {
				export class MessageListQueryResult {
					public static class: java.lang.Class<com.sendbird.android.MessageListQuery.MessageListQueryResult>;
					/**
					 * Constructs a new instance of the com.sendbird.android.MessageListQuery$MessageListQueryResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.List<com.sendbird.android.BaseMessage>, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.List<com.sendbird.android.BaseMessage>, param1: com.sendbird.android.SendBirdException): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class MessageMetaArray {
				public static class: java.lang.Class<com.sendbird.android.MessageMetaArray>;
				public removeValue(param0: string): void;
				public constructor(param0: string, param1: java.util.List<string>);
				public getValue(): java.util.List<string>;
				public hashCode(): number;
				public addValue(param0: string): void;
				public addValue(param0: java.util.List<string>): void;
				public equals(param0: any): boolean;
				public toString(): string;
				public constructor(param0: string);
				public getKey(): string;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class MessageRepository {
				public static class: java.lang.Class<com.sendbird.android.MessageRepository>;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class MessageRetrievalParams {
				public static class: java.lang.Class<com.sendbird.android.MessageRetrievalParams>;
				public channelUrl: string;
				public channelType: com.sendbird.android.BaseChannel.ChannelType;
				public messageId: number;
				public includeMetaArray: boolean;
				public includeThreadInfo: boolean;
				public includeParentMessageText: boolean;
				public getMessageId(): number;
				public constructor(param0: string, param1: com.sendbird.android.BaseChannel.ChannelType, param2: number);
				public getChannelType(): com.sendbird.android.BaseChannel.ChannelType;
				public shouldIncludeMetaArray(): boolean;
				public shouldIncludeParentMessageText(): boolean;
				public setIncludeMetaArray(param0: boolean): void;
				public setIncludeThreadInfo(param0: boolean): void;
				public shouldIncludeThreadInfo(): boolean;
				public toString(): string;
				public getChannelUrl(): string;
				public constructor();
				public setIncludeParentMessageText(param0: boolean): void;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class MessageSearchQuery {
				public static class: java.lang.Class<com.sendbird.android.MessageSearchQuery>;
				public serialize(): androidNative.Array<number>;
				public getOrder(): com.sendbird.android.MessageSearchQuery.Order;
				public isExactMatch(): boolean;
				public next(param0: com.sendbird.android.MessageSearchQuery.MessageSearchQueryResultHandler): void;
				public isReverse(): boolean;
				public getChannelUrl(): string;
				public isLoading(): boolean;
				public getChannelCustomType(): string;
				public getTargetFields(): java.util.List<string>;
				public static buildFromSerializedData(param0: androidNative.Array<number>): com.sendbird.android.MessageSearchQuery;
				public getKeyword(): string;
				public hasNext(): boolean;
				public isAdvancedQuery(): boolean;
				public getMessageTimestampTo(): number;
				public getMessageTimestampFrom(): number;
				public getLimit(): number;
			}
			export module MessageSearchQuery {
				export class Builder {
					public static class: java.lang.Class<com.sendbird.android.MessageSearchQuery.Builder>;
					public setTargetFields(param0: java.util.List<string>): com.sendbird.android.MessageSearchQuery.Builder;
					public setAdvancedQuery(param0: boolean): com.sendbird.android.MessageSearchQuery.Builder;
					public build(): com.sendbird.android.MessageSearchQuery;
					public setOrder(param0: com.sendbird.android.MessageSearchQuery.Order): com.sendbird.android.MessageSearchQuery.Builder;
					public constructor(param0: com.sendbird.android.MessageSearchQuery);
					public setLimit(param0: number): com.sendbird.android.MessageSearchQuery.Builder;
					public setChannelUrl(param0: string): com.sendbird.android.MessageSearchQuery.Builder;
					public setChannelCustomType(param0: string): com.sendbird.android.MessageSearchQuery.Builder;
					public setReverse(param0: boolean): com.sendbird.android.MessageSearchQuery.Builder;
					public setExactMatch(param0: boolean): com.sendbird.android.MessageSearchQuery.Builder;
					public constructor();
					public setKeyword(param0: string): com.sendbird.android.MessageSearchQuery.Builder;
					public setMessageTimestampFrom(param0: number): com.sendbird.android.MessageSearchQuery.Builder;
					public setMessageTimestampTo(param0: number): com.sendbird.android.MessageSearchQuery.Builder;
				}
				export class MessageSearchQueryResultHandler {
					public static class: java.lang.Class<com.sendbird.android.MessageSearchQuery.MessageSearchQueryResultHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.MessageSearchQuery$MessageSearchQueryResultHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.List<com.sendbird.android.BaseMessage>, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.List<com.sendbird.android.BaseMessage>, param1: com.sendbird.android.SendBirdException): void;
				}
				export class Order {
					public static class: java.lang.Class<com.sendbird.android.MessageSearchQuery.Order>;
					public static SCORE: com.sendbird.android.MessageSearchQuery.Order;
					public static TIMESTAMP: com.sendbird.android.MessageSearchQuery.Order;
					public getValue(): string;
					public static values(): androidNative.Array<com.sendbird.android.MessageSearchQuery.Order>;
					public static fromValue(param0: string): com.sendbird.android.MessageSearchQuery.Order;
					public static valueOf(param0: string): com.sendbird.android.MessageSearchQuery.Order;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class MutedUserListQuery extends com.sendbird.android.UserListQuery {
				public static class: java.lang.Class<com.sendbird.android.MutedUserListQuery>;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class OGImage {
				public static class: java.lang.Class<com.sendbird.android.OGImage>;
				public static buildFromSerializedData(param0: androidNative.Array<number>): com.sendbird.android.OGImage;
				public serialize(): androidNative.Array<number>;
				public getType(): string;
				public getWidth(): number;
				public getHeight(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getSecureUrl(): string;
				public getAlt(): string;
				public getUrl(): string;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class OGMetaData {
				public static class: java.lang.Class<com.sendbird.android.OGMetaData>;
				public serialize(): androidNative.Array<number>;
				public static buildFromSerializedData(param0: androidNative.Array<number>): com.sendbird.android.OGMetaData;
				public hashCode(): number;
				public getOGImage(): com.sendbird.android.OGImage;
				public equals(param0: any): boolean;
				public getUrl(): string;
				public getDescription(): string;
				public toString(): string;
				public getTitle(): string;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class OnPushTokenReceiveListener {
				public static class: java.lang.Class<com.sendbird.android.OnPushTokenReceiveListener>;
				/**
				 * Constructs a new instance of the com.sendbird.android.OnPushTokenReceiveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onReceived(param0: string, param1: com.sendbird.android.SendBirdException): void;
				});
				public constructor();
				public onReceived(param0: string, param1: com.sendbird.android.SendBirdException): void;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class OpenChannel extends com.sendbird.android.BaseChannel {
				public static class: java.lang.Class<com.sendbird.android.OpenChannel>;
				public mParticipantCount: number;
				public mOperators: java.util.List<com.sendbird.android.User>;
				public createBannedUserListQuery(): com.sendbird.android.BannedUserListQuery;
				public updateChannelWithOperatorUserIds(param0: string, param1: any, param2: string, param3: java.util.List<string>, param4: com.sendbird.android.OpenChannel.OpenChannelUpdateHandler): void;
				public static createChannelWithOperatorUserIds(param0: string, param1: any, param2: string, param3: java.util.List<string>, param4: com.sendbird.android.OpenChannel.OpenChannelCreateHandler): void;
				public static createChannelWithOperatorUserIds(param0: string, param1: any, param2: string, param3: string, param4: java.util.List<string>, param5: com.sendbird.android.OpenChannel.OpenChannelCreateHandler): void;
				/** @deprecated */
				public updateChannel(param0: string, param1: any, param2: string, param3: java.util.List<com.sendbird.android.User>, param4: com.sendbird.android.OpenChannel.OpenChannelUpdateHandler): void;
				public muteUserWithUserId(param0: string, param1: string, param2: number, param3: com.sendbird.android.OpenChannel.OpenChannelMuteHandler): void;
				public getParticipantCount(): number;
				public updateChannel(param0: com.sendbird.android.OpenChannelParams, param1: com.sendbird.android.OpenChannel.OpenChannelUpdateHandler): void;
				public updateChannel(param0: string, param1: any, param2: string, param3: string, param4: java.util.List<com.sendbird.android.User>, param5: com.sendbird.android.OpenChannel.OpenChannelUpdateHandler): void;
				/** @deprecated */
				public static createChannel(param0: string, param1: any, param2: string, param3: java.util.List<com.sendbird.android.User>, param4: com.sendbird.android.OpenChannel.OpenChannelCreateHandler): void;
				public exit(param0: com.sendbird.android.OpenChannel.OpenChannelExitHandler): void;
				public refresh(param0: com.sendbird.android.OpenChannel.OpenChannelRefreshHandler): void;
				public enter(param0: com.sendbird.android.OpenChannel.OpenChannelEnterHandler): void;
				public isOperatorWithUserId(param0: string): boolean;
				public static createChannel(param0: com.sendbird.android.OpenChannelParams, param1: com.sendbird.android.OpenChannel.OpenChannelCreateHandler): void;
				public muteUserWithUserId(param0: string, param1: com.sendbird.android.OpenChannel.OpenChannelMuteHandler): void;
				public updateChannel(param0: string, param1: any, param2: string, param3: com.sendbird.android.OpenChannel.OpenChannelUpdateHandler): void;
				public unbanUser(param0: com.sendbird.android.User, param1: com.sendbird.android.OpenChannel.OpenChannelUnbanHandler): void;
				public updateChannelWithOperatorUserIds(param0: string, param1: any, param2: string, param3: string, param4: java.util.List<string>, param5: com.sendbird.android.OpenChannel.OpenChannelUpdateHandler): void;
				public muteUser(param0: com.sendbird.android.User, param1: string, param2: number, param3: com.sendbird.android.OpenChannel.OpenChannelMuteHandler): void;
				public static getEnteredChannels(): java.util.Collection<com.sendbird.android.OpenChannel>;
				public createMutedUserListQuery(): com.sendbird.android.MutedUserListQuery;
				public static getChannelWithoutCache(param0: string, param1: com.sendbird.android.OpenChannel.OpenChannelGetHandler): void;
				/** @deprecated */
				public static createChannel(param0: string, param1: any, param2: string, param3: com.sendbird.android.OpenChannel.OpenChannelCreateHandler): void;
				public update(param0: com.sendbird.android.shadow.com.google.gson.JsonElement): void;
				public static createChannel(param0: string, param1: any, param2: string, param3: string, param4: java.util.List<com.sendbird.android.User>, param5: com.sendbird.android.OpenChannel.OpenChannelCreateHandler): void;
				public muteUser(param0: com.sendbird.android.User, param1: com.sendbird.android.OpenChannel.OpenChannelMuteHandler): void;
				public static clone(param0: com.sendbird.android.OpenChannel): com.sendbird.android.OpenChannel;
				public banUser(param0: com.sendbird.android.User, param1: number, param2: com.sendbird.android.OpenChannel.OpenChannelBanHandler): void;
				public setParticipantCount(param0: number): void;
				public static clearEnteredChannels(): void;
				public constructor(param0: com.sendbird.android.shadow.com.google.gson.JsonElement);
				public unmuteUser(param0: com.sendbird.android.User, param1: com.sendbird.android.OpenChannel.OpenChannelUnmuteHandler): void;
				public static createChannelWithOperatorUserIds(param0: string, param1: string, param2: any, param3: string, param4: string, param5: java.util.List<string>, param6: com.sendbird.android.OpenChannel.OpenChannelCreateHandler): void;
				public toString(): string;
				public static getChannelWithoutCacheInternal(param0: string, param1: com.sendbird.android.OpenChannel.OpenChannelGetHandler): void;
				public banUserWithUserId(param0: string, param1: number, param2: com.sendbird.android.OpenChannel.OpenChannelBanHandler): void;
				public unbanUserWithUserId(param0: string, param1: com.sendbird.android.OpenChannel.OpenChannelUnbanHandler): void;
				public getCustomType(): string;
				public static createChannel(param0: com.sendbird.android.OpenChannel.OpenChannelCreateHandler): void;
				public static getChannel(param0: string, param1: com.sendbird.android.OpenChannel.OpenChannelGetHandler): void;
				public unmuteUserWithUserId(param0: string, param1: com.sendbird.android.OpenChannel.OpenChannelUnmuteHandler): void;
				public createParticipantListQuery(): com.sendbird.android.ParticipantListQuery;
				public getOperators(): java.util.List<com.sendbird.android.User>;
				public static createOpenChannelListQuery(): com.sendbird.android.OpenChannelListQuery;
				public delete(param0: com.sendbird.android.OpenChannel.OpenChannelDeleteHandler): void;
				public isOperator(param0: com.sendbird.android.User): boolean;
			}
			export module OpenChannel {
				export class OpenChannelBanHandler {
					public static class: java.lang.Class<com.sendbird.android.OpenChannel.OpenChannelBanHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.OpenChannel$OpenChannelBanHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class OpenChannelCreateHandler {
					public static class: java.lang.Class<com.sendbird.android.OpenChannel.OpenChannelCreateHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.OpenChannel$OpenChannelCreateHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.OpenChannel, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.OpenChannel, param1: com.sendbird.android.SendBirdException): void;
				}
				export class OpenChannelDeleteHandler {
					public static class: java.lang.Class<com.sendbird.android.OpenChannel.OpenChannelDeleteHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.OpenChannel$OpenChannelDeleteHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class OpenChannelEnterHandler {
					public static class: java.lang.Class<com.sendbird.android.OpenChannel.OpenChannelEnterHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.OpenChannel$OpenChannelEnterHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class OpenChannelExitHandler {
					public static class: java.lang.Class<com.sendbird.android.OpenChannel.OpenChannelExitHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.OpenChannel$OpenChannelExitHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class OpenChannelGetHandler {
					public static class: java.lang.Class<com.sendbird.android.OpenChannel.OpenChannelGetHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.OpenChannel$OpenChannelGetHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.OpenChannel, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.OpenChannel, param1: com.sendbird.android.SendBirdException): void;
				}
				export class OpenChannelMuteHandler {
					public static class: java.lang.Class<com.sendbird.android.OpenChannel.OpenChannelMuteHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.OpenChannel$OpenChannelMuteHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class OpenChannelRefreshHandler {
					public static class: java.lang.Class<com.sendbird.android.OpenChannel.OpenChannelRefreshHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.OpenChannel$OpenChannelRefreshHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class OpenChannelUnbanHandler {
					public static class: java.lang.Class<com.sendbird.android.OpenChannel.OpenChannelUnbanHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.OpenChannel$OpenChannelUnbanHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class OpenChannelUnmuteHandler {
					public static class: java.lang.Class<com.sendbird.android.OpenChannel.OpenChannelUnmuteHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.OpenChannel$OpenChannelUnmuteHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class OpenChannelUpdateHandler {
					public static class: java.lang.Class<com.sendbird.android.OpenChannel.OpenChannelUpdateHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.OpenChannel$OpenChannelUpdateHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.OpenChannel, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.OpenChannel, param1: com.sendbird.android.SendBirdException): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class OpenChannelListQuery {
				public static class: java.lang.Class<com.sendbird.android.OpenChannelListQuery>;
				public isLoading(): boolean;
				public setLimit(param0: number): void;
				public isIncludeMetadata(): boolean;
				public setNameKeyword(param0: string): void;
				public setCustomTypeFilter(param0: string): void;
				public hasNext(): boolean;
				public next(param0: com.sendbird.android.OpenChannelListQuery.OpenChannelListQueryResultHandler): void;
				public setUrlKeyword(param0: string): void;
				public isIncludeFrozen(): boolean;
				public setIncludeMetadata(param0: boolean): void;
				public setIncludeFrozen(param0: boolean): void;
			}
			export module OpenChannelListQuery {
				export class OpenChannelListQueryResultHandler {
					public static class: java.lang.Class<com.sendbird.android.OpenChannelListQuery.OpenChannelListQueryResultHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.OpenChannelListQuery$OpenChannelListQueryResultHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.List<com.sendbird.android.OpenChannel>, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.List<com.sendbird.android.OpenChannel>, param1: com.sendbird.android.SendBirdException): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class OpenChannelParams {
				public static class: java.lang.Class<com.sendbird.android.OpenChannelParams>;
				/** @deprecated */
				public addOperatorId(param0: string): com.sendbird.android.OpenChannelParams;
				public setCustomType(param0: string): com.sendbird.android.OpenChannelParams;
				/** @deprecated */
				public addOperatorIds(param0: java.util.List<string>): com.sendbird.android.OpenChannelParams;
				public static clone(param0: com.sendbird.android.OpenChannelParams): com.sendbird.android.OpenChannelParams;
				public toString(): string;
				public setChannelUrl(param0: string): com.sendbird.android.OpenChannelParams;
				public setName(param0: string): com.sendbird.android.OpenChannelParams;
				public constructor(param0: string);
				public constructor();
				/** @deprecated */
				public addOperator(param0: com.sendbird.android.User): com.sendbird.android.OpenChannelParams;
				public setCoverUrl(param0: string): com.sendbird.android.OpenChannelParams;
				public setOperatorUserIds(param0: java.util.List<string>): com.sendbird.android.OpenChannelParams;
				public setData(param0: string): com.sendbird.android.OpenChannelParams;
				/** @deprecated */
				public addOperators(param0: java.util.List<com.sendbird.android.User>): com.sendbird.android.OpenChannelParams;
				public setOperators(param0: java.util.List<com.sendbird.android.User>): com.sendbird.android.OpenChannelParams;
				public setCoverImage(param0: java.io.File): com.sendbird.android.OpenChannelParams;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class OperatorListQuery {
				public static class: java.lang.Class<com.sendbird.android.OperatorListQuery>;
				public isLoading(): boolean;
				public setLimit(param0: number): void;
				public next(param0: com.sendbird.android.OperatorListQuery.OperatorListQueryResultHandler): void;
				public hasNext(): boolean;
			}
			export module OperatorListQuery {
				export class OperatorListQueryResultHandler {
					public static class: java.lang.Class<com.sendbird.android.OperatorListQuery.OperatorListQueryResultHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.OperatorListQuery$OperatorListQueryResultHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.List<com.sendbird.android.User>, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.List<com.sendbird.android.User>, param1: com.sendbird.android.SendBirdException): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class ParticipantListQuery extends com.sendbird.android.UserListQuery {
				public static class: java.lang.Class<com.sendbird.android.ParticipantListQuery>;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class Plugin {
				public static class: java.lang.Class<com.sendbird.android.Plugin>;
				public serialize(): androidNative.Array<number>;
				public getType(): string;
				public getVendor(): string;
				public getDetail(): java.util.Map<string,string>;
				public static buildFromSerializedData(param0: androidNative.Array<number>): com.sendbird.android.Plugin;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class PreviousMessageListQuery {
				public static class: java.lang.Class<com.sendbird.android.PreviousMessageListQuery>;
				public setShowSubchannelMessagesOnly(param0: boolean): void;
				public shouldReverse(): boolean;
				public isIncludeThreadInfo(): boolean;
				public setIncludeReplies(param0: boolean): void;
				public isLoading(): boolean;
				public setIncludeReactions(param0: boolean): void;
				public shouldShowSubchannelMessagesOnly(): boolean;
				public load(param0: number, param1: boolean, param2: com.sendbird.android.PreviousMessageListQuery.MessageListQueryResult): void;
				public setMessageTypeFilter(param0: com.sendbird.android.BaseChannel.MessageTypeFilter): void;
				public setCustomTypeFilter(param0: string): void;
				public shouldIncludeMetaArray(): boolean;
				public setSenderUserIdsFilter(param0: java.util.List<string>): void;
				public setCustomTypesFilter(param0: java.util.Collection<string>): void;
				public setIncludeThreadInfo(param0: boolean): void;
				public shouldIncludeReplies(): boolean;
				public setIncludeParentMessageText(param0: boolean): void;
				public getLimit(): number;
				public setLimit(param0: number): void;
				public getMessageTypeFilter(): com.sendbird.android.BaseChannel.MessageTypeFilter;
				public setReverse(param0: boolean): void;
				public getSenderUserIdsFilter(): java.util.List<string>;
				public shouldIncludeParentMessageText(): boolean;
				public getChannel(): com.sendbird.android.BaseChannel;
				public getCustomTypeFilter(): string;
				public load(param0: com.sendbird.android.PreviousMessageListQuery.MessageListQueryResult): void;
				public hasMore(): boolean;
				public setIncludeMetaArray(param0: boolean): void;
				public getMessageTimestamp(): number;
				public shouldIncludeReactions(): boolean;
			}
			export module PreviousMessageListQuery {
				export class MessageListQueryResult {
					public static class: java.lang.Class<com.sendbird.android.PreviousMessageListQuery.MessageListQueryResult>;
					/**
					 * Constructs a new instance of the com.sendbird.android.PreviousMessageListQuery$MessageListQueryResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.List<com.sendbird.android.BaseMessage>, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.List<com.sendbird.android.BaseMessage>, param1: com.sendbird.android.SendBirdException): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class PublicGroupChannelListQuery {
				public static class: java.lang.Class<com.sendbird.android.PublicGroupChannelListQuery>;
				public getCustomTypesFilter(): java.util.List<string>;
				public setChannelNameContainsFilter(param0: string): void;
				public isIncludeMetadata(): boolean;
				public setOrder(param0: com.sendbird.android.PublicGroupChannelListQuery.Order): void;
				public setCustomTypesFilter(param0: java.util.List<string>): void;
				public isLoading(): boolean;
				public getChannelNameContainsFilter(): string;
				public setSuperChannelFilter(param0: com.sendbird.android.PublicGroupChannelListQuery.SuperChannelFilter): void;
				public setMembershipFilter(param0: com.sendbird.android.PublicGroupChannelListQuery.MembershipFilter): void;
				public isIncludeFrozen(): boolean;
				public getLimit(): number;
				public setLimit(param0: number): void;
				public setChannelUrlsFilter(param0: java.util.List<string>): void;
				public getChannelUrlsFilter(): java.util.List<string>;
				public setIncludeMetadata(param0: boolean): void;
				public setCustomTypeStartsWithFilter(param0: string): void;
				public setIncludeEmpty(param0: boolean): void;
				public next(param0: com.sendbird.android.PublicGroupChannelListQuery.PublicGroupChannelListQueryResultHandler): void;
				public getSuperChannelFilter(): com.sendbird.android.PublicGroupChannelListQuery.SuperChannelFilter;
				public getMembershipFilter(): com.sendbird.android.PublicGroupChannelListQuery.MembershipFilter;
				public setMetaDataOrderKeyFilter(param0: string): void;
				public getCustomTypeStartsWithFilter(): string;
				public getMetaDataOrderKeyFilter(): string;
				public hasNext(): boolean;
				public setIncludeFrozen(param0: boolean): void;
				public isIncludeEmpty(): boolean;
				public getOrder(): com.sendbird.android.PublicGroupChannelListQuery.Order;
			}
			export module PublicGroupChannelListQuery {
				export class FilterMode {
					public static class: java.lang.Class<com.sendbird.android.PublicGroupChannelListQuery.FilterMode>;
					public static ALL: com.sendbird.android.PublicGroupChannelListQuery.FilterMode;
					public static MEMBERS_EXACTLY_IN: com.sendbird.android.PublicGroupChannelListQuery.FilterMode;
					public static MEMBERS_NICKNAME_CONTAINS: com.sendbird.android.PublicGroupChannelListQuery.FilterMode;
					public static MEMBERS_INCLUDE_IN: com.sendbird.android.PublicGroupChannelListQuery.FilterMode;
					public static values(): androidNative.Array<com.sendbird.android.PublicGroupChannelListQuery.FilterMode>;
					public static valueOf(param0: string): com.sendbird.android.PublicGroupChannelListQuery.FilterMode;
				}
				export class MembershipFilter {
					public static class: java.lang.Class<com.sendbird.android.PublicGroupChannelListQuery.MembershipFilter>;
					public static ALL: com.sendbird.android.PublicGroupChannelListQuery.MembershipFilter;
					public static JOINED: com.sendbird.android.PublicGroupChannelListQuery.MembershipFilter;
					public static values(): androidNative.Array<com.sendbird.android.PublicGroupChannelListQuery.MembershipFilter>;
					public static valueOf(param0: string): com.sendbird.android.PublicGroupChannelListQuery.MembershipFilter;
				}
				export class Order {
					public static class: java.lang.Class<com.sendbird.android.PublicGroupChannelListQuery.Order>;
					public static CHRONOLOGICAL: com.sendbird.android.PublicGroupChannelListQuery.Order;
					public static CHANNEL_NAME_ALPHABETICAL: com.sendbird.android.PublicGroupChannelListQuery.Order;
					public static METADATA_VALUE_ALPHABETICAL: com.sendbird.android.PublicGroupChannelListQuery.Order;
					public static values(): androidNative.Array<com.sendbird.android.PublicGroupChannelListQuery.Order>;
					public static valueOf(param0: string): com.sendbird.android.PublicGroupChannelListQuery.Order;
				}
				export class PublicGroupChannelListQueryResultHandler {
					public static class: java.lang.Class<com.sendbird.android.PublicGroupChannelListQuery.PublicGroupChannelListQueryResultHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.PublicGroupChannelListQuery$PublicGroupChannelListQueryResultHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.List<com.sendbird.android.GroupChannel>, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.List<com.sendbird.android.GroupChannel>, param1: com.sendbird.android.SendBirdException): void;
				}
				export class SuperChannelFilter {
					public static class: java.lang.Class<com.sendbird.android.PublicGroupChannelListQuery.SuperChannelFilter>;
					public static ALL: com.sendbird.android.PublicGroupChannelListQuery.SuperChannelFilter;
					public static SUPER_CHANNEL_ONLY: com.sendbird.android.PublicGroupChannelListQuery.SuperChannelFilter;
					public static NONSUPER_CHANNEL_ONLY: com.sendbird.android.PublicGroupChannelListQuery.SuperChannelFilter;
					public static values(): androidNative.Array<com.sendbird.android.PublicGroupChannelListQuery.SuperChannelFilter>;
					public static valueOf(param0: string): com.sendbird.android.PublicGroupChannelListQuery.SuperChannelFilter;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class Reaction extends java.lang.Comparable<com.sendbird.android.Reaction> {
				public static class: java.lang.Class<com.sendbird.android.Reaction>;
				public serialize(): androidNative.Array<number>;
				public getUpdatedAt(): number;
				public compareTo(param0: com.sendbird.android.Reaction): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public static clone(param0: com.sendbird.android.Reaction): com.sendbird.android.Reaction;
				public static buildFromSerializedData(param0: androidNative.Array<number>): com.sendbird.android.Reaction;
				public toString(): string;
				public getUserIds(): java.util.List<string>;
				public getKey(): string;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class ReactionEvent {
				public static class: java.lang.Class<com.sendbird.android.ReactionEvent>;
				public getMessageId(): number;
				public getUpdatedAt(): number;
				public getOperation(): com.sendbird.android.ReactionEvent.ReactionEventAction;
				public getUserId(): string;
				public toString(): string;
				public getKey(): string;
			}
			export module ReactionEvent {
				export class ReactionEventAction {
					public static class: java.lang.Class<com.sendbird.android.ReactionEvent.ReactionEventAction>;
					public static ADD: com.sendbird.android.ReactionEvent.ReactionEventAction;
					public static DELETE: com.sendbird.android.ReactionEvent.ReactionEventAction;
					public static valueOf(param0: string): com.sendbird.android.ReactionEvent.ReactionEventAction;
					public static values(): androidNative.Array<com.sendbird.android.ReactionEvent.ReactionEventAction>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class ReadStatus {
				public static class: java.lang.Class<com.sendbird.android.ReadStatus>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getReader(): com.sendbird.android.User;
				public toString(): string;
				public getTimestamp(): number;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class ScheduledUserMessage {
				public static class: java.lang.Class<com.sendbird.android.ScheduledUserMessage>;
				public getUpdatedAt(): number;
				/** @deprecated */
				public getAllMetaArray(): java.util.Map<string,java.util.List<string>>;
				public getPushNotificationDeliveryOption(): com.sendbird.android.BaseMessageParams.PushNotificationDeliveryOption;
				public getMentionType(): com.sendbird.android.BaseMessageParams.MentionType;
				public getChannelUrl(): string;
				public getScheduledTimezone(): string;
				public getStatus(): com.sendbird.android.ScheduledUserMessage.Status;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getScheduledDateTime(): java.util.Date;
				public getMessage(): string;
				public getSender(): com.sendbird.android.User;
				/** @deprecated */
				public getMetaArray(param0: java.util.Collection<string>): java.util.Map<string,java.util.List<string>>;
				public getErrorCode(): number;
				public toString(): string;
				public getCreatedAt(): number;
				public getMentionedUsers(): java.util.List<com.sendbird.android.User>;
				public getErrorMessage(): string;
				public getCustomType(): string;
				public getAllMetaArrays(): java.util.List<com.sendbird.android.MessageMetaArray>;
				public getMetaArrays(param0: java.util.Collection<string>): java.util.List<com.sendbird.android.MessageMetaArray>;
				public getData(): string;
				public isOpenChannel(): boolean;
				public isGroupChannel(): boolean;
				public getScheduledId(): number;
				public getTranslationTargetLanguages(): java.util.ArrayList<string>;
			}
			export module ScheduledUserMessage {
				export class Status {
					public static class: java.lang.Class<com.sendbird.android.ScheduledUserMessage.Status>;
					public static SCHEDULED: com.sendbird.android.ScheduledUserMessage.Status;
					public static SENT: com.sendbird.android.ScheduledUserMessage.Status;
					public static CANCELED: com.sendbird.android.ScheduledUserMessage.Status;
					public static FAILED: com.sendbird.android.ScheduledUserMessage.Status;
					public static valueOf(param0: string): com.sendbird.android.ScheduledUserMessage.Status;
					public static values(): androidNative.Array<com.sendbird.android.ScheduledUserMessage.Status>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class ScheduledUserMessageParams extends com.sendbird.android.UserMessageParams {
				public static class: java.lang.Class<com.sendbird.android.ScheduledUserMessageParams>;
				public setAppleCriticalAlertOptions(param0: com.sendbird.android.AppleCriticalAlertOptions): com.sendbird.android.ScheduledUserMessageParams;
				public getScheduledTimezone(): string;
				public setAppleCriticalAlertOptions(param0: com.sendbird.android.AppleCriticalAlertOptions): com.sendbird.android.UserMessageParams;
				public constructor(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number, param6: string);
				public getScheduledDateTime(): java.util.Date;
				public toString(): string;
				public setAppleCriticalAlertOptions(param0: com.sendbird.android.AppleCriticalAlertOptions): com.sendbird.android.BaseMessageParams;
				public constructor(param0: string);
				public constructor();
				public setSchedule(param0: number, param1: number, param2: number, param3: number, param4: number, param5: string): void;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class SendBird {
				public static class: java.lang.Class<com.sendbird.android.SendBird>;
				public static LOGGER_NONE: number;
				public static LOGGER_INFO: number;
				public static PUSH_TEMPLATE_DEFAULT: string;
				public static PUSH_TEMPLATE_ALTERNATIVE: string;
				public static init(param0: string, param1: globalAndroid.content.Context, param2: com.sendbird.android.handlers.InitResultHandler): void;
				public static getPendingPushToken(): string;
				public static initFromForeground(param0: string, param1: globalAndroid.content.Context, param2: boolean, param3: com.sendbird.android.handlers.InitResultHandler): void;
				public static getApplicationId(): string;
				public static getSubscribedTotalUnreadMessageCount(): number;
				/** @deprecated */
				public static createUserListQuery(param0: java.util.List<string>): com.sendbird.android.UserListQuery;
				public static deleteFriendDiscovery(param0: string, param1: com.sendbird.android.SendBird.DeleteFriendDiscoveryHandler): void;
				public static getConnectionState(): com.sendbird.android.SendBird.ConnectionState;
				public static blockUserWithUserId(param0: string, param1: com.sendbird.android.SendBird.UserBlockHandler): void;
				public static initFromForeground(param0: string, param1: globalAndroid.content.Context, param2: com.sendbird.android.handlers.InitResultHandler): void;
				public static setSnoozePeriod(param0: boolean, param1: number, param2: number, param3: com.sendbird.android.SendBird.SetSnoozePeriodHandler): void;
				public static registerPushTokenForCurrentUser(param0: string, param1: com.sendbird.android.SendBird.RegisterPushTokenWithStatusHandler): void;
				public static getMyGroupChannelChangeLogsByTimestampWithParams(param0: number, param1: com.sendbird.android.GroupChannelChangeLogsParams, param2: com.sendbird.android.SendBird.GetMyGroupChannelChangeLogsHandler): void;
				public static init(param0: string, param1: globalAndroid.content.Context): boolean;
				public static removeAllUserEventHandlers(): void;
				/** @deprecated */
				public static markAsDelivered(param0: string): void;
				public static deleteFriend(param0: string, param1: com.sendbird.android.SendBird.DeleteFriendHandler): void;
				public static reconnect(): boolean;
				public static registerPushTokenForCurrentUser(param0: string, param1: boolean, param2: com.sendbird.android.SendBird.RegisterPushTokenWithStatusHandler): void;
				public static createApplicationUserListQuery(): com.sendbird.android.ApplicationUserListQuery;
				public static unblockUserWithUserId(param0: string, param1: com.sendbird.android.SendBird.UserUnblockHandler): void;
				public static unblockUser(param0: com.sendbird.android.User, param1: com.sendbird.android.SendBird.UserUnblockHandler): void;
				public static isUsingLocalCaching(): boolean;
				public static getSubscribedCustomTypeTotalUnreadMessageCount(): number;
				public static allowFriendDiscovery(param0: boolean, param1: com.sendbird.android.handlers.AllowFriendDiscoveryHandler): void;
				public static setLoggerLevel(param0: com.sendbird.android.LogLevel): void;
				public static getAppInfo(): com.sendbird.android.AppInfo;
				public static getSnoozePeriod(param0: com.sendbird.android.SendBird.GetSnoozePeriodHandler): void;
				public static getEmojiCategory(param0: number, param1: com.sendbird.android.SendBird.GetEmojiCategoryHandler): void;
				public static removeUserEventHandler(param0: string): com.sendbird.android.SendBird.UserEventHandler;
				public static init(param0: string, param1: globalAndroid.content.Context, param2: boolean, param3: com.sendbird.android.handlers.InitResultHandler): void;
				public static updateCurrentUserInfoWithProfileImage(param0: string, param1: java.io.File, param2: com.sendbird.android.SendBird.UserInfoUpdateHandler): void;
				public static getFriendChangeLogsByToken(param0: string, param1: com.sendbird.android.SendBird.GetFriendChangeLogsByTokenHandler): void;
				public static setNetworkAwarenessReconnection(param0: boolean): void;
				public static setChannelInvitationPreference(param0: boolean, param1: com.sendbird.android.SendBird.SetChannelInvitationPreferenceHandler): void;
				public static uploadFriendDiscoveries(param0: java.util.Map<string,string>, param1: com.sendbird.android.SendBird.UploadFriendDiscoveriesHandler): void;
				public static getNetworkAwarenessReconnection(): boolean;
				public static deleteFriendDiscoveries(param0: java.util.List<string>, param1: com.sendbird.android.SendBird.DeleteFriendDiscoveriesHandler): void;
				public static setLoggerLevel(param0: number): void;
				public static markAsReadWithChannelUrls(param0: java.util.List<string>, param1: com.sendbird.android.SendBird.MarkAsReadHandler): void;
				public static removeAllChannelHandlers(): void;
				/** @deprecated */
				public static getMyGroupChannelChangeLogsByToken(param0: string, param1: java.util.List<string>, param2: com.sendbird.android.SendBird.GetMyGroupChannelChangeLogsHandler): void;
				public static getTotalUnreadChannelCount(param0: com.sendbird.android.GroupChannel.GroupChannelTotalUnreadChannelCountHandler): void;
				/** @deprecated */
				public static getMyGroupChannelChangeLogsByTimestamp(param0: number, param1: java.util.List<string>, param2: com.sendbird.android.SendBird.GetMyGroupChannelChangeLogsHandler): void;
				/** @deprecated */
				public static getMyGroupChannelChangeLogsByTimestamp(param0: number, param1: java.util.List<string>, param2: boolean, param3: com.sendbird.android.SendBird.GetMyGroupChannelChangeLogsHandler): void;
				public static unregisterPushTokenForCurrentUser(param0: string, param1: com.sendbird.android.SendBird.UnregisterPushTokenHandler): void;
				public static createFriendListQuery(): com.sendbird.android.FriendListQuery;
				public static getAutoBackgroundDetection(): boolean;
				public static addFriends(param0: java.util.List<string>, param1: com.sendbird.android.SendBird.AddFriendsHandler): void;
				public static setPushTriggerOption(param0: com.sendbird.android.SendBird.PushTriggerOption, param1: com.sendbird.android.SendBird.SetPushTriggerOptionHandler): void;
				public static addExtension(param0: string, param1: string): void;
				public static setAutoBackgroundDetection(param0: boolean): void;
				public static deleteFriends(param0: java.util.List<string>, param1: com.sendbird.android.SendBird.DeleteFriendsHandler): void;
				public static getMyGroupChannelChangeLogsByTokenWithParams(param0: string, param1: com.sendbird.android.GroupChannelChangeLogsParams, param2: com.sendbird.android.SendBird.GetMyGroupChannelChangeLogsHandler): void;
				public static getChannelInvitationPreference(param0: com.sendbird.android.SendBird.GetChannelInvitationPreferenceHandler): void;
				public static removeAllConnectionHandlers(): void;
				public static getAllowFriendDiscovery(param0: com.sendbird.android.handlers.GetAllowFriendDiscoveryHandler): void;
				public static connect(param0: string, param1: com.sendbird.android.SendBird.ConnectHandler): void;
				public static setSessionHandler(param0: com.sendbird.android.handlers.SessionHandler): void;
				public static getMyPushTokensByToken(param0: string, param1: com.sendbird.android.SendBird.PushTokenType, param2: com.sendbird.android.SendBird.GetPushTokensHandler): void;
				public static getTotalUnreadMessageCount(param0: com.sendbird.android.GroupChannel.GroupChannelTotalUnreadMessageCountHandler): void;
				public static removeConnectionHandler(param0: string): com.sendbird.android.SendBird.ConnectionHandler;
				public static updateCurrentUserInfo(param0: java.util.List<string>, param1: com.sendbird.android.SendBird.UserInfoUpdateHandler): void;
				public static getInstance(): com.sendbird.android.SendBird;
				public static clearCachedData(param0: globalAndroid.content.Context): void;
				public static runOnUIThread(param0: java.lang.Runnable): void;
				public static getSDKVersion(): string;
				public static getTotalUnreadMessageCount(param0: java.util.List<string>, param1: com.sendbird.android.GroupChannel.GroupChannelTotalUnreadMessageCountHandler): void;
				/** @deprecated */
				public static notifyActivityResumedForOldAndroids(): void;
				public static getEkey(): string;
				public static setDoNotDisturb(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: string, param6: com.sendbird.android.SendBird.SetDoNotDisturbHandler): void;
				public static updateCurrentUserInfo(param0: string, param1: string, param2: com.sendbird.android.SendBird.UserInfoUpdateHandler): void;
				public static getDoNotDisturb(param0: com.sendbird.android.SendBird.GetDoNotDisturbHandler): void;
				public static getPushTriggerOption(param0: com.sendbird.android.SendBird.GetPushTriggerOptionHandler): void;
				public static blockUser(param0: com.sendbird.android.User, param1: com.sendbird.android.SendBird.UserBlockHandler): void;
				public static addChannelHandler(param0: string, param1: com.sendbird.android.SendBird.ChannelHandler): void;
				public static getOSVersion(): string;
				public static addConnectionHandler(param0: string, param1: com.sendbird.android.SendBird.ConnectionHandler): void;
				public static getPushTemplate(param0: com.sendbird.android.SendBird.GetPushTemplateHandler): void;
				public static getEmoji(param0: string, param1: com.sendbird.android.SendBird.GetEmojiHandler): void;
				public static disconnect(param0: com.sendbird.android.SendBird.DisconnectHandler): void;
				public static unregisterPushTokenAllForCurrentUser(param0: com.sendbird.android.SendBird.UnregisterPushTokenHandler): void;
				public static getLastConnectedAt(): number;
				public static setPushSound(param0: string, param1: com.sendbird.android.SendBird.SetPushSoundHandler): void;
				public static markAsDelivered(param0: java.util.Map<string,string>): void;
				public static getSubscribedCustomTypeUnreadMessageCount(param0: string): number;
				/** @deprecated */
				public static getMyGroupChannelChangeLogsByToken(param0: string, param1: java.util.List<string>, param2: boolean, param3: com.sendbird.android.SendBird.GetMyGroupChannelChangeLogsHandler): void;
				public static getAllEmoji(param0: com.sendbird.android.SendBird.GetAllEmojiHandler): void;
				public static markAsReadAll(param0: com.sendbird.android.SendBird.MarkAsReadHandler): void;
				/** @deprecated */
				public static registerPushTokenForCurrentUser(param0: string, param1: com.sendbird.android.SendBird.RegisterPushTokenHandler): void;
				public static setPushTemplate(param0: string, param1: com.sendbird.android.SendBird.SetPushTemplateHandler): void;
				/** @deprecated */
				public static notifyActivityPausedForOldAndroids(): void;
				public static connect(param0: string, param1: string, param2: com.sendbird.android.SendBird.ConnectHandler): void;
				public static getCurrentUser(): com.sendbird.android.User;
				public static createBlockedUserListQuery(): com.sendbird.android.BlockedUserListQuery;
				public static initFromForeground(param0: string, param1: globalAndroid.content.Context): boolean;
				public static getPushSound(param0: com.sendbird.android.SendBird.GetPushSoundHandler): void;
				public static connect(param0: string, param1: string, param2: string, param3: string, param4: com.sendbird.android.SendBird.ConnectHandler): void;
				public static getUnreadItemCount(param0: java.util.Collection<com.sendbird.android.GroupChannel.UnreadItemKey>, param1: com.sendbird.android.GroupChannel.GroupChannelGetUnreadItemCountHandler): void;
				public static removeChannelHandler(param0: string): com.sendbird.android.SendBird.ChannelHandler;
				/** @deprecated */
				public static createUserListQuery(): com.sendbird.android.UserListQuery;
				public static getGroupChannelCount(param0: com.sendbird.android.GroupChannelListQuery.MemberStateFilter, param1: com.sendbird.android.GroupChannel.GroupChannelChannelCountHandler): void;
				public static getTotalUnreadMessageCount(param0: com.sendbird.android.GroupChannelTotalUnreadMessageCountParams, param1: com.sendbird.android.GroupChannel.GroupChannelTotalUnreadMessageCountHandler): void;
				public static addUserEventHandler(param0: string, param1: com.sendbird.android.SendBird.UserEventHandler): void;
			}
			export module SendBird {
				export class AddFriendsHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.AddFriendsHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$AddFriendsHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.List<com.sendbird.android.User>, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.List<com.sendbird.android.User>, param1: com.sendbird.android.SendBirdException): void;
				}
				export class AppState {
					public static class: java.lang.Class<com.sendbird.android.SendBird.AppState>;
					public static FOREGROUND: com.sendbird.android.SendBird.AppState;
					public static BACKGROUND: com.sendbird.android.SendBird.AppState;
					public static values(): androidNative.Array<com.sendbird.android.SendBird.AppState>;
					public static valueOf(param0: string): com.sendbird.android.SendBird.AppState;
				}
				export abstract class ChannelHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.ChannelHandler>;
					public onReactionUpdated(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.ReactionEvent): void;
					public onUserMuted(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.User): void;
					public onUserExited(param0: com.sendbird.android.OpenChannel, param1: com.sendbird.android.User): void;
					public onMetaCountersUpdated(param0: com.sendbird.android.BaseChannel, param1: java.util.Map<string,java.lang.Integer>): void;
					public onUserBanned(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.User): void;
					public onChannelChanged(param0: com.sendbird.android.BaseChannel): void;
					public onChannelDeleted(param0: string, param1: com.sendbird.android.BaseChannel.ChannelType): void;
					public onUserDeclinedInvitation(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.android.User, param2: com.sendbird.android.User): void;
					public onMetaCountersCreated(param0: com.sendbird.android.BaseChannel, param1: java.util.Map<string,java.lang.Integer>): void;
					public onChannelUnfrozen(param0: com.sendbird.android.BaseChannel): void;
					public onChannelParticipantCountChanged(param0: java.util.List<com.sendbird.android.OpenChannel>): void;
					public onChannelMemberCountChanged(param0: java.util.List<com.sendbird.android.GroupChannel>): void;
					public constructor();
					public onChannelFrozen(param0: com.sendbird.android.BaseChannel): void;
					public onChannelHidden(param0: com.sendbird.android.GroupChannel): void;
					public onMentionReceived(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage): void;
					public onOperatorUpdated(param0: com.sendbird.android.BaseChannel): void;
					public onMetaDataCreated(param0: com.sendbird.android.BaseChannel, param1: java.util.Map<string,string>): void;
					public onMessageUpdated(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage): void;
					public onDeliveryReceiptUpdated(param0: com.sendbird.android.GroupChannel): void;
					public onUserReceivedInvitation(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.android.User, param2: java.util.List<com.sendbird.android.User>): void;
					public onReadReceiptUpdated(param0: com.sendbird.android.GroupChannel): void;
					public onMetaCountersDeleted(param0: com.sendbird.android.BaseChannel, param1: java.util.List<string>): void;
					public onUserJoined(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.android.User): void;
					public onUserUnbanned(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.User): void;
					public onMetaDataDeleted(param0: com.sendbird.android.BaseChannel, param1: java.util.List<string>): void;
					public onUserUnmuted(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.User): void;
					public onMetaDataUpdated(param0: com.sendbird.android.BaseChannel, param1: java.util.Map<string,string>): void;
					public onTypingStatusUpdated(param0: com.sendbird.android.GroupChannel): void;
					public onUserEntered(param0: com.sendbird.android.OpenChannel, param1: com.sendbird.android.User): void;
					public onThreadInfoUpdated(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.ThreadInfoUpdateEvent): void;
					public onMessageReceived(param0: com.sendbird.android.BaseChannel, param1: com.sendbird.android.BaseMessage): void;
					public onMessageDeleted(param0: com.sendbird.android.BaseChannel, param1: number): void;
					public onUserLeft(param0: com.sendbird.android.GroupChannel, param1: com.sendbird.android.User): void;
				}
				export class ConnectHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.ConnectHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$ConnectHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onConnected(param0: com.sendbird.android.User, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onConnected(param0: com.sendbird.android.User, param1: com.sendbird.android.SendBirdException): void;
				}
				export class ConnectionHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.ConnectionHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$ConnectionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onReconnectStarted(): void;
						onReconnectSucceeded(): void;
						onReconnectFailed(): void;
					});
					public constructor();
					public onReconnectSucceeded(): void;
					public onReconnectFailed(): void;
					public onReconnectStarted(): void;
				}
				export class ConnectionState {
					public static class: java.lang.Class<com.sendbird.android.SendBird.ConnectionState>;
					public static CONNECTING: com.sendbird.android.SendBird.ConnectionState;
					public static OPEN: com.sendbird.android.SendBird.ConnectionState;
					public static CLOSING: com.sendbird.android.SendBird.ConnectionState;
					public static CLOSED: com.sendbird.android.SendBird.ConnectionState;
					public static values(): androidNative.Array<com.sendbird.android.SendBird.ConnectionState>;
					public static valueOf(param0: string): com.sendbird.android.SendBird.ConnectionState;
				}
				export class DeleteFriendDiscoveriesHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.DeleteFriendDiscoveriesHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$DeleteFriendDiscoveriesHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class DeleteFriendDiscoveryHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.DeleteFriendDiscoveryHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$DeleteFriendDiscoveryHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class DeleteFriendHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.DeleteFriendHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$DeleteFriendHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class DeleteFriendsHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.DeleteFriendsHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$DeleteFriendsHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class DisconnectHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.DisconnectHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$DisconnectHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDisconnected(): void;
					});
					public constructor();
					public onDisconnected(): void;
				}
				export class DummyInitHandler extends com.sendbird.android.handlers.InitResultHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.DummyInitHandler>;
					public onInitFailed(param0: com.sendbird.android.SendBirdException): void;
					public onMigrationStarted(): void;
					public onInitSucceed(): void;
				}
				export class ExtensionFrom {
					public static class: java.lang.Class<com.sendbird.android.SendBird.ExtensionFrom>;
					public static None: com.sendbird.android.SendBird.ExtensionFrom;
					public static Core: com.sendbird.android.SendBird.ExtensionFrom;
					public static SyncManager: com.sendbird.android.SendBird.ExtensionFrom;
					public static UIKit: com.sendbird.android.SendBird.ExtensionFrom;
					public static valueOf(param0: string): com.sendbird.android.SendBird.ExtensionFrom;
					public static from(param0: string): com.sendbird.android.SendBird.ExtensionFrom;
					public getValue(param0: string): string;
					public static values(): androidNative.Array<com.sendbird.android.SendBird.ExtensionFrom>;
				}
				export class GetAllEmojiHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.GetAllEmojiHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$GetAllEmojiHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.EmojiContainer, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.EmojiContainer, param1: com.sendbird.android.SendBirdException): void;
				}
				export class GetChannelInvitationPreferenceHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.GetChannelInvitationPreferenceHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$GetChannelInvitationPreferenceHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: boolean, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: boolean, param1: com.sendbird.android.SendBirdException): void;
				}
				export class GetDoNotDisturbHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.GetDoNotDisturbHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$GetDoNotDisturbHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: string, param6: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: string, param6: com.sendbird.android.SendBirdException): void;
				}
				export class GetEmojiCategoryHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.GetEmojiCategoryHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$GetEmojiCategoryHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.EmojiCategory, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.EmojiCategory, param1: com.sendbird.android.SendBirdException): void;
				}
				export class GetEmojiHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.GetEmojiHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$GetEmojiHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.Emoji, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.Emoji, param1: com.sendbird.android.SendBirdException): void;
				}
				export class GetFriendChangeLogsByTokenHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.GetFriendChangeLogsByTokenHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$GetFriendChangeLogsByTokenHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.List<com.sendbird.android.User>, param1: java.util.List<string>, param2: boolean, param3: string, param4: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.List<com.sendbird.android.User>, param1: java.util.List<string>, param2: boolean, param3: string, param4: com.sendbird.android.SendBirdException): void;
				}
				export class GetMyGroupChannelChangeLogsHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.GetMyGroupChannelChangeLogsHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$GetMyGroupChannelChangeLogsHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.List<com.sendbird.android.GroupChannel>, param1: java.util.List<string>, param2: boolean, param3: string, param4: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.List<com.sendbird.android.GroupChannel>, param1: java.util.List<string>, param2: boolean, param3: string, param4: com.sendbird.android.SendBirdException): void;
				}
				export class GetPushSoundHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.GetPushSoundHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$GetPushSoundHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: string, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: string, param1: com.sendbird.android.SendBirdException): void;
				}
				export class GetPushTemplateHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.GetPushTemplateHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$GetPushTemplateHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: string, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: string, param1: com.sendbird.android.SendBirdException): void;
				}
				export class GetPushTokensHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.GetPushTokensHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$GetPushTokensHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.List<string>, param1: com.sendbird.android.SendBird.PushTokenType, param2: boolean, param3: string, param4: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.List<string>, param1: com.sendbird.android.SendBird.PushTokenType, param2: boolean, param3: string, param4: com.sendbird.android.SendBirdException): void;
				}
				export class GetPushTriggerOptionHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.GetPushTriggerOptionHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$GetPushTriggerOptionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBird.PushTriggerOption, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBird.PushTriggerOption, param1: com.sendbird.android.SendBirdException): void;
				}
				export class GetSnoozePeriodHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.GetSnoozePeriodHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$GetSnoozePeriodHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: boolean, param1: number, param2: number, param3: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: boolean, param1: number, param2: number, param3: com.sendbird.android.SendBirdException): void;
				}
				export class HMS {
					public static class: java.lang.Class<com.sendbird.android.SendBird.HMS>;
					public static unregisterPushTokenForCurrentUser(param0: string, param1: com.sendbird.android.SendBird.UnregisterPushTokenHandler): void;
					public static getMyPushTokensByToken(param0: string, param1: com.sendbird.android.SendBird.PushTokenType, param2: com.sendbird.android.SendBird.GetPushTokensHandler): void;
					public static getDoNotDisturb(param0: com.sendbird.android.SendBird.GetDoNotDisturbHandler): void;
					public static getPushSound(param0: com.sendbird.android.SendBird.GetPushSoundHandler): void;
					public static getPushTriggerOption(param0: com.sendbird.android.SendBird.GetPushTriggerOptionHandler): void;
					public static getPendingPushToken(): string;
					public static unregisterPushTokenAllForCurrentUser(param0: com.sendbird.android.SendBird.UnregisterPushTokenHandler): void;
					public static setPushTemplate(param0: string, param1: com.sendbird.android.SendBird.SetPushTemplateHandler): void;
					public constructor();
					public static registerPushTokenForCurrentUser(param0: string, param1: boolean, param2: com.sendbird.android.SendBird.RegisterPushTokenWithStatusHandler): void;
					public static setDoNotDisturb(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: string, param6: com.sendbird.android.SendBird.SetDoNotDisturbHandler): void;
					public static getSnoozePeriod(param0: com.sendbird.android.SendBird.GetSnoozePeriodHandler): void;
					public static setPushTriggerOption(param0: com.sendbird.android.SendBird.PushTriggerOption, param1: com.sendbird.android.SendBird.SetPushTriggerOptionHandler): void;
					public static registerPushTokenForCurrentUser(param0: string, param1: com.sendbird.android.SendBird.RegisterPushTokenWithStatusHandler): void;
					public static getPushTemplate(param0: com.sendbird.android.SendBird.GetPushTemplateHandler): void;
					public static setSnoozePeriod(param0: boolean, param1: number, param2: number, param3: com.sendbird.android.SendBird.SetSnoozePeriodHandler): void;
					public static setPushSound(param0: string, param1: com.sendbird.android.SendBird.SetPushSoundHandler): void;
				}
				export class MarkAsDeliveredHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.MarkAsDeliveredHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$MarkAsDeliveredHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class MarkAsReadHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.MarkAsReadHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$MarkAsReadHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class NetworkReceiver {
					public static class: java.lang.Class<com.sendbird.android.SendBird.NetworkReceiver>;
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
				export class Options {
					public static class: java.lang.Class<com.sendbird.android.SendBird.Options>;
					public static setConnectionTimeout(param0: number): void;
					public static setTypingIndicatorThrottle(param0: number): void;
					public constructor();
					/** @deprecated */
					public static setHandlerForCallbacks(param0: globalAndroid.os.Handler): void;
					public static setAuthenticationTimeout(param0: number): void;
					/** @deprecated */
					public static useUiThreadForCallbacks(param0: boolean): void;
					public static setThreadOption(param0: com.sendbird.android.SendBird.Options.ThreadOption, param1: globalAndroid.os.Handler): void;
					public static useMemberAsMessageSender(param0: boolean): void;
					public static setWebSocketResponseTimeout(param0: number): void;
				}
				export module Options {
					export class ThreadOption {
						public static class: java.lang.Class<com.sendbird.android.SendBird.Options.ThreadOption>;
						public static UI_THREAD: com.sendbird.android.SendBird.Options.ThreadOption;
						public static NEW_THREAD: com.sendbird.android.SendBird.Options.ThreadOption;
						public static HANDLER: com.sendbird.android.SendBird.Options.ThreadOption;
						public static values(): androidNative.Array<com.sendbird.android.SendBird.Options.ThreadOption>;
						public static valueOf(param0: string): com.sendbird.android.SendBird.Options.ThreadOption;
					}
				}
				export class PushTokenRegistrationStatus {
					public static class: java.lang.Class<com.sendbird.android.SendBird.PushTokenRegistrationStatus>;
					public static SUCCESS: com.sendbird.android.SendBird.PushTokenRegistrationStatus;
					public static PENDING: com.sendbird.android.SendBird.PushTokenRegistrationStatus;
					public static ERROR: com.sendbird.android.SendBird.PushTokenRegistrationStatus;
					public static values(): androidNative.Array<com.sendbird.android.SendBird.PushTokenRegistrationStatus>;
					public static valueOf(param0: string): com.sendbird.android.SendBird.PushTokenRegistrationStatus;
				}
				export class PushTokenType {
					public static class: java.lang.Class<com.sendbird.android.SendBird.PushTokenType>;
					public static GCM: com.sendbird.android.SendBird.PushTokenType;
					public static APNS: com.sendbird.android.SendBird.PushTokenType;
					public static APNS_VOIP: com.sendbird.android.SendBird.PushTokenType;
					public static HMS: com.sendbird.android.SendBird.PushTokenType;
					public getValue(): string;
					public static values(): androidNative.Array<com.sendbird.android.SendBird.PushTokenType>;
					public static from(param0: string): com.sendbird.android.SendBird.PushTokenType;
					public static valueOf(param0: string): com.sendbird.android.SendBird.PushTokenType;
				}
				export class PushTriggerOption {
					public static class: java.lang.Class<com.sendbird.android.SendBird.PushTriggerOption>;
					public static ALL: com.sendbird.android.SendBird.PushTriggerOption;
					public static OFF: com.sendbird.android.SendBird.PushTriggerOption;
					public static MENTION_ONLY: com.sendbird.android.SendBird.PushTriggerOption;
					public getValue(): string;
					public static from(param0: string): com.sendbird.android.SendBird.PushTriggerOption;
					public static values(): androidNative.Array<com.sendbird.android.SendBird.PushTriggerOption>;
					public static valueOf(param0: string): com.sendbird.android.SendBird.PushTriggerOption;
				}
				export class RegisterPushTokenHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.RegisterPushTokenHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$RegisterPushTokenHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onRegistered(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					/** @deprecated */
					public onRegistered(param0: com.sendbird.android.SendBirdException): void;
				}
				export class RegisterPushTokenWithStatusHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.RegisterPushTokenWithStatusHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$RegisterPushTokenWithStatusHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onRegistered(param0: com.sendbird.android.SendBird.PushTokenRegistrationStatus, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onRegistered(param0: com.sendbird.android.SendBird.PushTokenRegistrationStatus, param1: com.sendbird.android.SendBirdException): void;
				}
				export class SetChannelInvitationPreferenceHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.SetChannelInvitationPreferenceHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$SetChannelInvitationPreferenceHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class SetDoNotDisturbHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.SetDoNotDisturbHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$SetDoNotDisturbHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class SetPushSoundHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.SetPushSoundHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$SetPushSoundHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class SetPushTemplateHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.SetPushTemplateHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$SetPushTemplateHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class SetPushTriggerOptionHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.SetPushTriggerOptionHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$SetPushTriggerOptionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class SetSnoozePeriodHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.SetSnoozePeriodHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$SetSnoozePeriodHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class UnregisterPushTokenHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.UnregisterPushTokenHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$UnregisterPushTokenHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onUnregistered(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onUnregistered(param0: com.sendbird.android.SendBirdException): void;
				}
				export class UploadFriendDiscoveriesHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.UploadFriendDiscoveriesHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$UploadFriendDiscoveriesHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class UserBlockHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.UserBlockHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$UserBlockHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onBlocked(param0: com.sendbird.android.User, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onBlocked(param0: com.sendbird.android.User, param1: com.sendbird.android.SendBirdException): void;
				}
				export abstract class UserEventHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.UserEventHandler>;
					public constructor();
					public onFriendsDiscovered(param0: java.util.List<com.sendbird.android.User>): void;
					public onTotalUnreadMessageCountChanged(param0: number, param1: java.util.Map<string,java.lang.Integer>): void;
				}
				export class UserInfoUpdateHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.UserInfoUpdateHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$UserInfoUpdateHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onUpdated(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onUpdated(param0: com.sendbird.android.SendBirdException): void;
				}
				export class UserUnblockHandler {
					public static class: java.lang.Class<com.sendbird.android.SendBird.UserUnblockHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBird$UserUnblockHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onUnblocked(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onUnblocked(param0: com.sendbird.android.SendBirdException): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class SendBirdError {
				public static class: java.lang.Class<com.sendbird.android.SendBirdError>;
				public static ERR_INVALID_PARAMETER_VALUE_STRING: number;
				public static ERR_INVALID_PARAMETER_VALUE_NUMBER: number;
				public static ERR_INVALID_PARAMETER_VALUE_LIST: number;
				public static ERR_INVALID_PARAMETER_VALUE_JSON: number;
				public static ERR_INVALID_PARAMETER_VALUE_BOOLEAN: number;
				public static ERR_INVALID_PARAMETER_VALUE_REQUIRED: number;
				public static ERR_INVALID_PARAMETER_VALUE_POSITIVE: number;
				public static ERR_INVALID_PARAMETER_VALUE_NEGATIVE: number;
				public static ERR_NON_AUTHORIZED: number;
				public static ERR_TOKEN_EXPIRED: number;
				public static ERR_INVALID_CHANNEL_URL: number;
				public static ERR_INVALID_PARAMETER_VALUE: number;
				public static ERR_UNUSABLE_CHARACTER_INCLUDED: number;
				public static ERR_NOT_FOUND_IN_DATABASE: number;
				public static ERR_DUPLICATED_DATA: number;
				public static ERR_INVALID_JSON_BODY: number;
				public static ERR_API_TOKEN_NOT_VALID: number;
				public static ERR_APP_ID_NOT_VALID: number;
				public static ERR_ACCESS_TOKEN_EMPTY: number;
				public static ERR_ACCESS_TOKEN_NOT_VALID: number;
				public static ERR_USER_NOT_EXIST: number;
				public static ERR_USER_DEACTIVATED: number;
				public static ERR_SESSION_TOKEN_EXPIRED: number;
				public static ERR_SESSION_KEY_EXPIRED: number;
				public static ERR_USER_CREATION_FAILED: number;
				public static ERR_INVALID_TOKEN: number;
				public static ERR_INTERNAL_SERVER_ERROR: number;
				public static ERR_INVALID_INITIALIZATION: number;
				public static ERR_CONNECTION_REQUIRED: number;
				public static ERR_CONNECTION_CANCELED: number;
				public static ERR_INVALID_PARAMETER: number;
				public static ERR_NETWORK: number;
				public static ERR_NETWORK_ROUTING_ERROR: number;
				public static ERR_MALFORMED_DATA: number;
				public static ERR_MALFORMED_ERROR_DATA: number;
				public static ERR_WRONG_CHANNEL_TYPE: number;
				public static ERR_MARK_AS_READ_RATE_LIMIT_EXCEEDED: number;
				public static ERR_QUERY_IN_PROGRESS: number;
				public static ERR_ACK_TIMEOUT: number;
				public static ERR_LOGIN_TIMEOUT: number;
				public static ERR_WEBSOCKET_CONNECTION_CLOSED: number;
				public static ERR_WEBSOCKET_CONNECTION_FAILED: number;
				public static ERR_REQUEST_FAILED: number;
				public static ERR_FILE_UPLOAD_CANCEL_FAILED: number;
				public static ERR_FILE_UPLOAD_CANCELED: number;
				public static ERR_FILE_UPLOAD_TIMEOUT: number;
				public static ERR_FILE_SIZE_LIMIT_EXCEEDED: number;
				public static ERR_PENDING: number;
				public static ERR_PARSED_INVALID_ACCESS_TOKEN: number;
				public static ERR_SESSION_KEY_REFRESH_SUCCEEDED: number;
				public static ERR_SESSION_KEY_REFRESH_FAILED: number;
				public static ERR_COLLECTION_DISPOSED: number;
				public static ERR_DATABASE_ERROR: number;
				public static ERR_INVALID_AUTHORITY: number;
				public static ERR_NOT_A_MEMBER: number;
				public static ERR_NOT_OPERATOR: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class SendBirdException {
				public static class: java.lang.Class<com.sendbird.android.SendBirdException>;
				public code: number;
				public setCode(param0: number): void;
				public constructor(param0: string, param1: number);
				public getCode(): number;
				public constructor(param0: java.lang.Exception, param1: number);
				public constructor(param0: java.lang.Exception);
				public toString(): string;
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class SendBirdFirebaseInstanceIDService {
				public static class: java.lang.Class<com.sendbird.android.SendBirdFirebaseInstanceIDService>;
				public constructor();
				public onTokenRefresh(): void;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class SendBirdFirebaseMessagingService {
				public static class: java.lang.Class<com.sendbird.android.SendBirdFirebaseMessagingService>;
				public onNewToken(param0: string): void;
				public onMessageReceived(param0: com.google.firebase.messaging.RemoteMessage): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class SendBirdHmsMessagingService {
				public static class: java.lang.Class<com.sendbird.android.SendBirdHmsMessagingService>;
				public onNewToken(param0: string): void;
				public onMessageReceived(param0: com.huawei.hms.push.RemoteMessage): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export abstract class SendBirdHmsPushHandler extends com.sendbird.android.AbstractPushHandler<com.huawei.hms.push.RemoteMessage> {
				public static class: java.lang.Class<com.sendbird.android.SendBirdHmsPushHandler>;
				public onNewToken(param0: string): void;
				public getContext(): globalAndroid.content.Context;
				public onMessageReceived(param0: globalAndroid.content.Context, param1: com.huawei.hms.push.RemoteMessage): void;
				public alwaysReceiveMessage(): boolean;
				public constructor();
				public isUniquePushToken(): boolean;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export abstract class SendBirdPushHandler extends com.sendbird.android.AbstractPushHandler<com.google.firebase.messaging.RemoteMessage> {
				public static class: java.lang.Class<com.sendbird.android.SendBirdPushHandler>;
				public onNewToken(param0: string): void;
				public onMessageReceived(param0: globalAndroid.content.Context, param1: com.google.firebase.messaging.RemoteMessage): void;
				public alwaysReceiveMessage(): boolean;
				public constructor();
				public isUniquePushToken(): boolean;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class SendBirdPushHelper {
				public static class: java.lang.Class<com.sendbird.android.SendBirdPushHelper>;
				public static getPushToken(param0: com.sendbird.android.OnPushTokenReceiveListener): void;
				public static isDuplicateMessage(param0: any): boolean;
				public static unregisterPushHandler(param0: boolean, param1: com.sendbird.android.SendBirdPushHelper.OnPushRequestCompleteListener): void;
				public constructor();
				public static registerPushHandler(param0: com.sendbird.android.AbstractPushHandler<any>): void;
				public static unregisterPushHandler(param0: com.sendbird.android.SendBirdPushHelper.OnPushRequestCompleteListener): void;
			}
			export module SendBirdPushHelper {
				export class OnPushRequestCompleteListener {
					public static class: java.lang.Class<com.sendbird.android.SendBirdPushHelper.OnPushRequestCompleteListener>;
					/**
					 * Constructs a new instance of the com.sendbird.android.SendBirdPushHelper$OnPushRequestCompleteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onComplete(param0: boolean, param1: string): void;
						onError(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onError(param0: com.sendbird.android.SendBirdException): void;
					public onComplete(param0: boolean, param1: string): void;
				}
				export class RegisterTokenStatus {
					public static class: java.lang.Class<com.sendbird.android.SendBirdPushHelper.RegisterTokenStatus>;
					public static Empty: com.sendbird.android.SendBirdPushHelper.RegisterTokenStatus;
					public static PushTokenRegistered: com.sendbird.android.SendBirdPushHelper.RegisterTokenStatus;
					public static NeedToRegisterPushToken: com.sendbird.android.SendBirdPushHelper.RegisterTokenStatus;
					public static valueOf(param0: string): com.sendbird.android.SendBirdPushHelper.RegisterTokenStatus;
					public static values(): androidNative.Array<com.sendbird.android.SendBirdPushHelper.RegisterTokenStatus>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class Sender extends com.sendbird.android.User {
				public static class: java.lang.Class<com.sendbird.android.Sender>;
				public serialize(): androidNative.Array<number>;
				public isBlockedByMe(): boolean;
				public getRole(): com.sendbird.android.Member.Role;
				public static buildFromSerializedData(param0: androidNative.Array<number>): com.sendbird.android.Sender;
				public constructor(param0: com.sendbird.android.shadow.com.google.gson.JsonElement);
				public toString(): string;
				public static buildFromSerializedData(param0: androidNative.Array<number>): com.sendbird.android.User;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class SessionAPIRequest extends com.sendbird.android.APIRequest {
				public static class: java.lang.Class<com.sendbird.android.SessionAPIRequest>;
				public makeRequestBuilder(param0: string): com.sendbird.android.shadow.okhttp3.Request.Builder;
				public handleApiException(param0: com.sendbird.android.SendBirdException, param1: com.sendbird.android.shadow.okhttp3.Request): com.sendbird.android.shadow.com.google.gson.JsonElement;
				public constructor(param0: com.sendbird.android.shadow.okhttp3.OkHttpClient, param1: java.util.Map<string,string>);
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class SocketManager extends com.sendbird.android.Connection.WSClientHandler {
				public static class: java.lang.Class<com.sendbird.android.SocketManager>;
				public onMessage(param0: com.sendbird.android.Command): void;
				public onError(param0: boolean, param1: com.sendbird.android.SendBirdException): void;
				public static getInstance(): com.sendbird.android.SocketManager;
			}
			export module SocketManager {
				export class ReconnectState {
					public static class: java.lang.Class<com.sendbird.android.SocketManager.ReconnectState>;
					public static START: com.sendbird.android.SocketManager.ReconnectState;
					public static SUCCESS: com.sendbird.android.SocketManager.ReconnectState;
					public static FAIL: com.sendbird.android.SocketManager.ReconnectState;
					public static valueOf(param0: string): com.sendbird.android.SocketManager.ReconnectState;
					public static values(): androidNative.Array<com.sendbird.android.SocketManager.ReconnectState>;
				}
				export class SocketHolder {
					public static class: java.lang.Class<com.sendbird.android.SocketManager.SocketHolder>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class SortedMessageList {
				public static class: java.lang.Class<com.sendbird.android.SortedMessageList>;
				public getComparator(): java.util.Comparator<com.sendbird.android.BaseMessage>;
			}
			export module SortedMessageList {
				export class Order {
					public static class: java.lang.Class<com.sendbird.android.SortedMessageList.Order>;
					public static ASC: com.sendbird.android.SortedMessageList.Order;
					public static DESC: com.sendbird.android.SortedMessageList.Order;
					public static values(): androidNative.Array<com.sendbird.android.SortedMessageList.Order>;
					public static valueOf(param0: string): com.sendbird.android.SortedMessageList.Order;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class TaskQueue {
				public static class: java.lang.Class<com.sendbird.android.TaskQueue>;
				public static Companion: com.sendbird.android.TaskQueue.Companion;
				public addTask(param0: com.sendbird.android.JobResultTask<any>): java.util.concurrent.Future;
				public constructor(param0: java.util.concurrent.ExecutorService);
				public isEnable(): boolean;
				public shutdown(): void;
				public cancelAll(param0: boolean): void;
				public cancelAll(): void;
				public shutdownNow(): java.util.List<java.lang.Runnable>;
				public static dummyFuture(param0: any): java.util.concurrent.Future;
				public addTask(param0: com.sendbird.android.JobTask<any>): java.util.concurrent.Future;
				public static dummyFuture(): java.util.concurrent.Future;
			}
			export module TaskQueue {
				export class Companion {
					public static class: java.lang.Class<com.sendbird.android.TaskQueue.Companion>;
					public dummyFuture(param0: any): java.util.concurrent.Future;
					public dummyFuture(): java.util.concurrent.Future;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class ThreadInfo {
				public static class: java.lang.Class<com.sendbird.android.ThreadInfo>;
				public serialize(): androidNative.Array<number>;
				public static buildFromSerializedData(param0: androidNative.Array<number>): com.sendbird.android.ThreadInfo;
				public getReplyCount(): number;
				public hashCode(): number;
				public constructor(param0: com.sendbird.android.shadow.com.google.gson.JsonElement);
				public equals(param0: any): boolean;
				public getMostRepliedUsers(): java.util.List<com.sendbird.android.User>;
				public toString(): string;
				public constructor();
				public getLastRepliedAt(): number;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class ThreadInfoUpdateEvent {
				public static class: java.lang.Class<com.sendbird.android.ThreadInfoUpdateEvent>;
				public getThreadInfo(): com.sendbird.android.ThreadInfo;
				public getTargetMessageId(): number;
				public getChannelType(): com.sendbird.android.BaseChannel.ChannelType;
				public toString(): string;
				public getChannelUrl(): string;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class ThreadMessageListParams extends com.sendbird.android.BaseMessageListParams {
				public static class: java.lang.Class<com.sendbird.android.ThreadMessageListParams>;
				public constructor(param0: number, param1: number, param2: com.sendbird.android.BaseChannel.MessageTypeFilter, param3: string, param4: java.util.List<string>, param5: boolean, param6: boolean, param7: boolean, param8: boolean, param9: boolean);
				public clone(): com.sendbird.android.ThreadMessageListParams;
				public constructor(param0: number, param1: number, param2: com.sendbird.android.BaseChannel.MessageTypeFilter, param3: java.util.Collection<string>, param4: java.util.List<string>, param5: boolean, param6: boolean, param7: boolean, param8: boolean, param9: boolean);
				/** @deprecated */
				public constructor(param0: number, param1: number, param2: com.sendbird.android.BaseChannel.MessageTypeFilter, param3: string, param4: java.util.Collection<string>, param5: java.util.List<string>, param6: boolean, param7: boolean, param8: boolean, param9: boolean, param10: boolean);
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class TimeoutScheduler {
				public static class: java.lang.Class<com.sendbird.android.TimeoutScheduler>;
				public static Companion: com.sendbird.android.TimeoutScheduler.Companion;
				public constructor(param0: number, param1: com.sendbird.android.TimeoutScheduler.TimeoutEventhandler);
				public static await(param0: number): void;
				public stop(param0: boolean): void;
				public restart(param0: number): void;
				public restart(): void;
				public constructor(param0: number, param1: number, param2: boolean, param3: com.sendbird.android.TimeoutScheduler.TimeoutEventhandler);
				public stop(): void;
				public setEventHandler(param0: com.sendbird.android.TimeoutScheduler.TimeoutEventhandler): void;
				public constructor(param0: number, param1: com.sendbird.android.TimeoutScheduler.TimeoutEventhandler, param2: any);
				public setExtra(param0: any): void;
				public start(): void;
				public constructor(param0: number, param1: number, param2: boolean, param3: com.sendbird.android.TimeoutScheduler.TimeoutEventhandler, param4: any);
				public once(): void;
				public constructor(param0: number, param1: boolean, param2: com.sendbird.android.TimeoutScheduler.TimeoutEventhandler, param3: any);
				public isRunning(): boolean;
				public constructor(param0: number);
			}
			export module TimeoutScheduler {
				export class Companion {
					public static class: java.lang.Class<com.sendbird.android.TimeoutScheduler.Companion>;
					public await(param0: number): void;
				}
				export class TimeoutEventhandler {
					public static class: java.lang.Class<com.sendbird.android.TimeoutScheduler.TimeoutEventhandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.TimeoutScheduler$TimeoutEventhandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onTimeout(param0: any): void;
					});
					public constructor();
					public onTimeout(param0: any): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class User {
				public static class: java.lang.Class<com.sendbird.android.User>;
				public serialize(): androidNative.Array<number>;
				public getPlainProfileImageUrl(): string;
				public getProfileUrl(): string;
				public deleteMetaData(param0: string, param1: com.sendbird.android.User.DeleteMetaDataHandler): void;
				public constructor(param0: com.sendbird.android.shadow.com.google.gson.JsonElement);
				public getUserId(): string;
				public getFriendName(): string;
				public toString(): string;
				public getMetaData(param0: string): string;
				public getMetaData(): java.util.Map<string,string>;
				public deleteAllMetaData(param0: com.sendbird.android.User.DeleteMetaDataHandler): void;
				public getPreferredLanguages(): java.util.List<string>;
				public getConnectionStatus(): com.sendbird.android.User.ConnectionStatus;
				public createMetaData(param0: java.util.Map<string,string>, param1: com.sendbird.android.User.MetaDataHandler): void;
				public hashCode(): number;
				public isActive(): boolean;
				public getFriendDiscoveryKey(): string;
				public equals(param0: any): boolean;
				public getLastSeenAt(): number;
				public getOriginalProfileUrl(): string;
				public updateMetaData(param0: java.util.Map<string,string>, param1: com.sendbird.android.User.MetaDataHandler): void;
				public getNickname(): string;
				public static buildFromSerializedData(param0: androidNative.Array<number>): com.sendbird.android.User;
			}
			export module User {
				export class ConnectionStatus {
					public static class: java.lang.Class<com.sendbird.android.User.ConnectionStatus>;
					public static NON_AVAILABLE: com.sendbird.android.User.ConnectionStatus;
					public static ONLINE: com.sendbird.android.User.ConnectionStatus;
					public static OFFLINE: com.sendbird.android.User.ConnectionStatus;
					public static valueOf(param0: string): com.sendbird.android.User.ConnectionStatus;
					public static values(): androidNative.Array<com.sendbird.android.User.ConnectionStatus>;
				}
				export class DeleteMetaDataHandler {
					public static class: java.lang.Class<com.sendbird.android.User.DeleteMetaDataHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.User$DeleteMetaDataHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
				export class MetaDataHandler {
					public static class: java.lang.Class<com.sendbird.android.User.MetaDataHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.User$MetaDataHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.Map<string,string>, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.Map<string,string>, param1: com.sendbird.android.SendBirdException): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class UserEvent {
				public static class: java.lang.Class<com.sendbird.android.UserEvent>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: com.sendbird.android.shadow.com.google.gson.JsonElement);
				public getData(): com.sendbird.android.shadow.com.google.gson.JsonElement;
				public toString(): string;
				public getCategory(): com.sendbird.android.UserEventCategory;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class UserEventCategory {
				public static class: java.lang.Class<com.sendbird.android.UserEventCategory>;
				public static CATEGORY_NONE: com.sendbird.android.UserEventCategory;
				public static USER_UNBLOCK: com.sendbird.android.UserEventCategory;
				public static USER_BLOCK: com.sendbird.android.UserEventCategory;
				public static FRIEND_DISCOVERED: com.sendbird.android.UserEventCategory;
				public static Companion: com.sendbird.android.UserEventCategory.Companion;
				public static from(param0: number): com.sendbird.android.UserEventCategory;
				public static valueOf(param0: string): com.sendbird.android.UserEventCategory;
				public getCategory(): number;
				public static values(): androidNative.Array<com.sendbird.android.UserEventCategory>;
			}
			export module UserEventCategory {
				export class Companion {
					public static class: java.lang.Class<com.sendbird.android.UserEventCategory.Companion>;
					public from(param0: number): com.sendbird.android.UserEventCategory;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class UserListQuery {
				public static class: java.lang.Class<com.sendbird.android.UserListQuery>;
				public isLoading(): boolean;
				public setLimit(param0: number): void;
				public hasNext(): boolean;
				/** @deprecated */
				public setMetaDataFilter(param0: string, param1: java.util.List<string>): void;
				public next(param0: com.sendbird.android.UserListQuery.UserListQueryResultHandler): void;
			}
			export module UserListQuery {
				export class QueryType {
					public static class: java.lang.Class<com.sendbird.android.UserListQuery.QueryType>;
					public static ALL_USER: com.sendbird.android.UserListQuery.QueryType;
					public static FILTERED_USER: com.sendbird.android.UserListQuery.QueryType;
					public static BLOCKED_USER: com.sendbird.android.UserListQuery.QueryType;
					public static PARTICIPANT: com.sendbird.android.UserListQuery.QueryType;
					public static MUTED_USER: com.sendbird.android.UserListQuery.QueryType;
					public static BANNED_USER: com.sendbird.android.UserListQuery.QueryType;
					public static values(): androidNative.Array<com.sendbird.android.UserListQuery.QueryType>;
					public static valueOf(param0: string): com.sendbird.android.UserListQuery.QueryType;
				}
				export class UserListQueryResultHandler {
					public static class: java.lang.Class<com.sendbird.android.UserListQuery.UserListQueryResultHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.UserListQuery$UserListQueryResultHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.List<com.sendbird.android.User>, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.List<com.sendbird.android.User>, param1: com.sendbird.android.SendBirdException): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class UserMessage extends com.sendbird.android.BaseMessage {
				public static class: java.lang.Class<com.sendbird.android.UserMessage>;
				public getTranslations(): java.util.Map<string,string>;
				/** @deprecated */
				public getRequestState(): com.sendbird.android.UserMessage.RequestState;
				public getPlugins(): java.util.List<com.sendbird.android.Plugin>;
				public toString(): string;
				public getRequestId(): string;
				public getRequestedMentionUserIds(): java.util.List<string>;
			}
			export module UserMessage {
				export class RequestState {
					public static class: java.lang.Class<com.sendbird.android.UserMessage.RequestState>;
					public static NONE: com.sendbird.android.UserMessage.RequestState;
					public static PENDING: com.sendbird.android.UserMessage.RequestState;
					public static FAILED: com.sendbird.android.UserMessage.RequestState;
					public static SUCCEEDED: com.sendbird.android.UserMessage.RequestState;
					public static values(): androidNative.Array<com.sendbird.android.UserMessage.RequestState>;
					public static valueOf(param0: string): com.sendbird.android.UserMessage.RequestState;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class UserMessageParams extends com.sendbird.android.BaseMessageParams {
				public static class: java.lang.Class<com.sendbird.android.UserMessageParams>;
				public setMentionType(param0: com.sendbird.android.BaseMessageParams.MentionType): com.sendbird.android.UserMessageParams;
				public setMentionedUsers(param0: java.util.List<com.sendbird.android.User>): com.sendbird.android.UserMessageParams;
				public setData(param0: string): com.sendbird.android.UserMessageParams;
				public setCustomType(param0: string): com.sendbird.android.UserMessageParams;
				public setMessage(param0: string): com.sendbird.android.UserMessageParams;
				public setPushNotificationDeliveryOption(param0: com.sendbird.android.BaseMessageParams.PushNotificationDeliveryOption): com.sendbird.android.UserMessageParams;
				public setTranslationTargetLanguages(param0: java.util.List<string>): com.sendbird.android.UserMessageParams;
				public toString(): string;
				public setAppleCriticalAlertOptions(param0: com.sendbird.android.AppleCriticalAlertOptions): com.sendbird.android.BaseMessageParams;
				public constructor(param0: string);
				public constructor();
				/** @deprecated */
				public setTargetLanguages(param0: java.util.List<string>): com.sendbird.android.UserMessageParams;
				/** @deprecated */
				public setMetaArrayKeys(param0: java.util.List<string>): com.sendbird.android.UserMessageParams;
				public setMentionedUserIds(param0: java.util.List<string>): com.sendbird.android.UserMessageParams;
				public setAppleCriticalAlertOptions(param0: com.sendbird.android.AppleCriticalAlertOptions): com.sendbird.android.UserMessageParams;
				public setParentMessageId(param0: number): com.sendbird.android.UserMessageParams;
				public setMetaArrays(param0: java.util.List<com.sendbird.android.MessageMetaArray>): com.sendbird.android.UserMessageParams;
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export class VersioningCache<Key, Value>  extends java.lang.Object {
				public static class: java.lang.Class<com.sendbird.android.VersioningCache<any,any>>;
				public get(param0: Key): Value;
				public hashCode(): number;
				public put(param0: Key, param1: Value, param2: number): boolean;
				public equals(param0: any): boolean;
				public toString(): string;
				public remove(param0: Key, param1: number): Value;
			}
			export module VersioningCache {
				export class DataHolder<ValueType>  extends java.lang.Object {
					public static class: java.lang.Class<com.sendbird.android.VersioningCache.DataHolder<any>>;
					public toString(): string;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module constant {
				export class KeySet {
					public static class: java.lang.Class<com.sendbird.android.constant.KeySet>;
					public static KEY_CURRENT_USER: string;
					public static KEY_CURRENT_APP_INFO: string;
					public static KEY_CONNECTION_CONFIG: string;
					public static KEY_CURRENT_APPID: string;
					public static KEY_LAST_CHANNEL_SYNCED_TOKEN_FROM_LASTMESSAGE: string;
					public static KEY_LAST_CHANNEL_SYNCED_TOKEN_FROM_CHRONOLOGICAL: string;
					public static KEY_LAST_CHANNEL_SYNCED_TOKEN_FROM_ALPHABETICAL: string;
					public static KEY_LAST_CHANNEL_CHANGELOGS_SYNC_TOKEN_BY_LASTMESSAGE: string;
					public static KEY_LAST_CHANNEL_CHANGELOGS_SYNC_TOKEN_BY_CHRONOLOGICAL: string;
					public static KEY_LAST_CHANNEL_CHANGELOGS_SYNC_TOKEN_BY_ALPHABETICAL: string;
					public static KEY_CHANNEL_SYNC_COMPLETE: string;
					public static KEY_FASTEST_COMPLETED_ORDER: string;
					public static KEY_LAST_CHANNEL_CHANGELOGS_SYNC_TOKEN: string;
					public static KEY_LAST_CHANNEL_CHANGELOGS_SYNC_TS: string;
					public static KEY_SYNCED_CHANNEL_URLS_BY_LASTMESSAGE: string;
					public static KEY_SYNCED_CHANNEL_URLS_BY_CHRONOLOGICAL: string;
					public static KEY_SYNCED_CHANNEL_URLS_BY_ALPHABETICAL: string;
					public static KEY_MESSAGE_STARTING_POINT: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module constant {
				export class StringSet {
					public static class: java.lang.Class<com.sendbird.android.constant.StringSet>;
					public static message_survival_seconds: string;
					public static root_message_id: string;
					public static parent_message_id: string;
					public static parent_message_text: string;
					public static channel_url: string;
					public static channel_type: string;
					public static type: string;
					public static messages: string;
					public static message_id: string;
					public static updated_at: string;
					public static token: string;
					public static has_more: string;
					public static change_ts: string;
					public static sendbird: string;
					public static thread_info: string;
					public static reply_count: string;
					public static most_replies: string;
					public static last_replied_at: string;
					public static is_sdk: string;
					public static message_ts: string;
					public static prev_limit: string;
					public static next_limit: string;
					public static include: string;
					public static reverse: string;
					public static message_type: string;
					public static custom_type: string;
					public static sender_ids: string;
					public static with_sorted_meta_array: string;
					public static include_reactions: string;
					public static include_thread_info: string;
					public static include_replies: string;
					public static include_parent_message_text: string;
					public static value: string;
					public static MESG: string;
					public static FILE: string;
					public static ADMM: string;
					public static BRDM: string;
					public static MTHD: string;
					public static MEDI: string;
					public static FEDI: string;
					public static AEDI: string;
					public static Android: string;
					public static none: string;
					public static core: string;
					public static sb_syncmanager: string;
					public static sb_uikit: string;
					public static s: string;
					public static c: string;
					public static u: string;
					public static SendBird: string;
					public static Connection: string;
					public static error: string;
					public static message: string;
					public static code: string;
					public static key: string;
					public static ekey: string;
					public static ping_interval: string;
					public static pong_timeout: string;
					public static login_ts: string;
					public static reconnect: string;
					public static interval: string;
					public static max_interval: string;
					public static mul: string;
					public static retry_cnt: string;
					public static bc_duration: string;
					public static unread_cnt: string;
					public static all: string;
					public static max_unread_cnt_on_super_group: string;
					public static old_values: string;
					public static mention_type: string;
					public static users: string;
					public static channel: string;
					public static mentioned_user_ids: string;
					public static updated: string;
					public static premium_feature_list: string;
					public static file_upload_size_limit: string;
					public static emoji_hash: string;
					public static use_reaction: string;
					public static application_attributes: string;
					public static id: string;
					public static url: string;
					public static name: string;
					public static emoji_categories: string;
					public static emoji_category_id: string;
					public static emojis: string;
					public static show_member: string;
					public static show_read_receipt: string;
					public static show_delivery_receipt: string;
					public static show_empty: string;
					public static show_frozen: string;
					public static custom_types: string;
					public static user_id: string;
					public static guest_id: string;
					public static limit: string;
					public static member: string;
					public static order: string;
					public static distinct_mode: string;
					public static public_mode: string;
					public static PUBLIC: string;
					public static name_contains: string;
					public static url_contains: string;
					public static custom_type_startswith: string;
					public static metadata_order_key: string;
					public static member_state_filter: string;
					public static channel_urls: string;
					public static super_mode: string;
					public static SUPER: string;
					public static nonsuper: string;
					public static public_membership_mode: string;
					public static joined: string;
					public static user: string;
					public static has_next: string;
					public static include_empty: string;
					public static include_frozen: string;
					public static meta_data_order_key: string;
					public static filter_mode: string;
					public static members_exactly_in: string;
					public static members_include_in: string;
					public static members_nickname_contains: string;
					public static query_type: string;
					public static and: string;
					public static or: string;
					public static filter: string;
					public static custom_type_starts_with: string;
					public static member_state: string;
					public static search_query: string;
					public static search_fields: string;
					public static member_nickname: string;
					public static channel_name: string;
					public static super_channel_filter: string;
					public static super_channel_only: string;
					public static non_super_channel_only: string;
					public static public_channel_filter: string;
					public static unread_channel_filter: string;
					public static unread_message: string;
					public static hidden_channel_filter: string;
					public static unhidden: string;
					public static hidden: string;
					public static hidden_allow_auto_unhide: string;
					public static hidden_prevent_auto_unhide: string;
					public static PRIVATE: string;
					public static channels: string;
					public static next: string;
					public static latest_last_message: string;
					public static chronological: string;
					public static channel_name_alphabetical: string;
					public static metadata_value_alphabetical: string;
					public static invited_only: string;
					public static invited_by_friend: string;
					public static invited_by_non_friend: string;
					public static joined_only: string;
					public static unread_filter: string;
					public static hidden_mode: string;
					public static unhidden_only: string;
					public static hidden_only: string;
					public static AND: string;
					public static OR: string;
					public static deleted: string;
					public static device_tokens: string;
					public static gcm: string;
					public static apns: string;
					public static apns_voip: string;
					public static huawei: string;
					public static gcm_reg_token: string;
					public static huawei_device_token: string;
					public static is_unique: string;
					public static always_push: string;
					public static DEFAULT: string;
					public static alternative: string;
					public static mention_only: string;
					public static off: string;
					public static push_trigger_option: string;
					public static do_not_disturb: string;
					public static start_hour: string;
					public static start_min: string;
					public static end_hour: string;
					public static end_min: string;
					public static timezone: string;
					public static snooze_enabled: string;
					public static snooze_start_ts: string;
					public static snooze_end_ts: string;
					public static push_sound: string;
					public static operator_ids: string;
					public static delete_all: string;
					public static profile_image_encryption: string;
					public static user_auth_key: string;
					public static og_tag: string;
					public static og_title: string;
					public static og_url: string;
					public static og_description: string;
					public static og_image: string;
					public static secure_url: string;
					public static width: string;
					public static height: string;
					public static alt: string;
					public static show_member_is_muted: string;
					public static is_muted: string;
					public static member_nickname_alphabetical: string;
					public static operator_then_member_alphabetical: string;
					public static operator: string;
					public static role: string;
					public static is_op_msg: string;
					public static require_auth_for_profile_image: string;
					public static nonoperator: string;
					public static operator_filter: string;
					public static msg_id: string;
					public static ts: string;
					public static created_by: string;
					public static Accept: string;
					public static UserAgent: string;
					public static SBUserAgent: string;
					public static SessionKey: string;
					public static RequestSentTimestamp: string;
					public static show_subchannel_messages_only: string;
					public static file_size: string;
					public static allow_friend_discovery: string;
					public static AppId: string;
					public static AccessToken: string;
					public static new_key: string;
					public static expiring_session: string;
					public static session_key: string;
					public static expires_in: string;
					public static reason: string;
					public static req_id: string;
					public static request_id: string;
					public static data: string;
					public static created_at: string;
					public static translations: string;
					public static mentioned_users: string;
					public static reactions: string;
					public static metaarray: string;
					public static metaarray_key_order: string;
					public static sorted_metaarray: string;
					public static is_global_block: string;
					public static error_code: string;
					public static silent: string;
					public static force_update_last_message: string;
					public static request_state: string;
					public static thumbnails: string;
					public static require_auth: string;
					public static custom: string;
					public static file: string;
					public static size: string;
					public static vendor: string;
					public static detail: string;
					public static plugins: string;
					public static Sendbird: string;
					public static include_ts: string;
					public static metadata: string;
					public static show_metadata: string;
					public static group_channels: string;
					public static open_channels: string;
					public static member_count: string;
					public static participant_count: string;
					public static serialized_data: string;
					public static current_offset: string;
					public static has_last_message: string;
					public static is_frozen: string;
					public static is_super: string;
					public static is_public: string;
					public static invited: string;
					public static last_message_ts: string;
					public static apple_critical_alert_options: string;
					public static volume: string;
					public static visible: string;
					public static sending_status: string;
					public static sender_user_id: string;
					public static is_huge_gap: string;
					public static prev_messages: string;
					public static next_messages: string;
					public static prev_hasmore: string;
					public static next_hasmore: string;
					public static target_fields: string;
					public static query: string;
					public static before: string;
					public static after: string;
					public static message_ts_from: string;
					public static message_ts_to: string;
					public static sort_field: string;
					public static exact_match: string;
					public static advanced_query: string;
					public static end_cursor: string;
					public static total_count: string;
					public static user_ids: string;
					public static nickname_startswith: string;
					public static last_synced_changelog_ts: string;
					public static deleted_at: string;
					public static sendbird_channel_table: string;
					public static sendbird_message_table: string;
					public static prev_start_ts: string;
					public static prev_end_ts: string;
					public static prev_cache_count: string;
					public static next_start_ts: string;
					public static next_end_ts: string;
					public static next_cache_count: string;
					public static is_sent_from_thread: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module db {
				export abstract class ContentProvider<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.sendbird.android.db.ContentProvider<any>>;
					public static _AND_: string;
					public static _OR_: string;
					public static _IN_: string;
					public static DESC: string;
					public static ASC: string;
					public getWriter(): globalAndroid.database.sqlite.SQLiteDatabase;
					public query(param0: string, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string): globalAndroid.database.Cursor;
					public query(param0: string, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string, param5: string): globalAndroid.database.Cursor;
					public getReader(): globalAndroid.database.sqlite.SQLiteDatabase;
					public delete(param0: string, param1: string, param2: androidNative.Array<string>): number;
					public insertOrThrow(param0: string, param1: globalAndroid.content.ContentValues): number;
					public getTableName(): string;
					public constructor(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: globalAndroid.database.sqlite.SQLiteDatabase);
					public upsert(param0: string, param1: globalAndroid.content.ContentValues): number;
					public update(param0: string, param1: globalAndroid.content.ContentValues, param2: string, param3: androidNative.Array<string>): number;
					public static toQueryString(param0: java.util.List<any>): string;
					public cursorToEntity(param0: globalAndroid.database.Cursor): T;
					public toContentValues(param0: T): globalAndroid.content.ContentValues;
					public insert(param0: string, param1: globalAndroid.content.ContentValues): number;
					public query(param0: string, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string, param5: string, param6: string, param7: string): globalAndroid.database.Cursor;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module db {
				export class GroupChannelDao {
					public static class: java.lang.Class<com.sendbird.android.db.GroupChannelDao>;
					/**
					 * Constructs a new instance of the com.sendbird.android.db.GroupChannelDao interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						count(): number;
						clear(): void;
						fetchAll(): java.util.List<com.sendbird.android.GroupChannel>;
						get(param0: string): com.sendbird.android.GroupChannel;
						getLatestChannel(param0: com.sendbird.android.GroupChannelListQuery.Order): com.sendbird.android.GroupChannel;
						upsert(param0: com.sendbird.android.GroupChannel): number;
						update(param0: com.sendbird.android.GroupChannel): number;
						upsertAll(param0: java.util.Collection<com.sendbird.android.GroupChannel>): boolean;
						delete(param0: string): number;
						deleteAll(param0: java.util.List<string>): number;
						fetchFromQuery(param0: com.sendbird.android.GroupChannelListQuery, param1: number): globalAndroid.util.Pair<java.lang.Integer,java.util.List<com.sendbird.android.GroupChannel>>;
					});
					public constructor();
					public deleteAll(param0: java.util.List<string>): number;
					public clear(): void;
					public getLatestChannel(param0: com.sendbird.android.GroupChannelListQuery.Order): com.sendbird.android.GroupChannel;
					public count(): number;
					public update(param0: com.sendbird.android.GroupChannel): number;
					public delete(param0: string): number;
					public fetchFromQuery(param0: com.sendbird.android.GroupChannelListQuery, param1: number): globalAndroid.util.Pair<java.lang.Integer,java.util.List<com.sendbird.android.GroupChannel>>;
					public upsertAll(param0: java.util.Collection<com.sendbird.android.GroupChannel>): boolean;
					public fetchAll(): java.util.List<com.sendbird.android.GroupChannel>;
					public get(param0: string): com.sendbird.android.GroupChannel;
					public upsert(param0: com.sendbird.android.GroupChannel): number;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module db {
				export class GroupChannelDaoImpl extends com.sendbird.android.db.ContentProvider<com.sendbird.android.GroupChannel> implements com.sendbird.android.db.GroupChannelDao  {
					public static class: java.lang.Class<com.sendbird.android.db.GroupChannelDaoImpl>;
					public static CHANNEL_TABLE_CREATE: string;
					public deleteAll(param0: java.util.List<string>): number;
					public cursorToEntity(param0: globalAndroid.database.Cursor): com.sendbird.android.GroupChannel;
					public count(): number;
					public delete(param0: string, param1: string, param2: androidNative.Array<string>): number;
					public getTableName(): string;
					public delete(param0: string): number;
					public cursorToEntity(param0: globalAndroid.database.Cursor): any;
					public constructor(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: globalAndroid.database.sqlite.SQLiteDatabase);
					public upsert(param0: string, param1: globalAndroid.content.ContentValues): number;
					public toContentValues(param0: com.sendbird.android.GroupChannel): globalAndroid.content.ContentValues;
					public update(param0: string, param1: globalAndroid.content.ContentValues, param2: string, param3: androidNative.Array<string>): number;
					public clear(): void;
					public getLatestChannel(param0: com.sendbird.android.GroupChannelListQuery.Order): com.sendbird.android.GroupChannel;
					public update(param0: com.sendbird.android.GroupChannel): number;
					public fetchFromQuery(param0: com.sendbird.android.GroupChannelListQuery, param1: number): globalAndroid.util.Pair<java.lang.Integer,java.util.List<com.sendbird.android.GroupChannel>>;
					public upsertAll(param0: java.util.Collection<com.sendbird.android.GroupChannel>): boolean;
					public fetchAll(): java.util.List<com.sendbird.android.GroupChannel>;
					public toContentValues(param0: any): globalAndroid.content.ContentValues;
					public get(param0: string): com.sendbird.android.GroupChannel;
					public upsert(param0: com.sendbird.android.GroupChannel): number;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module db {
				export class MessageDao {
					public static class: java.lang.Class<com.sendbird.android.db.MessageDao>;
					/**
					 * Constructs a new instance of the com.sendbird.android.db.MessageDao interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						count(): number;
						clear(): number;
						deleteAll(param0: string): number;
						deleteAll(param0: java.util.List<string>): number;
						deleteAllByIds(param0: java.util.List<java.lang.Long>): number;
						delete(param0: number): number;
						deleteAllBefore(param0: string, param1: number): number;
						upsert(param0: com.sendbird.android.BaseMessage): number;
						update(param0: com.sendbird.android.BaseMessage): number;
						upsertAll(param0: java.util.List<com.sendbird.android.BaseMessage>): boolean;
						get(param0: number): com.sendbird.android.BaseMessage;
						loadMessages(param0: number, param1: com.sendbird.android.BaseChannel, param2: com.sendbird.android.MessageListParams): java.util.List<com.sendbird.android.BaseMessage>;
						getOldestMessage(): com.sendbird.android.BaseMessage;
					});
					public constructor();
					public deleteAll(param0: java.util.List<string>): number;
					public update(param0: com.sendbird.android.BaseMessage): number;
					public clear(): number;
					public count(): number;
					public deleteAll(param0: string): number;
					public deleteAllByIds(param0: java.util.List<java.lang.Long>): number;
					public deleteAllBefore(param0: string, param1: number): number;
					public get(param0: number): com.sendbird.android.BaseMessage;
					public getOldestMessage(): com.sendbird.android.BaseMessage;
					public delete(param0: number): number;
					public upsertAll(param0: java.util.List<com.sendbird.android.BaseMessage>): boolean;
					public loadMessages(param0: number, param1: com.sendbird.android.BaseChannel, param2: com.sendbird.android.MessageListParams): java.util.List<com.sendbird.android.BaseMessage>;
					public upsert(param0: com.sendbird.android.BaseMessage): number;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module db {
				export class MessageDaoImpl extends com.sendbird.android.db.ContentProvider<com.sendbird.android.BaseMessage> implements com.sendbird.android.db.MessageDao  {
					public static class: java.lang.Class<com.sendbird.android.db.MessageDaoImpl>;
					public static MESSAGE_TABLE_CREATE: string;
					public deleteAll(param0: java.util.List<string>): number;
					public update(param0: com.sendbird.android.BaseMessage): number;
					public clear(): number;
					public count(): number;
					public delete(param0: string, param1: string, param2: androidNative.Array<string>): number;
					public getTableName(): string;
					public cursorToEntity(param0: globalAndroid.database.Cursor): any;
					public cursorToEntity(param0: globalAndroid.database.Cursor): com.sendbird.android.BaseMessage;
					public deleteAll(param0: string): number;
					public deleteAllByIds(param0: java.util.List<java.lang.Long>): number;
					public constructor(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: globalAndroid.database.sqlite.SQLiteDatabase);
					public upsert(param0: string, param1: globalAndroid.content.ContentValues): number;
					public deleteAllBefore(param0: string, param1: number): number;
					public get(param0: number): com.sendbird.android.BaseMessage;
					public update(param0: string, param1: globalAndroid.content.ContentValues, param2: string, param3: androidNative.Array<string>): number;
					public getOldestMessage(): com.sendbird.android.BaseMessage;
					public delete(param0: number): number;
					public upsertAll(param0: java.util.List<com.sendbird.android.BaseMessage>): boolean;
					public toContentValues(param0: com.sendbird.android.BaseMessage): globalAndroid.content.ContentValues;
					public loadMessages(param0: number, param1: com.sendbird.android.BaseChannel, param2: com.sendbird.android.MessageListParams): java.util.List<com.sendbird.android.BaseMessage>;
					public upsert(param0: com.sendbird.android.BaseMessage): number;
					public toContentValues(param0: any): globalAndroid.content.ContentValues;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module db {
				export class SendBirdDBException {
					public static class: java.lang.Class<com.sendbird.android.db.SendBirdDBException>;
					public constructor(param0: java.lang.Exception);
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export class AddOperatorsHandler {
					public static class: java.lang.Class<com.sendbird.android.handlers.AddOperatorsHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.handlers.AddOperatorsHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export class AllowFriendDiscoveryHandler {
					public static class: java.lang.Class<com.sendbird.android.handlers.AllowFriendDiscoveryHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.handlers.AllowFriendDiscoveryHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onComplete(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onComplete(param0: com.sendbird.android.SendBirdException): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export class ChannelChangeLogsHandler {
					public static class: java.lang.Class<com.sendbird.android.handlers.ChannelChangeLogsHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.handlers.ChannelChangeLogsHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.List<com.sendbird.android.GroupChannel>, param1: java.util.List<string>, param2: string): void;
					});
					public constructor();
					public onResult(param0: java.util.List<com.sendbird.android.GroupChannel>, param1: java.util.List<string>, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export class ChannelCollectionHandler {
					public static class: java.lang.Class<com.sendbird.android.handlers.ChannelCollectionHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.handlers.ChannelCollectionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onChannelChanged(param0: com.sendbird.android.handlers.ChannelContext, param1: java.util.List<com.sendbird.android.GroupChannel>): void;
						onChannelDeleted(param0: com.sendbird.android.handlers.ChannelContext, param1: java.util.List<string>): void;
					});
					public constructor();
					public onChannelChanged(param0: com.sendbird.android.handlers.ChannelContext, param1: java.util.List<com.sendbird.android.GroupChannel>): void;
					public onChannelDeleted(param0: com.sendbird.android.handlers.ChannelContext, param1: java.util.List<string>): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export class ChannelContext extends com.sendbird.android.handlers.Traceable {
					public static class: java.lang.Class<com.sendbird.android.handlers.ChannelContext>;
					public getSource(): com.sendbird.android.handlers.Source;
					public isFromEvent(): boolean;
					public constructor(param0: com.sendbird.android.handlers.Source);
					public getTraceName(): string;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export class DBInitHandler {
					public static class: java.lang.Class<com.sendbird.android.handlers.DBInitHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.handlers.DBInitHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onStarted(): void;
						onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
						onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
						onOpend(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
						onCompleted(): void;
					});
					public constructor();
					public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
					public onStarted(): void;
					public onOpend(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
					public onCompleted(): void;
					public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export class GetAllowFriendDiscoveryHandler {
					public static class: java.lang.Class<com.sendbird.android.handlers.GetAllowFriendDiscoveryHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.handlers.GetAllowFriendDiscoveryHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onComplete(param0: java.lang.Boolean, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onComplete(param0: java.lang.Boolean, param1: com.sendbird.android.SendBirdException): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export class InitPolicy {
					public static class: java.lang.Class<com.sendbird.android.handlers.InitPolicy>;
					public static CACHE_AND_REPLACE_BY_API: com.sendbird.android.handlers.InitPolicy;
					public static values(): androidNative.Array<com.sendbird.android.handlers.InitPolicy>;
					public static valueOf(param0: string): com.sendbird.android.handlers.InitPolicy;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export class InitResultHandler {
					public static class: java.lang.Class<com.sendbird.android.handlers.InitResultHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.handlers.InitResultHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMigrationStarted(): void;
						onInitFailed(param0: com.sendbird.android.SendBirdException): void;
						onInitSucceed(): void;
					});
					public constructor();
					public onInitFailed(param0: com.sendbird.android.SendBirdException): void;
					public onMigrationStarted(): void;
					public onInitSucceed(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export class InitialLoadHandler {
					public static class: java.lang.Class<com.sendbird.android.handlers.InitialLoadHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.handlers.InitialLoadHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCacheResult(param0: java.util.List<com.sendbird.android.BaseMessage>, param1: com.sendbird.android.SendBirdException): void;
						onApiResult(param0: java.util.List<com.sendbird.android.BaseMessage>, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onApiResult(param0: java.util.List<com.sendbird.android.BaseMessage>, param1: com.sendbird.android.SendBirdException): void;
					public onCacheResult(param0: java.util.List<com.sendbird.android.BaseMessage>, param1: com.sendbird.android.SendBirdException): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export class MessageChangeLogsHandler {
					public static class: java.lang.Class<com.sendbird.android.handlers.MessageChangeLogsHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.handlers.MessageChangeLogsHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.List<com.sendbird.android.BaseMessage>, param1: java.util.List<java.lang.Long>, param2: string): void;
					});
					public constructor();
					public onResult(param0: java.util.List<com.sendbird.android.BaseMessage>, param1: java.util.List<java.lang.Long>, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export class MessageCollectionHandler {
					public static class: java.lang.Class<com.sendbird.android.handlers.MessageCollectionHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.handlers.MessageCollectionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMessageAdded(param0: com.sendbird.android.handlers.MessageContext, param1: com.sendbird.android.GroupChannel, param2: java.util.List<com.sendbird.android.BaseMessage>): void;
						onMessageUpdated(param0: com.sendbird.android.handlers.MessageContext, param1: com.sendbird.android.GroupChannel, param2: java.util.List<com.sendbird.android.BaseMessage>): void;
						onMessageDeleted(param0: com.sendbird.android.handlers.MessageContext, param1: com.sendbird.android.GroupChannel, param2: java.util.List<com.sendbird.android.BaseMessage>): void;
						onChannelChanged(param0: com.sendbird.android.handlers.ChannelContext, param1: com.sendbird.android.GroupChannel): void;
						onChannelDeleted(param0: com.sendbird.android.handlers.ChannelContext, param1: string): void;
						onHugeGapDetected(): void;
					});
					public constructor();
					public onChannelDeleted(param0: com.sendbird.android.handlers.ChannelContext, param1: string): void;
					public onMessageUpdated(param0: com.sendbird.android.handlers.MessageContext, param1: com.sendbird.android.GroupChannel, param2: java.util.List<com.sendbird.android.BaseMessage>): void;
					public onMessageDeleted(param0: com.sendbird.android.handlers.MessageContext, param1: com.sendbird.android.GroupChannel, param2: java.util.List<com.sendbird.android.BaseMessage>): void;
					public onMessageAdded(param0: com.sendbird.android.handlers.MessageContext, param1: com.sendbird.android.GroupChannel, param2: java.util.List<com.sendbird.android.BaseMessage>): void;
					public onChannelChanged(param0: com.sendbird.android.handlers.ChannelContext, param1: com.sendbird.android.GroupChannel): void;
					public onHugeGapDetected(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export class MessageContext extends com.sendbird.android.handlers.Traceable {
					public static class: java.lang.Class<com.sendbird.android.handlers.MessageContext>;
					public getSource(): com.sendbird.android.handlers.Source;
					public isFromEvent(): boolean;
					public constructor(param0: com.sendbird.android.handlers.Source);
					public getTraceName(): string;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export class OnChannelLoadResultHandler {
					public static class: java.lang.Class<com.sendbird.android.handlers.OnChannelLoadResultHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.handlers.OnChannelLoadResultHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: java.util.List<com.sendbird.android.GroupChannel>, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: java.util.List<com.sendbird.android.GroupChannel>, param1: com.sendbird.android.SendBirdException): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export class OnResultHandler<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.sendbird.android.handlers.OnResultHandler<any>>;
					/**
					 * Constructs a new instance of the com.sendbird.android.handlers.OnResultHandler<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: T, param1: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: T, param1: com.sendbird.android.SendBirdException): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export class Predicate<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.sendbird.android.handlers.Predicate<any>>;
					/**
					 * Constructs a new instance of the com.sendbird.android.handlers.Predicate<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						predicate(param0: T): boolean;
					});
					public constructor();
					public predicate(param0: T): boolean;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export class RemoveAllOperatorsHandler {
					public static class: java.lang.Class<com.sendbird.android.handlers.RemoveAllOperatorsHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.handlers.RemoveAllOperatorsHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export class RemoveOperatorsHandler {
					public static class: java.lang.Class<com.sendbird.android.handlers.RemoveOperatorsHandler>;
					/**
					 * Constructs a new instance of the com.sendbird.android.handlers.RemoveOperatorsHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.sendbird.android.SendBirdException): void;
					});
					public constructor();
					public onResult(param0: com.sendbird.android.SendBirdException): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export abstract class SessionHandler {
					public static class: java.lang.Class<com.sendbird.android.handlers.SessionHandler>;
					public constructor();
					public onSessionRefreshed(): void;
					public onSessionExpired(): void;
					public onSessionClosed(): void;
					public onSessionError(param0: com.sendbird.android.SendBirdException): void;
					public onSessionTokenRequired(param0: com.sendbird.android.handlers.SessionTokenRequester): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export class SessionTokenRequester {
					public static class: java.lang.Class<com.sendbird.android.handlers.SessionTokenRequester>;
					/**
					 * Constructs a new instance of the com.sendbird.android.handlers.SessionTokenRequester interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSuccess(param0: string): void;
						onFail(): void;
					});
					public constructor();
					public onFail(): void;
					public onSuccess(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export class Source {
					public static class: java.lang.Class<com.sendbird.android.handlers.Source>;
					public static MESSAGE_CHANGELOG: com.sendbird.android.handlers.Source;
					public static MESSAGE_FILL: com.sendbird.android.handlers.Source;
					public static CHANNEL_CHANGELOG: com.sendbird.android.handlers.Source;
					public static CHANNEL_FILL: com.sendbird.android.handlers.Source;
					public static EVENT_MESSAGE_SENT: com.sendbird.android.handlers.Source;
					public static EVENT_MESSAGE_RECEIVED: com.sendbird.android.handlers.Source;
					public static EVENT_MESSAGE_UPDATED: com.sendbird.android.handlers.Source;
					public static EVENT_MESSAGE_DELETED: com.sendbird.android.handlers.Source;
					public static EVENT_REACTION_UPDATED: com.sendbird.android.handlers.Source;
					public static EVENT_THREAD_INFO_UPDATED: com.sendbird.android.handlers.Source;
					public static EVENT_MENTION: com.sendbird.android.handlers.Source;
					public static EVENT_CHANNEL_CHANGED: com.sendbird.android.handlers.Source;
					public static EVENT_CHANNEL_MEMBER_COUNT_CHANGED: com.sendbird.android.handlers.Source;
					public static EVENT_CHANNEL_FROZEN: com.sendbird.android.handlers.Source;
					public static EVENT_CHANNEL_UNFROZEN: com.sendbird.android.handlers.Source;
					public static EVENT_CHANNEL_HIDDEN: com.sendbird.android.handlers.Source;
					public static EVENT_CHANNEL_DELETED: com.sendbird.android.handlers.Source;
					public static EVENT_OPERATOR_UPDATED: com.sendbird.android.handlers.Source;
					public static EVENT_TYPING_STATUS_UPDATED: com.sendbird.android.handlers.Source;
					public static EVENT_DELIVERY_RECEIPT_UPDATED: com.sendbird.android.handlers.Source;
					public static EVENT_READ_RECEIPT_UPDATED: com.sendbird.android.handlers.Source;
					public static EVENT_USER_RECEIVED_INVITATION: com.sendbird.android.handlers.Source;
					public static EVENT_USER_DECLINED_INVITATION: com.sendbird.android.handlers.Source;
					public static EVENT_USER_JOINED: com.sendbird.android.handlers.Source;
					public static EVENT_USER_MUTED: com.sendbird.android.handlers.Source;
					public static EVENT_USER_UNMUTED: com.sendbird.android.handlers.Source;
					public static EVENT_USER_LEFT: com.sendbird.android.handlers.Source;
					public static EVENT_USER_BANNED: com.sendbird.android.handlers.Source;
					public static EVENT_USER_UNBANNED: com.sendbird.android.handlers.Source;
					public static valueOf(param0: string): com.sendbird.android.handlers.Source;
					public isFromEvent(): boolean;
					public static values(): androidNative.Array<com.sendbird.android.handlers.Source>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export class TokenDataSource {
					public static class: java.lang.Class<com.sendbird.android.handlers.TokenDataSource>;
					/**
					 * Constructs a new instance of the com.sendbird.android.handlers.TokenDataSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getToken(): string;
						getDefaultTimestamp(): number;
					});
					public constructor();
					public getDefaultTimestamp(): number;
					public getToken(): string;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module handlers {
				export class Traceable {
					public static class: java.lang.Class<com.sendbird.android.handlers.Traceable>;
					/**
					 * Constructs a new instance of the com.sendbird.android.handlers.Traceable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getTraceName(): string;
						isFromEvent(): boolean;
					});
					public constructor();
					public isFromEvent(): boolean;
					public getTraceName(): string;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module log {
				export class Logger {
					public static class: java.lang.Class<com.sendbird.android.log.Logger>;
					public static NONE: number;
					public static INFO: number;
					public static DEBUG: number;
					public static wt(param0: com.sendbird.android.log.Tag, param1: string, param2: androidNative.Array<any>): number;
					public static dt(param0: com.sendbird.android.log.Tag, param1: string, param2: androidNative.Array<any>): number;
					public static wt(param0: com.sendbird.android.log.Tag, param1: string, param2: java.lang.Throwable): number;
					public static e(param0: string, param1: java.lang.Throwable): number;
					public static it(param0: com.sendbird.android.log.Tag, param1: java.lang.Throwable): number;
					public static d(param0: string): number;
					public static vt(param0: com.sendbird.android.log.Tag, param1: string): number;
					public static et(param0: com.sendbird.android.log.Tag, param1: string, param2: androidNative.Array<any>): number;
					public static wt(param0: com.sendbird.android.log.Tag, param1: string): number;
					public static devt(param0: com.sendbird.android.log.Tag, param1: string): number;
					public static v(param0: string, param1: java.lang.Throwable): number;
					public static dt(param0: com.sendbird.android.log.Tag, param1: string, param2: java.lang.Throwable): number;
					public static w(param0: string, param1: androidNative.Array<any>): number;
					public static dev(param0: string): number;
					public static v(param0: string, param1: androidNative.Array<any>): number;
					public static dt(param0: com.sendbird.android.log.Tag, param1: java.lang.Throwable): number;
					public static e(param0: java.lang.Throwable): number;
					public static d(param0: java.lang.Throwable): number;
					public static i(param0: string, param1: androidNative.Array<any>): number;
					public static vt(param0: com.sendbird.android.log.Tag, param1: java.lang.Throwable): number;
					public static devt(param0: com.sendbird.android.log.Tag, param1: java.lang.Throwable): number;
					public static it(param0: com.sendbird.android.log.Tag, param1: string): number;
					public static dev(param0: string, param1: androidNative.Array<any>): number;
					public static et(param0: com.sendbird.android.log.Tag, param1: string): number;
					public static it(param0: com.sendbird.android.log.Tag, param1: string, param2: androidNative.Array<any>): number;
					public static e(param0: string, param1: androidNative.Array<any>): number;
					public static dt(param0: com.sendbird.android.log.Tag, param1: string): number;
					public static vt(param0: com.sendbird.android.log.Tag, param1: string, param2: java.lang.Throwable): number;
					public static w(param0: string, param1: java.lang.Throwable): number;
					public static dev(param0: java.lang.Throwable): number;
					public static setLoggerLevel(param0: number): void;
					public static et(param0: com.sendbird.android.log.Tag, param1: string, param2: java.lang.Throwable): number;
					public static v(param0: java.lang.Throwable): number;
					public static w(param0: java.lang.Throwable): number;
					public static d(param0: string, param1: java.lang.Throwable): number;
					public static it(param0: com.sendbird.android.log.Tag, param1: string, param2: java.lang.Throwable): number;
					public static i(param0: string, param1: java.lang.Throwable): number;
					public static w(param0: string): number;
					public static et(param0: com.sendbird.android.log.Tag, param1: java.lang.Throwable): number;
					public static i(param0: java.lang.Throwable): number;
					public static devt(param0: com.sendbird.android.log.Tag, param1: string, param2: java.lang.Throwable): number;
					public static dev(param0: string, param1: java.lang.Throwable): number;
					public static d(param0: string, param1: androidNative.Array<any>): number;
					public static wt(param0: com.sendbird.android.log.Tag, param1: java.lang.Throwable): number;
					public static getCallerTraceInfo(param0: java.lang.Class): string;
					public static e(param0: string): number;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module log {
				export class LoggerConfig {
					public static class: java.lang.Class<com.sendbird.android.log.LoggerConfig>;
				}
				export module LoggerConfig {
					export class Builder {
						public static class: java.lang.Class<com.sendbird.android.log.LoggerConfig.Builder>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module log {
				export class Tag {
					public static class: java.lang.Class<com.sendbird.android.log.Tag>;
					public static DEFAULT: com.sendbird.android.log.Tag;
					public static CONNECTION: com.sendbird.android.log.Tag;
					public static PINGER: com.sendbird.android.log.Tag;
					public static DB: com.sendbird.android.log.Tag;
					public static valueOf(param0: string): com.sendbird.android.log.Tag;
					public static values(): androidNative.Array<com.sendbird.android.log.Tag>;
					public tag(): string;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export class DefaultDateTypeAdapter extends com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.util.Date> {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.DefaultDateTypeAdapter>;
								public constructor(param0: java.lang.Class<any>, param1: number, param2: number);
								public toString(): string;
								public read(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): java.util.Date;
								public constructor(param0: number, param1: number);
								public constructor();
								public write(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter, param1: any): void;
								public read(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): any;
								public write(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter, param1: java.util.Date): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export class ExclusionStrategy {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.ExclusionStrategy>;
								/**
								 * Constructs a new instance of the com.sendbird.android.shadow.com.google.gson.ExclusionStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									shouldSkipField(param0: com.sendbird.android.shadow.com.google.gson.FieldAttributes): boolean;
									shouldSkipClass(param0: java.lang.Class<any>): boolean;
								});
								public constructor();
								public shouldSkipField(param0: com.sendbird.android.shadow.com.google.gson.FieldAttributes): boolean;
								public shouldSkipClass(param0: java.lang.Class<any>): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export class FieldAttributes {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.FieldAttributes>;
								public getDeclaredType(): java.lang.reflect.Type;
								public getAnnotations(): java.util.Collection<java.lang.annotation.Annotation>;
								public getName(): string;
								public constructor(param0: java.lang.reflect.Field);
								public getDeclaringClass(): java.lang.Class<any>;
								public getDeclaredClass(): java.lang.Class<any>;
								public getAnnotation(param0: java.lang.Class): java.lang.annotation.Annotation;
								public hasModifier(param0: number): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export abstract class FieldNamingPolicy extends com.sendbird.android.shadow.com.google.gson.FieldNamingStrategy {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.FieldNamingPolicy>;
								public static IDENTITY: com.sendbird.android.shadow.com.google.gson.FieldNamingPolicy;
								public static UPPER_CAMEL_CASE: com.sendbird.android.shadow.com.google.gson.FieldNamingPolicy;
								public static UPPER_CAMEL_CASE_WITH_SPACES: com.sendbird.android.shadow.com.google.gson.FieldNamingPolicy;
								public static LOWER_CASE_WITH_UNDERSCORES: com.sendbird.android.shadow.com.google.gson.FieldNamingPolicy;
								public static LOWER_CASE_WITH_DASHES: com.sendbird.android.shadow.com.google.gson.FieldNamingPolicy;
								public static LOWER_CASE_WITH_DOTS: com.sendbird.android.shadow.com.google.gson.FieldNamingPolicy;
								public translateName(param0: java.lang.reflect.Field): string;
								public static values(): androidNative.Array<com.sendbird.android.shadow.com.google.gson.FieldNamingPolicy>;
								public static valueOf(param0: string): com.sendbird.android.shadow.com.google.gson.FieldNamingPolicy;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export class FieldNamingStrategy {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.FieldNamingStrategy>;
								/**
								 * Constructs a new instance of the com.sendbird.android.shadow.com.google.gson.FieldNamingStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									translateName(param0: java.lang.reflect.Field): string;
								});
								public constructor();
								public translateName(param0: java.lang.reflect.Field): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export class Gson {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.Gson>;
								public excluder(): com.sendbird.android.shadow.com.google.gson.internal.Excluder;
								public toJson(param0: any, param1: java.lang.reflect.Type, param2: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter): void;
								public toString(): string;
								public htmlSafe(): boolean;
								public newJsonReader(param0: java.io.Reader): com.sendbird.android.shadow.com.google.gson.stream.JsonReader;
								public toJson(param0: any): string;
								public newBuilder(): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public toJsonTree(param0: any, param1: java.lang.reflect.Type): com.sendbird.android.shadow.com.google.gson.JsonElement;
								public newJsonWriter(param0: java.io.Writer): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
								public fromJson(param0: com.sendbird.android.shadow.com.google.gson.JsonElement, param1: java.lang.reflect.Type): any;
								public toJson(param0: com.sendbird.android.shadow.com.google.gson.JsonElement, param1: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter): void;
								public fromJson(param0: string, param1: java.lang.Class): any;
								public fromJson(param0: java.io.Reader, param1: java.lang.Class): any;
								public fieldNamingStrategy(): com.sendbird.android.shadow.com.google.gson.FieldNamingStrategy;
								public serializeNulls(): boolean;
								public toJson(param0: any, param1: java.lang.Appendable): void;
								public fromJson(param0: java.io.Reader, param1: java.lang.reflect.Type): any;
								public toJsonTree(param0: any): com.sendbird.android.shadow.com.google.gson.JsonElement;
								public constructor();
								public getAdapter(param0: com.sendbird.android.shadow.com.google.gson.reflect.TypeToken<any>): com.sendbird.android.shadow.com.google.gson.TypeAdapter<any>;
								public fromJson(param0: com.sendbird.android.shadow.com.google.gson.JsonElement, param1: java.lang.Class): any;
								public toJson(param0: any, param1: java.lang.reflect.Type, param2: java.lang.Appendable): void;
								public toJson(param0: any, param1: java.lang.reflect.Type): string;
								public fromJson(param0: string, param1: java.lang.reflect.Type): any;
								public fromJson(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader, param1: java.lang.reflect.Type): any;
								public toJson(param0: com.sendbird.android.shadow.com.google.gson.JsonElement, param1: java.lang.Appendable): void;
								public getAdapter(param0: java.lang.Class): com.sendbird.android.shadow.com.google.gson.TypeAdapter<any>;
								public toJson(param0: com.sendbird.android.shadow.com.google.gson.JsonElement): string;
								public getDelegateAdapter(param0: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory, param1: com.sendbird.android.shadow.com.google.gson.reflect.TypeToken<any>): com.sendbird.android.shadow.com.google.gson.TypeAdapter<any>;
							}
							export module Gson {
								export class FutureTypeAdapter<T>  extends com.sendbird.android.shadow.com.google.gson.TypeAdapter<any> {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.Gson.FutureTypeAdapter<any>>;
									public write(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter, param1: any): void;
									public read(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): any;
									public setDelegate(param0: com.sendbird.android.shadow.com.google.gson.TypeAdapter<any>): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export class GsonBuilder {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.GsonBuilder>;
								public serializeNulls(): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public excludeFieldsWithoutExposeAnnotation(): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public serializeSpecialFloatingPointValues(): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public setLenient(): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public generateNonExecutableJson(): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public disableInnerClassSerialization(): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public setDateFormat(param0: number): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public enableComplexMapKeySerialization(): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public setFieldNamingStrategy(param0: com.sendbird.android.shadow.com.google.gson.FieldNamingStrategy): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public setDateFormat(param0: number, param1: number): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public setFieldNamingPolicy(param0: com.sendbird.android.shadow.com.google.gson.FieldNamingPolicy): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public disableHtmlEscaping(): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public constructor();
								public setLongSerializationPolicy(param0: com.sendbird.android.shadow.com.google.gson.LongSerializationPolicy): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public create(): com.sendbird.android.shadow.com.google.gson.Gson;
								public setVersion(param0: number): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public setExclusionStrategies(param0: androidNative.Array<com.sendbird.android.shadow.com.google.gson.ExclusionStrategy>): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public registerTypeHierarchyAdapter(param0: java.lang.Class<any>, param1: any): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public registerTypeAdapter(param0: java.lang.reflect.Type, param1: any): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public setDateFormat(param0: string): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public excludeFieldsWithModifiers(param0: androidNative.Array<number>): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public addDeserializationExclusionStrategy(param0: com.sendbird.android.shadow.com.google.gson.ExclusionStrategy): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public registerTypeAdapterFactory(param0: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public addSerializationExclusionStrategy(param0: com.sendbird.android.shadow.com.google.gson.ExclusionStrategy): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
								public setPrettyPrinting(): com.sendbird.android.shadow.com.google.gson.GsonBuilder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export class InstanceCreator<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.InstanceCreator<any>>;
								/**
								 * Constructs a new instance of the com.sendbird.android.shadow.com.google.gson.InstanceCreator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									createInstance(param0: java.lang.reflect.Type): T;
								});
								public constructor();
								public createInstance(param0: java.lang.reflect.Type): T;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export class JsonArray extends com.sendbird.android.shadow.com.google.gson.JsonElement implements java.lang.Iterable<com.sendbird.android.shadow.com.google.gson.JsonElement>  {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.JsonArray>;
								public add(param0: java.lang.Character): void;
								public remove(param0: number): com.sendbird.android.shadow.com.google.gson.JsonElement;
								public size(): number;
								public get(param0: number): com.sendbird.android.shadow.com.google.gson.JsonElement;
								public getAsNumber(): java.lang.Number;
								public getAsFloat(): number;
								public equals(param0: any): boolean;
								public set(param0: number, param1: com.sendbird.android.shadow.com.google.gson.JsonElement): com.sendbird.android.shadow.com.google.gson.JsonElement;
								public add(param0: java.lang.Boolean): void;
								public add(param0: string): void;
								public contains(param0: com.sendbird.android.shadow.com.google.gson.JsonElement): boolean;
								public getAsShort(): number;
								public getAsBigInteger(): java.math.BigInteger;
								public getAsCharacter(): string;
								public getAsBoolean(): boolean;
								public deepCopy(): com.sendbird.android.shadow.com.google.gson.JsonElement;
								public getAsBigDecimal(): java.math.BigDecimal;
								public add(param0: java.lang.Number): void;
								public getAsDouble(): number;
								public addAll(param0: com.sendbird.android.shadow.com.google.gson.JsonArray): void;
								public constructor();
								public add(param0: com.sendbird.android.shadow.com.google.gson.JsonElement): void;
								public constructor(param0: number);
								public deepCopy(): com.sendbird.android.shadow.com.google.gson.JsonArray;
								public iterator(): java.util.Iterator<com.sendbird.android.shadow.com.google.gson.JsonElement>;
								public getAsByte(): number;
								public getAsString(): string;
								public getAsInt(): number;
								public hashCode(): number;
								public remove(param0: com.sendbird.android.shadow.com.google.gson.JsonElement): boolean;
								public getAsLong(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export class JsonDeserializationContext {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.JsonDeserializationContext>;
								/**
								 * Constructs a new instance of the com.sendbird.android.shadow.com.google.gson.JsonDeserializationContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									deserialize(param0: com.sendbird.android.shadow.com.google.gson.JsonElement, param1: java.lang.reflect.Type): any;
								});
								public constructor();
								public deserialize(param0: com.sendbird.android.shadow.com.google.gson.JsonElement, param1: java.lang.reflect.Type): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export class JsonDeserializer<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.JsonDeserializer<any>>;
								/**
								 * Constructs a new instance of the com.sendbird.android.shadow.com.google.gson.JsonDeserializer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									deserialize(param0: com.sendbird.android.shadow.com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.sendbird.android.shadow.com.google.gson.JsonDeserializationContext): T;
								});
								public constructor();
								public deserialize(param0: com.sendbird.android.shadow.com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.sendbird.android.shadow.com.google.gson.JsonDeserializationContext): T;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export abstract class JsonElement {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.JsonElement>;
								public deepCopy(): com.sendbird.android.shadow.com.google.gson.JsonElement;
								public getAsBigDecimal(): java.math.BigDecimal;
								public toString(): string;
								public isJsonObject(): boolean;
								public getAsNumber(): java.lang.Number;
								public getAsFloat(): number;
								public isJsonNull(): boolean;
								public getAsDouble(): number;
								public getAsJsonPrimitive(): com.sendbird.android.shadow.com.google.gson.JsonPrimitive;
								public constructor();
								public getAsJsonObject(): com.sendbird.android.shadow.com.google.gson.JsonObject;
								public getAsJsonNull(): com.sendbird.android.shadow.com.google.gson.JsonNull;
								public getAsShort(): number;
								public getAsBigInteger(): java.math.BigInteger;
								public getAsByte(): number;
								public getAsCharacter(): string;
								public getAsString(): string;
								public getAsJsonArray(): com.sendbird.android.shadow.com.google.gson.JsonArray;
								public isJsonArray(): boolean;
								public getAsInt(): number;
								public isJsonPrimitive(): boolean;
								public getAsBoolean(): boolean;
								public getAsLong(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export class JsonIOException extends com.sendbird.android.shadow.com.google.gson.JsonParseException {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.JsonIOException>;
								public constructor(param0: java.lang.Throwable);
								public constructor(param0: string, param1: java.lang.Throwable);
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export class JsonNull extends com.sendbird.android.shadow.com.google.gson.JsonElement {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.JsonNull>;
								public static INSTANCE: com.sendbird.android.shadow.com.google.gson.JsonNull;
								public deepCopy(): com.sendbird.android.shadow.com.google.gson.JsonElement;
								/** @deprecated */
								public constructor();
								public deepCopy(): com.sendbird.android.shadow.com.google.gson.JsonNull;
								public equals(param0: any): boolean;
								public constructor();
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export class JsonObject extends com.sendbird.android.shadow.com.google.gson.JsonElement {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.JsonObject>;
								public deepCopy(): com.sendbird.android.shadow.com.google.gson.JsonElement;
								public add(param0: string, param1: com.sendbird.android.shadow.com.google.gson.JsonElement): void;
								public addProperty(param0: string, param1: java.lang.Boolean): void;
								public remove(param0: string): com.sendbird.android.shadow.com.google.gson.JsonElement;
								public size(): number;
								public get(param0: string): com.sendbird.android.shadow.com.google.gson.JsonElement;
								public equals(param0: any): boolean;
								public has(param0: string): boolean;
								public getAsJsonPrimitive(): com.sendbird.android.shadow.com.google.gson.JsonPrimitive;
								public constructor();
								public keySet(): java.util.Set<string>;
								public addProperty(param0: string, param1: java.lang.Number): void;
								public getAsJsonObject(): com.sendbird.android.shadow.com.google.gson.JsonObject;
								public deepCopy(): com.sendbird.android.shadow.com.google.gson.JsonObject;
								public addProperty(param0: string, param1: java.lang.Character): void;
								public getAsJsonArray(param0: string): com.sendbird.android.shadow.com.google.gson.JsonArray;
								public addProperty(param0: string, param1: string): void;
								public getAsJsonPrimitive(param0: string): com.sendbird.android.shadow.com.google.gson.JsonPrimitive;
								public getAsJsonArray(): com.sendbird.android.shadow.com.google.gson.JsonArray;
								public entrySet(): java.util.Set<java.util.Map.Entry<string,com.sendbird.android.shadow.com.google.gson.JsonElement>>;
								public hashCode(): number;
								public getAsJsonObject(param0: string): com.sendbird.android.shadow.com.google.gson.JsonObject;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export class JsonParseException {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.JsonParseException>;
								public constructor(param0: java.lang.Throwable);
								public constructor(param0: string, param1: java.lang.Throwable);
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export class JsonParser {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.JsonParser>;
								public parse(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): com.sendbird.android.shadow.com.google.gson.JsonElement;
								public constructor();
								public parse(param0: java.io.Reader): com.sendbird.android.shadow.com.google.gson.JsonElement;
								public parse(param0: string): com.sendbird.android.shadow.com.google.gson.JsonElement;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export class JsonPrimitive extends com.sendbird.android.shadow.com.google.gson.JsonElement {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.JsonPrimitive>;
								public deepCopy(): com.sendbird.android.shadow.com.google.gson.JsonElement;
								public constructor(param0: java.lang.Number);
								public isNumber(): boolean;
								public getAsBigDecimal(): java.math.BigDecimal;
								public isBoolean(): boolean;
								public getAsNumber(): java.lang.Number;
								public getAsFloat(): number;
								public getAsDouble(): number;
								public equals(param0: any): boolean;
								public constructor(param0: java.lang.Boolean);
								public constructor();
								public constructor(param0: java.lang.Character);
								public getAsShort(): number;
								public getAsBigInteger(): java.math.BigInteger;
								public isString(): boolean;
								public getAsByte(): number;
								public getAsCharacter(): string;
								public deepCopy(): com.sendbird.android.shadow.com.google.gson.JsonPrimitive;
								public getAsString(): string;
								public constructor(param0: string);
								public getAsInt(): number;
								public hashCode(): number;
								public getAsBoolean(): boolean;
								public getAsLong(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export class JsonSerializationContext {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.JsonSerializationContext>;
								/**
								 * Constructs a new instance of the com.sendbird.android.shadow.com.google.gson.JsonSerializationContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									serialize(param0: any): com.sendbird.android.shadow.com.google.gson.JsonElement;
									serialize(param0: any, param1: java.lang.reflect.Type): com.sendbird.android.shadow.com.google.gson.JsonElement;
								});
								public constructor();
								public serialize(param0: any, param1: java.lang.reflect.Type): com.sendbird.android.shadow.com.google.gson.JsonElement;
								public serialize(param0: any): com.sendbird.android.shadow.com.google.gson.JsonElement;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export class JsonSerializer<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.JsonSerializer<any>>;
								/**
								 * Constructs a new instance of the com.sendbird.android.shadow.com.google.gson.JsonSerializer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									serialize(param0: T, param1: java.lang.reflect.Type, param2: com.sendbird.android.shadow.com.google.gson.JsonSerializationContext): com.sendbird.android.shadow.com.google.gson.JsonElement;
								});
								public constructor();
								public serialize(param0: T, param1: java.lang.reflect.Type, param2: com.sendbird.android.shadow.com.google.gson.JsonSerializationContext): com.sendbird.android.shadow.com.google.gson.JsonElement;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export class JsonStreamParser extends java.util.Iterator<com.sendbird.android.shadow.com.google.gson.JsonElement> {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.JsonStreamParser>;
								public constructor(param0: string);
								public constructor(param0: java.io.Reader);
								public hasNext(): boolean;
								public next(): com.sendbird.android.shadow.com.google.gson.JsonElement;
								public remove(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export class JsonSyntaxException extends com.sendbird.android.shadow.com.google.gson.JsonParseException {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.JsonSyntaxException>;
								public constructor(param0: java.lang.Throwable);
								public constructor(param0: string, param1: java.lang.Throwable);
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export abstract class LongSerializationPolicy {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.LongSerializationPolicy>;
								public static DEFAULT: com.sendbird.android.shadow.com.google.gson.LongSerializationPolicy;
								public static STRING: com.sendbird.android.shadow.com.google.gson.LongSerializationPolicy;
								public serialize(param0: java.lang.Long): com.sendbird.android.shadow.com.google.gson.JsonElement;
								public static values(): androidNative.Array<com.sendbird.android.shadow.com.google.gson.LongSerializationPolicy>;
								public static valueOf(param0: string): com.sendbird.android.shadow.com.google.gson.LongSerializationPolicy;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export abstract class TypeAdapter<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.TypeAdapter<any>>;
								public fromJson(param0: java.io.Reader): T;
								public toJson(param0: T): string;
								public write(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter, param1: T): void;
								public nullSafe(): com.sendbird.android.shadow.com.google.gson.TypeAdapter<T>;
								public read(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): T;
								public constructor();
								public toJsonTree(param0: T): com.sendbird.android.shadow.com.google.gson.JsonElement;
								public toJson(param0: java.io.Writer, param1: T): void;
								public fromJson(param0: string): T;
								public fromJsonTree(param0: com.sendbird.android.shadow.com.google.gson.JsonElement): T;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export class TypeAdapterFactory {
								public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory>;
								/**
								 * Constructs a new instance of the com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									create(param0: com.sendbird.android.shadow.com.google.gson.Gson, param1: com.sendbird.android.shadow.com.google.gson.reflect.TypeToken<any>): com.sendbird.android.shadow.com.google.gson.TypeAdapter<any>;
								});
								public constructor();
								public create(param0: com.sendbird.android.shadow.com.google.gson.Gson, param1: com.sendbird.android.shadow.com.google.gson.reflect.TypeToken<any>): com.sendbird.android.shadow.com.google.gson.TypeAdapter<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module annotations {
								export class Expose {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.annotations.Expose>;
									/**
									 * Constructs a new instance of the com.sendbird.android.shadow.com.google.gson.annotations.Expose interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										serialize(): boolean;
										deserialize(): boolean;
									});
									public constructor();
									public deserialize(): boolean;
									public serialize(): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module annotations {
								export class JsonAdapter {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.annotations.JsonAdapter>;
									/**
									 * Constructs a new instance of the com.sendbird.android.shadow.com.google.gson.annotations.JsonAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										value(): java.lang.Class<any>;
										nullSafe(): boolean;
									});
									public constructor();
									public nullSafe(): boolean;
									public value(): java.lang.Class<any>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module annotations {
								export class SerializedName {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.annotations.SerializedName>;
									/**
									 * Constructs a new instance of the com.sendbird.android.shadow.com.google.gson.annotations.SerializedName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										value(): string;
										alternate(): androidNative.Array<string>;
									});
									public constructor();
									public alternate(): androidNative.Array<string>;
									public value(): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module annotations {
								export class Since {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.annotations.Since>;
									/**
									 * Constructs a new instance of the com.sendbird.android.shadow.com.google.gson.annotations.Since interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										value(): number;
									});
									public constructor();
									public value(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module annotations {
								export class Until {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.annotations.Until>;
									/**
									 * Constructs a new instance of the com.sendbird.android.shadow.com.google.gson.annotations.Until interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										value(): number;
									});
									public constructor();
									public value(): number;
								}
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export class ConstructorConstructor {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.ConstructorConstructor>;
									public toString(): string;
									public constructor(param0: java.util.Map<java.lang.reflect.Type,com.sendbird.android.shadow.com.google.gson.InstanceCreator<any>>);
									public get(param0: com.sendbird.android.shadow.com.google.gson.reflect.TypeToken<any>): com.sendbird.android.shadow.com.google.gson.internal.ObjectConstructor<any>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export class Excluder extends com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.Excluder>;
									public static DEFAULT: com.sendbird.android.shadow.com.google.gson.internal.Excluder;
									public constructor();
									public excludeField(param0: java.lang.reflect.Field, param1: boolean): boolean;
									public withModifiers(param0: androidNative.Array<number>): com.sendbird.android.shadow.com.google.gson.internal.Excluder;
									public excludeFieldsWithoutExposeAnnotation(): com.sendbird.android.shadow.com.google.gson.internal.Excluder;
									public withVersion(param0: number): com.sendbird.android.shadow.com.google.gson.internal.Excluder;
									public disableInnerClassSerialization(): com.sendbird.android.shadow.com.google.gson.internal.Excluder;
									public create(param0: com.sendbird.android.shadow.com.google.gson.Gson, param1: com.sendbird.android.shadow.com.google.gson.reflect.TypeToken<any>): com.sendbird.android.shadow.com.google.gson.TypeAdapter<any>;
									public withExclusionStrategy(param0: com.sendbird.android.shadow.com.google.gson.ExclusionStrategy, param1: boolean, param2: boolean): com.sendbird.android.shadow.com.google.gson.internal.Excluder;
									public excludeClass(param0: java.lang.Class<any>, param1: boolean): boolean;
									public clone(): com.sendbird.android.shadow.com.google.gson.internal.Excluder;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export class GsonBuildConfig {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.GsonBuildConfig>;
									public static VERSION: string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export class JavaVersion {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.JavaVersion>;
									public static getMajorJavaVersion(): number;
									public static isJava9OrLater(): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export abstract class JsonReaderInternalAccess {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.JsonReaderInternalAccess>;
									public static INSTANCE: com.sendbird.android.shadow.com.google.gson.internal.JsonReaderInternalAccess;
									public constructor();
									public promoteNameToValue(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export class LazilyParsedNumber {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.LazilyParsedNumber>;
									public constructor(param0: string);
									public hashCode(): number;
									public floatValue(): number;
									public intValue(): number;
									public equals(param0: any): boolean;
									public toString(): string;
									public doubleValue(): number;
									public longValue(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export class LinkedHashTreeMap<K, V>  extends java.util.AbstractMap<any,any> implements java.io.Serializable  {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.LinkedHashTreeMap<any,any>>;
									public constructor();
									public get(param0: any): any;
									public remove(param0: any): any;
									public size(): number;
									public keySet(): java.util.Set<any>;
									public containsKey(param0: any): boolean;
									public constructor(param0: java.util.Comparator<any>);
									public clear(): void;
									public put(param0: any, param1: any): any;
									public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
								}
								export module LinkedHashTreeMap {
									export class AvlBuilder<K, V>  extends java.lang.Object {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.LinkedHashTreeMap.AvlBuilder<any,any>>;
									}
									export class AvlIterator<K, V>  extends java.lang.Object {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.LinkedHashTreeMap.AvlIterator<any,any>>;
										public next(): com.sendbird.android.shadow.com.google.gson.internal.LinkedHashTreeMap.Node<K,V>;
									}
									export class EntrySet extends java.util.AbstractSet<java.util.Map.Entry<any,any>> {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.LinkedHashTreeMap.EntrySet>;
										public size(): number;
										public clear(): void;
										public remove(param0: any): boolean;
										public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
										public contains(param0: any): boolean;
									}
									export class KeySet extends java.util.AbstractSet<any> {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.LinkedHashTreeMap.KeySet>;
										public size(): number;
										public clear(): void;
										public remove(param0: any): boolean;
										public contains(param0: any): boolean;
										public iterator(): java.util.Iterator<any>;
									}
									export abstract class LinkedTreeMapIterator<T>  extends java.util.Iterator<any> {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.LinkedHashTreeMap.LinkedTreeMapIterator<any>>;
										public hasNext(): boolean;
										public remove(): void;
									}
									export class Node<K, V>  extends java.util.Map.Entry<any,any> {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.LinkedHashTreeMap.Node<any,any>>;
										public equals(param0: any): boolean;
										public last(): com.sendbird.android.shadow.com.google.gson.internal.LinkedHashTreeMap.Node<any,any>;
										public hashCode(): number;
										public first(): com.sendbird.android.shadow.com.google.gson.internal.LinkedHashTreeMap.Node<any,any>;
										public toString(): string;
										public setValue(param0: any): any;
										public getKey(): any;
										public getValue(): any;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export class LinkedTreeMap<K, V>  extends java.util.AbstractMap<any,any> implements java.io.Serializable  {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.LinkedTreeMap<any,any>>;
									public constructor();
									public get(param0: any): any;
									public remove(param0: any): any;
									public size(): number;
									public keySet(): java.util.Set<any>;
									public containsKey(param0: any): boolean;
									public constructor(param0: java.util.Comparator<any>);
									public clear(): void;
									public put(param0: any, param1: any): any;
									public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
								}
								export module LinkedTreeMap {
									export class EntrySet extends java.util.AbstractSet<java.util.Map.Entry<any,any>> {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.LinkedTreeMap.EntrySet>;
										public size(): number;
										public clear(): void;
										public remove(param0: any): boolean;
										public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
										public contains(param0: any): boolean;
									}
									export class KeySet extends java.util.AbstractSet<any> {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.LinkedTreeMap.KeySet>;
										public size(): number;
										public clear(): void;
										public remove(param0: any): boolean;
										public contains(param0: any): boolean;
										public iterator(): java.util.Iterator<any>;
									}
									export abstract class LinkedTreeMapIterator<T>  extends java.util.Iterator<any> {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.LinkedTreeMap.LinkedTreeMapIterator<any>>;
										public hasNext(): boolean;
										public remove(): void;
									}
									export class Node<K, V>  extends java.util.Map.Entry<any,any> {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.LinkedTreeMap.Node<any,any>>;
										public equals(param0: any): boolean;
										public hashCode(): number;
										public last(): com.sendbird.android.shadow.com.google.gson.internal.LinkedTreeMap.Node<any,any>;
										public toString(): string;
										public setValue(param0: any): any;
										public getKey(): any;
										public getValue(): any;
										public first(): com.sendbird.android.shadow.com.google.gson.internal.LinkedTreeMap.Node<any,any>;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export class ObjectConstructor<T>  extends java.lang.Object {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.ObjectConstructor<any>>;
									/**
									 * Constructs a new instance of the com.sendbird.android.shadow.com.google.gson.internal.ObjectConstructor<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										construct(): T;
									});
									public constructor();
									public construct(): T;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export class PreJava9DateFormatProvider {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.PreJava9DateFormatProvider>;
									public constructor();
									public static getUSDateTimeFormat(param0: number, param1: number): java.text.DateFormat;
									public static getUSDateFormat(param0: number): java.text.DateFormat;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export class Primitives {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.Primitives>;
									public static isWrapperType(param0: java.lang.reflect.Type): boolean;
									public static isPrimitive(param0: java.lang.reflect.Type): boolean;
									public static unwrap(param0: java.lang.Class): java.lang.Class;
									public static wrap(param0: java.lang.Class): java.lang.Class;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export class Streams {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.Streams>;
									public static parse(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): com.sendbird.android.shadow.com.google.gson.JsonElement;
									public static write(param0: com.sendbird.android.shadow.com.google.gson.JsonElement, param1: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter): void;
									public static writerForAppendable(param0: java.lang.Appendable): java.io.Writer;
								}
								export module Streams {
									export class AppendableWriter {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.Streams.AppendableWriter>;
										public flush(): void;
										public write(param0: number): void;
										public close(): void;
										public write(param0: androidNative.Array<string>, param1: number, param2: number): void;
									}
									export module AppendableWriter {
										export class CurrentWrite {
											public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.Streams.AppendableWriter.CurrentWrite>;
											public length(): number;
											public charAt(param0: number): string;
											public subSequence(param0: number, param1: number): string;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export abstract class UnsafeAllocator {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.UnsafeAllocator>;
									public static create(): com.sendbird.android.shadow.com.google.gson.internal.UnsafeAllocator;
									public constructor();
									public newInstance(param0: java.lang.Class): any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export module bind {
									export class ArrayTypeAdapter<E>  extends com.sendbird.android.shadow.com.google.gson.TypeAdapter<any> {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.bind.ArrayTypeAdapter<any>>;
										public static FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public read(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): any;
										public constructor(param0: com.sendbird.android.shadow.com.google.gson.Gson, param1: com.sendbird.android.shadow.com.google.gson.TypeAdapter<any>, param2: java.lang.Class<any>);
										public constructor();
										public write(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter, param1: any): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export module bind {
									export class CollectionTypeAdapterFactory extends com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.bind.CollectionTypeAdapterFactory>;
										public constructor(param0: com.sendbird.android.shadow.com.google.gson.internal.ConstructorConstructor);
										public create(param0: com.sendbird.android.shadow.com.google.gson.Gson, param1: com.sendbird.android.shadow.com.google.gson.reflect.TypeToken<any>): com.sendbird.android.shadow.com.google.gson.TypeAdapter<any>;
									}
									export module CollectionTypeAdapterFactory {
										export class Adapter<E>  extends com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.util.Collection<any>> {
											public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.bind.CollectionTypeAdapterFactory.Adapter<any>>;
											public read(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): any;
											public constructor(param0: com.sendbird.android.shadow.com.google.gson.Gson, param1: java.lang.reflect.Type, param2: com.sendbird.android.shadow.com.google.gson.TypeAdapter<any>, param3: com.sendbird.android.shadow.com.google.gson.internal.ObjectConstructor<any>);
											public write(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter, param1: java.util.Collection<any>): void;
											public read(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): java.util.Collection<any>;
											public write(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter, param1: any): void;
											public constructor();
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export module bind {
									export class DateTypeAdapter extends com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.util.Date> {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.bind.DateTypeAdapter>;
										public static FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public read(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): any;
										public read(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): java.util.Date;
										public constructor();
										public write(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter, param1: any): void;
										public write(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter, param1: java.util.Date): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export module bind {
									export class JsonAdapterAnnotationTypeAdapterFactory extends com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.bind.JsonAdapterAnnotationTypeAdapterFactory>;
										public constructor(param0: com.sendbird.android.shadow.com.google.gson.internal.ConstructorConstructor);
										public create(param0: com.sendbird.android.shadow.com.google.gson.Gson, param1: com.sendbird.android.shadow.com.google.gson.reflect.TypeToken<any>): com.sendbird.android.shadow.com.google.gson.TypeAdapter<any>;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export module bind {
									export class JsonTreeReader extends com.sendbird.android.shadow.com.google.gson.stream.JsonReader {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.bind.JsonTreeReader>;
										public hasNext(): boolean;
										public nextDouble(): number;
										public getPath(): string;
										public beginObject(): void;
										public nextLong(): number;
										public constructor(param0: com.sendbird.android.shadow.com.google.gson.JsonElement);
										public endObject(): void;
										public nextName(): string;
										public nextNull(): void;
										public constructor(param0: java.io.Reader);
										public skipValue(): void;
										public peek(): com.sendbird.android.shadow.com.google.gson.stream.JsonToken;
										public promoteNameToValue(): void;
										public nextString(): string;
										public nextBoolean(): boolean;
										public beginArray(): void;
										public toString(): string;
										public nextInt(): number;
										public close(): void;
										public endArray(): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export module bind {
									export class JsonTreeWriter extends com.sendbird.android.shadow.com.google.gson.stream.JsonWriter {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.bind.JsonTreeWriter>;
										public nullValue(): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
										public value(param0: java.lang.Boolean): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
										public constructor();
										public value(param0: java.lang.Number): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
										public value(param0: string): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
										public flush(): void;
										public beginArray(): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
										public get(): com.sendbird.android.shadow.com.google.gson.JsonElement;
										public endArray(): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
										public beginObject(): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
										public close(): void;
										public value(param0: number): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
										public name(param0: string): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
										public constructor(param0: java.io.Writer);
										public endObject(): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
										public value(param0: boolean): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export module bind {
									export class MapTypeAdapterFactory extends com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.bind.MapTypeAdapterFactory>;
										public constructor(param0: com.sendbird.android.shadow.com.google.gson.internal.ConstructorConstructor, param1: boolean);
										public create(param0: com.sendbird.android.shadow.com.google.gson.Gson, param1: com.sendbird.android.shadow.com.google.gson.reflect.TypeToken<any>): com.sendbird.android.shadow.com.google.gson.TypeAdapter<any>;
									}
									export module MapTypeAdapterFactory {
										export class Adapter<K, V>  extends com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.util.Map<any,any>> {
											public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.bind.MapTypeAdapterFactory.Adapter<any,any>>;
											public read(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): any;
											public constructor(param0: com.sendbird.android.shadow.com.google.gson.Gson, param1: java.lang.reflect.Type, param2: com.sendbird.android.shadow.com.google.gson.TypeAdapter<any>, param3: java.lang.reflect.Type, param4: com.sendbird.android.shadow.com.google.gson.TypeAdapter<any>, param5: com.sendbird.android.shadow.com.google.gson.internal.ObjectConstructor<any>);
											public write(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter, param1: any): void;
											public read(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): java.util.Map<any,any>;
											public write(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter, param1: java.util.Map<any,any>): void;
											public constructor();
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export module bind {
									export class ObjectTypeAdapter extends com.sendbird.android.shadow.com.google.gson.TypeAdapter<any> {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.bind.ObjectTypeAdapter>;
										public static FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public read(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): any;
										public write(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter, param1: any): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export module bind {
									export class ReflectiveTypeAdapterFactory extends com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.bind.ReflectiveTypeAdapterFactory>;
										public excludeField(param0: java.lang.reflect.Field, param1: boolean): boolean;
										public constructor(param0: com.sendbird.android.shadow.com.google.gson.internal.ConstructorConstructor, param1: com.sendbird.android.shadow.com.google.gson.FieldNamingStrategy, param2: com.sendbird.android.shadow.com.google.gson.internal.Excluder, param3: com.sendbird.android.shadow.com.google.gson.internal.bind.JsonAdapterAnnotationTypeAdapterFactory);
										public create(param0: com.sendbird.android.shadow.com.google.gson.Gson, param1: com.sendbird.android.shadow.com.google.gson.reflect.TypeToken<any>): com.sendbird.android.shadow.com.google.gson.TypeAdapter<any>;
									}
									export module ReflectiveTypeAdapterFactory {
										export class Adapter<T>  extends com.sendbird.android.shadow.com.google.gson.TypeAdapter<any> {
											public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.bind.ReflectiveTypeAdapterFactory.Adapter<any>>;
											public read(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): any;
											public write(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter, param1: any): void;
										}
										export abstract class BoundField {
											public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.bind.ReflectiveTypeAdapterFactory.BoundField>;
											public constructor(param0: string, param1: boolean, param2: boolean);
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export module bind {
									export class SqlDateTypeAdapter extends com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.sql.Date> {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.bind.SqlDateTypeAdapter>;
										public static FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public read(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): any;
										public read(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): java.sql.Date;
										public write(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter, param1: java.sql.Date): void;
										public constructor();
										public write(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter, param1: any): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export module bind {
									export class TimeTypeAdapter extends com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.sql.Time> {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.bind.TimeTypeAdapter>;
										public static FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public read(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): any;
										public constructor();
										public write(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter, param1: any): void;
										public read(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): java.sql.Time;
										public write(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter, param1: java.sql.Time): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export module bind {
									export class TreeTypeAdapter<T>  extends com.sendbird.android.shadow.com.google.gson.TypeAdapter<any> {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.bind.TreeTypeAdapter<any>>;
										public read(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): any;
										public static newFactory(param0: com.sendbird.android.shadow.com.google.gson.reflect.TypeToken<any>, param1: any): com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static newTypeHierarchyFactory(param0: java.lang.Class<any>, param1: any): com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public constructor();
										public constructor(param0: com.sendbird.android.shadow.com.google.gson.JsonSerializer<any>, param1: com.sendbird.android.shadow.com.google.gson.JsonDeserializer<any>, param2: com.sendbird.android.shadow.com.google.gson.Gson, param3: com.sendbird.android.shadow.com.google.gson.reflect.TypeToken<any>, param4: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory);
										public write(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter, param1: any): void;
										public static newFactoryWithMatchRawType(param0: com.sendbird.android.shadow.com.google.gson.reflect.TypeToken<any>, param1: any): com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
									}
									export module TreeTypeAdapter {
										export class GsonContextImpl implements com.sendbird.android.shadow.com.google.gson.JsonSerializationContext, com.sendbird.android.shadow.com.google.gson.JsonDeserializationContext {
											public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.bind.TreeTypeAdapter.GsonContextImpl>;
											public serialize(param0: any, param1: java.lang.reflect.Type): com.sendbird.android.shadow.com.google.gson.JsonElement;
											public serialize(param0: any): com.sendbird.android.shadow.com.google.gson.JsonElement;
											public deserialize(param0: com.sendbird.android.shadow.com.google.gson.JsonElement, param1: java.lang.reflect.Type): any;
										}
										export class SingleTypeFactory extends com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory {
											public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.bind.TreeTypeAdapter.SingleTypeFactory>;
											public create(param0: com.sendbird.android.shadow.com.google.gson.Gson, param1: com.sendbird.android.shadow.com.google.gson.reflect.TypeToken<any>): com.sendbird.android.shadow.com.google.gson.TypeAdapter<any>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export module bind {
									export class TypeAdapterRuntimeTypeWrapper<T>  extends com.sendbird.android.shadow.com.google.gson.TypeAdapter<any> {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.bind.TypeAdapterRuntimeTypeWrapper<any>>;
										public read(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): any;
										public write(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter, param1: any): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export module bind {
									export class TypeAdapters {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.bind.TypeAdapters>;
										public static CLASS: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.lang.Class>;
										public static CLASS_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static BIT_SET: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.util.BitSet>;
										public static BIT_SET_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static BOOLEAN: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.lang.Boolean>;
										public static BOOLEAN_AS_STRING: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.lang.Boolean>;
										public static BOOLEAN_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static BYTE: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.lang.Number>;
										public static BYTE_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static SHORT: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.lang.Number>;
										public static SHORT_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static INTEGER: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.lang.Number>;
										public static INTEGER_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static ATOMIC_INTEGER: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.util.concurrent.atomic.AtomicInteger>;
										public static ATOMIC_INTEGER_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static ATOMIC_BOOLEAN: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.util.concurrent.atomic.AtomicBoolean>;
										public static ATOMIC_BOOLEAN_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static ATOMIC_INTEGER_ARRAY: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.util.concurrent.atomic.AtomicIntegerArray>;
										public static ATOMIC_INTEGER_ARRAY_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static LONG: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.lang.Number>;
										public static FLOAT: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.lang.Number>;
										public static DOUBLE: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.lang.Number>;
										public static NUMBER: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.lang.Number>;
										public static NUMBER_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static CHARACTER: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.lang.Character>;
										public static CHARACTER_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static STRING: com.sendbird.android.shadow.com.google.gson.TypeAdapter<string>;
										public static BIG_DECIMAL: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.math.BigDecimal>;
										public static BIG_INTEGER: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.math.BigInteger>;
										public static STRING_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static STRING_BUILDER: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.lang.StringBuilder>;
										public static STRING_BUILDER_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static STRING_BUFFER: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.lang.StringBuffer>;
										public static STRING_BUFFER_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static URL: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.net.URL>;
										public static URL_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static URI: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.net.URI>;
										public static URI_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static INET_ADDRESS: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.net.InetAddress>;
										public static INET_ADDRESS_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static UUID: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.util.UUID>;
										public static UUID_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static CURRENCY: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.util.Currency>;
										public static CURRENCY_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static TIMESTAMP_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static CALENDAR: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.util.Calendar>;
										public static CALENDAR_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static LOCALE: com.sendbird.android.shadow.com.google.gson.TypeAdapter<java.util.Locale>;
										public static LOCALE_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static JSON_ELEMENT: com.sendbird.android.shadow.com.google.gson.TypeAdapter<com.sendbird.android.shadow.com.google.gson.JsonElement>;
										public static JSON_ELEMENT_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static ENUM_FACTORY: com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static newFactoryForMultipleTypes(param0: java.lang.Class, param1: java.lang.Class, param2: com.sendbird.android.shadow.com.google.gson.TypeAdapter<any>): com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static newTypeHierarchyFactory(param0: java.lang.Class, param1: com.sendbird.android.shadow.com.google.gson.TypeAdapter<any>): com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static newFactory(param0: java.lang.Class, param1: com.sendbird.android.shadow.com.google.gson.TypeAdapter<any>): com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static newFactory(param0: java.lang.Class, param1: java.lang.Class, param2: com.sendbird.android.shadow.com.google.gson.TypeAdapter<any>): com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
										public static newFactory(param0: com.sendbird.android.shadow.com.google.gson.reflect.TypeToken<any>, param1: com.sendbird.android.shadow.com.google.gson.TypeAdapter<any>): com.sendbird.android.shadow.com.google.gson.TypeAdapterFactory;
									}
									export module TypeAdapters {
										export class EnumTypeAdapter<T>  extends com.sendbird.android.shadow.com.google.gson.TypeAdapter<any> {
											public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.bind.TypeAdapters.EnumTypeAdapter<any>>;
											public constructor(param0: java.lang.Class<any>);
											public read(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonReader): any;
											public write(param0: com.sendbird.android.shadow.com.google.gson.stream.JsonWriter, param1: any): void;
											public constructor();
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export module bind {
									export module util {
										export class ISO8601Utils {
											public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.bind.util.ISO8601Utils>;
											public static format(param0: java.util.Date, param1: boolean): string;
											public static format(param0: java.util.Date): string;
											public static format(param0: java.util.Date, param1: boolean, param2: java.util.TimeZone): string;
											public static parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
											public constructor();
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export module reflect {
									export class PreJava9ReflectionAccessor extends com.sendbird.android.shadow.com.google.gson.internal.reflect.ReflectionAccessor {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.reflect.PreJava9ReflectionAccessor>;
										public makeAccessible(param0: java.lang.reflect.AccessibleObject): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export module reflect {
									export abstract class ReflectionAccessor {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.reflect.ReflectionAccessor>;
										public constructor();
										public makeAccessible(param0: java.lang.reflect.AccessibleObject): void;
										public static getInstance(): com.sendbird.android.shadow.com.google.gson.internal.reflect.ReflectionAccessor;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module internal {
								export module reflect {
									export class UnsafeReflectionAccessor extends com.sendbird.android.shadow.com.google.gson.internal.reflect.ReflectionAccessor {
										public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.internal.reflect.UnsafeReflectionAccessor>;
										public makeAccessible(param0: java.lang.reflect.AccessibleObject): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module reflect {
								export class TypeToken<T>  extends java.lang.Object {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.reflect.TypeToken<any>>;
									public constructor();
									public hashCode(): number;
									public static getParameterized(param0: java.lang.reflect.Type, param1: androidNative.Array<java.lang.reflect.Type>): com.sendbird.android.shadow.com.google.gson.reflect.TypeToken<any>;
									public static getArray(param0: java.lang.reflect.Type): com.sendbird.android.shadow.com.google.gson.reflect.TypeToken<any>;
									public equals(param0: any): boolean;
									public static get(param0: java.lang.Class): com.sendbird.android.shadow.com.google.gson.reflect.TypeToken<any>;
									/** @deprecated */
									public isAssignableFrom(param0: com.sendbird.android.shadow.com.google.gson.reflect.TypeToken<any>): boolean;
									public toString(): string;
									public getRawType(): java.lang.Class<any>;
									/** @deprecated */
									public isAssignableFrom(param0: java.lang.reflect.Type): boolean;
									public getType(): java.lang.reflect.Type;
									/** @deprecated */
									public isAssignableFrom(param0: java.lang.Class<any>): boolean;
									public static get(param0: java.lang.reflect.Type): com.sendbird.android.shadow.com.google.gson.reflect.TypeToken<any>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module stream {
								export class JsonReader {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.stream.JsonReader>;
									public nextInt(): number;
									public endObject(): void;
									public peek(): com.sendbird.android.shadow.com.google.gson.stream.JsonToken;
									public hasNext(): boolean;
									public close(): void;
									public setLenient(param0: boolean): void;
									public beginArray(): void;
									public beginObject(): void;
									public nextString(): string;
									public nextLong(): number;
									public toString(): string;
									public skipValue(): void;
									public endArray(): void;
									public getPath(): string;
									public isLenient(): boolean;
									public nextBoolean(): boolean;
									public nextDouble(): number;
									public constructor(param0: java.io.Reader);
									public nextName(): string;
									public nextNull(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module stream {
								export class JsonScope {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.stream.JsonScope>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module stream {
								export class JsonToken {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.stream.JsonToken>;
									public static BEGIN_ARRAY: com.sendbird.android.shadow.com.google.gson.stream.JsonToken;
									public static END_ARRAY: com.sendbird.android.shadow.com.google.gson.stream.JsonToken;
									public static BEGIN_OBJECT: com.sendbird.android.shadow.com.google.gson.stream.JsonToken;
									public static END_OBJECT: com.sendbird.android.shadow.com.google.gson.stream.JsonToken;
									public static NAME: com.sendbird.android.shadow.com.google.gson.stream.JsonToken;
									public static STRING: com.sendbird.android.shadow.com.google.gson.stream.JsonToken;
									public static NUMBER: com.sendbird.android.shadow.com.google.gson.stream.JsonToken;
									public static BOOLEAN: com.sendbird.android.shadow.com.google.gson.stream.JsonToken;
									public static NULL: com.sendbird.android.shadow.com.google.gson.stream.JsonToken;
									public static END_DOCUMENT: com.sendbird.android.shadow.com.google.gson.stream.JsonToken;
									public static values(): androidNative.Array<com.sendbird.android.shadow.com.google.gson.stream.JsonToken>;
									public static valueOf(param0: string): com.sendbird.android.shadow.com.google.gson.stream.JsonToken;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module stream {
								export class JsonWriter {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.stream.JsonWriter>;
									public jsonValue(param0: string): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
									public getSerializeNulls(): boolean;
									public close(): void;
									public nullValue(): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
									public setLenient(param0: boolean): void;
									public constructor(param0: java.io.Writer);
									public name(param0: string): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
									public value(param0: java.lang.Number): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
									public endArray(): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
									public isLenient(): boolean;
									public value(param0: java.lang.Boolean): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
									public beginObject(): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
									public endObject(): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
									public value(param0: string): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
									public setIndent(param0: string): void;
									public beginArray(): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
									public value(param0: number): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
									public isHtmlSafe(): boolean;
									public value(param0: boolean): com.sendbird.android.shadow.com.google.gson.stream.JsonWriter;
									public setHtmlSafe(param0: boolean): void;
									public setSerializeNulls(param0: boolean): void;
									public flush(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module com {
					export module google {
						export module gson {
							export module stream {
								export class MalformedJsonException {
									public static class: java.lang.Class<com.sendbird.android.shadow.com.google.gson.stream.MalformedJsonException>;
									public constructor(param0: java.lang.Throwable);
									public constructor(param0: string);
									public constructor(param0: string, param1: java.lang.Throwable);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class Address {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Address>;
						public url(): com.sendbird.android.shadow.okhttp3.HttpUrl;
						public proxy(): java.net.Proxy;
						public protocols(): java.util.List<com.sendbird.android.shadow.okhttp3.Protocol>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public connectionSpecs(): java.util.List<com.sendbird.android.shadow.okhttp3.ConnectionSpec>;
						public certificatePinner(): com.sendbird.android.shadow.okhttp3.CertificatePinner;
						public toString(): string;
						public proxyAuthenticator(): com.sendbird.android.shadow.okhttp3.Authenticator;
						public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
						public constructor(param0: string, param1: number, param2: com.sendbird.android.shadow.okhttp3.Dns, param3: javax.net.SocketFactory, param4: javax.net.ssl.SSLSocketFactory, param5: javax.net.ssl.HostnameVerifier, param6: com.sendbird.android.shadow.okhttp3.CertificatePinner, param7: com.sendbird.android.shadow.okhttp3.Authenticator, param8: java.net.Proxy, param9: java.util.List<com.sendbird.android.shadow.okhttp3.Protocol>, param10: java.util.List<com.sendbird.android.shadow.okhttp3.ConnectionSpec>, param11: java.net.ProxySelector);
						public proxySelector(): java.net.ProxySelector;
						public socketFactory(): javax.net.SocketFactory;
						public dns(): com.sendbird.android.shadow.okhttp3.Dns;
						public hostnameVerifier(): javax.net.ssl.HostnameVerifier;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class Authenticator {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Authenticator>;
						/**
						 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.Authenticator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							authenticate(param0: com.sendbird.android.shadow.okhttp3.Route, param1: com.sendbird.android.shadow.okhttp3.Response): com.sendbird.android.shadow.okhttp3.Request;
							<clinit>(): void;
						});
						public constructor();
						public static NONE: com.sendbird.android.shadow.okhttp3.Authenticator;
						public authenticate(param0: com.sendbird.android.shadow.okhttp3.Route, param1: com.sendbird.android.shadow.okhttp3.Response): com.sendbird.android.shadow.okhttp3.Request;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class Cache {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Cache>;
						public constructor(param0: java.io.File, param1: number);
						public delete(): void;
						public close(): void;
						public flush(): void;
						public requestCount(): number;
						public isClosed(): boolean;
						public directory(): java.io.File;
						public static key(param0: com.sendbird.android.shadow.okhttp3.HttpUrl): string;
						public writeAbortCount(): number;
						public initialize(): void;
						public urls(): java.util.Iterator<string>;
						public maxSize(): number;
						public networkCount(): number;
						public writeSuccessCount(): number;
						public size(): number;
						public hitCount(): number;
						public evictAll(): void;
					}
					export module Cache {
						export class CacheRequestImpl extends com.sendbird.android.shadow.okhttp3.internal.cache.CacheRequest {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Cache.CacheRequestImpl>;
							public body(): com.sendbird.android.shadow.okio.Sink;
							public abort(): void;
						}
						export class CacheResponseBody extends com.sendbird.android.shadow.okhttp3.ResponseBody {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Cache.CacheResponseBody>;
							public contentType(): com.sendbird.android.shadow.okhttp3.MediaType;
							public source(): com.sendbird.android.shadow.okio.BufferedSource;
							public contentLength(): number;
						}
						export class Entry {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Cache.Entry>;
							public matches(param0: com.sendbird.android.shadow.okhttp3.Request, param1: com.sendbird.android.shadow.okhttp3.Response): boolean;
							public writeTo(param0: com.sendbird.android.shadow.okhttp3.internal.cache.DiskLruCache.Editor): void;
							public response(param0: com.sendbird.android.shadow.okhttp3.internal.cache.DiskLruCache.Snapshot): com.sendbird.android.shadow.okhttp3.Response;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class CacheControl {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.CacheControl>;
						public static FORCE_NETWORK: com.sendbird.android.shadow.okhttp3.CacheControl;
						public static FORCE_CACHE: com.sendbird.android.shadow.okhttp3.CacheControl;
						public isPublic(): boolean;
						public minFreshSeconds(): number;
						public maxAgeSeconds(): number;
						public isPrivate(): boolean;
						public sMaxAgeSeconds(): number;
						public static parse(param0: com.sendbird.android.shadow.okhttp3.Headers): com.sendbird.android.shadow.okhttp3.CacheControl;
						public noTransform(): boolean;
						public toString(): string;
						public maxStaleSeconds(): number;
						public onlyIfCached(): boolean;
						public immutable(): boolean;
						public mustRevalidate(): boolean;
						public noStore(): boolean;
						public noCache(): boolean;
					}
					export module CacheControl {
						export class Builder {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.CacheControl.Builder>;
							public constructor();
							public maxAge(param0: number, param1: java.util.concurrent.TimeUnit): com.sendbird.android.shadow.okhttp3.CacheControl.Builder;
							public noCache(): com.sendbird.android.shadow.okhttp3.CacheControl.Builder;
							public noStore(): com.sendbird.android.shadow.okhttp3.CacheControl.Builder;
							public maxStale(param0: number, param1: java.util.concurrent.TimeUnit): com.sendbird.android.shadow.okhttp3.CacheControl.Builder;
							public onlyIfCached(): com.sendbird.android.shadow.okhttp3.CacheControl.Builder;
							public build(): com.sendbird.android.shadow.okhttp3.CacheControl;
							public minFresh(param0: number, param1: java.util.concurrent.TimeUnit): com.sendbird.android.shadow.okhttp3.CacheControl.Builder;
							public noTransform(): com.sendbird.android.shadow.okhttp3.CacheControl.Builder;
							public immutable(): com.sendbird.android.shadow.okhttp3.CacheControl.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class Call {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Call>;
						/**
						 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.Call interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							request(): com.sendbird.android.shadow.okhttp3.Request;
							execute(): com.sendbird.android.shadow.okhttp3.Response;
							enqueue(param0: com.sendbird.android.shadow.okhttp3.Callback): void;
							cancel(): void;
							isExecuted(): boolean;
							isCanceled(): boolean;
							timeout(): com.sendbird.android.shadow.okio.Timeout;
							clone(): com.sendbird.android.shadow.okhttp3.Call;
						});
						public constructor();
						public execute(): com.sendbird.android.shadow.okhttp3.Response;
						public cancel(): void;
						public isCanceled(): boolean;
						public request(): com.sendbird.android.shadow.okhttp3.Request;
						public isExecuted(): boolean;
						public enqueue(param0: com.sendbird.android.shadow.okhttp3.Callback): void;
						public clone(): com.sendbird.android.shadow.okhttp3.Call;
						public timeout(): com.sendbird.android.shadow.okio.Timeout;
					}
					export module Call {
						export class Factory {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Call.Factory>;
							/**
							 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.Call$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								newCall(param0: com.sendbird.android.shadow.okhttp3.Request): com.sendbird.android.shadow.okhttp3.Call;
							});
							public constructor();
							public newCall(param0: com.sendbird.android.shadow.okhttp3.Request): com.sendbird.android.shadow.okhttp3.Call;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class Callback {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Callback>;
						/**
						 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFailure(param0: com.sendbird.android.shadow.okhttp3.Call, param1: java.io.IOException): void;
							onResponse(param0: com.sendbird.android.shadow.okhttp3.Call, param1: com.sendbird.android.shadow.okhttp3.Response): void;
						});
						public constructor();
						public onResponse(param0: com.sendbird.android.shadow.okhttp3.Call, param1: com.sendbird.android.shadow.okhttp3.Response): void;
						public onFailure(param0: com.sendbird.android.shadow.okhttp3.Call, param1: java.io.IOException): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class CertificatePinner {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.CertificatePinner>;
						public static DEFAULT: com.sendbird.android.shadow.okhttp3.CertificatePinner;
						public static pin(param0: java.security.cert.Certificate): string;
						public check(param0: string, param1: java.util.List<java.security.cert.Certificate>): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						/** @deprecated */
						public check(param0: string, param1: androidNative.Array<java.security.cert.Certificate>): void;
					}
					export module CertificatePinner {
						export class Builder {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.CertificatePinner.Builder>;
							public constructor();
							public add(param0: string, param1: androidNative.Array<string>): com.sendbird.android.shadow.okhttp3.CertificatePinner.Builder;
							public build(): com.sendbird.android.shadow.okhttp3.CertificatePinner;
						}
						export class Pin {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.CertificatePinner.Pin>;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class Challenge {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Challenge>;
						public realm(): string;
						public scheme(): string;
						public charset(): java.nio.charset.Charset;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public authParams(): java.util.Map<string,string>;
						public constructor(param0: string, param1: string);
						public constructor(param0: string, param1: java.util.Map<string,string>);
						public toString(): string;
						public withCharset(param0: java.nio.charset.Charset): com.sendbird.android.shadow.okhttp3.Challenge;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class CipherSuite {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.CipherSuite>;
						public static TLS_RSA_WITH_NULL_MD5: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_RSA_WITH_NULL_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_RSA_EXPORT_WITH_RC4_40_MD5: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_RSA_WITH_RC4_128_MD5: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_RSA_WITH_RC4_128_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_RSA_EXPORT_WITH_DES40_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_RSA_WITH_DES_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_RSA_WITH_3DES_EDE_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_DSS_WITH_DES_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_RSA_WITH_DES_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DH_anon_EXPORT_WITH_RC4_40_MD5: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DH_anon_WITH_RC4_128_MD5: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DH_anon_EXPORT_WITH_DES40_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DH_anon_WITH_DES_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DH_anon_WITH_3DES_EDE_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_KRB5_WITH_DES_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_KRB5_WITH_3DES_EDE_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_KRB5_WITH_RC4_128_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_KRB5_WITH_DES_CBC_MD5: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_KRB5_WITH_3DES_EDE_CBC_MD5: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_KRB5_WITH_RC4_128_MD5: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_KRB5_EXPORT_WITH_DES_CBC_40_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_KRB5_EXPORT_WITH_RC4_40_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_KRB5_EXPORT_WITH_DES_CBC_40_MD5: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_KRB5_EXPORT_WITH_RC4_40_MD5: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_RSA_WITH_AES_128_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_DSS_WITH_AES_128_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_RSA_WITH_AES_128_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DH_anon_WITH_AES_128_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_RSA_WITH_AES_256_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_DSS_WITH_AES_256_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_RSA_WITH_AES_256_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DH_anon_WITH_AES_256_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_RSA_WITH_NULL_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_RSA_WITH_AES_128_CBC_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_RSA_WITH_AES_256_CBC_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_DSS_WITH_AES_128_CBC_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_RSA_WITH_CAMELLIA_128_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_RSA_WITH_AES_128_CBC_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_DSS_WITH_AES_256_CBC_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_RSA_WITH_AES_256_CBC_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DH_anon_WITH_AES_128_CBC_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DH_anon_WITH_AES_256_CBC_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_RSA_WITH_CAMELLIA_256_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_PSK_WITH_RC4_128_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_PSK_WITH_3DES_EDE_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_PSK_WITH_AES_128_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_PSK_WITH_AES_256_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_RSA_WITH_SEED_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_RSA_WITH_AES_128_GCM_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_RSA_WITH_AES_256_GCM_SHA384: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_RSA_WITH_AES_128_GCM_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_RSA_WITH_AES_256_GCM_SHA384: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_DSS_WITH_AES_128_GCM_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_DSS_WITH_AES_256_GCM_SHA384: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DH_anon_WITH_AES_128_GCM_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DH_anon_WITH_AES_256_GCM_SHA384: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_EMPTY_RENEGOTIATION_INFO_SCSV: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_FALLBACK_SCSV: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_ECDSA_WITH_NULL_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_ECDSA_WITH_RC4_128_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_ECDSA_WITH_NULL_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_ECDSA_WITH_RC4_128_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_RSA_WITH_NULL_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_RSA_WITH_RC4_128_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_RSA_WITH_AES_128_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_RSA_WITH_AES_256_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_RSA_WITH_NULL_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_RSA_WITH_RC4_128_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_anon_WITH_NULL_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_anon_WITH_RC4_128_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_anon_WITH_AES_128_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_anon_WITH_AES_256_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_ECDHE_PSK_WITH_CHACHA20_POLY1305_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_AES_128_GCM_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_AES_256_GCM_SHA384: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_CHACHA20_POLY1305_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_AES_128_CCM_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static TLS_AES_256_CCM_8_SHA256: com.sendbird.android.shadow.okhttp3.CipherSuite;
						public static forJavaName(param0: string): com.sendbird.android.shadow.okhttp3.CipherSuite;
						public javaName(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class Connection {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Connection>;
						/**
						 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.Connection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							route(): com.sendbird.android.shadow.okhttp3.Route;
							socket(): java.net.Socket;
							handshake(): com.sendbird.android.shadow.okhttp3.Handshake;
							protocol(): com.sendbird.android.shadow.okhttp3.Protocol;
						});
						public constructor();
						public protocol(): com.sendbird.android.shadow.okhttp3.Protocol;
						public handshake(): com.sendbird.android.shadow.okhttp3.Handshake;
						public route(): com.sendbird.android.shadow.okhttp3.Route;
						public socket(): java.net.Socket;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class ConnectionPool {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.ConnectionPool>;
						public constructor();
						public connectionCount(): number;
						public constructor(param0: number, param1: number, param2: java.util.concurrent.TimeUnit);
						public evictAll(): void;
						public idleConnectionCount(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class ConnectionSpec {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.ConnectionSpec>;
						public static RESTRICTED_TLS: com.sendbird.android.shadow.okhttp3.ConnectionSpec;
						public static MODERN_TLS: com.sendbird.android.shadow.okhttp3.ConnectionSpec;
						public static COMPATIBLE_TLS: com.sendbird.android.shadow.okhttp3.ConnectionSpec;
						public static CLEARTEXT: com.sendbird.android.shadow.okhttp3.ConnectionSpec;
						public supportsTlsExtensions(): boolean;
						public isTls(): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public tlsVersions(): java.util.List<com.sendbird.android.shadow.okhttp3.TlsVersion>;
						public isCompatible(param0: javax.net.ssl.SSLSocket): boolean;
						public toString(): string;
						public cipherSuites(): java.util.List<com.sendbird.android.shadow.okhttp3.CipherSuite>;
					}
					export module ConnectionSpec {
						export class Builder {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.ConnectionSpec.Builder>;
							public constructor(param0: com.sendbird.android.shadow.okhttp3.ConnectionSpec);
							public cipherSuites(param0: androidNative.Array<string>): com.sendbird.android.shadow.okhttp3.ConnectionSpec.Builder;
							public tlsVersions(param0: androidNative.Array<string>): com.sendbird.android.shadow.okhttp3.ConnectionSpec.Builder;
							public build(): com.sendbird.android.shadow.okhttp3.ConnectionSpec;
							public cipherSuites(param0: androidNative.Array<com.sendbird.android.shadow.okhttp3.CipherSuite>): com.sendbird.android.shadow.okhttp3.ConnectionSpec.Builder;
							public allEnabledTlsVersions(): com.sendbird.android.shadow.okhttp3.ConnectionSpec.Builder;
							public supportsTlsExtensions(param0: boolean): com.sendbird.android.shadow.okhttp3.ConnectionSpec.Builder;
							public allEnabledCipherSuites(): com.sendbird.android.shadow.okhttp3.ConnectionSpec.Builder;
							public tlsVersions(param0: androidNative.Array<com.sendbird.android.shadow.okhttp3.TlsVersion>): com.sendbird.android.shadow.okhttp3.ConnectionSpec.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class Cookie {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Cookie>;
						public path(): string;
						public persistent(): boolean;
						public expiresAt(): number;
						public name(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public matches(param0: com.sendbird.android.shadow.okhttp3.HttpUrl): boolean;
						public static parseAll(param0: com.sendbird.android.shadow.okhttp3.HttpUrl, param1: com.sendbird.android.shadow.okhttp3.Headers): java.util.List<com.sendbird.android.shadow.okhttp3.Cookie>;
						public toString(): string;
						public value(): string;
						public static parse(param0: com.sendbird.android.shadow.okhttp3.HttpUrl, param1: string): com.sendbird.android.shadow.okhttp3.Cookie;
						public domain(): string;
						public secure(): boolean;
						public hostOnly(): boolean;
						public httpOnly(): boolean;
					}
					export module Cookie {
						export class Builder {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Cookie.Builder>;
							public constructor();
							public name(param0: string): com.sendbird.android.shadow.okhttp3.Cookie.Builder;
							public httpOnly(): com.sendbird.android.shadow.okhttp3.Cookie.Builder;
							public expiresAt(param0: number): com.sendbird.android.shadow.okhttp3.Cookie.Builder;
							public hostOnlyDomain(param0: string): com.sendbird.android.shadow.okhttp3.Cookie.Builder;
							public secure(): com.sendbird.android.shadow.okhttp3.Cookie.Builder;
							public domain(param0: string): com.sendbird.android.shadow.okhttp3.Cookie.Builder;
							public value(param0: string): com.sendbird.android.shadow.okhttp3.Cookie.Builder;
							public path(param0: string): com.sendbird.android.shadow.okhttp3.Cookie.Builder;
							public build(): com.sendbird.android.shadow.okhttp3.Cookie;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class CookieJar {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.CookieJar>;
						/**
						 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.CookieJar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							saveFromResponse(param0: com.sendbird.android.shadow.okhttp3.HttpUrl, param1: java.util.List<com.sendbird.android.shadow.okhttp3.Cookie>): void;
							loadForRequest(param0: com.sendbird.android.shadow.okhttp3.HttpUrl): java.util.List<com.sendbird.android.shadow.okhttp3.Cookie>;
							<clinit>(): void;
						});
						public constructor();
						public static NO_COOKIES: com.sendbird.android.shadow.okhttp3.CookieJar;
						public saveFromResponse(param0: com.sendbird.android.shadow.okhttp3.HttpUrl, param1: java.util.List<com.sendbird.android.shadow.okhttp3.Cookie>): void;
						public loadForRequest(param0: com.sendbird.android.shadow.okhttp3.HttpUrl): java.util.List<com.sendbird.android.shadow.okhttp3.Cookie>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class Credentials {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Credentials>;
						public static basic(param0: string, param1: string): string;
						public static basic(param0: string, param1: string, param2: java.nio.charset.Charset): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class Dispatcher {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Dispatcher>;
						public executorService(): java.util.concurrent.ExecutorService;
						public runningCalls(): java.util.List<com.sendbird.android.shadow.okhttp3.Call>;
						public constructor();
						public queuedCallsCount(): number;
						public getMaxRequestsPerHost(): number;
						public setIdleCallback(param0: java.lang.Runnable): void;
						public getMaxRequests(): number;
						public runningCallsCount(): number;
						public setMaxRequests(param0: number): void;
						public queuedCalls(): java.util.List<com.sendbird.android.shadow.okhttp3.Call>;
						public cancelAll(): void;
						public constructor(param0: java.util.concurrent.ExecutorService);
						public setMaxRequestsPerHost(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class Dns {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Dns>;
						/**
						 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.Dns interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							lookup(param0: string): java.util.List<java.net.InetAddress>;
							<clinit>(): void;
						});
						public constructor();
						public static SYSTEM: com.sendbird.android.shadow.okhttp3.Dns;
						public lookup(param0: string): java.util.List<java.net.InetAddress>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export abstract class EventListener {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.EventListener>;
						public static NONE: com.sendbird.android.shadow.okhttp3.EventListener;
						public callStart(param0: com.sendbird.android.shadow.okhttp3.Call): void;
						public constructor();
						public connectStart(param0: com.sendbird.android.shadow.okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy): void;
						public requestBodyStart(param0: com.sendbird.android.shadow.okhttp3.Call): void;
						public connectEnd(param0: com.sendbird.android.shadow.okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy, param3: com.sendbird.android.shadow.okhttp3.Protocol): void;
						public requestHeadersStart(param0: com.sendbird.android.shadow.okhttp3.Call): void;
						public dnsStart(param0: com.sendbird.android.shadow.okhttp3.Call, param1: string): void;
						public dnsEnd(param0: com.sendbird.android.shadow.okhttp3.Call, param1: string, param2: java.util.List<java.net.InetAddress>): void;
						public secureConnectEnd(param0: com.sendbird.android.shadow.okhttp3.Call, param1: com.sendbird.android.shadow.okhttp3.Handshake): void;
						public callEnd(param0: com.sendbird.android.shadow.okhttp3.Call): void;
						public responseHeadersEnd(param0: com.sendbird.android.shadow.okhttp3.Call, param1: com.sendbird.android.shadow.okhttp3.Response): void;
						public responseHeadersStart(param0: com.sendbird.android.shadow.okhttp3.Call): void;
						public secureConnectStart(param0: com.sendbird.android.shadow.okhttp3.Call): void;
						public connectionAcquired(param0: com.sendbird.android.shadow.okhttp3.Call, param1: com.sendbird.android.shadow.okhttp3.Connection): void;
						public callFailed(param0: com.sendbird.android.shadow.okhttp3.Call, param1: java.io.IOException): void;
						public responseBodyStart(param0: com.sendbird.android.shadow.okhttp3.Call): void;
						public connectionReleased(param0: com.sendbird.android.shadow.okhttp3.Call, param1: com.sendbird.android.shadow.okhttp3.Connection): void;
						public requestBodyEnd(param0: com.sendbird.android.shadow.okhttp3.Call, param1: number): void;
						public responseBodyEnd(param0: com.sendbird.android.shadow.okhttp3.Call, param1: number): void;
						public connectFailed(param0: com.sendbird.android.shadow.okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy, param3: com.sendbird.android.shadow.okhttp3.Protocol, param4: java.io.IOException): void;
						public requestHeadersEnd(param0: com.sendbird.android.shadow.okhttp3.Call, param1: com.sendbird.android.shadow.okhttp3.Request): void;
					}
					export module EventListener {
						export class Factory {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.EventListener.Factory>;
							/**
							 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.EventListener$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								create(param0: com.sendbird.android.shadow.okhttp3.Call): com.sendbird.android.shadow.okhttp3.EventListener;
							});
							public constructor();
							public create(param0: com.sendbird.android.shadow.okhttp3.Call): com.sendbird.android.shadow.okhttp3.EventListener;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class FormBody extends com.sendbird.android.shadow.okhttp3.RequestBody {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.FormBody>;
						public writeTo(param0: com.sendbird.android.shadow.okio.BufferedSink): void;
						public contentLength(): number;
						public encodedValue(param0: number): string;
						public size(): number;
						public encodedName(param0: number): string;
						public name(param0: number): string;
						public value(param0: number): string;
						public contentType(): com.sendbird.android.shadow.okhttp3.MediaType;
					}
					export module FormBody {
						export class Builder {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.FormBody.Builder>;
							public constructor();
							public build(): com.sendbird.android.shadow.okhttp3.FormBody;
							public constructor(param0: java.nio.charset.Charset);
							public addEncoded(param0: string, param1: string): com.sendbird.android.shadow.okhttp3.FormBody.Builder;
							public add(param0: string, param1: string): com.sendbird.android.shadow.okhttp3.FormBody.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class Handshake {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Handshake>;
						public static get(param0: javax.net.ssl.SSLSession): com.sendbird.android.shadow.okhttp3.Handshake;
						public static get(param0: com.sendbird.android.shadow.okhttp3.TlsVersion, param1: com.sendbird.android.shadow.okhttp3.CipherSuite, param2: java.util.List<java.security.cert.Certificate>, param3: java.util.List<java.security.cert.Certificate>): com.sendbird.android.shadow.okhttp3.Handshake;
						public tlsVersion(): com.sendbird.android.shadow.okhttp3.TlsVersion;
						public localPrincipal(): java.security.Principal;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public localCertificates(): java.util.List<java.security.cert.Certificate>;
						public peerPrincipal(): java.security.Principal;
						public cipherSuite(): com.sendbird.android.shadow.okhttp3.CipherSuite;
						public peerCertificates(): java.util.List<java.security.cert.Certificate>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class Headers {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Headers>;
						public names(): java.util.Set<string>;
						public values(param0: string): java.util.List<string>;
						public getDate(param0: string): java.util.Date;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toMultimap(): java.util.Map<string,java.util.List<string>>;
						public static of(param0: androidNative.Array<string>): com.sendbird.android.shadow.okhttp3.Headers;
						public toString(): string;
						public byteCount(): number;
						public get(param0: string): string;
						public static of(param0: java.util.Map<string,string>): com.sendbird.android.shadow.okhttp3.Headers;
						public size(): number;
						public newBuilder(): com.sendbird.android.shadow.okhttp3.Headers.Builder;
						public name(param0: number): string;
						public value(param0: number): string;
					}
					export module Headers {
						export class Builder {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Headers.Builder>;
							public constructor();
							public addUnsafeNonAscii(param0: string, param1: string): com.sendbird.android.shadow.okhttp3.Headers.Builder;
							public add(param0: string, param1: java.util.Date): com.sendbird.android.shadow.okhttp3.Headers.Builder;
							public removeAll(param0: string): com.sendbird.android.shadow.okhttp3.Headers.Builder;
							public build(): com.sendbird.android.shadow.okhttp3.Headers;
							public addAll(param0: com.sendbird.android.shadow.okhttp3.Headers): com.sendbird.android.shadow.okhttp3.Headers.Builder;
							public get(param0: string): string;
							public set(param0: string, param1: java.util.Date): com.sendbird.android.shadow.okhttp3.Headers.Builder;
							public set(param0: string, param1: string): com.sendbird.android.shadow.okhttp3.Headers.Builder;
							public add(param0: string): com.sendbird.android.shadow.okhttp3.Headers.Builder;
							public add(param0: string, param1: string): com.sendbird.android.shadow.okhttp3.Headers.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class HttpUrl {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.HttpUrl>;
						public encodedPassword(): string;
						public queryParameterValues(param0: string): java.util.List<string>;
						public newBuilder(param0: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public static parse(param0: string): com.sendbird.android.shadow.okhttp3.HttpUrl;
						public encodedQuery(): string;
						public static get(param0: java.net.URL): com.sendbird.android.shadow.okhttp3.HttpUrl;
						public scheme(): string;
						public port(): number;
						public static get(param0: java.net.URI): com.sendbird.android.shadow.okhttp3.HttpUrl;
						public uri(): java.net.URI;
						public password(): string;
						public isHttps(): boolean;
						public encodedFragment(): string;
						public pathSize(): number;
						public static defaultPort(param0: string): number;
						public queryParameter(param0: string): string;
						public encodedUsername(): string;
						public encodedPath(): string;
						public queryParameterNames(): java.util.Set<string>;
						public newBuilder(): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
						public fragment(): string;
						public topPrivateDomain(): string;
						public queryParameterValue(param0: number): string;
						public queryParameterName(param0: number): string;
						public static get(param0: string): com.sendbird.android.shadow.okhttp3.HttpUrl;
						public toString(): string;
						public url(): java.net.URL;
						public querySize(): number;
						public encodedPathSegments(): java.util.List<string>;
						public pathSegments(): java.util.List<string>;
						public host(): string;
						public resolve(param0: string): com.sendbird.android.shadow.okhttp3.HttpUrl;
						public username(): string;
						public query(): string;
						public redact(): string;
					}
					export module HttpUrl {
						export class Builder {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.HttpUrl.Builder>;
							public setPathSegment(param0: number, param1: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public password(param0: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public addPathSegment(param0: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public addEncodedPathSegment(param0: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public toString(): string;
							public setEncodedPathSegment(param0: number, param1: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public setQueryParameter(param0: string, param1: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public build(): com.sendbird.android.shadow.okhttp3.HttpUrl;
							public setEncodedQueryParameter(param0: string, param1: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public encodedFragment(param0: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public fragment(param0: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public host(param0: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public encodedPath(param0: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public addEncodedPathSegments(param0: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public constructor();
							public encodedQuery(param0: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public port(param0: number): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public removeAllEncodedQueryParameters(param0: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public encodedPassword(param0: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public addEncodedQueryParameter(param0: string, param1: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public removePathSegment(param0: number): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public scheme(param0: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public encodedUsername(param0: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public username(param0: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public addPathSegments(param0: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public addQueryParameter(param0: string, param1: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public removeAllQueryParameters(param0: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
							public query(param0: string): com.sendbird.android.shadow.okhttp3.HttpUrl.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class Interceptor {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Interceptor>;
						/**
						 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.Interceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							intercept(param0: com.sendbird.android.shadow.okhttp3.Interceptor.Chain): com.sendbird.android.shadow.okhttp3.Response;
						});
						public constructor();
						public intercept(param0: com.sendbird.android.shadow.okhttp3.Interceptor.Chain): com.sendbird.android.shadow.okhttp3.Response;
					}
					export module Interceptor {
						export class Chain {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Interceptor.Chain>;
							/**
							 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.Interceptor$Chain interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								request(): com.sendbird.android.shadow.okhttp3.Request;
								proceed(param0: com.sendbird.android.shadow.okhttp3.Request): com.sendbird.android.shadow.okhttp3.Response;
								connection(): com.sendbird.android.shadow.okhttp3.Connection;
								call(): com.sendbird.android.shadow.okhttp3.Call;
								connectTimeoutMillis(): number;
								withConnectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): com.sendbird.android.shadow.okhttp3.Interceptor.Chain;
								readTimeoutMillis(): number;
								withReadTimeout(param0: number, param1: java.util.concurrent.TimeUnit): com.sendbird.android.shadow.okhttp3.Interceptor.Chain;
								writeTimeoutMillis(): number;
								withWriteTimeout(param0: number, param1: java.util.concurrent.TimeUnit): com.sendbird.android.shadow.okhttp3.Interceptor.Chain;
							});
							public constructor();
							public connectTimeoutMillis(): number;
							public writeTimeoutMillis(): number;
							public connection(): com.sendbird.android.shadow.okhttp3.Connection;
							public proceed(param0: com.sendbird.android.shadow.okhttp3.Request): com.sendbird.android.shadow.okhttp3.Response;
							public withConnectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): com.sendbird.android.shadow.okhttp3.Interceptor.Chain;
							public readTimeoutMillis(): number;
							public request(): com.sendbird.android.shadow.okhttp3.Request;
							public withReadTimeout(param0: number, param1: java.util.concurrent.TimeUnit): com.sendbird.android.shadow.okhttp3.Interceptor.Chain;
							public call(): com.sendbird.android.shadow.okhttp3.Call;
							public withWriteTimeout(param0: number, param1: java.util.concurrent.TimeUnit): com.sendbird.android.shadow.okhttp3.Interceptor.Chain;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class MediaType {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.MediaType>;
						public static parse(param0: string): com.sendbird.android.shadow.okhttp3.MediaType;
						public charset(): java.nio.charset.Charset;
						public charset(param0: java.nio.charset.Charset): java.nio.charset.Charset;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public static get(param0: string): com.sendbird.android.shadow.okhttp3.MediaType;
						public subtype(): string;
						public toString(): string;
						public type(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class MultipartBody extends com.sendbird.android.shadow.okhttp3.RequestBody {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.MultipartBody>;
						public static MIXED: com.sendbird.android.shadow.okhttp3.MediaType;
						public static ALTERNATIVE: com.sendbird.android.shadow.okhttp3.MediaType;
						public static DIGEST: com.sendbird.android.shadow.okhttp3.MediaType;
						public static PARALLEL: com.sendbird.android.shadow.okhttp3.MediaType;
						public static FORM: com.sendbird.android.shadow.okhttp3.MediaType;
						public boundary(): string;
						public type(): com.sendbird.android.shadow.okhttp3.MediaType;
						public part(param0: number): com.sendbird.android.shadow.okhttp3.MultipartBody.Part;
						public writeTo(param0: com.sendbird.android.shadow.okio.BufferedSink): void;
						public contentLength(): number;
						public size(): number;
						public contentType(): com.sendbird.android.shadow.okhttp3.MediaType;
						public parts(): java.util.List<com.sendbird.android.shadow.okhttp3.MultipartBody.Part>;
					}
					export module MultipartBody {
						export class Builder {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.MultipartBody.Builder>;
							public constructor();
							public addFormDataPart(param0: string, param1: string, param2: com.sendbird.android.shadow.okhttp3.RequestBody): com.sendbird.android.shadow.okhttp3.MultipartBody.Builder;
							public addPart(param0: com.sendbird.android.shadow.okhttp3.RequestBody): com.sendbird.android.shadow.okhttp3.MultipartBody.Builder;
							public constructor(param0: string);
							public setType(param0: com.sendbird.android.shadow.okhttp3.MediaType): com.sendbird.android.shadow.okhttp3.MultipartBody.Builder;
							public addFormDataPart(param0: string, param1: string): com.sendbird.android.shadow.okhttp3.MultipartBody.Builder;
							public build(): com.sendbird.android.shadow.okhttp3.MultipartBody;
							public addPart(param0: com.sendbird.android.shadow.okhttp3.Headers, param1: com.sendbird.android.shadow.okhttp3.RequestBody): com.sendbird.android.shadow.okhttp3.MultipartBody.Builder;
							public addPart(param0: com.sendbird.android.shadow.okhttp3.MultipartBody.Part): com.sendbird.android.shadow.okhttp3.MultipartBody.Builder;
						}
						export class Part {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.MultipartBody.Part>;
							public body(): com.sendbird.android.shadow.okhttp3.RequestBody;
							public static create(param0: com.sendbird.android.shadow.okhttp3.RequestBody): com.sendbird.android.shadow.okhttp3.MultipartBody.Part;
							public headers(): com.sendbird.android.shadow.okhttp3.Headers;
							public static create(param0: com.sendbird.android.shadow.okhttp3.Headers, param1: com.sendbird.android.shadow.okhttp3.RequestBody): com.sendbird.android.shadow.okhttp3.MultipartBody.Part;
							public static createFormData(param0: string, param1: string): com.sendbird.android.shadow.okhttp3.MultipartBody.Part;
							public static createFormData(param0: string, param1: string, param2: com.sendbird.android.shadow.okhttp3.RequestBody): com.sendbird.android.shadow.okhttp3.MultipartBody.Part;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class OkHttpClient implements com.sendbird.android.shadow.okhttp3.Call.Factory, com.sendbird.android.shadow.okhttp3.WebSocket.Factory {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.OkHttpClient>;
						public pingIntervalMillis(): number;
						public followSslRedirects(): boolean;
						public readTimeoutMillis(): number;
						public newCall(param0: com.sendbird.android.shadow.okhttp3.Request): com.sendbird.android.shadow.okhttp3.Call;
						public followRedirects(): boolean;
						public connectTimeoutMillis(): number;
						public retryOnConnectionFailure(): boolean;
						public networkInterceptors(): java.util.List<com.sendbird.android.shadow.okhttp3.Interceptor>;
						public interceptors(): java.util.List<com.sendbird.android.shadow.okhttp3.Interceptor>;
						public eventListenerFactory(): com.sendbird.android.shadow.okhttp3.EventListener.Factory;
						public proxyAuthenticator(): com.sendbird.android.shadow.okhttp3.Authenticator;
						public dns(): com.sendbird.android.shadow.okhttp3.Dns;
						public hostnameVerifier(): javax.net.ssl.HostnameVerifier;
						public cache(): com.sendbird.android.shadow.okhttp3.Cache;
						public constructor();
						public writeTimeoutMillis(): number;
						public connectionPool(): com.sendbird.android.shadow.okhttp3.ConnectionPool;
						public proxy(): java.net.Proxy;
						public protocols(): java.util.List<com.sendbird.android.shadow.okhttp3.Protocol>;
						public cookieJar(): com.sendbird.android.shadow.okhttp3.CookieJar;
						public dispatcher(): com.sendbird.android.shadow.okhttp3.Dispatcher;
						public certificatePinner(): com.sendbird.android.shadow.okhttp3.CertificatePinner;
						public connectionSpecs(): java.util.List<com.sendbird.android.shadow.okhttp3.ConnectionSpec>;
						public callTimeoutMillis(): number;
						public newBuilder(): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
						public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
						public newWebSocket(param0: com.sendbird.android.shadow.okhttp3.Request, param1: com.sendbird.android.shadow.okhttp3.WebSocketListener): com.sendbird.android.shadow.okhttp3.WebSocket;
						public proxySelector(): java.net.ProxySelector;
						public socketFactory(): javax.net.SocketFactory;
						public authenticator(): com.sendbird.android.shadow.okhttp3.Authenticator;
					}
					export module OkHttpClient {
						export class Builder {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder>;
							public dns(param0: com.sendbird.android.shadow.okhttp3.Dns): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public connectTimeout(param0: java.time.Duration): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public hostnameVerifier(param0: javax.net.ssl.HostnameVerifier): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public interceptors(): java.util.List<com.sendbird.android.shadow.okhttp3.Interceptor>;
							public cache(param0: com.sendbird.android.shadow.okhttp3.Cache): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public writeTimeout(param0: number, param1: java.util.concurrent.TimeUnit): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public connectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public readTimeout(param0: java.time.Duration): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public eventListenerFactory(param0: com.sendbird.android.shadow.okhttp3.EventListener.Factory): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public callTimeout(param0: java.time.Duration): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public addNetworkInterceptor(param0: com.sendbird.android.shadow.okhttp3.Interceptor): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public build(): com.sendbird.android.shadow.okhttp3.OkHttpClient;
							public proxyAuthenticator(param0: com.sendbird.android.shadow.okhttp3.Authenticator): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public connectionSpecs(param0: java.util.List<com.sendbird.android.shadow.okhttp3.ConnectionSpec>): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							/** @deprecated */
							public sslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public constructor();
							public retryOnConnectionFailure(param0: boolean): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public followSslRedirects(param0: boolean): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public dispatcher(param0: com.sendbird.android.shadow.okhttp3.Dispatcher): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public connectionPool(param0: com.sendbird.android.shadow.okhttp3.ConnectionPool): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public callTimeout(param0: number, param1: java.util.concurrent.TimeUnit): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public followRedirects(param0: boolean): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public addInterceptor(param0: com.sendbird.android.shadow.okhttp3.Interceptor): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public eventListener(param0: com.sendbird.android.shadow.okhttp3.EventListener): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public writeTimeout(param0: java.time.Duration): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public authenticator(param0: com.sendbird.android.shadow.okhttp3.Authenticator): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public sslSocketFactory(param0: javax.net.ssl.SSLSocketFactory, param1: javax.net.ssl.X509TrustManager): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public proxySelector(param0: java.net.ProxySelector): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public cookieJar(param0: com.sendbird.android.shadow.okhttp3.CookieJar): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public readTimeout(param0: number, param1: java.util.concurrent.TimeUnit): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public proxy(param0: java.net.Proxy): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public networkInterceptors(): java.util.List<com.sendbird.android.shadow.okhttp3.Interceptor>;
							public socketFactory(param0: javax.net.SocketFactory): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public certificatePinner(param0: com.sendbird.android.shadow.okhttp3.CertificatePinner): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public pingInterval(param0: number, param1: java.util.concurrent.TimeUnit): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public pingInterval(param0: java.time.Duration): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
							public protocols(param0: java.util.List<com.sendbird.android.shadow.okhttp3.Protocol>): com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class Protocol {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Protocol>;
						public static HTTP_1_0: com.sendbird.android.shadow.okhttp3.Protocol;
						public static HTTP_1_1: com.sendbird.android.shadow.okhttp3.Protocol;
						public static SPDY_3: com.sendbird.android.shadow.okhttp3.Protocol;
						public static HTTP_2: com.sendbird.android.shadow.okhttp3.Protocol;
						public static H2_PRIOR_KNOWLEDGE: com.sendbird.android.shadow.okhttp3.Protocol;
						public static QUIC: com.sendbird.android.shadow.okhttp3.Protocol;
						public static get(param0: string): com.sendbird.android.shadow.okhttp3.Protocol;
						public static valueOf(param0: string): com.sendbird.android.shadow.okhttp3.Protocol;
						public toString(): string;
						public static values(): androidNative.Array<com.sendbird.android.shadow.okhttp3.Protocol>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class RealCall extends com.sendbird.android.shadow.okhttp3.Call {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.RealCall>;
						public execute(): com.sendbird.android.shadow.okhttp3.Response;
						public cancel(): void;
						public isCanceled(): boolean;
						public request(): com.sendbird.android.shadow.okhttp3.Request;
						public isExecuted(): boolean;
						public enqueue(param0: com.sendbird.android.shadow.okhttp3.Callback): void;
						public clone(): com.sendbird.android.shadow.okhttp3.Call;
						public clone(): com.sendbird.android.shadow.okhttp3.RealCall;
						public timeout(): com.sendbird.android.shadow.okio.Timeout;
					}
					export module RealCall {
						export class AsyncCall extends com.sendbird.android.shadow.okhttp3.internal.NamedRunnable {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.RealCall.AsyncCall>;
							public execute(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class Request {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Request>;
						public headers(): com.sendbird.android.shadow.okhttp3.Headers;
						public tag(): any;
						public newBuilder(): com.sendbird.android.shadow.okhttp3.Request.Builder;
						public headers(param0: string): java.util.List<string>;
						public body(): com.sendbird.android.shadow.okhttp3.RequestBody;
						public url(): com.sendbird.android.shadow.okhttp3.HttpUrl;
						public isHttps(): boolean;
						public cacheControl(): com.sendbird.android.shadow.okhttp3.CacheControl;
						public method(): string;
						public tag(param0: java.lang.Class): any;
						public toString(): string;
						public header(param0: string): string;
					}
					export module Request {
						export class Builder {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Request.Builder>;
							public constructor();
							public get(): com.sendbird.android.shadow.okhttp3.Request.Builder;
							public headers(param0: com.sendbird.android.shadow.okhttp3.Headers): com.sendbird.android.shadow.okhttp3.Request.Builder;
							public delete(): com.sendbird.android.shadow.okhttp3.Request.Builder;
							public url(param0: string): com.sendbird.android.shadow.okhttp3.Request.Builder;
							public patch(param0: com.sendbird.android.shadow.okhttp3.RequestBody): com.sendbird.android.shadow.okhttp3.Request.Builder;
							public put(param0: com.sendbird.android.shadow.okhttp3.RequestBody): com.sendbird.android.shadow.okhttp3.Request.Builder;
							public removeHeader(param0: string): com.sendbird.android.shadow.okhttp3.Request.Builder;
							public delete(param0: com.sendbird.android.shadow.okhttp3.RequestBody): com.sendbird.android.shadow.okhttp3.Request.Builder;
							public addHeader(param0: string, param1: string): com.sendbird.android.shadow.okhttp3.Request.Builder;
							public post(param0: com.sendbird.android.shadow.okhttp3.RequestBody): com.sendbird.android.shadow.okhttp3.Request.Builder;
							public method(param0: string, param1: com.sendbird.android.shadow.okhttp3.RequestBody): com.sendbird.android.shadow.okhttp3.Request.Builder;
							public head(): com.sendbird.android.shadow.okhttp3.Request.Builder;
							public tag(param0: java.lang.Class, param1: any): com.sendbird.android.shadow.okhttp3.Request.Builder;
							public url(param0: java.net.URL): com.sendbird.android.shadow.okhttp3.Request.Builder;
							public header(param0: string, param1: string): com.sendbird.android.shadow.okhttp3.Request.Builder;
							public tag(param0: any): com.sendbird.android.shadow.okhttp3.Request.Builder;
							public build(): com.sendbird.android.shadow.okhttp3.Request;
							public url(param0: com.sendbird.android.shadow.okhttp3.HttpUrl): com.sendbird.android.shadow.okhttp3.Request.Builder;
							public cacheControl(param0: com.sendbird.android.shadow.okhttp3.CacheControl): com.sendbird.android.shadow.okhttp3.Request.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export abstract class RequestBody {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.RequestBody>;
						public constructor();
						public static create(param0: com.sendbird.android.shadow.okhttp3.MediaType, param1: androidNative.Array<number>): com.sendbird.android.shadow.okhttp3.RequestBody;
						public static create(param0: com.sendbird.android.shadow.okhttp3.MediaType, param1: androidNative.Array<number>, param2: number, param3: number): com.sendbird.android.shadow.okhttp3.RequestBody;
						public writeTo(param0: com.sendbird.android.shadow.okio.BufferedSink): void;
						public contentLength(): number;
						public static create(param0: com.sendbird.android.shadow.okhttp3.MediaType, param1: string): com.sendbird.android.shadow.okhttp3.RequestBody;
						public static create(param0: com.sendbird.android.shadow.okhttp3.MediaType, param1: java.io.File): com.sendbird.android.shadow.okhttp3.RequestBody;
						public contentType(): com.sendbird.android.shadow.okhttp3.MediaType;
						public static create(param0: com.sendbird.android.shadow.okhttp3.MediaType, param1: com.sendbird.android.shadow.okio.ByteString): com.sendbird.android.shadow.okhttp3.RequestBody;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class Response {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Response>;
						public header(param0: string, param1: string): string;
						public message(): string;
						public close(): void;
						public priorResponse(): com.sendbird.android.shadow.okhttp3.Response;
						public request(): com.sendbird.android.shadow.okhttp3.Request;
						public cacheControl(): com.sendbird.android.shadow.okhttp3.CacheControl;
						public sentRequestAtMillis(): number;
						public code(): number;
						public toString(): string;
						public header(param0: string): string;
						public headers(): com.sendbird.android.shadow.okhttp3.Headers;
						public receivedResponseAtMillis(): number;
						public protocol(): com.sendbird.android.shadow.okhttp3.Protocol;
						public handshake(): com.sendbird.android.shadow.okhttp3.Handshake;
						public peekBody(param0: number): com.sendbird.android.shadow.okhttp3.ResponseBody;
						public isSuccessful(): boolean;
						public headers(param0: string): java.util.List<string>;
						public challenges(): java.util.List<com.sendbird.android.shadow.okhttp3.Challenge>;
						public isRedirect(): boolean;
						public networkResponse(): com.sendbird.android.shadow.okhttp3.Response;
						public cacheResponse(): com.sendbird.android.shadow.okhttp3.Response;
						public body(): com.sendbird.android.shadow.okhttp3.ResponseBody;
						public newBuilder(): com.sendbird.android.shadow.okhttp3.Response.Builder;
					}
					export module Response {
						export class Builder {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Response.Builder>;
							public constructor();
							public header(param0: string, param1: string): com.sendbird.android.shadow.okhttp3.Response.Builder;
							public body(param0: com.sendbird.android.shadow.okhttp3.ResponseBody): com.sendbird.android.shadow.okhttp3.Response.Builder;
							public code(param0: number): com.sendbird.android.shadow.okhttp3.Response.Builder;
							public handshake(param0: com.sendbird.android.shadow.okhttp3.Handshake): com.sendbird.android.shadow.okhttp3.Response.Builder;
							public build(): com.sendbird.android.shadow.okhttp3.Response;
							public sentRequestAtMillis(param0: number): com.sendbird.android.shadow.okhttp3.Response.Builder;
							public protocol(param0: com.sendbird.android.shadow.okhttp3.Protocol): com.sendbird.android.shadow.okhttp3.Response.Builder;
							public cacheResponse(param0: com.sendbird.android.shadow.okhttp3.Response): com.sendbird.android.shadow.okhttp3.Response.Builder;
							public priorResponse(param0: com.sendbird.android.shadow.okhttp3.Response): com.sendbird.android.shadow.okhttp3.Response.Builder;
							public headers(param0: com.sendbird.android.shadow.okhttp3.Headers): com.sendbird.android.shadow.okhttp3.Response.Builder;
							public receivedResponseAtMillis(param0: number): com.sendbird.android.shadow.okhttp3.Response.Builder;
							public request(param0: com.sendbird.android.shadow.okhttp3.Request): com.sendbird.android.shadow.okhttp3.Response.Builder;
							public addHeader(param0: string, param1: string): com.sendbird.android.shadow.okhttp3.Response.Builder;
							public networkResponse(param0: com.sendbird.android.shadow.okhttp3.Response): com.sendbird.android.shadow.okhttp3.Response.Builder;
							public message(param0: string): com.sendbird.android.shadow.okhttp3.Response.Builder;
							public removeHeader(param0: string): com.sendbird.android.shadow.okhttp3.Response.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export abstract class ResponseBody {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.ResponseBody>;
						public constructor();
						public close(): void;
						public static create(param0: com.sendbird.android.shadow.okhttp3.MediaType, param1: string): com.sendbird.android.shadow.okhttp3.ResponseBody;
						public charStream(): java.io.Reader;
						public string(): string;
						public static create(param0: com.sendbird.android.shadow.okhttp3.MediaType, param1: androidNative.Array<number>): com.sendbird.android.shadow.okhttp3.ResponseBody;
						public byteStream(): java.io.InputStream;
						public static create(param0: com.sendbird.android.shadow.okhttp3.MediaType, param1: number, param2: com.sendbird.android.shadow.okio.BufferedSource): com.sendbird.android.shadow.okhttp3.ResponseBody;
						public contentLength(): number;
						public bytes(): androidNative.Array<number>;
						public source(): com.sendbird.android.shadow.okio.BufferedSource;
						public contentType(): com.sendbird.android.shadow.okhttp3.MediaType;
						public static create(param0: com.sendbird.android.shadow.okhttp3.MediaType, param1: com.sendbird.android.shadow.okio.ByteString): com.sendbird.android.shadow.okhttp3.ResponseBody;
					}
					export module ResponseBody {
						export class BomAwareReader {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.ResponseBody.BomAwareReader>;
							public close(): void;
							public read(param0: androidNative.Array<string>, param1: number, param2: number): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class Route {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.Route>;
						public proxy(): java.net.Proxy;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public socketAddress(): java.net.InetSocketAddress;
						public constructor(param0: com.sendbird.android.shadow.okhttp3.Address, param1: java.net.Proxy, param2: java.net.InetSocketAddress);
						public requiresTunnel(): boolean;
						public address(): com.sendbird.android.shadow.okhttp3.Address;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class TlsVersion {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.TlsVersion>;
						public static TLS_1_3: com.sendbird.android.shadow.okhttp3.TlsVersion;
						public static TLS_1_2: com.sendbird.android.shadow.okhttp3.TlsVersion;
						public static TLS_1_1: com.sendbird.android.shadow.okhttp3.TlsVersion;
						public static TLS_1_0: com.sendbird.android.shadow.okhttp3.TlsVersion;
						public static SSL_3_0: com.sendbird.android.shadow.okhttp3.TlsVersion;
						public static values(): androidNative.Array<com.sendbird.android.shadow.okhttp3.TlsVersion>;
						public static valueOf(param0: string): com.sendbird.android.shadow.okhttp3.TlsVersion;
						public static forJavaName(param0: string): com.sendbird.android.shadow.okhttp3.TlsVersion;
						public javaName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export class WebSocket {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.WebSocket>;
						/**
						 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.WebSocket interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							request(): com.sendbird.android.shadow.okhttp3.Request;
							queueSize(): number;
							send(param0: string): boolean;
							send(param0: com.sendbird.android.shadow.okio.ByteString): boolean;
							close(param0: number, param1: string): boolean;
							cancel(): void;
						});
						public constructor();
						public close(param0: number, param1: string): boolean;
						public queueSize(): number;
						public send(param0: com.sendbird.android.shadow.okio.ByteString): boolean;
						public send(param0: string): boolean;
						public cancel(): void;
						public request(): com.sendbird.android.shadow.okhttp3.Request;
					}
					export module WebSocket {
						export class Factory {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.WebSocket.Factory>;
							/**
							 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.WebSocket$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								newWebSocket(param0: com.sendbird.android.shadow.okhttp3.Request, param1: com.sendbird.android.shadow.okhttp3.WebSocketListener): com.sendbird.android.shadow.okhttp3.WebSocket;
							});
							public constructor();
							public newWebSocket(param0: com.sendbird.android.shadow.okhttp3.Request, param1: com.sendbird.android.shadow.okhttp3.WebSocketListener): com.sendbird.android.shadow.okhttp3.WebSocket;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export abstract class WebSocketListener {
						public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.WebSocketListener>;
						public onOpen(param0: com.sendbird.android.shadow.okhttp3.WebSocket, param1: com.sendbird.android.shadow.okhttp3.Response): void;
						public constructor();
						public onMessage(param0: com.sendbird.android.shadow.okhttp3.WebSocket, param1: string): void;
						public onMessage(param0: com.sendbird.android.shadow.okhttp3.WebSocket, param1: com.sendbird.android.shadow.okio.ByteString): void;
						public onClosed(param0: com.sendbird.android.shadow.okhttp3.WebSocket, param1: number, param2: string): void;
						public onClosing(param0: com.sendbird.android.shadow.okhttp3.WebSocket, param1: number, param2: string): void;
						public onFailure(param0: com.sendbird.android.shadow.okhttp3.WebSocket, param1: java.lang.Throwable, param2: com.sendbird.android.shadow.okhttp3.Response): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export abstract class Internal {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.Internal>;
							public static instance: com.sendbird.android.shadow.okhttp3.internal.Internal;
							public constructor();
							public addLenient(param0: com.sendbird.android.shadow.okhttp3.Headers.Builder, param1: string): void;
							public setCache(param0: com.sendbird.android.shadow.okhttp3.OkHttpClient.Builder, param1: com.sendbird.android.shadow.okhttp3.internal.cache.InternalCache): void;
							public streamAllocation(param0: com.sendbird.android.shadow.okhttp3.Call): com.sendbird.android.shadow.okhttp3.internal.connection.StreamAllocation;
							public timeoutExit(param0: com.sendbird.android.shadow.okhttp3.Call, param1: java.io.IOException): java.io.IOException;
							public put(param0: com.sendbird.android.shadow.okhttp3.ConnectionPool, param1: com.sendbird.android.shadow.okhttp3.internal.connection.RealConnection): void;
							public code(param0: com.sendbird.android.shadow.okhttp3.Response.Builder): number;
							public apply(param0: com.sendbird.android.shadow.okhttp3.ConnectionSpec, param1: javax.net.ssl.SSLSocket, param2: boolean): void;
							public static initializeInstanceForTests(): void;
							public connectionBecameIdle(param0: com.sendbird.android.shadow.okhttp3.ConnectionPool, param1: com.sendbird.android.shadow.okhttp3.internal.connection.RealConnection): boolean;
							public addLenient(param0: com.sendbird.android.shadow.okhttp3.Headers.Builder, param1: string, param2: string): void;
							public routeDatabase(param0: com.sendbird.android.shadow.okhttp3.ConnectionPool): com.sendbird.android.shadow.okhttp3.internal.connection.RouteDatabase;
							public isInvalidHttpUrlHost(param0: java.lang.IllegalArgumentException): boolean;
							public get(param0: com.sendbird.android.shadow.okhttp3.ConnectionPool, param1: com.sendbird.android.shadow.okhttp3.Address, param2: com.sendbird.android.shadow.okhttp3.internal.connection.StreamAllocation, param3: com.sendbird.android.shadow.okhttp3.Route): com.sendbird.android.shadow.okhttp3.internal.connection.RealConnection;
							public equalsNonHost(param0: com.sendbird.android.shadow.okhttp3.Address, param1: com.sendbird.android.shadow.okhttp3.Address): boolean;
							public deduplicate(param0: com.sendbird.android.shadow.okhttp3.ConnectionPool, param1: com.sendbird.android.shadow.okhttp3.Address, param2: com.sendbird.android.shadow.okhttp3.internal.connection.StreamAllocation): java.net.Socket;
							public newWebSocketCall(param0: com.sendbird.android.shadow.okhttp3.OkHttpClient, param1: com.sendbird.android.shadow.okhttp3.Request): com.sendbird.android.shadow.okhttp3.Call;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export abstract class NamedRunnable {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.NamedRunnable>;
							public name: string;
							public constructor(param0: string, param1: androidNative.Array<any>);
							public execute(): void;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export class Util {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.Util>;
							public static EMPTY_BYTE_ARRAY: androidNative.Array<number>;
							public static EMPTY_STRING_ARRAY: androidNative.Array<string>;
							public static EMPTY_RESPONSE: com.sendbird.android.shadow.okhttp3.ResponseBody;
							public static EMPTY_REQUEST: com.sendbird.android.shadow.okhttp3.RequestBody;
							public static UTF_8: java.nio.charset.Charset;
							public static ISO_8859_1: java.nio.charset.Charset;
							public static UTC: java.util.TimeZone;
							public static NATURAL_ORDER: java.util.Comparator<string>;
							public static trimSubstring(param0: string, param1: number, param2: number): string;
							public static isAndroidGetsocknameError(param0: java.lang.AssertionError): boolean;
							public static immutableList(param0: androidNative.Array<any>): java.util.List;
							public static intersect(param0: java.util.Comparator<any>, param1: androidNative.Array<string>, param2: androidNative.Array<string>): androidNative.Array<string>;
							public static hostHeader(param0: com.sendbird.android.shadow.okhttp3.HttpUrl, param1: boolean): string;
							public static toHeaders(param0: java.util.List<com.sendbird.android.shadow.okhttp3.internal.http2.Header>): com.sendbird.android.shadow.okhttp3.Headers;
							public static nonEmptyIntersection(param0: java.util.Comparator<string>, param1: androidNative.Array<string>, param2: androidNative.Array<string>): boolean;
							public static closeQuietly(param0: java.net.ServerSocket): void;
							public static platformTrustManager(): javax.net.ssl.X509TrustManager;
							public static canonicalizeHost(param0: string): string;
							public static assertionError(param0: string, param1: java.lang.Exception): java.lang.AssertionError;
							public static checkDuration(param0: string, param1: number, param2: java.util.concurrent.TimeUnit): number;
							public static decodeHexDigit(param0: string): number;
							public static concat(param0: androidNative.Array<string>, param1: string): androidNative.Array<string>;
							public static bomAwareCharset(param0: com.sendbird.android.shadow.okio.BufferedSource, param1: java.nio.charset.Charset): java.nio.charset.Charset;
							public static immutableList(param0: java.util.List): java.util.List;
							public static addSuppressedIfPossible(param0: java.lang.Throwable, param1: java.lang.Throwable): void;
							public static equal(param0: any, param1: any): boolean;
							public static skipTrailingAsciiWhitespace(param0: string, param1: number, param2: number): number;
							public static skipLeadingAsciiWhitespace(param0: string, param1: number, param2: number): number;
							public static skipAll(param0: com.sendbird.android.shadow.okio.Source, param1: number, param2: java.util.concurrent.TimeUnit): boolean;
							public static delimiterOffset(param0: string, param1: number, param2: number, param3: string): number;
							public static indexOf(param0: java.util.Comparator<string>, param1: androidNative.Array<string>, param2: string): number;
							public static closeQuietly(param0: java.net.Socket): void;
							public static immutableMap(param0: java.util.Map): java.util.Map;
							public static discard(param0: com.sendbird.android.shadow.okio.Source, param1: number, param2: java.util.concurrent.TimeUnit): boolean;
							public static threadFactory(param0: string, param1: boolean): java.util.concurrent.ThreadFactory;
							public static verifyAsIpAddress(param0: string): boolean;
							public static format(param0: string, param1: androidNative.Array<any>): string;
							public static checkOffsetAndCount(param0: number, param1: number, param2: number): void;
							public static closeQuietly(param0: java.io.Closeable): void;
							public static indexOfControlOrNonAscii(param0: string): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export class Version {
							public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.Version>;
							public static userAgent(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module annotations {
							export class EverythingIsNonNull {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.annotations.EverythingIsNonNull>;
								/**
								 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.internal.annotations.EverythingIsNonNull interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module cache {
							export class CacheInterceptor extends com.sendbird.android.shadow.okhttp3.Interceptor {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.cache.CacheInterceptor>;
								public constructor(param0: com.sendbird.android.shadow.okhttp3.internal.cache.InternalCache);
								public intercept(param0: com.sendbird.android.shadow.okhttp3.Interceptor.Chain): com.sendbird.android.shadow.okhttp3.Response;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module cache {
							export class CacheRequest {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.cache.CacheRequest>;
								/**
								 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.internal.cache.CacheRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									body(): com.sendbird.android.shadow.okio.Sink;
									abort(): void;
								});
								public constructor();
								public body(): com.sendbird.android.shadow.okio.Sink;
								public abort(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module cache {
							export class CacheStrategy {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.cache.CacheStrategy>;
								public networkRequest: com.sendbird.android.shadow.okhttp3.Request;
								public cacheResponse: com.sendbird.android.shadow.okhttp3.Response;
								public static isCacheable(param0: com.sendbird.android.shadow.okhttp3.Response, param1: com.sendbird.android.shadow.okhttp3.Request): boolean;
							}
							export module CacheStrategy {
								export class Factory {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.cache.CacheStrategy.Factory>;
									public constructor(param0: number, param1: com.sendbird.android.shadow.okhttp3.Request, param2: com.sendbird.android.shadow.okhttp3.Response);
									public get(): com.sendbird.android.shadow.okhttp3.internal.cache.CacheStrategy;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module cache {
							export class DiskLruCache {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.cache.DiskLruCache>;
								public edit(param0: string): com.sendbird.android.shadow.okhttp3.internal.cache.DiskLruCache.Editor;
								public delete(): void;
								public size(): number;
								public getMaxSize(): number;
								public flush(): void;
								public get(param0: string): com.sendbird.android.shadow.okhttp3.internal.cache.DiskLruCache.Snapshot;
								public snapshots(): java.util.Iterator<com.sendbird.android.shadow.okhttp3.internal.cache.DiskLruCache.Snapshot>;
								public remove(param0: string): boolean;
								public isClosed(): boolean;
								public static create(param0: com.sendbird.android.shadow.okhttp3.internal.io.FileSystem, param1: java.io.File, param2: number, param3: number, param4: number): com.sendbird.android.shadow.okhttp3.internal.cache.DiskLruCache;
								public setMaxSize(param0: number): void;
								public initialize(): void;
								public close(): void;
								public evictAll(): void;
								public getDirectory(): java.io.File;
							}
							export module DiskLruCache {
								export class Editor {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.cache.DiskLruCache.Editor>;
									public newSource(param0: number): com.sendbird.android.shadow.okio.Source;
									public abort(): void;
									public commit(): void;
									public newSink(param0: number): com.sendbird.android.shadow.okio.Sink;
									public abortUnlessCommitted(): void;
								}
								export class Entry {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.cache.DiskLruCache.Entry>;
								}
								export class Snapshot {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.cache.DiskLruCache.Snapshot>;
									public getSource(param0: number): com.sendbird.android.shadow.okio.Source;
									public edit(): com.sendbird.android.shadow.okhttp3.internal.cache.DiskLruCache.Editor;
									public getLength(param0: number): number;
									public close(): void;
									public key(): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module cache {
							export class FaultHidingSink extends com.sendbird.android.shadow.okio.ForwardingSink {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.cache.FaultHidingSink>;
								public write(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): void;
								public flush(): void;
								public onException(param0: java.io.IOException): void;
								public timeout(): com.sendbird.android.shadow.okio.Timeout;
								public close(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module cache {
							export class InternalCache {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.cache.InternalCache>;
								/**
								 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.internal.cache.InternalCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									get(param0: com.sendbird.android.shadow.okhttp3.Request): com.sendbird.android.shadow.okhttp3.Response;
									put(param0: com.sendbird.android.shadow.okhttp3.Response): com.sendbird.android.shadow.okhttp3.internal.cache.CacheRequest;
									remove(param0: com.sendbird.android.shadow.okhttp3.Request): void;
									update(param0: com.sendbird.android.shadow.okhttp3.Response, param1: com.sendbird.android.shadow.okhttp3.Response): void;
									trackConditionalCacheHit(): void;
									trackResponse(param0: com.sendbird.android.shadow.okhttp3.internal.cache.CacheStrategy): void;
								});
								public constructor();
								public trackConditionalCacheHit(): void;
								public remove(param0: com.sendbird.android.shadow.okhttp3.Request): void;
								public put(param0: com.sendbird.android.shadow.okhttp3.Response): com.sendbird.android.shadow.okhttp3.internal.cache.CacheRequest;
								public trackResponse(param0: com.sendbird.android.shadow.okhttp3.internal.cache.CacheStrategy): void;
								public update(param0: com.sendbird.android.shadow.okhttp3.Response, param1: com.sendbird.android.shadow.okhttp3.Response): void;
								public get(param0: com.sendbird.android.shadow.okhttp3.Request): com.sendbird.android.shadow.okhttp3.Response;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module cache2 {
							export class FileOperator {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.cache2.FileOperator>;
								public read(param0: number, param1: com.sendbird.android.shadow.okio.Buffer, param2: number): void;
								public write(param0: number, param1: com.sendbird.android.shadow.okio.Buffer, param2: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module cache2 {
							export class Relay {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.cache2.Relay>;
								public newSource(): com.sendbird.android.shadow.okio.Source;
								public static read(param0: java.io.File): com.sendbird.android.shadow.okhttp3.internal.cache2.Relay;
								public metadata(): com.sendbird.android.shadow.okio.ByteString;
								public static edit(param0: java.io.File, param1: com.sendbird.android.shadow.okio.Source, param2: com.sendbird.android.shadow.okio.ByteString, param3: number): com.sendbird.android.shadow.okhttp3.internal.cache2.Relay;
							}
							export module Relay {
								export class RelaySource extends com.sendbird.android.shadow.okio.Source {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.cache2.Relay.RelaySource>;
									public close(): void;
									public read(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): number;
									public timeout(): com.sendbird.android.shadow.okio.Timeout;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module connection {
							export class ConnectInterceptor extends com.sendbird.android.shadow.okhttp3.Interceptor {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.connection.ConnectInterceptor>;
								public client: com.sendbird.android.shadow.okhttp3.OkHttpClient;
								public intercept(param0: com.sendbird.android.shadow.okhttp3.Interceptor.Chain): com.sendbird.android.shadow.okhttp3.Response;
								public constructor(param0: com.sendbird.android.shadow.okhttp3.OkHttpClient);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module connection {
							export class ConnectionSpecSelector {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.connection.ConnectionSpecSelector>;
								public configureSecureSocket(param0: javax.net.ssl.SSLSocket): com.sendbird.android.shadow.okhttp3.ConnectionSpec;
								public constructor(param0: java.util.List<com.sendbird.android.shadow.okhttp3.ConnectionSpec>);
								public connectionFailed(param0: java.io.IOException): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module connection {
							export class RealConnection extends com.sendbird.android.shadow.okhttp3.internal.http2.Http2Connection.Listener implements com.sendbird.android.shadow.okhttp3.Connection {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.connection.RealConnection>;
								public noNewStreams: boolean;
								public successCount: number;
								public allocationLimit: number;
								public allocations: java.util.List<java.lang.ref.Reference<com.sendbird.android.shadow.okhttp3.internal.connection.StreamAllocation>>;
								public idleAtNanos: number;
								public isHealthy(param0: boolean): boolean;
								public toString(): string;
								public cancel(): void;
								public protocol(): com.sendbird.android.shadow.okhttp3.Protocol;
								public newCodec(param0: com.sendbird.android.shadow.okhttp3.OkHttpClient, param1: com.sendbird.android.shadow.okhttp3.Interceptor.Chain, param2: com.sendbird.android.shadow.okhttp3.internal.connection.StreamAllocation): com.sendbird.android.shadow.okhttp3.internal.http.HttpCodec;
								public constructor();
								public socket(): java.net.Socket;
								public onStream(param0: com.sendbird.android.shadow.okhttp3.internal.http2.Http2Stream): void;
								public constructor(param0: com.sendbird.android.shadow.okhttp3.ConnectionPool, param1: com.sendbird.android.shadow.okhttp3.Route);
								public static testConnection(param0: com.sendbird.android.shadow.okhttp3.ConnectionPool, param1: com.sendbird.android.shadow.okhttp3.Route, param2: java.net.Socket, param3: number): com.sendbird.android.shadow.okhttp3.internal.connection.RealConnection;
								public connect(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: com.sendbird.android.shadow.okhttp3.Call, param6: com.sendbird.android.shadow.okhttp3.EventListener): void;
								public onSettings(param0: com.sendbird.android.shadow.okhttp3.internal.http2.Http2Connection): void;
								public supportsUrl(param0: com.sendbird.android.shadow.okhttp3.HttpUrl): boolean;
								public route(): com.sendbird.android.shadow.okhttp3.Route;
								public handshake(): com.sendbird.android.shadow.okhttp3.Handshake;
								public isEligible(param0: com.sendbird.android.shadow.okhttp3.Address, param1: com.sendbird.android.shadow.okhttp3.Route): boolean;
								public newWebSocketStreams(param0: com.sendbird.android.shadow.okhttp3.internal.connection.StreamAllocation): com.sendbird.android.shadow.okhttp3.internal.ws.RealWebSocket.Streams;
								public isMultiplexed(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module connection {
							export class RouteDatabase {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.connection.RouteDatabase>;
								public failed(param0: com.sendbird.android.shadow.okhttp3.Route): void;
								public connected(param0: com.sendbird.android.shadow.okhttp3.Route): void;
								public shouldPostpone(param0: com.sendbird.android.shadow.okhttp3.Route): boolean;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module connection {
							export class RouteException {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.connection.RouteException>;
								public getLastConnectException(): java.io.IOException;
								public addConnectException(param0: java.io.IOException): void;
								public constructor(param0: java.io.IOException);
								public getFirstConnectException(): java.io.IOException;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module connection {
							export class RouteSelector {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.connection.RouteSelector>;
								public hasNext(): boolean;
								public next(): com.sendbird.android.shadow.okhttp3.internal.connection.RouteSelector.Selection;
								public connectFailed(param0: com.sendbird.android.shadow.okhttp3.Route, param1: java.io.IOException): void;
								public constructor(param0: com.sendbird.android.shadow.okhttp3.Address, param1: com.sendbird.android.shadow.okhttp3.internal.connection.RouteDatabase, param2: com.sendbird.android.shadow.okhttp3.Call, param3: com.sendbird.android.shadow.okhttp3.EventListener);
							}
							export module RouteSelector {
								export class Selection {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.connection.RouteSelector.Selection>;
									public hasNext(): boolean;
									public getAll(): java.util.List<com.sendbird.android.shadow.okhttp3.Route>;
									public next(): com.sendbird.android.shadow.okhttp3.Route;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module connection {
							export class StreamAllocation {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.connection.StreamAllocation>;
								public address: com.sendbird.android.shadow.okhttp3.Address;
								public call: com.sendbird.android.shadow.okhttp3.Call;
								public eventListener: com.sendbird.android.shadow.okhttp3.EventListener;
								public releaseAndAcquire(param0: com.sendbird.android.shadow.okhttp3.internal.connection.RealConnection): java.net.Socket;
								public toString(): string;
								public cancel(): void;
								public streamFinished(param0: boolean, param1: com.sendbird.android.shadow.okhttp3.internal.http.HttpCodec, param2: number, param3: java.io.IOException): void;
								public release(): void;
								public acquire(param0: com.sendbird.android.shadow.okhttp3.internal.connection.RealConnection, param1: boolean): void;
								public route(): com.sendbird.android.shadow.okhttp3.Route;
								public hasMoreRoutes(): boolean;
								public connection(): com.sendbird.android.shadow.okhttp3.internal.connection.RealConnection;
								public noNewStreams(): void;
								public constructor(param0: com.sendbird.android.shadow.okhttp3.ConnectionPool, param1: com.sendbird.android.shadow.okhttp3.Address, param2: com.sendbird.android.shadow.okhttp3.Call, param3: com.sendbird.android.shadow.okhttp3.EventListener, param4: any);
								public newStream(param0: com.sendbird.android.shadow.okhttp3.OkHttpClient, param1: com.sendbird.android.shadow.okhttp3.Interceptor.Chain, param2: boolean): com.sendbird.android.shadow.okhttp3.internal.http.HttpCodec;
								public streamFailed(param0: java.io.IOException): void;
								public codec(): com.sendbird.android.shadow.okhttp3.internal.http.HttpCodec;
							}
							export module StreamAllocation {
								export class StreamAllocationReference extends java.lang.ref.WeakReference<com.sendbird.android.shadow.okhttp3.internal.connection.StreamAllocation> {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.connection.StreamAllocation.StreamAllocationReference>;
									public callStackTrace: any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http {
							export class BridgeInterceptor extends com.sendbird.android.shadow.okhttp3.Interceptor {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http.BridgeInterceptor>;
								public constructor(param0: com.sendbird.android.shadow.okhttp3.CookieJar);
								public intercept(param0: com.sendbird.android.shadow.okhttp3.Interceptor.Chain): com.sendbird.android.shadow.okhttp3.Response;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http {
							export class CallServerInterceptor extends com.sendbird.android.shadow.okhttp3.Interceptor {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http.CallServerInterceptor>;
								public intercept(param0: com.sendbird.android.shadow.okhttp3.Interceptor.Chain): com.sendbird.android.shadow.okhttp3.Response;
								public constructor(param0: boolean);
							}
							export module CallServerInterceptor {
								export class CountingSink extends com.sendbird.android.shadow.okio.ForwardingSink {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http.CallServerInterceptor.CountingSink>;
									public close(): void;
									public write(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): void;
									public timeout(): com.sendbird.android.shadow.okio.Timeout;
									public flush(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http {
							export class HttpCodec {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http.HttpCodec>;
								/**
								 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.internal.http.HttpCodec interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									createRequestBody(param0: com.sendbird.android.shadow.okhttp3.Request, param1: number): com.sendbird.android.shadow.okio.Sink;
									writeRequestHeaders(param0: com.sendbird.android.shadow.okhttp3.Request): void;
									flushRequest(): void;
									finishRequest(): void;
									readResponseHeaders(param0: boolean): com.sendbird.android.shadow.okhttp3.Response.Builder;
									openResponseBody(param0: com.sendbird.android.shadow.okhttp3.Response): com.sendbird.android.shadow.okhttp3.ResponseBody;
									cancel(): void;
								});
								public constructor();
								public static DISCARD_STREAM_TIMEOUT_MILLIS: number;
								public flushRequest(): void;
								public readResponseHeaders(param0: boolean): com.sendbird.android.shadow.okhttp3.Response.Builder;
								public cancel(): void;
								public writeRequestHeaders(param0: com.sendbird.android.shadow.okhttp3.Request): void;
								public createRequestBody(param0: com.sendbird.android.shadow.okhttp3.Request, param1: number): com.sendbird.android.shadow.okio.Sink;
								public finishRequest(): void;
								public openResponseBody(param0: com.sendbird.android.shadow.okhttp3.Response): com.sendbird.android.shadow.okhttp3.ResponseBody;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http {
							export class HttpDate {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http.HttpDate>;
								public static MAX_DATE: number;
								public static parse(param0: string): java.util.Date;
								public static format(param0: java.util.Date): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http {
							export class HttpHeaders {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http.HttpHeaders>;
								public static skipUntil(param0: string, param1: number, param2: string): number;
								public static contentLength(param0: com.sendbird.android.shadow.okhttp3.Response): number;
								public static parseChallenges(param0: com.sendbird.android.shadow.okhttp3.Headers, param1: string): java.util.List<com.sendbird.android.shadow.okhttp3.Challenge>;
								public static receiveHeaders(param0: com.sendbird.android.shadow.okhttp3.CookieJar, param1: com.sendbird.android.shadow.okhttp3.HttpUrl, param2: com.sendbird.android.shadow.okhttp3.Headers): void;
								public static varyMatches(param0: com.sendbird.android.shadow.okhttp3.Response, param1: com.sendbird.android.shadow.okhttp3.Headers, param2: com.sendbird.android.shadow.okhttp3.Request): boolean;
								public static varyHeaders(param0: com.sendbird.android.shadow.okhttp3.Headers, param1: com.sendbird.android.shadow.okhttp3.Headers): com.sendbird.android.shadow.okhttp3.Headers;
								public static contentLength(param0: com.sendbird.android.shadow.okhttp3.Headers): number;
								public static hasBody(param0: com.sendbird.android.shadow.okhttp3.Response): boolean;
								public static skipWhitespace(param0: string, param1: number): number;
								public static hasVaryAll(param0: com.sendbird.android.shadow.okhttp3.Headers): boolean;
								public static parseSeconds(param0: string, param1: number): number;
								public static varyFields(param0: com.sendbird.android.shadow.okhttp3.Headers): java.util.Set<string>;
								public static hasVaryAll(param0: com.sendbird.android.shadow.okhttp3.Response): boolean;
								public static varyHeaders(param0: com.sendbird.android.shadow.okhttp3.Response): com.sendbird.android.shadow.okhttp3.Headers;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http {
							export class HttpMethod {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http.HttpMethod>;
								public static requiresRequestBody(param0: string): boolean;
								public static redirectsWithBody(param0: string): boolean;
								public static redirectsToGet(param0: string): boolean;
								public static permitsRequestBody(param0: string): boolean;
								public static invalidatesCache(param0: string): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http {
							export class RealInterceptorChain extends com.sendbird.android.shadow.okhttp3.Interceptor.Chain {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http.RealInterceptorChain>;
								public withWriteTimeout(param0: number, param1: java.util.concurrent.TimeUnit): com.sendbird.android.shadow.okhttp3.Interceptor.Chain;
								public withReadTimeout(param0: number, param1: java.util.concurrent.TimeUnit): com.sendbird.android.shadow.okhttp3.Interceptor.Chain;
								public connectTimeoutMillis(): number;
								public readTimeoutMillis(): number;
								public proceed(param0: com.sendbird.android.shadow.okhttp3.Request): com.sendbird.android.shadow.okhttp3.Response;
								public eventListener(): com.sendbird.android.shadow.okhttp3.EventListener;
								public httpStream(): com.sendbird.android.shadow.okhttp3.internal.http.HttpCodec;
								public writeTimeoutMillis(): number;
								public proceed(param0: com.sendbird.android.shadow.okhttp3.Request, param1: com.sendbird.android.shadow.okhttp3.internal.connection.StreamAllocation, param2: com.sendbird.android.shadow.okhttp3.internal.http.HttpCodec, param3: com.sendbird.android.shadow.okhttp3.internal.connection.RealConnection): com.sendbird.android.shadow.okhttp3.Response;
								public constructor(param0: java.util.List<com.sendbird.android.shadow.okhttp3.Interceptor>, param1: com.sendbird.android.shadow.okhttp3.internal.connection.StreamAllocation, param2: com.sendbird.android.shadow.okhttp3.internal.http.HttpCodec, param3: com.sendbird.android.shadow.okhttp3.internal.connection.RealConnection, param4: number, param5: com.sendbird.android.shadow.okhttp3.Request, param6: com.sendbird.android.shadow.okhttp3.Call, param7: com.sendbird.android.shadow.okhttp3.EventListener, param8: number, param9: number, param10: number);
								public streamAllocation(): com.sendbird.android.shadow.okhttp3.internal.connection.StreamAllocation;
								public withConnectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): com.sendbird.android.shadow.okhttp3.Interceptor.Chain;
								public connection(): com.sendbird.android.shadow.okhttp3.Connection;
								public request(): com.sendbird.android.shadow.okhttp3.Request;
								public call(): com.sendbird.android.shadow.okhttp3.Call;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http {
							export class RealResponseBody extends com.sendbird.android.shadow.okhttp3.ResponseBody {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http.RealResponseBody>;
								public constructor(param0: string, param1: number, param2: com.sendbird.android.shadow.okio.BufferedSource);
								public source(): com.sendbird.android.shadow.okio.BufferedSource;
								public contentLength(): number;
								public constructor();
								public contentType(): com.sendbird.android.shadow.okhttp3.MediaType;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http {
							export class RequestLine {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http.RequestLine>;
								public static get(param0: com.sendbird.android.shadow.okhttp3.Request, param1: java.net.Proxy.Type): string;
								public static requestPath(param0: com.sendbird.android.shadow.okhttp3.HttpUrl): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http {
							export class RetryAndFollowUpInterceptor extends com.sendbird.android.shadow.okhttp3.Interceptor {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http.RetryAndFollowUpInterceptor>;
								public setCallStackTrace(param0: any): void;
								public constructor(param0: com.sendbird.android.shadow.okhttp3.OkHttpClient, param1: boolean);
								public cancel(): void;
								public isCanceled(): boolean;
								public streamAllocation(): com.sendbird.android.shadow.okhttp3.internal.connection.StreamAllocation;
								public intercept(param0: com.sendbird.android.shadow.okhttp3.Interceptor.Chain): com.sendbird.android.shadow.okhttp3.Response;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http {
							export class StatusLine {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http.StatusLine>;
								public static HTTP_TEMP_REDIRECT: number;
								public static HTTP_PERM_REDIRECT: number;
								public static HTTP_CONTINUE: number;
								public protocol: com.sendbird.android.shadow.okhttp3.Protocol;
								public code: number;
								public message: string;
								public toString(): string;
								public constructor(param0: com.sendbird.android.shadow.okhttp3.Protocol, param1: number, param2: string);
								public static get(param0: com.sendbird.android.shadow.okhttp3.Response): com.sendbird.android.shadow.okhttp3.internal.http.StatusLine;
								public static parse(param0: string): com.sendbird.android.shadow.okhttp3.internal.http.StatusLine;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http {
							export class UnrepeatableRequestBody {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http.UnrepeatableRequestBody>;
								/**
								 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.internal.http.UnrepeatableRequestBody interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http1 {
							export class Http1Codec extends com.sendbird.android.shadow.okhttp3.internal.http.HttpCodec {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http1.Http1Codec>;
								public newUnknownLengthSource(): com.sendbird.android.shadow.okio.Source;
								public cancel(): void;
								public newFixedLengthSource(param0: number): com.sendbird.android.shadow.okio.Source;
								public writeRequestHeaders(param0: com.sendbird.android.shadow.okhttp3.Request): void;
								public newChunkedSink(): com.sendbird.android.shadow.okio.Sink;
								public constructor(param0: com.sendbird.android.shadow.okhttp3.OkHttpClient, param1: com.sendbird.android.shadow.okhttp3.internal.connection.StreamAllocation, param2: com.sendbird.android.shadow.okio.BufferedSource, param3: com.sendbird.android.shadow.okio.BufferedSink);
								public newFixedLengthSink(param0: number): com.sendbird.android.shadow.okio.Sink;
								public createRequestBody(param0: com.sendbird.android.shadow.okhttp3.Request, param1: number): com.sendbird.android.shadow.okio.Sink;
								public openResponseBody(param0: com.sendbird.android.shadow.okhttp3.Response): com.sendbird.android.shadow.okhttp3.ResponseBody;
								public finishRequest(): void;
								public readHeaders(): com.sendbird.android.shadow.okhttp3.Headers;
								public newChunkedSource(param0: com.sendbird.android.shadow.okhttp3.HttpUrl): com.sendbird.android.shadow.okio.Source;
								public flushRequest(): void;
								public writeRequest(param0: com.sendbird.android.shadow.okhttp3.Headers, param1: string): void;
								public isClosed(): boolean;
								public readResponseHeaders(param0: boolean): com.sendbird.android.shadow.okhttp3.Response.Builder;
							}
							export module Http1Codec {
								export abstract class AbstractSource extends com.sendbird.android.shadow.okio.Source {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http1.Http1Codec.AbstractSource>;
									public closed: boolean;
									public bytesRead: number;
									public close(): void;
									public endOfInput(param0: boolean, param1: java.io.IOException): void;
									public read(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): number;
									public timeout(): com.sendbird.android.shadow.okio.Timeout;
								}
								export class ChunkedSink extends com.sendbird.android.shadow.okio.Sink {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http1.Http1Codec.ChunkedSink>;
									public close(): void;
									public write(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): void;
									public timeout(): com.sendbird.android.shadow.okio.Timeout;
									public flush(): void;
								}
								export class ChunkedSource extends com.sendbird.android.shadow.okhttp3.internal.http1.Http1Codec.AbstractSource {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http1.Http1Codec.ChunkedSource>;
									public close(): void;
									public read(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): number;
									public timeout(): com.sendbird.android.shadow.okio.Timeout;
								}
								export class FixedLengthSink extends com.sendbird.android.shadow.okio.Sink {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http1.Http1Codec.FixedLengthSink>;
									public close(): void;
									public write(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): void;
									public timeout(): com.sendbird.android.shadow.okio.Timeout;
									public flush(): void;
								}
								export class FixedLengthSource extends com.sendbird.android.shadow.okhttp3.internal.http1.Http1Codec.AbstractSource {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http1.Http1Codec.FixedLengthSource>;
									public close(): void;
									public read(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): number;
									public timeout(): com.sendbird.android.shadow.okio.Timeout;
								}
								export class UnknownLengthSource extends com.sendbird.android.shadow.okhttp3.internal.http1.Http1Codec.AbstractSource {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http1.Http1Codec.UnknownLengthSource>;
									public close(): void;
									public read(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): number;
									public timeout(): com.sendbird.android.shadow.okio.Timeout;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http2 {
							export class ConnectionShutdownException {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.ConnectionShutdownException>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http2 {
							export class ErrorCode {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode>;
								public static NO_ERROR: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode;
								public static PROTOCOL_ERROR: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode;
								public static INTERNAL_ERROR: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode;
								public static FLOW_CONTROL_ERROR: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode;
								public static REFUSED_STREAM: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode;
								public static CANCEL: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode;
								public static COMPRESSION_ERROR: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode;
								public static CONNECT_ERROR: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode;
								public static ENHANCE_YOUR_CALM: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode;
								public static INADEQUATE_SECURITY: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode;
								public static HTTP_1_1_REQUIRED: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode;
								public httpCode: number;
								public static fromHttp2(param0: number): com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode;
								public static values(): androidNative.Array<com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode>;
								public static valueOf(param0: string): com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http2 {
							export class Header {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Header>;
								public static PSEUDO_PREFIX: com.sendbird.android.shadow.okio.ByteString;
								public static RESPONSE_STATUS_UTF8: string;
								public static TARGET_METHOD_UTF8: string;
								public static TARGET_PATH_UTF8: string;
								public static TARGET_SCHEME_UTF8: string;
								public static TARGET_AUTHORITY_UTF8: string;
								public static RESPONSE_STATUS: com.sendbird.android.shadow.okio.ByteString;
								public static TARGET_METHOD: com.sendbird.android.shadow.okio.ByteString;
								public static TARGET_PATH: com.sendbird.android.shadow.okio.ByteString;
								public static TARGET_SCHEME: com.sendbird.android.shadow.okio.ByteString;
								public static TARGET_AUTHORITY: com.sendbird.android.shadow.okio.ByteString;
								public name: com.sendbird.android.shadow.okio.ByteString;
								public value: com.sendbird.android.shadow.okio.ByteString;
								public constructor(param0: com.sendbird.android.shadow.okio.ByteString, param1: com.sendbird.android.shadow.okio.ByteString);
								public toString(): string;
								public constructor(param0: string, param1: string);
								public constructor(param0: com.sendbird.android.shadow.okio.ByteString, param1: string);
								public equals(param0: any): boolean;
								public hashCode(): number;
							}
							export module Header {
								export class Listener {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Header.Listener>;
									/**
									 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.internal.http2.Header$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onHeaders(param0: com.sendbird.android.shadow.okhttp3.Headers): void;
									});
									public constructor();
									public onHeaders(param0: com.sendbird.android.shadow.okhttp3.Headers): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http2 {
							export class Hpack {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Hpack>;
							}
							export module Hpack {
								export class Reader {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Hpack.Reader>;
									public getAndResetHeaderList(): java.util.List<com.sendbird.android.shadow.okhttp3.internal.http2.Header>;
								}
								export class Writer {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Hpack.Writer>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http2 {
							export class Http2 {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Http2>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http2 {
							export class Http2Codec extends com.sendbird.android.shadow.okhttp3.internal.http.HttpCodec {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Http2Codec>;
								public static readHttp2HeadersList(param0: com.sendbird.android.shadow.okhttp3.Headers, param1: com.sendbird.android.shadow.okhttp3.Protocol): com.sendbird.android.shadow.okhttp3.Response.Builder;
								public flushRequest(): void;
								public constructor(param0: com.sendbird.android.shadow.okhttp3.OkHttpClient, param1: com.sendbird.android.shadow.okhttp3.Interceptor.Chain, param2: com.sendbird.android.shadow.okhttp3.internal.connection.StreamAllocation, param3: com.sendbird.android.shadow.okhttp3.internal.http2.Http2Connection);
								public readResponseHeaders(param0: boolean): com.sendbird.android.shadow.okhttp3.Response.Builder;
								public cancel(): void;
								public writeRequestHeaders(param0: com.sendbird.android.shadow.okhttp3.Request): void;
								public createRequestBody(param0: com.sendbird.android.shadow.okhttp3.Request, param1: number): com.sendbird.android.shadow.okio.Sink;
								public finishRequest(): void;
								public static http2HeadersList(param0: com.sendbird.android.shadow.okhttp3.Request): java.util.List<com.sendbird.android.shadow.okhttp3.internal.http2.Header>;
								public openResponseBody(param0: com.sendbird.android.shadow.okhttp3.Response): com.sendbird.android.shadow.okhttp3.ResponseBody;
							}
							export module Http2Codec {
								export class StreamFinishingSource extends com.sendbird.android.shadow.okio.ForwardingSource {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Http2Codec.StreamFinishingSource>;
									public close(): void;
									public read(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): number;
									public timeout(): com.sendbird.android.shadow.okio.Timeout;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http2 {
							export class Http2Connection {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Http2Connection>;
								public flush(): void;
								public getProtocol(): com.sendbird.android.shadow.okhttp3.Protocol;
								public writeData(param0: number, param1: boolean, param2: com.sendbird.android.shadow.okio.Buffer, param3: number): void;
								public setSettings(param0: com.sendbird.android.shadow.okhttp3.internal.http2.Settings): void;
								public isShutdown(): boolean;
								public shutdown(param0: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode): void;
								public maxConcurrentStreams(): number;
								public openStreamCount(): number;
								public pushStream(param0: number, param1: java.util.List<com.sendbird.android.shadow.okhttp3.internal.http2.Header>, param2: boolean): com.sendbird.android.shadow.okhttp3.internal.http2.Http2Stream;
								public newStream(param0: java.util.List<com.sendbird.android.shadow.okhttp3.internal.http2.Header>, param1: boolean): com.sendbird.android.shadow.okhttp3.internal.http2.Http2Stream;
								public close(): void;
								public start(): void;
							}
							export module Http2Connection {
								export class Builder {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Http2Connection.Builder>;
									public socket(param0: java.net.Socket, param1: string, param2: com.sendbird.android.shadow.okio.BufferedSource, param3: com.sendbird.android.shadow.okio.BufferedSink): com.sendbird.android.shadow.okhttp3.internal.http2.Http2Connection.Builder;
									public listener(param0: com.sendbird.android.shadow.okhttp3.internal.http2.Http2Connection.Listener): com.sendbird.android.shadow.okhttp3.internal.http2.Http2Connection.Builder;
									public pushObserver(param0: com.sendbird.android.shadow.okhttp3.internal.http2.PushObserver): com.sendbird.android.shadow.okhttp3.internal.http2.Http2Connection.Builder;
									public pingIntervalMillis(param0: number): com.sendbird.android.shadow.okhttp3.internal.http2.Http2Connection.Builder;
									public constructor(param0: boolean);
									public build(): com.sendbird.android.shadow.okhttp3.internal.http2.Http2Connection;
									public socket(param0: java.net.Socket): com.sendbird.android.shadow.okhttp3.internal.http2.Http2Connection.Builder;
								}
								export abstract class Listener {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Http2Connection.Listener>;
									public static REFUSE_INCOMING_STREAMS: com.sendbird.android.shadow.okhttp3.internal.http2.Http2Connection.Listener;
									public constructor();
									public onSettings(param0: com.sendbird.android.shadow.okhttp3.internal.http2.Http2Connection): void;
									public onStream(param0: com.sendbird.android.shadow.okhttp3.internal.http2.Http2Stream): void;
								}
								export class PingRunnable extends com.sendbird.android.shadow.okhttp3.internal.NamedRunnable {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Http2Connection.PingRunnable>;
									public execute(): void;
								}
								export class ReaderRunnable extends com.sendbird.android.shadow.okhttp3.internal.NamedRunnable implements com.sendbird.android.shadow.okhttp3.internal.http2.Http2Reader.Handler {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Http2Connection.ReaderRunnable>;
									public pushPromise(param0: number, param1: number, param2: java.util.List<com.sendbird.android.shadow.okhttp3.internal.http2.Header>): void;
									public headers(param0: boolean, param1: number, param2: number, param3: java.util.List<com.sendbird.android.shadow.okhttp3.internal.http2.Header>): void;
									public settings(param0: boolean, param1: com.sendbird.android.shadow.okhttp3.internal.http2.Settings): void;
									public priority(param0: number, param1: number, param2: number, param3: boolean): void;
									public execute(): void;
									public rstStream(param0: number, param1: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode): void;
									public goAway(param0: number, param1: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode, param2: com.sendbird.android.shadow.okio.ByteString): void;
									public alternateService(param0: number, param1: string, param2: com.sendbird.android.shadow.okio.ByteString, param3: string, param4: number, param5: number): void;
									public data(param0: boolean, param1: number, param2: com.sendbird.android.shadow.okio.BufferedSource, param3: number): void;
									public ping(param0: boolean, param1: number, param2: number): void;
									public windowUpdate(param0: number, param1: number): void;
									public ackSettings(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http2 {
							export class Http2Reader {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Http2Reader>;
								public readConnectionPreface(param0: com.sendbird.android.shadow.okhttp3.internal.http2.Http2Reader.Handler): void;
								public nextFrame(param0: boolean, param1: com.sendbird.android.shadow.okhttp3.internal.http2.Http2Reader.Handler): boolean;
								public close(): void;
							}
							export module Http2Reader {
								export class ContinuationSource extends com.sendbird.android.shadow.okio.Source {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Http2Reader.ContinuationSource>;
									public close(): void;
									public read(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): number;
									public timeout(): com.sendbird.android.shadow.okio.Timeout;
								}
								export class Handler {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Http2Reader.Handler>;
									/**
									 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.internal.http2.Http2Reader$Handler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										data(param0: boolean, param1: number, param2: com.sendbird.android.shadow.okio.BufferedSource, param3: number): void;
										headers(param0: boolean, param1: number, param2: number, param3: java.util.List<com.sendbird.android.shadow.okhttp3.internal.http2.Header>): void;
										rstStream(param0: number, param1: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode): void;
										settings(param0: boolean, param1: com.sendbird.android.shadow.okhttp3.internal.http2.Settings): void;
										ackSettings(): void;
										ping(param0: boolean, param1: number, param2: number): void;
										goAway(param0: number, param1: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode, param2: com.sendbird.android.shadow.okio.ByteString): void;
										windowUpdate(param0: number, param1: number): void;
										priority(param0: number, param1: number, param2: number, param3: boolean): void;
										pushPromise(param0: number, param1: number, param2: java.util.List<com.sendbird.android.shadow.okhttp3.internal.http2.Header>): void;
										alternateService(param0: number, param1: string, param2: com.sendbird.android.shadow.okio.ByteString, param3: string, param4: number, param5: number): void;
									});
									public constructor();
									public pushPromise(param0: number, param1: number, param2: java.util.List<com.sendbird.android.shadow.okhttp3.internal.http2.Header>): void;
									public headers(param0: boolean, param1: number, param2: number, param3: java.util.List<com.sendbird.android.shadow.okhttp3.internal.http2.Header>): void;
									public settings(param0: boolean, param1: com.sendbird.android.shadow.okhttp3.internal.http2.Settings): void;
									public priority(param0: number, param1: number, param2: number, param3: boolean): void;
									public rstStream(param0: number, param1: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode): void;
									public goAway(param0: number, param1: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode, param2: com.sendbird.android.shadow.okio.ByteString): void;
									public alternateService(param0: number, param1: string, param2: com.sendbird.android.shadow.okio.ByteString, param3: string, param4: number, param5: number): void;
									public data(param0: boolean, param1: number, param2: com.sendbird.android.shadow.okio.BufferedSource, param3: number): void;
									public ping(param0: boolean, param1: number, param2: number): void;
									public windowUpdate(param0: number, param1: number): void;
									public ackSettings(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http2 {
							export class Http2Stream {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Http2Stream>;
								public isOpen(): boolean;
								public getConnection(): com.sendbird.android.shadow.okhttp3.internal.http2.Http2Connection;
								public writeHeaders(param0: java.util.List<com.sendbird.android.shadow.okhttp3.internal.http2.Header>, param1: boolean): void;
								public isLocallyInitiated(): boolean;
								public getErrorCode(): com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode;
								public readTimeout(): com.sendbird.android.shadow.okio.Timeout;
								public close(param0: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode): void;
								public setHeadersListener(param0: com.sendbird.android.shadow.okhttp3.internal.http2.Header.Listener): void;
								public writeTimeout(): com.sendbird.android.shadow.okio.Timeout;
								public getId(): number;
								public closeLater(param0: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode): void;
								public takeHeaders(): com.sendbird.android.shadow.okhttp3.Headers;
								public getSink(): com.sendbird.android.shadow.okio.Sink;
								public getSource(): com.sendbird.android.shadow.okio.Source;
							}
							export module Http2Stream {
								export class FramingSink extends com.sendbird.android.shadow.okio.Sink {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Http2Stream.FramingSink>;
									public close(): void;
									public write(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): void;
									public timeout(): com.sendbird.android.shadow.okio.Timeout;
									public flush(): void;
								}
								export class FramingSource extends com.sendbird.android.shadow.okio.Source {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Http2Stream.FramingSource>;
									public close(): void;
									public read(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): number;
									public timeout(): com.sendbird.android.shadow.okio.Timeout;
								}
								export class StreamTimeout extends com.sendbird.android.shadow.okio.AsyncTimeout {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Http2Stream.StreamTimeout>;
									public newTimeoutException(param0: java.io.IOException): java.io.IOException;
									public exitAndThrowIfTimedOut(): void;
									public timedOut(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http2 {
							export class Http2Writer {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Http2Writer>;
								public frameHeader(param0: number, param1: number, param2: number, param3: number): void;
								public data(param0: boolean, param1: number, param2: com.sendbird.android.shadow.okio.Buffer, param3: number): void;
								public ping(param0: boolean, param1: number, param2: number): void;
								public headers(param0: number, param1: java.util.List<com.sendbird.android.shadow.okhttp3.internal.http2.Header>): void;
								public goAway(param0: number, param1: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode, param2: androidNative.Array<number>): void;
								public settings(param0: com.sendbird.android.shadow.okhttp3.internal.http2.Settings): void;
								public synStream(param0: boolean, param1: number, param2: number, param3: java.util.List<com.sendbird.android.shadow.okhttp3.internal.http2.Header>): void;
								public applyAndAckSettings(param0: com.sendbird.android.shadow.okhttp3.internal.http2.Settings): void;
								public flush(): void;
								public connectionPreface(): void;
								public synReply(param0: boolean, param1: number, param2: java.util.List<com.sendbird.android.shadow.okhttp3.internal.http2.Header>): void;
								public windowUpdate(param0: number, param1: number): void;
								public pushPromise(param0: number, param1: number, param2: java.util.List<com.sendbird.android.shadow.okhttp3.internal.http2.Header>): void;
								public maxDataLength(): number;
								public close(): void;
								public rstStream(param0: number, param1: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http2 {
							export class Huffman {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Huffman>;
								public static get(): com.sendbird.android.shadow.okhttp3.internal.http2.Huffman;
							}
							export module Huffman {
								export class Node {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Huffman.Node>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http2 {
							export class PushObserver {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.PushObserver>;
								/**
								 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.internal.http2.PushObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onRequest(param0: number, param1: java.util.List<com.sendbird.android.shadow.okhttp3.internal.http2.Header>): boolean;
									onHeaders(param0: number, param1: java.util.List<com.sendbird.android.shadow.okhttp3.internal.http2.Header>, param2: boolean): boolean;
									onData(param0: number, param1: com.sendbird.android.shadow.okio.BufferedSource, param2: number, param3: boolean): boolean;
									onReset(param0: number, param1: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode): void;
									<clinit>(): void;
								});
								public constructor();
								public static CANCEL: com.sendbird.android.shadow.okhttp3.internal.http2.PushObserver;
								public onHeaders(param0: number, param1: java.util.List<com.sendbird.android.shadow.okhttp3.internal.http2.Header>, param2: boolean): boolean;
								public onData(param0: number, param1: com.sendbird.android.shadow.okio.BufferedSource, param2: number, param3: boolean): boolean;
								public onRequest(param0: number, param1: java.util.List<com.sendbird.android.shadow.okhttp3.internal.http2.Header>): boolean;
								public onReset(param0: number, param1: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http2 {
							export class Settings {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.Settings>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module http2 {
							export class StreamResetException {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.http2.StreamResetException>;
								public errorCode: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode;
								public constructor(param0: com.sendbird.android.shadow.okhttp3.internal.http2.ErrorCode);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module io {
							export class FileSystem {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.io.FileSystem>;
								/**
								 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.internal.io.FileSystem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									source(param0: java.io.File): com.sendbird.android.shadow.okio.Source;
									sink(param0: java.io.File): com.sendbird.android.shadow.okio.Sink;
									appendingSink(param0: java.io.File): com.sendbird.android.shadow.okio.Sink;
									delete(param0: java.io.File): void;
									exists(param0: java.io.File): boolean;
									size(param0: java.io.File): number;
									rename(param0: java.io.File, param1: java.io.File): void;
									deleteContents(param0: java.io.File): void;
									<clinit>(): void;
								});
								public constructor();
								public static SYSTEM: com.sendbird.android.shadow.okhttp3.internal.io.FileSystem;
								public sink(param0: java.io.File): com.sendbird.android.shadow.okio.Sink;
								public exists(param0: java.io.File): boolean;
								public appendingSink(param0: java.io.File): com.sendbird.android.shadow.okio.Sink;
								public delete(param0: java.io.File): void;
								public source(param0: java.io.File): com.sendbird.android.shadow.okio.Source;
								public size(param0: java.io.File): number;
								public rename(param0: java.io.File, param1: java.io.File): void;
								public deleteContents(param0: java.io.File): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module platform {
							export class AndroidPlatform extends com.sendbird.android.shadow.okhttp3.internal.platform.Platform {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.platform.AndroidPlatform>;
								public getSSLContext(): javax.net.ssl.SSLContext;
								public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<com.sendbird.android.shadow.okhttp3.Protocol>): void;
								public buildTrustRootIndex(param0: javax.net.ssl.X509TrustManager): com.sendbird.android.shadow.okhttp3.internal.tls.TrustRootIndex;
								public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
								public logCloseableLeak(param0: string, param1: any): void;
								public static buildIfSupported(): com.sendbird.android.shadow.okhttp3.internal.platform.Platform;
								public trustManager(param0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
								public buildCertificateChainCleaner(param0: javax.net.ssl.X509TrustManager): com.sendbird.android.shadow.okhttp3.internal.tls.CertificateChainCleaner;
								public connectSocket(param0: java.net.Socket, param1: java.net.InetSocketAddress, param2: number): void;
								public getStackTraceForCloseable(param0: string): any;
								public log(param0: number, param1: string, param2: java.lang.Throwable): void;
								public buildCertificateChainCleaner(param0: javax.net.ssl.SSLSocketFactory): com.sendbird.android.shadow.okhttp3.internal.tls.CertificateChainCleaner;
								public isCleartextTrafficPermitted(param0: string): boolean;
							}
							export module AndroidPlatform {
								export class AndroidCertificateChainCleaner extends com.sendbird.android.shadow.okhttp3.internal.tls.CertificateChainCleaner {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.platform.AndroidPlatform.AndroidCertificateChainCleaner>;
									public hashCode(): number;
									public clean(param0: java.util.List<java.security.cert.Certificate>, param1: string): java.util.List<java.security.cert.Certificate>;
									public equals(param0: any): boolean;
								}
								export class AndroidTrustRootIndex extends com.sendbird.android.shadow.okhttp3.internal.tls.TrustRootIndex {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.platform.AndroidPlatform.AndroidTrustRootIndex>;
									public findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
									public hashCode(): number;
									public equals(param0: any): boolean;
								}
								export class CloseGuard {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.platform.AndroidPlatform.CloseGuard>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module platform {
							export class ConscryptPlatform extends com.sendbird.android.shadow.okhttp3.internal.platform.Platform {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.platform.ConscryptPlatform>;
								public getSSLContext(): javax.net.ssl.SSLContext;
								public configureSslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
								public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<com.sendbird.android.shadow.okhttp3.Protocol>): void;
								public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
								public trustManager(param0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
								public static buildIfSupported(): com.sendbird.android.shadow.okhttp3.internal.platform.ConscryptPlatform;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module platform {
							export class Jdk9Platform extends com.sendbird.android.shadow.okhttp3.internal.platform.Platform {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.platform.Jdk9Platform>;
								public static buildIfSupported(): com.sendbird.android.shadow.okhttp3.internal.platform.Jdk9Platform;
								public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<com.sendbird.android.shadow.okhttp3.Protocol>): void;
								public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
								public trustManager(param0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module platform {
							export class JdkWithJettyBootPlatform extends com.sendbird.android.shadow.okhttp3.internal.platform.Platform {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.platform.JdkWithJettyBootPlatform>;
								public afterHandshake(param0: javax.net.ssl.SSLSocket): void;
								public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<com.sendbird.android.shadow.okhttp3.Protocol>): void;
								public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
								public static buildIfSupported(): com.sendbird.android.shadow.okhttp3.internal.platform.Platform;
							}
							export module JdkWithJettyBootPlatform {
								export class JettyNegoProvider {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.platform.JdkWithJettyBootPlatform.JettyNegoProvider>;
									public invoke(param0: any, param1: java.lang.reflect.Method, param2: androidNative.Array<any>): any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module platform {
							export class OptionalMethod<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.platform.OptionalMethod<any>>;
								public invokeOptionalWithoutCheckedException(param0: T, param1: androidNative.Array<any>): any;
								public invokeOptional(param0: T, param1: androidNative.Array<any>): any;
								public invoke(param0: T, param1: androidNative.Array<any>): any;
								public isSupported(param0: T): boolean;
								public invokeWithoutCheckedException(param0: T, param1: androidNative.Array<any>): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module platform {
							export class Platform {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.platform.Platform>;
								public static INFO: number;
								public static WARN: number;
								public toString(): string;
								public getSSLContext(): javax.net.ssl.SSLContext;
								public afterHandshake(param0: javax.net.ssl.SSLSocket): void;
								public getPrefix(): string;
								public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<com.sendbird.android.shadow.okhttp3.Protocol>): void;
								public buildTrustRootIndex(param0: javax.net.ssl.X509TrustManager): com.sendbird.android.shadow.okhttp3.internal.tls.TrustRootIndex;
								public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
								public static alpnProtocolNames(param0: java.util.List<com.sendbird.android.shadow.okhttp3.Protocol>): java.util.List<string>;
								public logCloseableLeak(param0: string, param1: any): void;
								public constructor();
								public static get(): com.sendbird.android.shadow.okhttp3.internal.platform.Platform;
								public trustManager(param0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
								public static isConscryptPreferred(): boolean;
								public configureSslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
								public buildCertificateChainCleaner(param0: javax.net.ssl.X509TrustManager): com.sendbird.android.shadow.okhttp3.internal.tls.CertificateChainCleaner;
								public connectSocket(param0: java.net.Socket, param1: java.net.InetSocketAddress, param2: number): void;
								public getStackTraceForCloseable(param0: string): any;
								public log(param0: number, param1: string, param2: java.lang.Throwable): void;
								public buildCertificateChainCleaner(param0: javax.net.ssl.SSLSocketFactory): com.sendbird.android.shadow.okhttp3.internal.tls.CertificateChainCleaner;
								public isCleartextTrafficPermitted(param0: string): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module proxy {
							export class NullProxySelector {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.proxy.NullProxySelector>;
								public select(param0: java.net.URI): java.util.List<java.net.Proxy>;
								public constructor();
								public connectFailed(param0: java.net.URI, param1: java.net.SocketAddress, param2: java.io.IOException): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module publicsuffix {
							export class PublicSuffixDatabase {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.publicsuffix.PublicSuffixDatabase>;
								public static PUBLIC_SUFFIX_RESOURCE: string;
								public getEffectiveTldPlusOne(param0: string): string;
								public static get(): com.sendbird.android.shadow.okhttp3.internal.publicsuffix.PublicSuffixDatabase;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module tls {
							export class BasicCertificateChainCleaner extends com.sendbird.android.shadow.okhttp3.internal.tls.CertificateChainCleaner {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.tls.BasicCertificateChainCleaner>;
								public clean(param0: java.util.List<java.security.cert.Certificate>, param1: string): java.util.List<java.security.cert.Certificate>;
								public equals(param0: any): boolean;
								public constructor();
								public constructor(param0: com.sendbird.android.shadow.okhttp3.internal.tls.TrustRootIndex);
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module tls {
							export class BasicTrustRootIndex extends com.sendbird.android.shadow.okhttp3.internal.tls.TrustRootIndex {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.tls.BasicTrustRootIndex>;
								public findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
								public constructor(param0: androidNative.Array<java.security.cert.X509Certificate>);
								public equals(param0: any): boolean;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module tls {
							export abstract class CertificateChainCleaner {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.tls.CertificateChainCleaner>;
								public clean(param0: java.util.List<java.security.cert.Certificate>, param1: string): java.util.List<java.security.cert.Certificate>;
								public static get(param0: androidNative.Array<java.security.cert.X509Certificate>): com.sendbird.android.shadow.okhttp3.internal.tls.CertificateChainCleaner;
								public constructor();
								public static get(param0: javax.net.ssl.X509TrustManager): com.sendbird.android.shadow.okhttp3.internal.tls.CertificateChainCleaner;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module tls {
							export class DistinguishedNameParser {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.tls.DistinguishedNameParser>;
								public findMostSpecific(param0: string): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module tls {
							export class OkHostnameVerifier {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.tls.OkHostnameVerifier>;
								public static INSTANCE: com.sendbird.android.shadow.okhttp3.internal.tls.OkHostnameVerifier;
								public verify(param0: string, param1: javax.net.ssl.SSLSession): boolean;
								public verifyHostname(param0: string, param1: string): boolean;
								public static allSubjectAltNames(param0: java.security.cert.X509Certificate): java.util.List<string>;
								public verify(param0: string, param1: java.security.cert.X509Certificate): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module tls {
							export class TrustRootIndex {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.tls.TrustRootIndex>;
								/**
								 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.internal.tls.TrustRootIndex interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
								});
								public constructor();
								public findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module ws {
							export class RealWebSocket implements com.sendbird.android.shadow.okhttp3.WebSocket, com.sendbird.android.shadow.okhttp3.internal.ws.WebSocketReader.FrameCallback {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.ws.RealWebSocket>;
								public constructor(param0: com.sendbird.android.shadow.okhttp3.Request, param1: com.sendbird.android.shadow.okhttp3.WebSocketListener, param2: java.util.Random, param3: number);
								public failWebSocket(param0: java.lang.Exception, param1: com.sendbird.android.shadow.okhttp3.Response): void;
								public cancel(): void;
								public loopReader(): void;
								public onReadPong(param0: com.sendbird.android.shadow.okio.ByteString): void;
								public onReadMessage(param0: string): void;
								public onReadMessage(param0: com.sendbird.android.shadow.okio.ByteString): void;
								public initReaderAndWriter(param0: string, param1: com.sendbird.android.shadow.okhttp3.internal.ws.RealWebSocket.Streams): void;
								public send(param0: string): boolean;
								public queueSize(): number;
								public send(param0: com.sendbird.android.shadow.okio.ByteString): boolean;
								public connect(param0: com.sendbird.android.shadow.okhttp3.OkHttpClient): void;
								public close(param0: number, param1: string): boolean;
								public onReadPing(param0: com.sendbird.android.shadow.okio.ByteString): void;
								public request(): com.sendbird.android.shadow.okhttp3.Request;
								public onReadClose(param0: number, param1: string): void;
							}
							export module RealWebSocket {
								export class CancelRunnable {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.ws.RealWebSocket.CancelRunnable>;
									public run(): void;
								}
								export class Close {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.ws.RealWebSocket.Close>;
								}
								export class Message {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.ws.RealWebSocket.Message>;
								}
								export class PingRunnable {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.ws.RealWebSocket.PingRunnable>;
									public run(): void;
								}
								export abstract class Streams {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.ws.RealWebSocket.Streams>;
									public client: boolean;
									public source: com.sendbird.android.shadow.okio.BufferedSource;
									public sink: com.sendbird.android.shadow.okio.BufferedSink;
									public constructor(param0: boolean, param1: com.sendbird.android.shadow.okio.BufferedSource, param2: com.sendbird.android.shadow.okio.BufferedSink);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module ws {
							export class WebSocketProtocol {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.ws.WebSocketProtocol>;
								public static acceptHeader(param0: string): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module ws {
							export class WebSocketReader {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.ws.WebSocketReader>;
							}
							export module WebSocketReader {
								export class FrameCallback {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.ws.WebSocketReader.FrameCallback>;
									/**
									 * Constructs a new instance of the com.sendbird.android.shadow.okhttp3.internal.ws.WebSocketReader$FrameCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onReadMessage(param0: string): void;
										onReadMessage(param0: com.sendbird.android.shadow.okio.ByteString): void;
										onReadPing(param0: com.sendbird.android.shadow.okio.ByteString): void;
										onReadPong(param0: com.sendbird.android.shadow.okio.ByteString): void;
										onReadClose(param0: number, param1: string): void;
									});
									public constructor();
									public onReadPing(param0: com.sendbird.android.shadow.okio.ByteString): void;
									public onReadMessage(param0: string): void;
									public onReadClose(param0: number, param1: string): void;
									public onReadMessage(param0: com.sendbird.android.shadow.okio.ByteString): void;
									public onReadPong(param0: com.sendbird.android.shadow.okio.ByteString): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okhttp3 {
					export module internal {
						export module ws {
							export class WebSocketWriter {
								public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.ws.WebSocketWriter>;
							}
							export module WebSocketWriter {
								export class FrameSink extends com.sendbird.android.shadow.okio.Sink {
									public static class: java.lang.Class<com.sendbird.android.shadow.okhttp3.internal.ws.WebSocketWriter.FrameSink>;
									public close(): void;
									public write(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): void;
									public timeout(): com.sendbird.android.shadow.okio.Timeout;
									public flush(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}


declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class AsyncTimeout extends com.sendbird.android.shadow.okio.Timeout {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.AsyncTimeout>;
						public constructor();
						public enter(): void;
						public newTimeoutException(param0: java.io.IOException): java.io.IOException;
						public exit(): boolean;
						public sink(param0: com.sendbird.android.shadow.okio.Sink): com.sendbird.android.shadow.okio.Sink;
						public source(param0: com.sendbird.android.shadow.okio.Source): com.sendbird.android.shadow.okio.Source;
						public timedOut(): void;
					}
					export module AsyncTimeout {
						export class Watchdog {
							public static class: java.lang.Class<com.sendbird.android.shadow.okio.AsyncTimeout.Watchdog>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class Base64 {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.Base64>;
						public static encode(param0: androidNative.Array<number>): string;
						public static decode(param0: string): androidNative.Array<number>;
						public static encodeUrl(param0: androidNative.Array<number>): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class Buffer implements com.sendbird.android.shadow.okio.BufferedSource, com.sendbird.android.shadow.okio.BufferedSink {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.Buffer>;
						public readShortLe(): number;
						public writeLongLe(param0: number): com.sendbird.android.shadow.okio.Buffer;
						public read(param0: java.nio.ByteBuffer): number;
						public close(): void;
						public writeIntLe(param0: number): com.sendbird.android.shadow.okio.Buffer;
						public require(param0: number): void;
						public writeIntLe(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public writeHexadecimalUnsignedLong(param0: number): com.sendbird.android.shadow.okio.Buffer;
						public size(): number;
						public constructor();
						public readFully(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): void;
						public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
						public flush(): void;
						public readUtf8(): string;
						public toString(): string;
						public readAndWriteUnsafe(param0: com.sendbird.android.shadow.okio.Buffer.UnsafeCursor): com.sendbird.android.shadow.okio.Buffer.UnsafeCursor;
						public indexOf(param0: number, param1: number, param2: number): number;
						public indexOf(param0: number): number;
						public write(param0: androidNative.Array<number>, param1: number, param2: number): com.sendbird.android.shadow.okio.BufferedSink;
						public rangeEquals(param0: number, param1: com.sendbird.android.shadow.okio.ByteString): boolean;
						public outputStream(): java.io.OutputStream;
						public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): com.sendbird.android.shadow.okio.Buffer;
						public emitCompleteSegments(): com.sendbird.android.shadow.okio.Buffer;
						public readInt(): number;
						public emit(): com.sendbird.android.shadow.okio.BufferedSink;
						public writeShortLe(param0: number): com.sendbird.android.shadow.okio.Buffer;
						public md5(): com.sendbird.android.shadow.okio.ByteString;
						public writeTo(param0: java.io.OutputStream): com.sendbird.android.shadow.okio.Buffer;
						public readAll(param0: com.sendbird.android.shadow.okio.Sink): number;
						public writeAll(param0: com.sendbird.android.shadow.okio.Source): number;
						public writeLong(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public copyTo(param0: com.sendbird.android.shadow.okio.Buffer, param1: number, param2: number): com.sendbird.android.shadow.okio.Buffer;
						public write(param0: com.sendbird.android.shadow.okio.ByteString): com.sendbird.android.shadow.okio.BufferedSink;
						public snapshot(): com.sendbird.android.shadow.okio.ByteString;
						public readByteArray(): androidNative.Array<number>;
						public write(param0: androidNative.Array<number>, param1: number, param2: number): com.sendbird.android.shadow.okio.Buffer;
						public writeString(param0: string, param1: java.nio.charset.Charset): com.sendbird.android.shadow.okio.Buffer;
						public writeShortLe(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public readUtf8CodePoint(): number;
						public writeUtf8(param0: string): com.sendbird.android.shadow.okio.Buffer;
						public writeString(param0: string, param1: java.nio.charset.Charset): com.sendbird.android.shadow.okio.BufferedSink;
						public snapshot(param0: number): com.sendbird.android.shadow.okio.ByteString;
						public buffer(): com.sendbird.android.shadow.okio.Buffer;
						public readByteArray(param0: number): androidNative.Array<number>;
						public writeLong(param0: number): com.sendbird.android.shadow.okio.Buffer;
						public readFrom(param0: java.io.InputStream): com.sendbird.android.shadow.okio.Buffer;
						public select(param0: com.sendbird.android.shadow.okio.Options): number;
						public readHexadecimalUnsignedLong(): number;
						public exhausted(): boolean;
						public readFrom(param0: java.io.InputStream, param1: number): com.sendbird.android.shadow.okio.Buffer;
						public skip(param0: number): void;
						public write(param0: java.nio.ByteBuffer): number;
						public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): com.sendbird.android.shadow.okio.BufferedSink;
						public equals(param0: any): boolean;
						public sha1(): com.sendbird.android.shadow.okio.ByteString;
						public sha256(): com.sendbird.android.shadow.okio.ByteString;
						public inputStream(): java.io.InputStream;
						public readByte(): number;
						public sha512(): com.sendbird.android.shadow.okio.ByteString;
						public writeInt(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public hmacSha1(param0: com.sendbird.android.shadow.okio.ByteString): com.sendbird.android.shadow.okio.ByteString;
						public isOpen(): boolean;
						public readAndWriteUnsafe(): com.sendbird.android.shadow.okio.Buffer.UnsafeCursor;
						public writeShort(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public readLong(): number;
						public readString(param0: number, param1: java.nio.charset.Charset): string;
						public copyTo(param0: java.io.OutputStream, param1: number, param2: number): com.sendbird.android.shadow.okio.Buffer;
						public readLongLe(): number;
						public writeUtf8CodePoint(param0: number): com.sendbird.android.shadow.okio.Buffer;
						public writeShort(param0: number): com.sendbird.android.shadow.okio.Buffer;
						public writeUtf8(param0: string, param1: number, param2: number): com.sendbird.android.shadow.okio.Buffer;
						public rangeEquals(param0: number, param1: com.sendbird.android.shadow.okio.ByteString, param2: number, param3: number): boolean;
						public writeInt(param0: number): com.sendbird.android.shadow.okio.Buffer;
						public clone(): com.sendbird.android.shadow.okio.Buffer;
						public writeHexadecimalUnsignedLong(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public emitCompleteSegments(): com.sendbird.android.shadow.okio.BufferedSink;
						public readUnsafe(): com.sendbird.android.shadow.okio.Buffer.UnsafeCursor;
						public write(param0: androidNative.Array<number>): com.sendbird.android.shadow.okio.BufferedSink;
						public indexOfElement(param0: com.sendbird.android.shadow.okio.ByteString, param1: number): number;
						public writeDecimalLong(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public write(param0: androidNative.Array<number>): com.sendbird.android.shadow.okio.Buffer;
						public completeSegmentByteCount(): number;
						public writeUtf8CodePoint(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public read(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): number;
						public readByteString(param0: number): com.sendbird.android.shadow.okio.ByteString;
						public clear(): void;
						public readDecimalLong(): number;
						public hmacSha256(param0: com.sendbird.android.shadow.okio.ByteString): com.sendbird.android.shadow.okio.ByteString;
						public indexOf(param0: number, param1: number): number;
						public indexOfElement(param0: com.sendbird.android.shadow.okio.ByteString): number;
						public read(param0: androidNative.Array<number>): number;
						public readUtf8(param0: number): string;
						public writeDecimalLong(param0: number): com.sendbird.android.shadow.okio.Buffer;
						public hashCode(): number;
						public write(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): void;
						public hmacSha512(param0: com.sendbird.android.shadow.okio.ByteString): com.sendbird.android.shadow.okio.ByteString;
						public readIntLe(): number;
						public write(param0: com.sendbird.android.shadow.okio.ByteString): com.sendbird.android.shadow.okio.Buffer;
						public readUnsafe(param0: com.sendbird.android.shadow.okio.Buffer.UnsafeCursor): com.sendbird.android.shadow.okio.Buffer.UnsafeCursor;
						public writeUtf8(param0: string, param1: number, param2: number): com.sendbird.android.shadow.okio.BufferedSink;
						public readString(param0: java.nio.charset.Charset): string;
						public getByte(param0: number): number;
						public readUtf8LineStrict(param0: number): string;
						public readByteString(): com.sendbird.android.shadow.okio.ByteString;
						public writeByte(param0: number): com.sendbird.android.shadow.okio.Buffer;
						public readUtf8LineStrict(): string;
						public indexOf(param0: com.sendbird.android.shadow.okio.ByteString): number;
						public writeTo(param0: java.io.OutputStream, param1: number): com.sendbird.android.shadow.okio.Buffer;
						public writeUtf8(param0: string): com.sendbird.android.shadow.okio.BufferedSink;
						public readFully(param0: androidNative.Array<number>): void;
						public writeLongLe(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public readUtf8Line(): string;
						public writeByte(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public readShort(): number;
						public timeout(): com.sendbird.android.shadow.okio.Timeout;
						public request(param0: number): boolean;
						public indexOf(param0: com.sendbird.android.shadow.okio.ByteString, param1: number): number;
						public copyTo(param0: java.io.OutputStream): com.sendbird.android.shadow.okio.Buffer;
						public write(param0: com.sendbird.android.shadow.okio.Source, param1: number): com.sendbird.android.shadow.okio.BufferedSink;
					}
					export module Buffer {
						export class UnsafeCursor {
							public static class: java.lang.Class<com.sendbird.android.shadow.okio.Buffer.UnsafeCursor>;
							public buffer: com.sendbird.android.shadow.okio.Buffer;
							public readWrite: boolean;
							public offset: number;
							public data: androidNative.Array<number>;
							public start: number;
							public end: number;
							public constructor();
							public close(): void;
							public next(): number;
							public seek(param0: number): number;
							public resizeBuffer(param0: number): number;
							public expandBuffer(param0: number): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class BufferedSink extends com.sendbird.android.shadow.okio.Sink {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.BufferedSink>;
						/**
						 * Constructs a new instance of the com.sendbird.android.shadow.okio.BufferedSink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							buffer(): com.sendbird.android.shadow.okio.Buffer;
							write(param0: com.sendbird.android.shadow.okio.ByteString): com.sendbird.android.shadow.okio.BufferedSink;
							write(param0: androidNative.Array<number>): com.sendbird.android.shadow.okio.BufferedSink;
							write(param0: androidNative.Array<number>, param1: number, param2: number): com.sendbird.android.shadow.okio.BufferedSink;
							writeAll(param0: com.sendbird.android.shadow.okio.Source): number;
							write(param0: com.sendbird.android.shadow.okio.Source, param1: number): com.sendbird.android.shadow.okio.BufferedSink;
							writeUtf8(param0: string): com.sendbird.android.shadow.okio.BufferedSink;
							writeUtf8(param0: string, param1: number, param2: number): com.sendbird.android.shadow.okio.BufferedSink;
							writeUtf8CodePoint(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
							writeString(param0: string, param1: java.nio.charset.Charset): com.sendbird.android.shadow.okio.BufferedSink;
							writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): com.sendbird.android.shadow.okio.BufferedSink;
							writeByte(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
							writeShort(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
							writeShortLe(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
							writeInt(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
							writeIntLe(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
							writeLong(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
							writeLongLe(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
							writeDecimalLong(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
							writeHexadecimalUnsignedLong(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
							flush(): void;
							emit(): com.sendbird.android.shadow.okio.BufferedSink;
							emitCompleteSegments(): com.sendbird.android.shadow.okio.BufferedSink;
							outputStream(): java.io.OutputStream;
							write(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): void;
							flush(): void;
							timeout(): com.sendbird.android.shadow.okio.Timeout;
							close(): void;
						});
						public constructor();
						public outputStream(): java.io.OutputStream;
						public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): com.sendbird.android.shadow.okio.BufferedSink;
						public emit(): com.sendbird.android.shadow.okio.BufferedSink;
						public close(): void;
						public write(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): void;
						public writeUtf8(param0: string, param1: number, param2: number): com.sendbird.android.shadow.okio.BufferedSink;
						public writeIntLe(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public writeAll(param0: com.sendbird.android.shadow.okio.Source): number;
						public writeInt(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public writeLong(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public writeShort(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public write(param0: com.sendbird.android.shadow.okio.ByteString): com.sendbird.android.shadow.okio.BufferedSink;
						public writeUtf8(param0: string): com.sendbird.android.shadow.okio.BufferedSink;
						public writeLongLe(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public writeHexadecimalUnsignedLong(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public flush(): void;
						public emitCompleteSegments(): com.sendbird.android.shadow.okio.BufferedSink;
						public writeShortLe(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public writeByte(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public write(param0: androidNative.Array<number>): com.sendbird.android.shadow.okio.BufferedSink;
						public timeout(): com.sendbird.android.shadow.okio.Timeout;
						public writeDecimalLong(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public writeString(param0: string, param1: java.nio.charset.Charset): com.sendbird.android.shadow.okio.BufferedSink;
						public write(param0: com.sendbird.android.shadow.okio.Source, param1: number): com.sendbird.android.shadow.okio.BufferedSink;
						public writeUtf8CodePoint(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public buffer(): com.sendbird.android.shadow.okio.Buffer;
						public write(param0: androidNative.Array<number>, param1: number, param2: number): com.sendbird.android.shadow.okio.BufferedSink;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class BufferedSource extends com.sendbird.android.shadow.okio.Source {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.BufferedSource>;
						/**
						 * Constructs a new instance of the com.sendbird.android.shadow.okio.BufferedSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							buffer(): com.sendbird.android.shadow.okio.Buffer;
							exhausted(): boolean;
							require(param0: number): void;
							request(param0: number): boolean;
							readByte(): number;
							readShort(): number;
							readShortLe(): number;
							readInt(): number;
							readIntLe(): number;
							readLong(): number;
							readLongLe(): number;
							readDecimalLong(): number;
							readHexadecimalUnsignedLong(): number;
							skip(param0: number): void;
							readByteString(): com.sendbird.android.shadow.okio.ByteString;
							readByteString(param0: number): com.sendbird.android.shadow.okio.ByteString;
							select(param0: com.sendbird.android.shadow.okio.Options): number;
							readByteArray(): androidNative.Array<number>;
							readByteArray(param0: number): androidNative.Array<number>;
							read(param0: androidNative.Array<number>): number;
							readFully(param0: androidNative.Array<number>): void;
							read(param0: androidNative.Array<number>, param1: number, param2: number): number;
							readFully(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): void;
							readAll(param0: com.sendbird.android.shadow.okio.Sink): number;
							readUtf8(): string;
							readUtf8(param0: number): string;
							readUtf8Line(): string;
							readUtf8LineStrict(): string;
							readUtf8LineStrict(param0: number): string;
							readUtf8CodePoint(): number;
							readString(param0: java.nio.charset.Charset): string;
							readString(param0: number, param1: java.nio.charset.Charset): string;
							indexOf(param0: number): number;
							indexOf(param0: number, param1: number): number;
							indexOf(param0: number, param1: number, param2: number): number;
							indexOf(param0: com.sendbird.android.shadow.okio.ByteString): number;
							indexOf(param0: com.sendbird.android.shadow.okio.ByteString, param1: number): number;
							indexOfElement(param0: com.sendbird.android.shadow.okio.ByteString): number;
							indexOfElement(param0: com.sendbird.android.shadow.okio.ByteString, param1: number): number;
							rangeEquals(param0: number, param1: com.sendbird.android.shadow.okio.ByteString): boolean;
							rangeEquals(param0: number, param1: com.sendbird.android.shadow.okio.ByteString, param2: number, param3: number): boolean;
							inputStream(): java.io.InputStream;
							read(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): number;
							timeout(): com.sendbird.android.shadow.okio.Timeout;
							close(): void;
						});
						public constructor();
						public readShortLe(): number;
						public readHexadecimalUnsignedLong(): number;
						public read(param0: androidNative.Array<number>): number;
						public exhausted(): boolean;
						public skip(param0: number): void;
						public readUtf8(param0: number): string;
						public readInt(): number;
						public close(): void;
						public require(param0: number): void;
						public readIntLe(): number;
						public inputStream(): java.io.InputStream;
						public readByte(): number;
						public readAll(param0: com.sendbird.android.shadow.okio.Sink): number;
						public readString(param0: java.nio.charset.Charset): string;
						public readUtf8LineStrict(param0: number): string;
						public readByteString(): com.sendbird.android.shadow.okio.ByteString;
						public readLong(): number;
						public readUtf8LineStrict(): string;
						public readString(param0: number, param1: java.nio.charset.Charset): string;
						public indexOf(param0: com.sendbird.android.shadow.okio.ByteString): number;
						public readLongLe(): number;
						public readByteArray(): androidNative.Array<number>;
						public rangeEquals(param0: number, param1: com.sendbird.android.shadow.okio.ByteString, param2: number, param3: number): boolean;
						public readFully(param0: androidNative.Array<number>): void;
						public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
						public readFully(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): void;
						public readUtf8Line(): string;
						public readUtf8(): string;
						public readShort(): number;
						public readUtf8CodePoint(): number;
						public timeout(): com.sendbird.android.shadow.okio.Timeout;
						public request(param0: number): boolean;
						public indexOfElement(param0: com.sendbird.android.shadow.okio.ByteString, param1: number): number;
						public indexOf(param0: com.sendbird.android.shadow.okio.ByteString, param1: number): number;
						public indexOf(param0: number, param1: number, param2: number): number;
						public buffer(): com.sendbird.android.shadow.okio.Buffer;
						public read(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): number;
						public readByteString(param0: number): com.sendbird.android.shadow.okio.ByteString;
						public indexOf(param0: number): number;
						public readDecimalLong(): number;
						public readByteArray(param0: number): androidNative.Array<number>;
						public rangeEquals(param0: number, param1: com.sendbird.android.shadow.okio.ByteString): boolean;
						public indexOf(param0: number, param1: number): number;
						public select(param0: com.sendbird.android.shadow.okio.Options): number;
						public indexOfElement(param0: com.sendbird.android.shadow.okio.ByteString): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class ByteString extends java.lang.Object {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.ByteString>;
						public static EMPTY: com.sendbird.android.shadow.okio.ByteString;
						public static of(param0: java.nio.ByteBuffer): com.sendbird.android.shadow.okio.ByteString;
						public lastIndexOf(param0: com.sendbird.android.shadow.okio.ByteString): number;
						public endsWith(param0: androidNative.Array<number>): boolean;
						public string(param0: java.nio.charset.Charset): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public asByteBuffer(): java.nio.ByteBuffer;
						public sha1(): com.sendbird.android.shadow.okio.ByteString;
						public startsWith(param0: androidNative.Array<number>): boolean;
						public sha256(): com.sendbird.android.shadow.okio.ByteString;
						public hmacSha512(param0: com.sendbird.android.shadow.okio.ByteString): com.sendbird.android.shadow.okio.ByteString;
						public substring(param0: number): com.sendbird.android.shadow.okio.ByteString;
						public md5(): com.sendbird.android.shadow.okio.ByteString;
						public static decodeBase64(param0: string): com.sendbird.android.shadow.okio.ByteString;
						public sha512(): com.sendbird.android.shadow.okio.ByteString;
						public endsWith(param0: com.sendbird.android.shadow.okio.ByteString): boolean;
						public static of(param0: androidNative.Array<number>): com.sendbird.android.shadow.okio.ByteString;
						public hmacSha1(param0: com.sendbird.android.shadow.okio.ByteString): com.sendbird.android.shadow.okio.ByteString;
						public hex(): string;
						public getByte(param0: number): number;
						public write(param0: java.io.OutputStream): void;
						public size(): number;
						public substring(param0: number, param1: number): com.sendbird.android.shadow.okio.ByteString;
						public indexOf(param0: com.sendbird.android.shadow.okio.ByteString): number;
						public static read(param0: java.io.InputStream, param1: number): com.sendbird.android.shadow.okio.ByteString;
						public toAsciiLowercase(): com.sendbird.android.shadow.okio.ByteString;
						public lastIndexOf(param0: androidNative.Array<number>, param1: number): number;
						public toAsciiUppercase(): com.sendbird.android.shadow.okio.ByteString;
						public startsWith(param0: com.sendbird.android.shadow.okio.ByteString): boolean;
						public static encodeString(param0: string, param1: java.nio.charset.Charset): com.sendbird.android.shadow.okio.ByteString;
						public rangeEquals(param0: number, param1: com.sendbird.android.shadow.okio.ByteString, param2: number, param3: number): boolean;
						public lastIndexOf(param0: androidNative.Array<number>): number;
						public static encodeUtf8(param0: string): com.sendbird.android.shadow.okio.ByteString;
						public base64(): string;
						public compareTo(param0: com.sendbird.android.shadow.okio.ByteString): number;
						public lastIndexOf(param0: com.sendbird.android.shadow.okio.ByteString, param1: number): number;
						public toString(): string;
						public utf8(): string;
						public indexOf(param0: androidNative.Array<number>): number;
						public indexOf(param0: com.sendbird.android.shadow.okio.ByteString, param1: number): number;
						public static decodeHex(param0: string): com.sendbird.android.shadow.okio.ByteString;
						public toByteArray(): androidNative.Array<number>;
						public indexOf(param0: androidNative.Array<number>, param1: number): number;
						public static of(param0: androidNative.Array<number>, param1: number, param2: number): com.sendbird.android.shadow.okio.ByteString;
						public rangeEquals(param0: number, param1: androidNative.Array<number>, param2: number, param3: number): boolean;
						public base64Url(): string;
						public hmacSha256(param0: com.sendbird.android.shadow.okio.ByteString): com.sendbird.android.shadow.okio.ByteString;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class DeflaterSink extends com.sendbird.android.shadow.okio.Sink {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.DeflaterSink>;
						public constructor(param0: com.sendbird.android.shadow.okio.Sink, param1: java.util.zip.Deflater);
						public close(): void;
						public flush(): void;
						public write(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): void;
						public toString(): string;
						public timeout(): com.sendbird.android.shadow.okio.Timeout;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export abstract class ForwardingSink extends com.sendbird.android.shadow.okio.Sink {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.ForwardingSink>;
						public delegate(): com.sendbird.android.shadow.okio.Sink;
						public constructor(param0: com.sendbird.android.shadow.okio.Sink);
						public close(): void;
						public flush(): void;
						public write(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): void;
						public toString(): string;
						public timeout(): com.sendbird.android.shadow.okio.Timeout;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export abstract class ForwardingSource extends com.sendbird.android.shadow.okio.Source {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.ForwardingSource>;
						public constructor(param0: com.sendbird.android.shadow.okio.Source);
						public close(): void;
						public delegate(): com.sendbird.android.shadow.okio.Source;
						public read(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): number;
						public toString(): string;
						public timeout(): com.sendbird.android.shadow.okio.Timeout;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class ForwardingTimeout extends com.sendbird.android.shadow.okio.Timeout {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.ForwardingTimeout>;
						public constructor(param0: com.sendbird.android.shadow.okio.Timeout);
						public clearDeadline(): com.sendbird.android.shadow.okio.Timeout;
						public constructor();
						public delegate(): com.sendbird.android.shadow.okio.Timeout;
						public clearTimeout(): com.sendbird.android.shadow.okio.Timeout;
						public hasDeadline(): boolean;
						public timeoutNanos(): number;
						public deadlineNanoTime(param0: number): com.sendbird.android.shadow.okio.Timeout;
						public deadlineNanoTime(): number;
						public timeout(param0: number, param1: java.util.concurrent.TimeUnit): com.sendbird.android.shadow.okio.Timeout;
						public setDelegate(param0: com.sendbird.android.shadow.okio.Timeout): com.sendbird.android.shadow.okio.ForwardingTimeout;
						public throwIfReached(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class GzipSink extends com.sendbird.android.shadow.okio.Sink {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.GzipSink>;
						public constructor(param0: com.sendbird.android.shadow.okio.Sink);
						public close(): void;
						public flush(): void;
						public write(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): void;
						public deflater(): java.util.zip.Deflater;
						public timeout(): com.sendbird.android.shadow.okio.Timeout;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class GzipSource extends com.sendbird.android.shadow.okio.Source {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.GzipSource>;
						public constructor(param0: com.sendbird.android.shadow.okio.Source);
						public close(): void;
						public read(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): number;
						public timeout(): com.sendbird.android.shadow.okio.Timeout;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class HashingSink extends com.sendbird.android.shadow.okio.ForwardingSink {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.HashingSink>;
						public hash(): com.sendbird.android.shadow.okio.ByteString;
						public static sha1(param0: com.sendbird.android.shadow.okio.Sink): com.sendbird.android.shadow.okio.HashingSink;
						public static hmacSha1(param0: com.sendbird.android.shadow.okio.Sink, param1: com.sendbird.android.shadow.okio.ByteString): com.sendbird.android.shadow.okio.HashingSink;
						public close(): void;
						public static sha256(param0: com.sendbird.android.shadow.okio.Sink): com.sendbird.android.shadow.okio.HashingSink;
						public static hmacSha256(param0: com.sendbird.android.shadow.okio.Sink, param1: com.sendbird.android.shadow.okio.ByteString): com.sendbird.android.shadow.okio.HashingSink;
						public static hmacSha512(param0: com.sendbird.android.shadow.okio.Sink, param1: com.sendbird.android.shadow.okio.ByteString): com.sendbird.android.shadow.okio.HashingSink;
						public flush(): void;
						public static md5(param0: com.sendbird.android.shadow.okio.Sink): com.sendbird.android.shadow.okio.HashingSink;
						public write(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): void;
						public static sha512(param0: com.sendbird.android.shadow.okio.Sink): com.sendbird.android.shadow.okio.HashingSink;
						public timeout(): com.sendbird.android.shadow.okio.Timeout;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class HashingSource extends com.sendbird.android.shadow.okio.ForwardingSource {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.HashingSource>;
						public static sha256(param0: com.sendbird.android.shadow.okio.Source): com.sendbird.android.shadow.okio.HashingSource;
						public static hmacSha256(param0: com.sendbird.android.shadow.okio.Source, param1: com.sendbird.android.shadow.okio.ByteString): com.sendbird.android.shadow.okio.HashingSource;
						public hash(): com.sendbird.android.shadow.okio.ByteString;
						public static md5(param0: com.sendbird.android.shadow.okio.Source): com.sendbird.android.shadow.okio.HashingSource;
						public close(): void;
						public read(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): number;
						public static sha1(param0: com.sendbird.android.shadow.okio.Source): com.sendbird.android.shadow.okio.HashingSource;
						public static hmacSha1(param0: com.sendbird.android.shadow.okio.Source, param1: com.sendbird.android.shadow.okio.ByteString): com.sendbird.android.shadow.okio.HashingSource;
						public timeout(): com.sendbird.android.shadow.okio.Timeout;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class InflaterSource extends com.sendbird.android.shadow.okio.Source {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.InflaterSource>;
						public constructor(param0: com.sendbird.android.shadow.okio.Source, param1: java.util.zip.Inflater);
						public close(): void;
						public read(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): number;
						public refill(): boolean;
						public timeout(): com.sendbird.android.shadow.okio.Timeout;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class Okio {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.Okio>;
						public static blackhole(): com.sendbird.android.shadow.okio.Sink;
						public static sink(param0: java.net.Socket): com.sendbird.android.shadow.okio.Sink;
						public static source(param0: java.nio.file.Path, param1: androidNative.Array<java.nio.file.OpenOption>): com.sendbird.android.shadow.okio.Source;
						public static sink(param0: java.nio.file.Path, param1: androidNative.Array<java.nio.file.OpenOption>): com.sendbird.android.shadow.okio.Sink;
						public static buffer(param0: com.sendbird.android.shadow.okio.Source): com.sendbird.android.shadow.okio.BufferedSource;
						public static sink(param0: java.io.OutputStream): com.sendbird.android.shadow.okio.Sink;
						public static source(param0: java.io.File): com.sendbird.android.shadow.okio.Source;
						public static sink(param0: java.io.File): com.sendbird.android.shadow.okio.Sink;
						public static source(param0: java.net.Socket): com.sendbird.android.shadow.okio.Source;
						public static buffer(param0: com.sendbird.android.shadow.okio.Sink): com.sendbird.android.shadow.okio.BufferedSink;
						public static appendingSink(param0: java.io.File): com.sendbird.android.shadow.okio.Sink;
						public static source(param0: java.io.InputStream): com.sendbird.android.shadow.okio.Source;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class Options extends java.util.AbstractList<com.sendbird.android.shadow.okio.ByteString> implements java.util.RandomAccess  {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.Options>;
						public static of(param0: androidNative.Array<com.sendbird.android.shadow.okio.ByteString>): com.sendbird.android.shadow.okio.Options;
						public size(): number;
						public get(param0: number): com.sendbird.android.shadow.okio.ByteString;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class Pipe {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.Pipe>;
						public sink(): com.sendbird.android.shadow.okio.Sink;
						public constructor(param0: number);
						public source(): com.sendbird.android.shadow.okio.Source;
					}
					export module Pipe {
						export class PipeSink extends com.sendbird.android.shadow.okio.Sink {
							public static class: java.lang.Class<com.sendbird.android.shadow.okio.Pipe.PipeSink>;
							public close(): void;
							public write(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): void;
							public timeout(): com.sendbird.android.shadow.okio.Timeout;
							public flush(): void;
						}
						export class PipeSource extends com.sendbird.android.shadow.okio.Source {
							public static class: java.lang.Class<com.sendbird.android.shadow.okio.Pipe.PipeSource>;
							public close(): void;
							public timeout(): com.sendbird.android.shadow.okio.Timeout;
							public read(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class RealBufferedSink extends com.sendbird.android.shadow.okio.BufferedSink {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.RealBufferedSink>;
						public sink: com.sendbird.android.shadow.okio.Sink;
						public outputStream(): java.io.OutputStream;
						public write(param0: java.nio.ByteBuffer): number;
						public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): com.sendbird.android.shadow.okio.BufferedSink;
						public emit(): com.sendbird.android.shadow.okio.BufferedSink;
						public close(): void;
						public write(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): void;
						public writeUtf8(param0: string, param1: number, param2: number): com.sendbird.android.shadow.okio.BufferedSink;
						public writeIntLe(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public writeAll(param0: com.sendbird.android.shadow.okio.Source): number;
						public writeInt(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public writeLong(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public writeShort(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public isOpen(): boolean;
						public write(param0: com.sendbird.android.shadow.okio.ByteString): com.sendbird.android.shadow.okio.BufferedSink;
						public writeUtf8(param0: string): com.sendbird.android.shadow.okio.BufferedSink;
						public writeLongLe(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public writeHexadecimalUnsignedLong(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public emitCompleteSegments(): com.sendbird.android.shadow.okio.BufferedSink;
						public flush(): void;
						public writeShortLe(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public writeByte(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public write(param0: androidNative.Array<number>): com.sendbird.android.shadow.okio.BufferedSink;
						public toString(): string;
						public timeout(): com.sendbird.android.shadow.okio.Timeout;
						public writeDecimalLong(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public writeString(param0: string, param1: java.nio.charset.Charset): com.sendbird.android.shadow.okio.BufferedSink;
						public writeUtf8CodePoint(param0: number): com.sendbird.android.shadow.okio.BufferedSink;
						public write(param0: com.sendbird.android.shadow.okio.Source, param1: number): com.sendbird.android.shadow.okio.BufferedSink;
						public buffer(): com.sendbird.android.shadow.okio.Buffer;
						public write(param0: androidNative.Array<number>, param1: number, param2: number): com.sendbird.android.shadow.okio.BufferedSink;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class RealBufferedSource extends com.sendbird.android.shadow.okio.BufferedSource {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.RealBufferedSource>;
						public source: com.sendbird.android.shadow.okio.Source;
						public read(param0: androidNative.Array<number>): number;
						public readShortLe(): number;
						public readHexadecimalUnsignedLong(): number;
						public exhausted(): boolean;
						public readUtf8(param0: number): string;
						public skip(param0: number): void;
						public readInt(): number;
						public read(param0: java.nio.ByteBuffer): number;
						public close(): void;
						public require(param0: number): void;
						public readIntLe(): number;
						public inputStream(): java.io.InputStream;
						public readByte(): number;
						public readAll(param0: com.sendbird.android.shadow.okio.Sink): number;
						public readString(param0: java.nio.charset.Charset): string;
						public readUtf8LineStrict(param0: number): string;
						public isOpen(): boolean;
						public readByteString(): com.sendbird.android.shadow.okio.ByteString;
						public readString(param0: number, param1: java.nio.charset.Charset): string;
						public readUtf8LineStrict(): string;
						public readLong(): number;
						public indexOf(param0: com.sendbird.android.shadow.okio.ByteString): number;
						public readLongLe(): number;
						public readByteArray(): androidNative.Array<number>;
						public rangeEquals(param0: number, param1: com.sendbird.android.shadow.okio.ByteString, param2: number, param3: number): boolean;
						public readFully(param0: androidNative.Array<number>): void;
						public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
						public readFully(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): void;
						public readUtf8Line(): string;
						public readUtf8(): string;
						public toString(): string;
						public readUtf8CodePoint(): number;
						public readShort(): number;
						public timeout(): com.sendbird.android.shadow.okio.Timeout;
						public request(param0: number): boolean;
						public indexOfElement(param0: com.sendbird.android.shadow.okio.ByteString, param1: number): number;
						public indexOf(param0: com.sendbird.android.shadow.okio.ByteString, param1: number): number;
						public indexOf(param0: number, param1: number, param2: number): number;
						public buffer(): com.sendbird.android.shadow.okio.Buffer;
						public read(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): number;
						public readByteString(param0: number): com.sendbird.android.shadow.okio.ByteString;
						public indexOf(param0: number): number;
						public readByteArray(param0: number): androidNative.Array<number>;
						public readDecimalLong(): number;
						public rangeEquals(param0: number, param1: com.sendbird.android.shadow.okio.ByteString): boolean;
						public indexOf(param0: number, param1: number): number;
						public select(param0: com.sendbird.android.shadow.okio.Options): number;
						public indexOfElement(param0: com.sendbird.android.shadow.okio.ByteString): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class Segment {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.Segment>;
						public push(param0: com.sendbird.android.shadow.okio.Segment): com.sendbird.android.shadow.okio.Segment;
						public compact(): void;
						public writeTo(param0: com.sendbird.android.shadow.okio.Segment, param1: number): void;
						public split(param0: number): com.sendbird.android.shadow.okio.Segment;
						public pop(): com.sendbird.android.shadow.okio.Segment;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class SegmentPool {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.SegmentPool>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class SegmentedByteString extends com.sendbird.android.shadow.okio.ByteString {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.SegmentedByteString>;
						public lastIndexOf(param0: com.sendbird.android.shadow.okio.ByteString): number;
						public string(param0: java.nio.charset.Charset): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public asByteBuffer(): java.nio.ByteBuffer;
						public sha1(): com.sendbird.android.shadow.okio.ByteString;
						public sha256(): com.sendbird.android.shadow.okio.ByteString;
						public substring(param0: number): com.sendbird.android.shadow.okio.ByteString;
						public md5(): com.sendbird.android.shadow.okio.ByteString;
						public hex(): string;
						public hmacSha1(param0: com.sendbird.android.shadow.okio.ByteString): com.sendbird.android.shadow.okio.ByteString;
						public getByte(param0: number): number;
						public write(param0: java.io.OutputStream): void;
						public size(): number;
						public substring(param0: number, param1: number): com.sendbird.android.shadow.okio.ByteString;
						public indexOf(param0: com.sendbird.android.shadow.okio.ByteString): number;
						public toAsciiLowercase(): com.sendbird.android.shadow.okio.ByteString;
						public lastIndexOf(param0: androidNative.Array<number>, param1: number): number;
						public toAsciiUppercase(): com.sendbird.android.shadow.okio.ByteString;
						public rangeEquals(param0: number, param1: com.sendbird.android.shadow.okio.ByteString, param2: number, param3: number): boolean;
						public lastIndexOf(param0: androidNative.Array<number>): number;
						public base64(): string;
						public lastIndexOf(param0: com.sendbird.android.shadow.okio.ByteString, param1: number): number;
						public toString(): string;
						public utf8(): string;
						public indexOf(param0: androidNative.Array<number>): number;
						public indexOf(param0: com.sendbird.android.shadow.okio.ByteString, param1: number): number;
						public toByteArray(): androidNative.Array<number>;
						public indexOf(param0: androidNative.Array<number>, param1: number): number;
						public rangeEquals(param0: number, param1: androidNative.Array<number>, param2: number, param3: number): boolean;
						public base64Url(): string;
						public hmacSha256(param0: com.sendbird.android.shadow.okio.ByteString): com.sendbird.android.shadow.okio.ByteString;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class Sink {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.Sink>;
						/**
						 * Constructs a new instance of the com.sendbird.android.shadow.okio.Sink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							write(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): void;
							flush(): void;
							timeout(): com.sendbird.android.shadow.okio.Timeout;
							close(): void;
						});
						public constructor();
						public close(): void;
						public flush(): void;
						public write(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): void;
						public timeout(): com.sendbird.android.shadow.okio.Timeout;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class Source {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.Source>;
						/**
						 * Constructs a new instance of the com.sendbird.android.shadow.okio.Source interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							read(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): number;
							timeout(): com.sendbird.android.shadow.okio.Timeout;
							close(): void;
						});
						public constructor();
						public close(): void;
						public read(param0: com.sendbird.android.shadow.okio.Buffer, param1: number): number;
						public timeout(): com.sendbird.android.shadow.okio.Timeout;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class Timeout {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.Timeout>;
						public static NONE: com.sendbird.android.shadow.okio.Timeout;
						public clearDeadline(): com.sendbird.android.shadow.okio.Timeout;
						public constructor();
						public clearTimeout(): com.sendbird.android.shadow.okio.Timeout;
						public hasDeadline(): boolean;
						public deadline(param0: number, param1: java.util.concurrent.TimeUnit): com.sendbird.android.shadow.okio.Timeout;
						public timeoutNanos(): number;
						public deadlineNanoTime(param0: number): com.sendbird.android.shadow.okio.Timeout;
						public deadlineNanoTime(): number;
						public waitUntilNotified(param0: any): void;
						public timeout(param0: number, param1: java.util.concurrent.TimeUnit): com.sendbird.android.shadow.okio.Timeout;
						public throwIfReached(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class Utf8 {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.Utf8>;
						public static size(param0: string, param1: number, param2: number): number;
						public static size(param0: string): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module shadow {
				export module okio {
					export class Util {
						public static class: java.lang.Class<com.sendbird.android.shadow.okio.Util>;
						public static UTF_8: java.nio.charset.Charset;
						public static reverseBytesInt(param0: number): number;
						public static reverseBytesShort(param0: number): number;
						public static reverseBytesLong(param0: number): number;
						public static arrayRangeEquals(param0: androidNative.Array<number>, param1: number, param2: androidNative.Array<number>, param3: number, param4: number): boolean;
						public static sneakyRethrow(param0: java.lang.Throwable): void;
						public static checkOffsetAndCount(param0: number, param1: number, param2: number): void;
					}
				}
			}
		}
	}
}


declare module com {
	export module sendbird {
		export module android {
			export module utils {
				export class AtomicLongEx {
					public static class: java.lang.Class<com.sendbird.android.utils.AtomicLongEx>;
					public setIfSmaller(param0: number): boolean;
					public set(param0: number): void;
					public get(): number;
					public constructor(param0: number);
					public setIfBigger(param0: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module utils {
				export class CancelableThreadHolder {
					public static class: java.lang.Class<com.sendbird.android.utils.CancelableThreadHolder>;
					public sleep(param0: number): void;
					public awake(): void;
					public isInterrupted(): boolean;
					public constructor();
					public interrupt(): void;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module utils {
				export class ClearableScheduledExecutorService {
					public static class: java.lang.Class<com.sendbird.android.utils.ClearableScheduledExecutorService>;
					public invokeAll(param0: java.util.Collection, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List;
					public isTerminated(): boolean;
					public invokeAny(param0: java.util.Collection): any;
					public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
					public constructor(param0: java.util.concurrent.ScheduledExecutorService);
					public schedule(param0: java.lang.Runnable, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
					public invokeAll(param0: java.util.Collection): java.util.List;
					public isShutdown(): boolean;
					public cancelAllJobs(): void;
					public shutdownNow(): java.util.List<java.lang.Runnable>;
					public execute(param0: java.lang.Runnable): void;
					public cancelAllJobs(param0: boolean): void;
					public schedule(param0: java.util.concurrent.Callable, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture;
					public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
					public shutdown(): void;
					public scheduleAtFixedRate(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
					public constructor();
					public invokeAny(param0: java.util.Collection, param1: number, param2: java.util.concurrent.TimeUnit): any;
					public submit(param0: java.util.concurrent.Callable): java.util.concurrent.Future;
					public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future;
					public scheduleWithFixedDelay(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module utils {
				export class FileUtils {
					public static class: java.lang.Class<com.sendbird.android.utils.FileUtils>;
					public static INSTANCE: com.sendbird.android.utils.FileUtils;
					public static readAsString(param0: java.io.File): string;
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module utils {
				export class TimeoutLock {
					public static class: java.lang.Class<com.sendbird.android.utils.TimeoutLock>;
					public constructor();
					public interrupt(): void;
					public await(): void;
					public constructor(param0: number, param1: java.util.concurrent.TimeUnit);
					public release(): void;
				}
				export module TimeoutLock {
					export class TimeoutException {
						public static class: java.lang.Class<com.sendbird.android.utils.TimeoutLock.TimeoutException>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sendbird {
		export module android {
			export module websocket {
				export class UnReadMessageCount {
					public static class: java.lang.Class<com.sendbird.android.websocket.UnReadMessageCount>;
					public update(param0: com.sendbird.android.shadow.com.google.gson.JsonObject): boolean;
					public getCustomTypeUnreadMessageCount(param0: string): number;
					public constructor();
					public getTotalCountByCustomTypes(): number;
					public init(): void;
					public getCustomTypeMap(): java.util.Map<string,java.lang.Integer>;
					public getTotalCount(): number;
				}
			}
		}
	}
}

//Generics information:
//com.sendbird.android.AbstractPushHandler:1
//com.sendbird.android.JobResultTask:1
//com.sendbird.android.JobTask:1
//com.sendbird.android.VersioningCache:2
//com.sendbird.android.VersioningCache.DataHolder:1
//com.sendbird.android.db.ContentProvider:1
//com.sendbird.android.handlers.OnResultHandler:1
//com.sendbird.android.handlers.Predicate:1
//com.sendbird.android.shadow.com.google.gson.Gson.FutureTypeAdapter:1
//com.sendbird.android.shadow.com.google.gson.InstanceCreator:1
//com.sendbird.android.shadow.com.google.gson.JsonDeserializer:1
//com.sendbird.android.shadow.com.google.gson.JsonSerializer:1
//com.sendbird.android.shadow.com.google.gson.TypeAdapter:1
//com.sendbird.android.shadow.com.google.gson.internal.LinkedHashTreeMap:2
//com.sendbird.android.shadow.com.google.gson.internal.LinkedHashTreeMap.AvlBuilder:2
//com.sendbird.android.shadow.com.google.gson.internal.LinkedHashTreeMap.AvlIterator:2
//com.sendbird.android.shadow.com.google.gson.internal.LinkedHashTreeMap.LinkedTreeMapIterator:1
//com.sendbird.android.shadow.com.google.gson.internal.LinkedHashTreeMap.Node:2
//com.sendbird.android.shadow.com.google.gson.internal.LinkedTreeMap:2
//com.sendbird.android.shadow.com.google.gson.internal.LinkedTreeMap.LinkedTreeMapIterator:1
//com.sendbird.android.shadow.com.google.gson.internal.LinkedTreeMap.Node:2
//com.sendbird.android.shadow.com.google.gson.internal.ObjectConstructor:1
//com.sendbird.android.shadow.com.google.gson.internal.bind.ArrayTypeAdapter:1
//com.sendbird.android.shadow.com.google.gson.internal.bind.CollectionTypeAdapterFactory.Adapter:1
//com.sendbird.android.shadow.com.google.gson.internal.bind.MapTypeAdapterFactory.Adapter:2
//com.sendbird.android.shadow.com.google.gson.internal.bind.ReflectiveTypeAdapterFactory.Adapter:1
//com.sendbird.android.shadow.com.google.gson.internal.bind.TreeTypeAdapter:1
//com.sendbird.android.shadow.com.google.gson.internal.bind.TypeAdapterRuntimeTypeWrapper:1
//com.sendbird.android.shadow.com.google.gson.internal.bind.TypeAdapters.EnumTypeAdapter:1
//com.sendbird.android.shadow.com.google.gson.reflect.TypeToken:1
//com.sendbird.android.shadow.okhttp3.internal.platform.OptionalMethod:1

