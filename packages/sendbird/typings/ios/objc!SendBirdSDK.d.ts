
declare class SBDAdminMessage extends SBDBaseMessage implements NSCopying {

	static alloc(): SBDAdminMessage; // inherited from NSObject

	static buildFromSerializedData(data: NSData): SBDAdminMessage; // inherited from SBDBaseMessage

	static buildFromSerializedDataDesiredState(data: NSData, desiredState: SBDMessageSendingStatus): SBDAdminMessage; // inherited from SBDBaseMessage

	static new(): SBDAdminMessage; // inherited from NSObject

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum SBDApiRequestType {

	Passive = 0,

	Active = 1
}

declare class SBDAppInfo extends NSObject implements SBDMappable {

	static alloc(): SBDAppInfo; // inherited from NSObject

	static new(): SBDAppInfo; // inherited from NSObject

	static objectsFromJsonArray(array: NSArray<any> | any[]): NSArray<any>;

	readonly applicationAttributes: NSArray<string>;

	readonly emojiHash: string;

	readonly premiumFeatureList: NSArray<string>;

	readonly uploadSizeLimit: number;

	readonly useNativeWS: boolean;

	readonly useReaction: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from SBDMappable

	_toDictionary(): NSDictionary<any, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	isEmojiUpdateNeeded(prevEmojiHash: string): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SBDAppleCriticalAlertOptions extends NSObject {

	static alloc(): SBDAppleCriticalAlertOptions; // inherited from NSObject

	static new(): SBDAppleCriticalAlertOptions; // inherited from NSObject

	name: string;

	volume: number;
}

declare class SBDApplicationUserListQuery extends SBDUserListQuery implements NSCopying {

	static alloc(): SBDApplicationUserListQuery; // inherited from NSObject

	static new(): SBDApplicationUserListQuery; // inherited from NSObject

	readonly metaDataKeyFilter: string;

	readonly metaDataValuesFilter: NSArray<string>;

	nicknameStartsWithFilter: string;

	userIdsFilter: NSArray<string>;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

interface SBDAuthenticateDelegate extends NSObjectProtocol {

	didFinishAuthenticationWithUserError(user: SBDUser, error: SBDError): void;

	shouldHandleAuthInfoWithCompletionHandler(completionHandler: (p1: string, p2: string, p3: string, p4: string) => void): void;
}
declare var SBDAuthenticateDelegate: {

	prototype: SBDAuthenticateDelegate;
};

declare class SBDBannedUserListQuery extends SBDUserListQuery {

	static alloc(): SBDBannedUserListQuery; // inherited from NSObject

	static new(): SBDBannedUserListQuery; // inherited from NSObject
}

declare class SBDBaseChannel extends NSObject {

	static alloc(): SBDBaseChannel; // inherited from NSObject

	static buildFromSerializedData(data: NSData): SBDBaseChannel;

	static cancelUploadingFileMessageWithRequestIdCompletionHandler(requestId: string, completionHandler: (p1: boolean, p2: SBDError) => void): void;

	static new(): SBDBaseChannel; // inherited from NSObject

	channelUrl: string;

	coverUrl: string;

	createdAt: number;

	readonly creator: SBDUser;

	customType: string;

	data: string;

	readonly isEphemeral: boolean;

	isFrozen: boolean;

	name: string;

	addMessageMetaArrayValuesWithMessageKeyValuesCompletionHandler(message: SBDBaseMessage, keyValues: NSDictionary<string, NSArray<string>>, completionHandler: (p1: SBDBaseMessage, p2: SBDError) => void): void;

	addMessageMetaArrayValuesWithMessageMetaArraysCompletionHandler(message: SBDBaseMessage, metaArrays: NSArray<SBDMessageMetaArray> | SBDMessageMetaArray[], completionHandler: (p1: SBDBaseMessage, p2: SBDError) => void): void;

	addOperatorsWithUserIdsCompletionHandler(userIds: NSArray<string> | string[], completionHandler: (p1: SBDError) => void): void;

	addReactionWithMessageKeyCompletionHandler(message: SBDBaseMessage, key: string, completionHandler: (p1: SBDReactionEvent, p2: SBDError) => void): void;

	copyFileMessageToTargetChannelCompletionHandler(message: SBDFileMessage, targetChannel: SBDBaseChannel, completionHandler: (p1: SBDFileMessage, p2: SBDError) => void): SBDFileMessage;

	copyUserMessageToTargetChannelCompletionHandler(message: SBDUserMessage, targetChannel: SBDBaseChannel, completionHandler: (p1: SBDUserMessage, p2: SBDError) => void): SBDUserMessage;

	createMessageListQuery(): SBDMessageListQuery;

	createMessageMetaArrayKeysWithMessageKeysCompletionHandler(message: SBDBaseMessage, keys: NSArray<string> | string[], completionHandler: (p1: SBDBaseMessage, p2: SBDError) => void): void;

	createMetaCountersCompletionHandler(metaCounters: NSDictionary<string, number>, completionHandler: (p1: NSDictionary<string, number>, p2: SBDError) => void): void;

	createMetaDataCompletionHandler(metaData: NSDictionary<string, string>, completionHandler: (p1: NSDictionary<string, string>, p2: SBDError) => void): void;

	createOperatorListQuery(): SBDOperatorListQuery;

	createPreviousMessageListQuery(): SBDPreviousMessageListQuery;

	decreaseMetaCountersCompletionHandler(metaCounters: NSDictionary<string, number>, completionHandler: (p1: NSDictionary<string, number>, p2: SBDError) => void): void;

	deleteAllMetaCountersWithCompletionHandler(completionHandler: (p1: SBDError) => void): void;

	deleteAllMetaDataWithCompletionHandler(completionHandler: (p1: SBDError) => void): void;

	deleteMessageCompletionHandler(message: SBDBaseMessage, completionHandler: (p1: SBDError) => void): void;

	deleteMessageMetaArrayKeysWithMessageKeysCompletionHandler(message: SBDBaseMessage, keys: NSArray<string> | string[], completionHandler: (p1: SBDBaseMessage, p2: SBDError) => void): void;

	deleteMessageWithMessageIdCompletionHandler(messageId: number, completionHandler: (p1: SBDError) => void): void;

	deleteMetaCountersWithKeyCompletionHandler(key: string, completionHandler: (p1: SBDError) => void): void;

	deleteMetaDataWithKeyCompletionHandler(key: string, completionHandler: (p1: SBDError) => void): void;

	deleteReactionWithMessageKeyCompletionHandler(message: SBDBaseMessage, key: string, completionHandler: (p1: SBDReactionEvent, p2: SBDError) => void): void;

	getAllMetaCountersWithCompletionHandler(completionHandler: (p1: NSDictionary<string, number>, p2: SBDError) => void): void;

	getAllMetaDataWithCompletionHandler(completionHandler: (p1: NSDictionary<string, string>, p2: SBDError) => void): void;

	getCachedMetaData(): NSDictionary<string, string>;

	getMessageChangeLogsByTimestampCompletionHandler(timestamp: number, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: NSArray<number>, p3: boolean, p4: string, p5: SBDError) => void): void;

	getMessageChangeLogsByTimestampIncludeMetaArrayCompletionHandler(timestamp: number, includeMetaArray: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: NSArray<number>, p3: boolean, p4: string, p5: SBDError) => void): void;

	getMessageChangeLogsByTimestampIncludeMetaArrayIncludeReactionsCompletionHandler(timestamp: number, includeMetaArray: boolean, includeReactions: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: NSArray<number>, p3: boolean, p4: string, p5: SBDError) => void): void;

	getMessageChangeLogsSinceTimestampParamsCompletionHandler(timestamp: number, params: SBDMessageChangeLogsParams, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: NSArray<number>, p3: boolean, p4: string, p5: SBDError) => void): void;

	getMessageChangeLogsSinceTokenParamsCompletionHandler(token: string, params: SBDMessageChangeLogsParams, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: NSArray<number>, p3: boolean, p4: string, p5: SBDError) => void): void;

	getMessageChangeLogsWithTokenCompletionHandler(token: string, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: NSArray<number>, p3: boolean, p4: string, p5: SBDError) => void): void;

	getMessageChangeLogsWithTokenIncludeMetaArrayCompletionHandler(token: string, includeMetaArray: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: NSArray<number>, p3: boolean, p4: string, p5: SBDError) => void): void;

	getMessageChangeLogsWithTokenIncludeMetaArrayIncludeReactionsCompletionHandler(token: string, includeMetaArray: boolean, includeReactions: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: NSArray<number>, p3: boolean, p4: string, p5: SBDError) => void): void;

	getMessagesByMessageIdParamsCompletionHandler(messageId: number, params: SBDMessageListParams, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getMessagesByTimestampParamsCompletionHandler(timestamp: number, params: SBDMessageListParams, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getMetaCountersWithKeysCompletionHandler(keys: NSArray<string> | string[], completionHandler: (p1: NSDictionary<string, number>, p2: SBDError) => void): void;

	getMetaDataWithKeysCompletionHandler(keys: NSArray<string> | string[], completionHandler: (p1: NSDictionary<string, string>, p2: SBDError) => void): void;

	getMyMutedInfoWithCompletionHandler(completionHandler: (p1: boolean, p2: string, p3: number, p4: number, p5: number, p6: SBDError) => void): void;

	getNextMessagesByMessageIdInclusiveTimestampLimitReverseMessageTypeCustomTypeSenderUserIdsIncludeMetaArrayIncludeReactionsCompletionHandler(messageId: number, inclusiveTimestamp: boolean, limit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, senderUserIds: NSArray<string> | string[], includeMetaArray: boolean, includeReactions: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getNextMessagesByMessageIdLimitReverseCompletionHandler(messageId: number, limit: number, reverse: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getNextMessagesByMessageIdLimitReverseMessageTypeCustomTypeCompletionHandler(messageId: number, limit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getNextMessagesByMessageIdLimitReverseMessageTypeCustomTypeSenderUserIdsCompletionHandler(messageId: number, limit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, senderUserIds: NSArray<string> | string[], completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getNextMessagesByMessageIdLimitReverseMessageTypeCustomTypeSenderUserIdsIncludeMetaArrayCompletionHandler(messageId: number, limit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, senderUserIds: NSArray<string> | string[], includeMetaArray: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getNextMessagesByMessageIdLimitReverseMessageTypeCustomTypeSenderUserIdsIncludeMetaArrayIncludeReactionsCompletionHandler(messageId: number, limit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, senderUserIds: NSArray<string> | string[], includeMetaArray: boolean, includeReactions: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getNextMessagesByTimestampInclusiveTimestampLimitReverseMessageTypeCustomTypeSenderUserIdsIncludeMetaArrayCompletionHandler(timestamp: number, inclusiveTimestamp: boolean, limit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, senderUserIds: NSArray<string> | string[], includeMetaArray: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getNextMessagesByTimestampInclusiveTimestampLimitReverseMessageTypeCustomTypeSenderUserIdsIncludeMetaArrayIncludeReactionsCompletionHandler(timestamp: number, inclusiveTimestamp: boolean, limit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, senderUserIds: NSArray<string> | string[], includeMetaArray: boolean, includeReactions: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getNextMessagesByTimestampLimitReverseCompletionHandler(timestamp: number, limit: number, reverse: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getNextMessagesByTimestampLimitReverseMessageTypeCustomTypeCompletionHandler(timestamp: number, limit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getNextMessagesByTimestampLimitReverseMessageTypeCustomTypeSenderUserIdsCompletionHandler(timestamp: number, limit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, senderUserIds: NSArray<string> | string[], completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getNextMessagesByTimestampLimitReverseMessageTypeCustomTypeSenderUserIdsIncludeMetaArrayCompletionHandler(timestamp: number, limit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, senderUserIds: NSArray<string> | string[], includeMetaArray: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getPreviousAndNextMessagesByMessageIdPrevLimitNextLimitReverseCompletionHandler(messageId: number, prevLimit: number, nextLimit: number, reverse: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getPreviousAndNextMessagesByMessageIdPrevLimitNextLimitReverseMessageTypeCustomTypeCompletionHandler(messageId: number, prevLimit: number, nextLimit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getPreviousAndNextMessagesByMessageIdPrevLimitNextLimitReverseMessageTypeCustomTypeSenderUserIdsCompletionHandler(messageId: number, prevLimit: number, nextLimit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, senderUserIds: NSArray<string> | string[], completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getPreviousAndNextMessagesByMessageIdPrevLimitNextLimitReverseMessageTypeCustomTypeSenderUserIdsIncludeMetaArrayCompletionHandler(messageId: number, prevLimit: number, nextLimit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, senderUserIds: NSArray<string> | string[], includeMetaArray: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getPreviousAndNextMessagesByMessageIdPrevLimitNextLimitReverseMessageTypeCustomTypeSenderUserIdsIncludeMetaArrayIncludeReactionsCompletionHandler(messageId: number, prevLimit: number, nextLimit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, senderUserIds: NSArray<string> | string[], includeMetaArray: boolean, includeReactions: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getPreviousAndNextMessagesByTimestampPrevLimitNextLimitReverseCompletionHandler(timestamp: number, prevLimit: number, nextLimit: number, reverse: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getPreviousAndNextMessagesByTimestampPrevLimitNextLimitReverseMessageTypeCustomTypeCompletionHandler(timestamp: number, prevLimit: number, nextLimit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getPreviousAndNextMessagesByTimestampPrevLimitNextLimitReverseMessageTypeCustomTypeSenderUserIdsCompletionHandler(timestamp: number, prevLimit: number, nextLimit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, senderUserIds: NSArray<string> | string[], completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getPreviousAndNextMessagesByTimestampPrevLimitNextLimitReverseMessageTypeCustomTypeSenderUserIdsIncludeMetaArrayCompletionHandler(timestamp: number, prevLimit: number, nextLimit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, senderUserIds: NSArray<string> | string[], includeMetaArray: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getPreviousAndNextMessagesByTimestampPrevLimitNextLimitReverseMessageTypeCustomTypeSenderUserIdsIncludeMetaArrayIncludeReactionsCompletionHandler(timestamp: number, prevLimit: number, nextLimit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, senderUserIds: NSArray<string> | string[], includeMetaArray: boolean, includeReactions: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getPreviousMessagesByMessageIdInclusiveTimestampLimitReverseMessageTypeCustomTypeSenderUserIdsIncludeMetaArrayIncludeReactionsCompletionHandler(messageId: number, inclusiveTimestamp: boolean, limit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, senderUserIds: NSArray<string> | string[], includeMetaArray: boolean, includeReactions: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getPreviousMessagesByMessageIdLimitReverseCompletionHandler(messageId: number, limit: number, reverse: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getPreviousMessagesByMessageIdLimitReverseMessageTypeCustomTypeCompletionHandler(messageId: number, limit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getPreviousMessagesByMessageIdLimitReverseMessageTypeCustomTypeSenderUserIdsCompletionHandler(messageId: number, limit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, senderUserIds: NSArray<string> | string[], completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getPreviousMessagesByMessageIdLimitReverseMessageTypeCustomTypeSenderUserIdsIncludeMetaArrayCompletionHandler(messageId: number, limit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, senderUserIds: NSArray<string> | string[], includeMetaArray: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getPreviousMessagesByMessageIdLimitReverseMessageTypeCustomTypeSenderUserIdsIncludeMetaArrayIncludeReactionsCompletionHandler(messageId: number, limit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, senderUserIds: NSArray<string> | string[], includeMetaArray: boolean, includeReactions: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getPreviousMessagesByTimestampInclusiveTimestampLimitReverseMessageTypeCustomTypeSenderUserIdsIncludeMetaArrayCompletionHandler(timestamp: number, inclusiveTimestamp: boolean, limit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, senderUserIds: NSArray<string> | string[], includeMetaArray: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getPreviousMessagesByTimestampInclusiveTimestampLimitReverseMessageTypeCustomTypeSenderUserIdsIncludeMetaArrayIncludeReactionsCompletionHandler(timestamp: number, inclusiveTimestamp: boolean, limit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, senderUserIds: NSArray<string> | string[], includeMetaArray: boolean, includeReactions: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getPreviousMessagesByTimestampLimitReverseCompletionHandler(timestamp: number, limit: number, reverse: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getPreviousMessagesByTimestampLimitReverseMessageTypeCustomTypeCompletionHandler(timestamp: number, limit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getPreviousMessagesByTimestampLimitReverseMessageTypeCustomTypeSenderUserIdsCompletionHandler(timestamp: number, limit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, senderUserIds: NSArray<string> | string[], completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	getPreviousMessagesByTimestampLimitReverseMessageTypeCustomTypeSenderUserIdsIncludeMetaArrayCompletionHandler(timestamp: number, limit: number, reverse: boolean, messageType: SBDMessageTypeFilter, customType: string, senderUserIds: NSArray<string> | string[], includeMetaArray: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	increaseMetaCountersCompletionHandler(metaCounters: NSDictionary<string, number>, completionHandler: (p1: NSDictionary<string, number>, p2: SBDError) => void): void;

	isGroupChannel(): boolean;

	isOpenChannel(): boolean;

	removeAllOperatorsWithCompletionHandler(completionHandler: (p1: SBDError) => void): void;

	removeMessageMetaArrayValuesWithMessageKeyValuesCompletionHandler(message: SBDBaseMessage, keyValues: NSDictionary<string, NSArray<string>>, completionHandler: (p1: SBDBaseMessage, p2: SBDError) => void): void;

	removeMessageMetaArrayValuesWithMessageMetaArraysCompletionHandler(message: SBDBaseMessage, metaArrays: NSArray<SBDMessageMetaArray> | SBDMessageMetaArray[], completionHandler: (p1: SBDBaseMessage, p2: SBDError) => void): void;

	removeOperatorsWithUserIdsCompletionHandler(userIds: NSArray<string> | string[], completionHandler: (p1: SBDError) => void): void;

	reportChannelWithCategoryReportDescriptionCompletionHandler(reportCategory: SBDReportCategory, reportDescription: string, completionHandler: (p1: SBDError) => void): void;

	reportMessageReportCategoryReportDescriptionCompletionHandler(message: SBDBaseMessage, reportCategory: SBDReportCategory, reportDescription: string, completionHandler: (p1: SBDError) => void): void;

	reportUserReportCategoryReportDescriptionCompletionHandler(offendingUser: SBDUser, reportCategory: SBDReportCategory, reportDescription: string, completionHandler: (p1: SBDError) => void): void;

	resendFileMessageWithMessageBinaryDataCompletionHandler(failedMessage: SBDFileMessage, binaryData: NSData, completionHandler: (p1: SBDFileMessage, p2: SBDError) => void): SBDFileMessage;

	resendFileMessageWithMessageBinaryDataProgressHandlerCompletionHandler(failedMessage: SBDFileMessage, binaryData: NSData, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDFileMessage, p2: SBDError) => void): SBDFileMessage;

	resendUserMessageWithMessageCompletionHandler(failedMessage: SBDUserMessage, completionHandler: (p1: SBDUserMessage, p2: SBDError) => void): SBDUserMessage;

	sendFileMessageWithBinaryDataFilenameTypeSizeDataCompletionHandler(file: NSData, filename: string, type: string, size: number, data: string, completionHandler: (p1: SBDFileMessage, p2: SBDError) => void): SBDFileMessage;

	sendFileMessageWithBinaryDataFilenameTypeSizeDataCustomTypeCompletionHandler(file: NSData, filename: string, type: string, size: number, data: string, customType: string, completionHandler: (p1: SBDFileMessage, p2: SBDError) => void): SBDFileMessage;

	sendFileMessageWithBinaryDataFilenameTypeSizeDataCustomTypeProgressHandlerCompletionHandler(file: NSData, filename: string, type: string, size: number, data: string, customType: string, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDFileMessage, p2: SBDError) => void): SBDFileMessage;

	sendFileMessageWithBinaryDataFilenameTypeSizeDataProgressHandlerCompletionHandler(file: NSData, filename: string, type: string, size: number, data: string, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDFileMessage, p2: SBDError) => void): SBDFileMessage;

	sendFileMessageWithBinaryDataFilenameTypeSizeThumbnailSizesDataCustomTypeProgressHandlerCompletionHandler(file: NSData, filename: string, type: string, size: number, thumbnailSizes: NSArray<SBDThumbnailSize> | SBDThumbnailSize[], data: string, customType: string, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDFileMessage, p2: SBDError) => void): SBDFileMessage;

	sendFileMessageWithFilePathTypeThumbnailSizesDataCustomTypeProgressHandlerCompletionHandler(filepath: string, type: string, thumbnailSizes: NSArray<SBDThumbnailSize> | SBDThumbnailSize[], data: string, customType: string, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDFileMessage, p2: SBDError) => void): SBDFileMessage;

	sendFileMessageWithParamsCompletionHandler(params: SBDFileMessageParams, completionHandler: (p1: SBDFileMessage, p2: SBDError) => void): SBDFileMessage;

	sendFileMessageWithParamsProgressHandlerCompletionHandler(params: SBDFileMessageParams, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDFileMessage, p2: SBDError) => void): SBDFileMessage;

	sendFileMessageWithUrlFilenameSizeTypeDataCompletionHandler(url: string, filename: string, size: number, type: string, data: string, completionHandler: (p1: SBDFileMessage, p2: SBDError) => void): SBDFileMessage;

	sendFileMessageWithUrlFilenameSizeTypeDataCustomTypeCompletionHandler(url: string, filename: string, size: number, type: string, data: string, customType: string, completionHandler: (p1: SBDFileMessage, p2: SBDError) => void): SBDFileMessage;

	sendFileMessageWithUrlSizeTypeDataCompletionHandler(url: string, size: number, type: string, data: string, completionHandler: (p1: SBDFileMessage, p2: SBDError) => void): SBDFileMessage;

	sendFileMessageWithUrlSizeTypeDataCustomTypeCompletionHandler(url: string, size: number, type: string, data: string, customType: string, completionHandler: (p1: SBDFileMessage, p2: SBDError) => void): SBDFileMessage;

	sendFileMessagesWithParamsProgressHandlerSentMessageHandlerCompletionHandler(params: NSArray<SBDFileMessageParams> | SBDFileMessageParams[], progressHandler: (p1: string, p2: number, p3: number, p4: number) => void, sentMessageHandler: (p1: SBDFileMessage, p2: SBDError) => void, completionHandler: (p1: SBDError) => void): NSArray<SBDFileMessage>;

	sendUserMessageCompletionHandler(message: string, completionHandler: (p1: SBDUserMessage, p2: SBDError) => void): SBDUserMessage;

	sendUserMessageDataCompletionHandler(message: string, data: string, completionHandler: (p1: SBDUserMessage, p2: SBDError) => void): SBDUserMessage;

	sendUserMessageDataCustomTypeCompletionHandler(message: string, data: string, customType: string, completionHandler: (p1: SBDUserMessage, p2: SBDError) => void): SBDUserMessage;

	sendUserMessageDataCustomTypeTargetLanguagesCompletionHandler(message: string, data: string, customType: string, targetLanguages: NSArray<string> | string[], completionHandler: (p1: SBDUserMessage, p2: SBDError) => void): SBDUserMessage;

	sendUserMessageDataTargetLanguagesCompletionHandler(message: string, data: string, targetLanguages: NSArray<string> | string[], completionHandler: (p1: SBDUserMessage, p2: SBDError) => void): SBDUserMessage;

	sendUserMessageTargetLanguagesCompletionHandler(message: string, targetLanguages: NSArray<string> | string[], completionHandler: (p1: SBDUserMessage, p2: SBDError) => void): SBDUserMessage;

	sendUserMessageWithParamsCompletionHandler(params: SBDUserMessageParams, completionHandler: (p1: SBDUserMessage, p2: SBDError) => void): SBDUserMessage;

	serialize(): NSData;

	translateUserMessageTargetLanguagesCompletionHandler(message: SBDUserMessage, targetLanguages: NSArray<string> | string[], completionHandler: (p1: SBDUserMessage, p2: SBDError) => void): void;

	updateFileMessageDataCustomTypeCompletionHandler(fileMessage: SBDFileMessage, data: string, customType: string, completionHandler: (p1: SBDFileMessage, p2: SBDError) => void): void;

	updateFileMessageWithMessageIdFileMessageParamsCompletionHandler(messageId: number, params: SBDFileMessageParams, completionHandler: (p1: SBDFileMessage, p2: SBDError) => void): void;

	updateMetaCountersCompletionHandler(metaCounters: NSDictionary<string, number>, completionHandler: (p1: NSDictionary<string, number>, p2: SBDError) => void): void;

	updateMetaDataCompletionHandler(metaData: NSDictionary<string, string>, completionHandler: (p1: NSDictionary<string, string>, p2: SBDError) => void): void;

	updateUserMessageMessageTextDataCustomTypeCompletionHandler(userMessage: SBDUserMessage, messageText: string, data: string, customType: string, completionHandler: (p1: SBDUserMessage, p2: SBDError) => void): void;

	updateUserMessageWithMessageIdUserMessageParamsCompletionHandler(messageId: number, params: SBDUserMessageParams, completionHandler: (p1: SBDUserMessage, p2: SBDError) => void): void;
}

declare class SBDBaseCollection extends NSObject {

	static alloc(): SBDBaseCollection; // inherited from NSObject

	static new(): SBDBaseCollection; // inherited from NSObject
}

declare class SBDBaseMessage extends NSObject implements NSCopying, SBDComparator, SBDMappable {

	static alloc(): SBDBaseMessage; // inherited from NSObject

	static buildFromSerializedData(data: NSData): SBDBaseMessage;

	static buildFromSerializedDataDesiredState(data: NSData, desiredState: SBDMessageSendingStatus): SBDBaseMessage;

	static getMessageWithParamsCompletionHandler(params: SBDMessageRetrievalParams, completionHandler: (p1: SBDBaseMessage, p2: SBDError) => void): void;

	static new(): SBDBaseMessage; // inherited from NSObject

	static objectsFromJsonArray(array: NSArray<any> | any[]): NSArray<any>;

	channelType: string;

	channelUrl: string;

	createdAt: number;

	readonly customType: string;

	readonly data: string;

	readonly errorCode: number;

	readonly isOperatorMessage: boolean;

	readonly mentionType: SBDMentionType;

	readonly mentionedUsers: NSArray<SBDUser>;

	readonly message: string;

	messageId: number;

	readonly messageSurvivalSeconds: number;

	readonly metaArray: NSDictionary<string, NSArray<string>>;

	readonly metaArrays: NSArray<SBDMessageMetaArray>;

	readonly ogMetaData: SBDOGMetaData;

	readonly parentMessageId: number;

	readonly parentMessageText: string;

	readonly plugins: NSArray<SBDPlugin>;

	readonly reactions: NSArray<SBDReaction>;

	readonly requestId: string;

	readonly requestedMentionUserIds: NSArray<string>;

	sender: SBDSender;

	readonly sendingStatus: SBDMessageSendingStatus;

	readonly silent: boolean;

	readonly threadInfo: SBDThreadInfo;

	updatedAt: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from SBDMappable

	_toDictionary(): NSDictionary<any, any>;

	applyReactionEvent(reactionEvent: SBDReactionEvent): boolean;

	applyThreadInfoUpdateEvent(threadInfoUpdateEvent: SBDThreadInfoUpdateEvent): boolean;

	class(): typeof NSObject;

	comparator(): (p1: any, p2: any) => NSComparisonResult;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getMetaArrayWithKeys(keys: NSArray<string> | string[]): NSDictionary<string, NSArray<string>>;

	getThreadedMessagesByTimestampParamsCompletionHandler(timestamp: number, params: SBDThreadedMessageListParams, completionHandler: (p1: SBDBaseMessage, p2: NSArray<SBDBaseMessage>, p3: SBDError) => void): void;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isGroupChannel(): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isOpenChannel(): boolean;

	isResendable(): boolean;

	metaArraysWithKeys(keys: NSArray<string> | string[]): NSArray<SBDMessageMetaArray>;

	orderBetweenObjectAndObject(obj1: any, obj2: any): NSComparisonResult;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	serialize(): NSData;
}

declare class SBDBaseMessageParams extends NSObject implements NSCopying {

	static alloc(): SBDBaseMessageParams; // inherited from NSObject

	static new(): SBDBaseMessageParams; // inherited from NSObject

	appleCriticalAlertOptions: SBDAppleCriticalAlertOptions;

	customType: string;

	data: string;

	mentionType: SBDMentionType;

	mentionedUserIds: NSArray<string>;

	metaArrayKeys: NSArray<string>;

	metaArrays: NSArray<SBDMessageMetaArray>;

	parentMessageId: number;

	pushNotificationDeliveryOption: SBDPushNotificationDeliveryOption;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	setMentionedUsers(mentionedUsers: NSArray<SBDUser> | SBDUser[]): void;
}

declare class SBDBlockedUserListQuery extends SBDUserListQuery implements NSCopying {

	static alloc(): SBDBlockedUserListQuery; // inherited from NSObject

	static new(): SBDBlockedUserListQuery; // inherited from NSObject

	userIdsFilter: NSArray<string>;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class SBDChannelCollection extends SBDBaseCollection implements SBDConnectionDelegate {

	static alloc(): SBDChannelCollection; // inherited from NSObject

	static new(): SBDChannelCollection; // inherited from NSObject

	readonly channelList: NSArray<SBDGroupChannel>;

	delegate: SBDChannelCollectionDelegate;

	readonly hasNext: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { query: SBDGroupChannelListQuery; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didCancelReconnection(): void;

	didFailReconnection(): void;

	didStartReconnection(): void;

	didSucceedReconnection(): void;

	initWithQuery(query: SBDGroupChannelListQuery): this;

	invalidate(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadNextWithCompletionHandler(completionHandler: (p1: NSArray<SBDGroupChannel>, p2: SBDError) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var SBDChannelCollectionChangeNotification: string;

interface SBDChannelCollectionDelegate extends NSObjectProtocol {

	channelCollectionContextChangedChannels?(collection: SBDChannelCollection, context: SBDChannelContext, channels: NSArray<SBDGroupChannel> | SBDGroupChannel[]): void;

	channelCollectionContextDeletedChannelUrls?(collection: SBDChannelCollection, context: SBDChannelContext, deletedChannelUrls: NSArray<string> | string[]): void;
}
declare var SBDChannelCollectionDelegate: {

	prototype: SBDChannelCollectionDelegate;
};

declare class SBDChannelContext extends NSObject {

	static alloc(): SBDChannelContext; // inherited from NSObject

	static new(): SBDChannelContext; // inherited from NSObject

	source: SBDSource;

	constructor(o: { channelSource: SBDSource; });

	initWithChannelSource(source: SBDSource): this;

	isFromEvent(): boolean;
}

interface SBDChannelDelegate extends NSObjectProtocol {

	channelCreatedMetaCounters?(sender: SBDBaseChannel, createdMetaCounters: NSDictionary<string, number>): void;

	channelCreatedMetaData?(sender: SBDBaseChannel, createdMetaData: NSDictionary<string, string>): void;

	channelDeletedMetaCountersKeys?(sender: SBDBaseChannel, deletedMetaCountersKeys: NSArray<string> | string[]): void;

	channelDeletedMetaDataKeys?(sender: SBDBaseChannel, deletedMetaDataKeys: NSArray<string> | string[]): void;

	channelDidChangeMemberCount?(channels: NSArray<SBDGroupChannel> | SBDGroupChannel[]): void;

	channelDidChangeParticipantCount?(channels: NSArray<SBDOpenChannel> | SBDOpenChannel[]): void;

	channelDidDeclineInvitationInviter?(sender: SBDGroupChannel, invitee: SBDUser, inviter: SBDUser): void;

	channelDidReceiveInvitationInviter?(sender: SBDGroupChannel, invitees: NSArray<SBDUser> | SBDUser[], inviter: SBDUser): void;

	channelDidReceiveMention?(channel: SBDBaseChannel, message: SBDBaseMessage): void;

	channelDidReceiveMessage?(sender: SBDBaseChannel, message: SBDBaseMessage): void;

	channelDidUpdateDeliveryReceipt?(sender: SBDGroupChannel): void;

	channelDidUpdateMessage?(sender: SBDBaseChannel, message: SBDBaseMessage): void;

	channelDidUpdateOperators?(sender: SBDBaseChannel): void;

	channelDidUpdateReadReceipt?(sender: SBDGroupChannel): void;

	channelDidUpdateThreadInfo?(channel: SBDBaseChannel, threadInfoUpdateEvent: SBDThreadInfoUpdateEvent): void;

	channelDidUpdateTypingStatus?(sender: SBDGroupChannel): void;

	channelMessageWasDeleted?(sender: SBDBaseChannel, messageId: number): void;

	channelUpdatedMetaCounters?(sender: SBDBaseChannel, updatedMetaCounters: NSDictionary<string, number>): void;

	channelUpdatedMetaData?(sender: SBDBaseChannel, updatedMetaData: NSDictionary<string, string>): void;

	channelUpdatedReaction?(sender: SBDBaseChannel, reactionEvent: SBDReactionEvent): void;

	channelUserDidEnter?(sender: SBDOpenChannel, user: SBDUser): void;

	channelUserDidExit?(sender: SBDOpenChannel, user: SBDUser): void;

	channelUserDidJoin?(sender: SBDGroupChannel, user: SBDUser): void;

	channelUserDidLeave?(sender: SBDGroupChannel, user: SBDUser): void;

	channelUserWasBanned?(sender: SBDBaseChannel, user: SBDUser): void;

	channelUserWasMuted?(sender: SBDBaseChannel, user: SBDUser): void;

	channelUserWasUnbanned?(sender: SBDBaseChannel, user: SBDUser): void;

	channelUserWasUnmuted?(sender: SBDBaseChannel, user: SBDUser): void;

	channelWasChanged?(sender: SBDBaseChannel): void;

	channelWasDeletedChannelType?(channelUrl: string, channelType: SBDChannelType): void;

	channelWasFrozen?(sender: SBDBaseChannel): void;

	channelWasHidden?(sender: SBDGroupChannel): void;

	channelWasUnfrozen?(sender: SBDBaseChannel): void;
}
declare var SBDChannelDelegate: {

	prototype: SBDChannelDelegate;
};

declare const enum SBDChannelEventCategory {

	None = 0,

	ChannelJoin = 10000,

	ChannelLeave = 10001,

	UpdateOperator = 10002,

	ChannelInvite = 10020,

	ChannelDeclineInvite = 10022,

	ChannelEnter = 10102,

	ChannelExit = 10103,

	ChannelMute = 10201,

	ChannelUnmute = 10200,

	ChannelBan = 10601,

	ChannelUnban = 10600,

	ChannelFrozen = 10701,

	ChannelUnfrozen = 10700,

	TypingStart = 10900,

	TypingEnd = 10901,

	ChannelPropChanged = 11000,

	ChannelDeleted = 12000,

	MetaDataChanged = 11100,

	MetaCounterChanged = 11200,

	ChannelHidden = 13000,

	ChannelUnhidden = 13001
}

declare const enum SBDChannelHiddenStateFilter {

	UnhiddenOnly = 0,

	HiddenOnly = 1,

	HiddenAllowAutoUnhide = 2,

	HiddenPreventAutoUnhide = 3
}

declare const enum SBDChannelMetaCountersUpdateMode {

	UpdateModeSet = 0,

	UpdateModeIncrease = 1,

	UpdateModeDecrease = 2
}

declare const enum SBDChannelQueryIncludeOption {

	None = 1,

	EmptyChannel = 2,

	MemberList = 4,

	FrozenChannel = 8,

	ReadReceipt = 16,

	DeliveryReceipt = 32,

	MetaData = 64
}

declare const enum SBDChannelType {

	Open = 0,

	Group = 1
}

interface SBDComparator extends NSObjectProtocol {

	comparator(): (p1: any, p2: any) => NSComparisonResult;

	orderBetweenObjectAndObject(obj1: any, obj2: any): NSComparisonResult;
}
declare var SBDComparator: {

	prototype: SBDComparator;
};

interface SBDConnectionDelegate extends NSObjectProtocol {

	didCancelReconnection?(): void;

	didFailReconnection?(): void;

	didStartReconnection?(): void;

	didSucceedReconnection?(): void;
}
declare var SBDConnectionDelegate: {

	prototype: SBDConnectionDelegate;
};

declare class SBDConnectionManager extends NSObject {

	static addNetworkDelegateIdentifier(delegate: SBDNetworkDelegate, identifier: string): void;

	static alloc(): SBDConnectionManager; // inherited from NSObject

	static authenticate(): void;

	static new(): SBDConnectionManager; // inherited from NSObject

	static removeAllNetworkDelegates(): void;

	static removeNetworkDelegateForIdentifier(identifier: string): void;

	static setAuthenticateDelegate(delegate: SBDAuthenticateDelegate): void;
}

declare const enum SBDCountPreference {

	All = 0,

	UnreadMessageCountOnly = 1,

	UnreadMentionCountOnly = 2,

	Off = 3
}

declare class SBDEmoji extends NSObject implements SBDMappable {

	static alloc(): SBDEmoji; // inherited from NSObject

	static new(): SBDEmoji; // inherited from NSObject

	static objectsFromJsonArray(array: NSArray<any> | any[]): NSArray<any>;

	readonly key: string;

	readonly url: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from SBDMappable

	_toDictionary(): NSDictionary<any, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SBDEmojiCategory extends NSObject implements SBDMappable {

	static alloc(): SBDEmojiCategory; // inherited from NSObject

	static new(): SBDEmojiCategory; // inherited from NSObject

	static objectsFromJsonArray(array: NSArray<any> | any[]): NSArray<any>;

	readonly cid: number;

	readonly emojis: NSArray<SBDEmoji>;

	readonly name: string;

	readonly url: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from SBDMappable

	_toDictionary(): NSDictionary<any, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SBDEmojiContainer extends NSObject implements SBDMappable {

	static alloc(): SBDEmojiContainer; // inherited from NSObject

	static buildFromSerializedData(data: NSData): SBDEmojiContainer;

	static new(): SBDEmojiContainer; // inherited from NSObject

	static objectsFromJsonArray(array: NSArray<any> | any[]): NSArray<any>;

	readonly categories: NSArray<SBDEmojiCategory>;

	readonly emojiHash: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from SBDMappable

	_toDictionary(): NSDictionary<any, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	serialize(): NSData;
}

declare class SBDError extends NSError {

	static alloc(): SBDError; // inherited from NSObject

	static errorWithDictionary(dict: NSDictionary<any, any>): SBDError;

	static errorWithDomainCodeUserInfo(domain: string, code: number, dict: NSDictionary<string, any>): SBDError; // inherited from NSError

	static errorWithNSError(error: NSError): SBDError;

	static fileProviderErrorForCollisionWithItem(existingItem: NSFileProviderItem): SBDError; // inherited from NSError

	static fileProviderErrorForNonExistentItemWithIdentifier(itemIdentifier: string): SBDError; // inherited from NSError

	static new(): SBDError; // inherited from NSObject
}

declare const enum SBDErrorCode {

	InvalidParameterValueString = 400100,

	InvalidParameterValueNumber = 400101,

	InvalidParameterValueList = 400102,

	InvalidParameterValueJson = 400103,

	InvalidParameterValueBoolean = 400104,

	InvalidParameterValueRequired = 400105,

	InvalidParameterValuePositive = 400106,

	InvalidParameterValueNegative = 400107,

	NonAuthorized = 400108,

	TokenExpired = 400109,

	InvalidChannelUrl = 400110,

	InvalidParameterValue = 400111,

	UnusableCharacterIncluded = 400151,

	NotFoundInDatabase = 400201,

	DuplicatedData = 400202,

	UserDeactivated = 400300,

	UserNotExist = 400301,

	AccessTokenNotValid = 400302,

	AuthUnknownError = 400303,

	AppIdNotValid = 400304,

	AuthUserIdTooLong = 400305,

	AuthPlanQuotaExceeded = 400306,

	SessionKeyExpired = 400309,

	InvalidApiToken = 400401,

	ParameterMissing = 400402,

	InvalidJsonBody = 400403,

	InternalServerError = 500901,

	RateLimitExceeded = 500910,

	UnknownError = 800000,

	InvalidInitialization = 800100,

	ConnectionRequired = 800101,

	ConnectionCanceled = 800102,

	InvalidParameter = 800110,

	NetworkError = 800120,

	NetworkRoutingError = 800121,

	MalformedData = 800130,

	MalformedErrorData = 800140,

	WrongChannelType = 800150,

	MarkAsReadRateLimitExceeded = 800160,

	QueryInProgress = 800170,

	AckTimeout = 800180,

	LoginTimeout = 800190,

	WebSocketConnectionClosed = 800200,

	WebSocketConnectionFailed = 800210,

	RequestFailed = 800220,

	FileUploadCancelFailed = 800230,

	FileUploadCanceled = 800240,

	FileUploadTimeout = 800250,

	FileSizeLimitExceeded = 800260,

	TimerWasExpired = 800301,

	TimerWasAlreadyDone = 800302,

	PendingError = 800400,

	PassedInvalidAccessToken = 800500,

	SessionKeyRefreshSucceeded = 800501,

	SessionKeyRefreshFailed = 800502,

	LocalDatabase = 800700,

	SocketLoginRequired = 900010,

	SocketUserNotMember = 900020,

	SocketUserDeactivated = 900021,

	SocketUserNotOwnerOfMessage = 900022,

	SocketUserSendMessageNotAllowed = 900023,

	SocketInvalidMentionForMessage = 900025,

	SocketInvalidPushOptionForMessage = 900026,

	SocketTooManyMetaKeyForMessage = 900027,

	SocketTooManyMetaValueForMessage = 900028,

	SocketTooManyMetaArrayForMessage = 900029,

	SocketGuestNotAllowed = 900030,

	SocketMutedUserInApplicationSendMessageNotAllowed = 900040,

	SocketMutedUserInChannelSendMessageNotAllowed = 900041,

	SocketChannelFrozen = 900050,

	SocketProfanityMessageBlocked = 900060,

	SocketBannedUrlsBlocked = 900061,

	SocketRestrictedDomainBlocked = 900065,

	SocketModeratedFileBlocked = 900066,

	SocketEnterDeletedChannel = 900070,

	SocketBlockedUserReceiveMessageNotAllowed = 900080,

	SocketDeactivatedUserReceiveMessageNotAllowed = 900081,

	SocketWrongChannelType = 900090,

	SocketBannedUserSendMessageNotAllowed = 900100,

	SocketTooManyMessages = 900200,

	SocketMessageNotFound = 900300,

	SocketTooManyParticipants = 900400,

	SocketChannelNotFound = 900500
}

declare class SBDFileMessage extends SBDBaseMessage {

	static alloc(): SBDFileMessage; // inherited from NSObject

	static buildFromSerializedData(data: NSData): SBDFileMessage; // inherited from SBDBaseMessage

	static buildFromSerializedDataDesiredState(data: NSData, desiredState: SBDMessageSendingStatus): SBDFileMessage; // inherited from SBDBaseMessage

	static buildWithFileUrlNameSizeTypeDataRequestIdSenderChannelCustomType(url: string, name: string, size: number, type: string, data: string, requestId: string, sender: SBDUser, channel: SBDBaseChannel, customType: string): NSMutableDictionary<string, NSObject>;

	static buildWithFileUrlNameSizeTypeDataRequestIdSenderChannelCustomTypeThumbnailSizes(url: string, name: string, size: number, type: string, data: string, requestId: string, sender: SBDUser, channel: SBDBaseChannel, customType: string, thumbnailSizes: NSArray<SBDThumbnailSize> | SBDThumbnailSize[]): NSMutableDictionary<string, NSObject>;

	static new(): SBDFileMessage; // inherited from NSObject

	readonly name: string;

	readonly plainUrl: string;

	readonly requestState: SBDMessageRequestState;

	readonly size: number;

	readonly thumbnails: NSArray<SBDThumbnail>;

	readonly type: string;

	readonly url: string;
}

declare class SBDFileMessageParams extends SBDBaseMessageParams implements NSCopying {

	static alloc(): SBDFileMessageParams; // inherited from NSObject

	static new(): SBDFileMessageParams; // inherited from NSObject

	file: NSData;

	fileName: string;

	fileSize: number;

	fileUrl: string;

	mimeType: string;

	thumbnailSizes: NSArray<SBDThumbnailSize>;

	constructor(o: { file: NSData; });

	constructor(o: { fileUrl: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithFile(file: NSData): this;

	initWithFileUrl(fileUrl: string): this;
}

declare class SBDFriendListQuery extends NSObject implements NSCopying {

	static alloc(): SBDFriendListQuery; // inherited from NSObject

	static new(): SBDFriendListQuery; // inherited from NSObject

	readonly hasNext: boolean;

	limit: number;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	loadNextPageWithCompletionHandler(completionHandler: (p1: NSArray<SBDUser>, p2: SBDError) => void): void;
}

declare class SBDGroupChannel extends SBDBaseChannel implements SBDComparator, SBDMappable {

	static alloc(): SBDGroupChannel; // inherited from NSObject

	static buildFromSerializedData(data: NSData): SBDGroupChannel; // inherited from SBDBaseChannel

	static compareWithChannelAChannelBOrder(channelA: SBDGroupChannel, channelB: SBDGroupChannel, order: SBDGroupChannelListOrder): NSComparisonResult;

	static createChannelWithNameIsDistinctUserIdsCoverImageCoverImageNameDataCustomTypeProgressHandlerCompletionHandler(name: string, isDistinct: boolean, userIds: NSArray<string> | string[], coverImage: NSData, coverImageName: string, data: string, customType: string, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	static createChannelWithNameIsDistinctUserIdsCoverImageCoverImageNameDataProgressHandlerCompletionHandler(name: string, isDistinct: boolean, userIds: NSArray<string> | string[], coverImage: NSData, coverImageName: string, data: string, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	static createChannelWithNameIsDistinctUserIdsCoverImageFilePathDataCustomTypeProgressHandlerCompletionHandler(name: string, isDistinct: boolean, userIds: NSArray<string> | string[], coverImageFilePath: string, data: string, customType: string, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	static createChannelWithNameIsDistinctUserIdsCoverUrlDataCompletionHandler(name: string, isDistinct: boolean, userIds: NSArray<string> | string[], coverUrl: string, data: string, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	static createChannelWithNameIsDistinctUserIdsCoverUrlDataCustomTypeCompletionHandler(name: string, isDistinct: boolean, userIds: NSArray<string> | string[], coverUrl: string, data: string, customType: string, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	static createChannelWithNameIsDistinctUsersCoverImageCoverImageNameDataProgressHandlerCompletionHandler(name: string, isDistinct: boolean, users: NSArray<SBDUser> | SBDUser[], coverImage: NSData, coverImageName: string, data: string, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	static createChannelWithNameIsDistinctUsersCoverUrlDataCompletionHandler(name: string, isDistinct: boolean, users: NSArray<SBDUser> | SBDUser[], coverUrl: string, data: string, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	static createChannelWithNameUserIdsCoverImageCoverImageNameDataProgressHandlerCompletionHandler(name: string, userIds: NSArray<string> | string[], coverImage: NSData, coverImageName: string, data: string, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	static createChannelWithNameUserIdsCoverUrlDataCompletionHandler(name: string, userIds: NSArray<string> | string[], coverUrl: string, data: string, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	static createChannelWithNameUsersCoverImageCoverImageNameDataProgressHandlerCompletionHandler(name: string, users: NSArray<SBDUser> | SBDUser[], coverImage: NSData, coverImageName: string, data: string, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	static createChannelWithNameUsersCoverUrlDataCompletionHandler(name: string, users: NSArray<SBDUser> | SBDUser[], coverUrl: string, data: string, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	static createChannelWithParamsCompletionHandler(params: SBDGroupChannelParams, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	static createChannelWithParamsProgressHandlerCompletionHandler(params: SBDGroupChannelParams, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	static createChannelWithUserIdsIsDistinctCompletionHandler(userIds: NSArray<string> | string[], isDistinct: boolean, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	static createChannelWithUsersIsDistinctCompletionHandler(users: NSArray<SBDUser> | SBDUser[], isDistinct: boolean, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	static createDistinctChannelIfNotExistWithParamsCompletionHandler(params: SBDGroupChannelParams, completionHandler: (p1: SBDGroupChannel, p2: boolean, p3: SBDError) => void): void;

	static createDistinctChannelIfNotExistWithParamsProgressHandlerCompletionHandler(params: SBDGroupChannelParams, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDGroupChannel, p2: boolean, p3: SBDError) => void): void;

	static createMyGroupChannelListQuery(): SBDGroupChannelListQuery;

	static createPublicGroupChannelListQuery(): SBDPublicGroupChannelListQuery;

	static getChannelCountWithMemberStateFilterCompletionHandler(memberStateFilter: SBDMemberStateFilter, completionHandler: (p1: number, p2: SBDError) => void): void;

	static getChannelFromCacheWithChannelUrl(channelUrl: string): SBDGroupChannel;

	static getChannelWithUrlCompletionHandler(channelUrl: string, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	static getChannelWithoutCacheCompletionHandler(channelUrl: string, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	static getTotalUnreadChannelCountWithCompletionHandler(completionHandler: (p1: number, p2: SBDError) => void): void;

	static getTotalUnreadMessageCountWithChannelCustomTypesCompletionHandler(customTypes: NSArray<string> | string[], completionHandler: (p1: number, p2: SBDError) => void): void;

	static getTotalUnreadMessageCountWithCompletionHandler(completionHandler: (p1: number, p2: SBDError) => void): void;

	static getTotalUnreadMessageCountWithParamsCompletionHandler(params: SBDGroupChannelTotalUnreadMessageCountParams, completionHandler: (p1: number, p2: SBDError) => void): void;

	static getUnreadItemCountWithKeyCompletionHandler(key: SBDUnreadItemKey, completionHandler: (p1: SBDUnreadItemCount, p2: SBDError) => void): void;

	static hasChannelInCache(channelUrl: string): boolean;

	static markAsReadAllWithCompletionHandler(completionHandler: (p1: SBDError) => void): void;

	static new(): SBDGroupChannel; // inherited from NSObject

	static objectsFromJsonArray(array: NSArray<any> | any[]): NSArray<any>;

	readonly accessCodeRequired: boolean;

	readonly discoverable: boolean;

	readonly hiddenState: SBDGroupChannelHiddenState;

	readonly invitedAt: number;

	isBroadcast: boolean;

	isDistinct: boolean;

	isHidden: boolean;

	isPublic: boolean;

	readonly isPushEnabled: boolean;

	isSuper: boolean;

	readonly joinedAt: number;

	readonly joinedMemberCount: number;

	lastMessage: SBDBaseMessage;

	readonly memberCount: number;

	readonly members: NSMutableArray<SBDMember>;

	readonly messageOffsetTimestamp: number;

	readonly messageSurvivalSeconds: number;

	readonly myCountPreference: SBDCountPreference;

	readonly myLastRead: number;

	myMemberState: SBDMemberState;

	readonly myMutedState: SBDMutedState;

	readonly myPushTriggerOption: SBDGroupChannelPushTriggerOption;

	readonly myRole: SBDRole;

	sendMarkAsReadEnable: boolean;

	readonly unreadMentionCount: number;

	unreadMessageCount: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from SBDMappable

	_toDictionary(): NSDictionary<any, any>;

	acceptInvitationWithAccessCodeCompletionHandler(accessCode: string, completionHandler: (p1: SBDError) => void): void;

	acceptInvitationWithCompletionHandler(completionHandler: (p1: SBDError) => void): void;

	banUserSecondsDescriptionCompletionHandler(user: SBDUser, seconds: number, description: string, completionHandler: (p1: SBDError) => void): void;

	banUserWithUserIdSecondsDescriptionCompletionHandler(userId: string, seconds: number, description: string, completionHandler: (p1: SBDError) => void): void;

	class(): typeof NSObject;

	comparator(): (p1: any, p2: any) => NSComparisonResult;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createBannedUserListQuery(): SBDBannedUserListQuery;

	createMemberListQuery(): SBDGroupChannelMemberListQuery;

	declineInvitationWithCompletionHandler(completionHandler: (p1: SBDError) => void): void;

	deleteChannelWithCompletionHandler(completionHandler: (p1: SBDError) => void): void;

	endTyping(): void;

	freezeWithCompletionHandler(completionHandler: (p1: SBDError) => void): void;

	getDeliveryReceipt(message: SBDBaseMessage): number;

	getInviter(): SBDUser;

	getLastSeenAtByUser(user: SBDUser): number;

	getLastSeenAtByUserId(userId: string): number;

	getMember(userId: string): SBDMember;

	getMyPushTriggerOptionWithCompletionHandler(completionHandler: (p1: SBDGroupChannelPushTriggerOption, p2: SBDError) => void): void;

	getPushPreferenceWithCompletionHandler(completionHandler: (p1: boolean, p2: SBDError) => void): void;

	getReadMembersWithMessage(message: SBDBaseMessage): NSArray<SBDMember>;

	getReadMembersWithMessageIncludeAllMembers(message: SBDBaseMessage, includeAllMembers: boolean): NSArray<SBDMember>;

	getReadReceiptOfMessage(message: SBDBaseMessage): number;

	getReadStatus(): NSDictionary<string, NSDictionary<string, NSObject>>;

	getReadStatusIncludingAllMembers(includeAllMembers: boolean): NSDictionary<string, NSDictionary<string, NSObject>>;

	getTypingMembers(): NSArray<SBDMember>;

	getTypingUsers(): NSArray<SBDUser>;

	getUndeliveredMemberCount(message: SBDBaseMessage): number;

	getUnreadItemCountWithKeyCompletionHandler(key: SBDUnreadItemKey, completionHandler: (p1: SBDUnreadItemCount, p2: SBDError) => void): void;

	getUnreadMemberCount(message: SBDBaseMessage): number;

	getUnreadMembersWithMessage(message: SBDBaseMessage): NSArray<SBDMember>;

	getUnreadMembersWithMessageIncludeAllMembers(message: SBDBaseMessage, includeAllMembers: boolean): NSArray<SBDMember>;

	hasMember(userId: string): boolean;

	hideChannelWithCompletionHandler(completionHandler: (p1: SBDError) => void): void;

	hideChannelWithHidePreviousMessagesAllowAutoUnhideCompletionHandler(hidePreviousMessages: boolean, allowAutoUnhide: boolean, completionHandler: (p1: SBDError) => void): void;

	hideChannelWithHidePreviousMessagesCompletionHandler(hidePreviousMessages: boolean, completionHandler: (p1: SBDError) => void): void;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	inviteUserCompletionHandler(user: SBDUser, completionHandler: (p1: SBDError) => void): void;

	inviteUserIdCompletionHandler(userId: string, completionHandler: (p1: SBDError) => void): void;

	inviteUserIdsCompletionHandler(userIds: NSArray<string> | string[], completionHandler: (p1: SBDError) => void): void;

	inviteUsersCompletionHandler(users: NSArray<SBDUser> | SBDUser[], completionHandler: (p1: SBDError) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isTyping(): boolean;

	joinWithAccessCodeCompletionHandler(accessCode: string, completionHandler: (p1: SBDError) => void): void;

	joinWithCompletionHandler(completionHandler: (p1: SBDError) => void): void;

	leaveChannelWithCompletionHandler(completionHandler: (p1: SBDError) => void): void;

	markAsDelivered(): void;

	markAsRead(): void;

	muteUserCompletionHandler(user: SBDUser, completionHandler: (p1: SBDError) => void): void;

	muteUserSecondsDescriptionCompletionHandler(user: SBDUser, seconds: number, description: string, completionHandler: (p1: SBDError) => void): void;

	muteUserWithUserIdCompletionHandler(userId: string, completionHandler: (p1: SBDError) => void): void;

	muteUserWithUserIdSecondsDescriptionCompletionHandler(userId: string, seconds: number, description: string, completionHandler: (p1: SBDError) => void): void;

	notifyScreenshotWasTakenWithCompletionHandler(completionHandler: (p1: SBDError) => void): void;

	orderBetweenObjectAndObject(obj1: any, obj2: any): NSComparisonResult;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	refreshWithCompletionHandler(completionHandler: (p1: SBDError) => void): void;

	registerScheduledUserMessageWithParamsCompletionHandler(params: SBDScheduledUserMessageParams, completionHandler: (p1: SBDScheduledUserMessage, p2: SBDError) => void): void;

	resetMyHistoryWithCompletionHandler(completionHandler: (p1: SBDError) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setMyCountPreferenceCompletionHandler(myCountPreference: SBDCountPreference, completionHandler: (p1: SBDError) => void): void;

	setMyPushTriggerOptionCompletionHandler(pushTriggerOption: SBDGroupChannelPushTriggerOption, completionHandler: (p1: SBDError) => void): void;

	setPushPreferenceWithPushOnCompletionHandler(pushOn: boolean, completionHandler: (p1: SBDError) => void): void;

	startTyping(): void;

	unbanUserCompletionHandler(user: SBDUser, completionHandler: (p1: SBDError) => void): void;

	unbanUserWithUserIdCompletionHandler(userId: string, completionHandler: (p1: SBDError) => void): void;

	unfreezeWithCompletionHandler(completionHandler: (p1: SBDError) => void): void;

	unhideChannelWithCompletionHandler(completionHandler: (p1: SBDError) => void): void;

	unmuteUserCompletionHandler(user: SBDUser, completionHandler: (p1: SBDError) => void): void;

	unmuteUserWithUserIdCompletionHandler(userId: string, completionHandler: (p1: SBDError) => void): void;

	updateChannelWithNameCoverImageCoverImageNameDataProgressHandlerCompletionHandler(name: string, coverImage: NSData, coverImageName: string, data: string, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	updateChannelWithNameCoverUrlDataCompletionHandler(name: string, coverUrl: string, data: string, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	updateChannelWithNameIsDistinctCoverImageCoverImageNameDataCustomTypeProgressHandlerCompletionHandler(name: string, isDistinct: boolean, coverImage: NSData, coverImageName: string, data: string, customType: string, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	updateChannelWithNameIsDistinctCoverImageCoverImageNameDataProgressHandlerCompletionHandler(name: string, isDistinct: boolean, coverImage: NSData, coverImageName: string, data: string, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	updateChannelWithNameIsDistinctCoverImageFilePathDataCustomTypeProgressHandlerCompletionHandler(name: string, isDistinct: boolean, coverImageFilePath: string, data: string, customType: string, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	updateChannelWithNameIsDistinctCoverUrlDataCompletionHandler(name: string, isDistinct: boolean, coverUrl: string, data: string, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	updateChannelWithNameIsDistinctCoverUrlDataCustomTypeCompletionHandler(name: string, isDistinct: boolean, coverUrl: string, data: string, customType: string, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	updateChannelWithParamsCompletionHandler(params: SBDGroupChannelParams, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;

	updateChannelWithParamsProgressHandlerCompletionHandler(params: SBDGroupChannelParams, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDGroupChannel, p2: SBDError) => void): void;
}

declare class SBDGroupChannelChangeLogsParams extends NSObject {

	static alloc(): SBDGroupChannelChangeLogsParams; // inherited from NSObject

	static createWithGroupChannelListQuery(query: SBDGroupChannelListQuery): SBDGroupChannelChangeLogsParams;

	static new(): SBDGroupChannelChangeLogsParams; // inherited from NSObject

	customTypes: NSArray<string>;

	includeEmptyChannel: boolean;

	includeFrozenChannel: boolean;
}

declare const enum SBDGroupChannelHiddenState {

	Unhidden = 0,

	HiddenAllowAutoUnhide = 1,

	HiddenPreventAutoUnhide = 2
}

declare const enum SBDGroupChannelListOrder {

	Chronological = 0,

	LatestLastMessage = 1,

	ChannelNameAlphabetical = 2,

	ChannelMetaDataValueAlphabetical = 3
}

declare class SBDGroupChannelListQuery extends NSObject implements NSCopying, SBDComparator, SBDMappable {

	static alloc(): SBDGroupChannelListQuery; // inherited from NSObject

	static buildFromSerializedData(data: NSData): SBDGroupChannelListQuery;

	static new(): SBDGroupChannelListQuery; // inherited from NSObject

	static objectsFromJsonArray(array: NSArray<any> | any[]): NSArray<any>;

	channelHiddenStateFilter: SBDChannelHiddenStateFilter;

	channelNameContainsFilter: string;

	channelNameFilter: string;

	channelUrlsFilter: NSArray<string>;

	customTypeFilter: string;

	customTypeStartsWithFilter: string;

	customTypesFilter: NSArray<string>;

	readonly hasNext: boolean;

	includeEmptyChannel: boolean;

	includeFrozenChannel: boolean;

	includeMemberList: boolean;

	includeMetaData: boolean;

	limit: number;

	memberStateFilter: SBDMemberStateFilter;

	metaDataOrderKeyFilter: string;

	nicknameContainsFilter: string;

	order: SBDGroupChannelListOrder;

	publicChannelFilter: SBDGroupChannelPublicChannelFilter;

	queryType: SBDGroupChannelListQueryType;

	readonly searchFields: SBDGroupChannelListQuerySearchField;

	readonly searchQuery: string;

	superChannelFilter: SBDGroupChannelSuperChannelFilter;

	unreadChannelFilter: SBDUnreadChannelFilter;

	userIdsExactFilter: NSArray<string>;

	readonly userIdsIncludeFilter: NSArray<string>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from SBDMappable

	_toDictionary(): NSDictionary<any, any>;

	belongsTo(channel: SBDGroupChannel): boolean;

	class(): typeof NSObject;

	comparator(): (p1: any, p2: any) => NSComparisonResult;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isLoading(): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadNextPageWithCompletionHandler(completionHandler: (p1: NSArray<SBDGroupChannel>, p2: SBDError) => void): void;

	orderBetweenObjectAndObject(obj1: any, obj2: any): NSComparisonResult;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	serialize(): NSData;

	setCustomTypeFilter(customType: string): void;

	setSearchFilterFields(query: string, fields: SBDGroupChannelListQuerySearchField): void;

	setUserIdsFilterExactMatch(userIds: NSArray<string> | string[], exactMatch: boolean): void;

	setUserIdsIncludeFilterQueryType(userIds: NSArray<string> | string[], queryType: SBDGroupChannelListQueryType): void;
}

declare const enum SBDGroupChannelListQuerySearchField {

	MemberNickname = 1,

	ChannelName = 2
}

declare const enum SBDGroupChannelListQueryType {

	And = 0,

	Or = 1
}

declare class SBDGroupChannelMemberListQuery extends NSObject implements NSCopying {

	static alloc(): SBDGroupChannelMemberListQuery; // inherited from NSObject

	static new(): SBDGroupChannelMemberListQuery; // inherited from NSObject

	readonly hasNext: boolean;

	limit: number;

	readonly loading: boolean;

	memberStateFilter: SBDMemberStateFilter;

	mutedMemberFilter: SBDGroupChannelMutedMemberFilter;

	nicknameStartsWithFilter: string;

	operatorFilter: SBDGroupChannelOperatorFilter;

	order: SBDMemberListOrder;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	loadNextPageWithCompletionHandler(completionHandler: (p1: NSArray<SBDMember>, p2: SBDError) => void): void;
}

declare const enum SBDGroupChannelMutedMemberFilter {

	All = 0,

	Muted = 1,

	Unmuted = 2
}

declare const enum SBDGroupChannelOperatorFilter {

	All = 0,

	Operator = 1,

	NonOperator = 2
}

declare class SBDGroupChannelParams extends NSObject implements NSCopying {

	static alloc(): SBDGroupChannelParams; // inherited from NSObject

	static new(): SBDGroupChannelParams; // inherited from NSObject

	accessCode: string;

	channelUrl: string;

	coverImage: NSData;

	coverUrl: string;

	customType: string;

	data: string;

	discoverable: boolean;

	isBroadcast: boolean;

	isDistinct: boolean;

	isEphemeral: boolean;

	isPublic: boolean;

	isSuper: boolean;

	messageSurvivalSeconds: number;

	name: string;

	operatorUserIds: NSArray<string>;

	strict: boolean;

	addUser(user: SBDUser): void;

	addUserId(userId: string): void;

	addUserIds(userIds: NSArray<string> | string[]): void;

	addUsers(users: NSArray<SBDUser> | SBDUser[]): void;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	setOperators(operators: NSArray<SBDUser> | SBDUser[]): void;

	userIds(): NSArray<string>;
}

declare const enum SBDGroupChannelPublicChannelFilter {

	All = 0,

	Public = 1,

	Private = 2
}

declare const enum SBDGroupChannelPushTriggerOption {

	Default = 0,

	All = 1,

	Off = 2,

	MentionOnly = 3
}

declare const enum SBDGroupChannelSuperChannelFilter {

	All = 0,

	Super = 1,

	NonSuper = 2
}

declare class SBDGroupChannelTotalUnreadMessageCountParams extends NSObject {

	static alloc(): SBDGroupChannelTotalUnreadMessageCountParams; // inherited from NSObject

	static new(): SBDGroupChannelTotalUnreadMessageCountParams; // inherited from NSObject

	channelCustomTypesFilter: NSArray<string>;

	superChannelFilter: SBDGroupChannelSuperChannelFilter;
}

declare const enum SBDInitPolicy {

	CacheAndReplaceByApi = 0
}

declare const enum SBDLogLevel {

	None = 0,

	Error = 1,

	Warning = 2,

	Info = 4
}

declare class SBDMain extends NSObject {

	static addChannelDelegateIdentifier(delegate: SBDChannelDelegate, identifier: string): void;

	static addConnectionDelegateIdentifier(delegate: SBDConnectionDelegate, identifier: string): void;

	static addExtensionVersion(key: string, version: string): void;

	static addFriendsWithUserIdsCompletionHandler(userIds: NSArray<string> | string[], completionHandler: (p1: NSArray<SBDUser>, p2: SBDError) => void): void;

	static addUserEventDelegateIdentifier(delegate: SBDUserEventDelegate, identifier: string): void;

	static alloc(): SBDMain; // inherited from NSObject

	static blockUserCompletionHandler(user: SBDUser, completionHandler: (p1: SBDUser, p2: SBDError) => void): void;

	static blockUserIdCompletionHandler(userId: string, completionHandler: (p1: SBDUser, p2: SBDError) => void): void;

	static channelDelegateForIdentifier(identifier: string): SBDChannelDelegate;

	static clearCachedData(): void;

	static connectWithUserIdAccessTokenApiHostWsHostCompletionHandler(userId: string, accessToken: string, apiHost: string, wsHost: string, completionHandler: (p1: SBDUser, p2: SBDError) => void): void;

	static connectWithUserIdAccessTokenCompletionHandler(userId: string, accessToken: string, completionHandler: (p1: SBDUser, p2: SBDError) => void): void;

	static connectWithUserIdCompletionHandler(userId: string, completionHandler: (p1: SBDUser, p2: SBDError) => void): void;

	static connectionDelegateForIdentifier(identifier: string): SBDConnectionDelegate;

	static createAllUserListQuery(): SBDUserListQuery;

	static createApplicationUserListQuery(): SBDApplicationUserListQuery;

	static createBlockedUserListQuery(): SBDBlockedUserListQuery;

	static createFriendListQuery(): SBDFriendListQuery;

	static createUserListQueryWithUserIds(userIds: NSArray<string> | string[]): SBDUserListQuery;

	static deleteFriendWithDiscoveryCompletionHandler(discoveryKey: string, completionHandler: (p1: SBDError) => void): void;

	static deleteFriendWithUserIdCompletionHandler(userId: string, completionHandler: (p1: SBDError) => void): void;

	static deleteFriendsWithDiscoveriesCompletionHandler(discoveryKeys: NSArray<string> | string[], completionHandler: (p1: SBDError) => void): void;

	static deleteFriendsWithUserIdsCompletionHandler(userIds: NSArray<string> | string[], completionHandler: (p1: SBDError) => void): void;

	static disconnectWithCompletionHandler(completionHandler: () => void): void;

	static ekey(): string;

	static getAllEmojis(completionHandler: (p1: SBDEmojiContainer, p2: SBDError) => void): void;

	static getAllowFriendDiscoveryWithCompletionHandler(completionHandler: (p1: boolean, p2: SBDError) => void): void;

	static getAppInfo(): SBDAppInfo;

	static getApplicationId(): string;

	static getChannelCountWithMemberStateFilterCompletionHandler(memberStateFilter: SBDMemberStateFilter, completionHandler: (p1: number, p2: SBDError) => void): void;

	static getChannelInvitationPreferenceAutoAcceptWithCompletionHandler(completionHandler: (p1: boolean, p2: SBDError) => void): void;

	static getConnectState(): SBDWebSocketConnectionState;

	static getCurrentUser(): SBDUser;

	static getDebugMode(): boolean;

	static getDoNotDisturbWithCompletionHandler(completionHandler: (p1: boolean, p2: number, p3: number, p4: number, p5: number, p6: string, p7: SBDError) => void): void;

	static getEmojiCategoryCompletionHandler(categoryId: number, completionHandler: (p1: SBDEmojiCategory, p2: SBDError) => void): void;

	static getEmojiCompletionHandler(emojiKey: string, completionHandler: (p1: SBDEmoji, p2: SBDError) => void): void;

	static getFriendChangeLogsByTokenCompletionHandler(token: string, completionHandler: (p1: NSArray<SBDUser>, p2: NSArray<string>, p3: boolean, p4: string, p5: SBDError) => void): void;

	static getLastConnectedAt(): number;

	static getLogLevel(): SBDLogLevel;

	static getMimeType(file: NSData): string;

	static getMyGroupChannelChangeLogsByTimestampCustomTypesCompletionHandler(timestamp: number, customTypes: NSArray<string> | string[], completionHandler: (p1: NSArray<SBDGroupChannel>, p2: NSArray<string>, p3: boolean, p4: string, p5: SBDError) => void): void;

	static getMyGroupChannelChangeLogsByTimestampCustomTypesIncludeEmptyChannelCompletionHandler(timestamp: number, customTypes: NSArray<string> | string[], includeEmptyChannel: boolean, completionHandler: (p1: NSArray<SBDGroupChannel>, p2: NSArray<string>, p3: boolean, p4: string, p5: SBDError) => void): void;

	static getMyGroupChannelChangeLogsByTimestampParamsCompletionHandler(timestamp: number, params: SBDGroupChannelChangeLogsParams, completionHandler: (p1: NSArray<SBDGroupChannel>, p2: NSArray<string>, p3: boolean, p4: string, p5: SBDError) => void): void;

	static getMyGroupChannelChangeLogsByTokenCustomTypesCompletionHandler(token: string, customTypes: NSArray<string> | string[], completionHandler: (p1: NSArray<SBDGroupChannel>, p2: NSArray<string>, p3: boolean, p4: string, p5: SBDError) => void): void;

	static getMyGroupChannelChangeLogsByTokenCustomTypesIncludeEmptyChannelCompletionHandler(token: string, customTypes: NSArray<string> | string[], includeEmptyChannel: boolean, completionHandler: (p1: NSArray<SBDGroupChannel>, p2: NSArray<string>, p3: boolean, p4: string, p5: SBDError) => void): void;

	static getMyGroupChannelChangeLogsByTokenParamsCompletionHandler(token: string, params: SBDGroupChannelChangeLogsParams, completionHandler: (p1: NSArray<SBDGroupChannel>, p2: NSArray<string>, p3: boolean, p4: string, p5: SBDError) => void): void;

	static getMyPushTokensByTokenPushTokenTypeCompletionHandler(token: string, pushTokenType: SBDPushTokenType, completionHandler: (p1: NSArray<string>, p2: SBDPushTokenType, p3: boolean, p4: string, p5: SBDError) => void): void;

	static getPendingPushKitToken(): NSData;

	static getPendingPushToken(): NSData;

	static getPushSoundWithCompletionHandler(completionHandler: (p1: string, p2: SBDError) => void): void;

	static getPushTemplateWithCompletionHandler(completionHandler: (p1: string, p2: SBDError) => void): void;

	static getPushTriggerOptionWithCompletionHandler(completionHandler: (p1: SBDPushTriggerOption, p2: SBDError) => void): void;

	static getSBUserAgent(): string;

	static getSDKVersion(): string;

	static getSnoozePeriod(completionHandler: (p1: boolean, p2: number, p3: number, p4: SBDError) => void): void;

	static getSubscribedCustomTypeTotalUnreadMessageCount(): number;

	static getSubscribedCustomTypeUnreadMessageCountWithCustomType(customType: string): number;

	static getSubscribedTotalUnreadMessageCount(): number;

	static getTotalUnreadChannelCountWithCompletionHandler(completionHandler: (p1: number, p2: SBDError) => void): void;

	static getTotalUnreadMessageCountWithCompletionHandler(completionHandler: (p1: number, p2: SBDError) => void): void;

	static getTotalUnreadMessageCountWithParamsCompletionHandler(params: SBDGroupChannelTotalUnreadMessageCountParams, completionHandler: (p1: number, p2: SBDError) => void): void;

	static getUnreadItemCountWithKeyCompletionHandler(key: SBDUnreadItemKey, completionHandler: (p1: SBDUnreadItemCount, p2: SBDError) => void): void;

	static initWithApplicationId(applicationId: string): boolean;

	static initWithApplicationIdUseCachingMigrationStartHandlerCompletionHandler(applicationId: string, useCaching: boolean, migrationStartHandler: () => void, completionHandler: (p1: SBDError) => void): boolean;

	static isInitialized(): boolean;

	static isUsingLocalCaching(): boolean;

	static markAsDeliveredWithChannelUrl(channelUrl: string): void;

	static markAsDeliveredWithRemoteNotificationPayloadCompletionHandler(payload: NSDictionary<any, any>, completionHandler: (p1: SBDError) => void): void;

	static markAsReadAllWithCompletionHandler(completionHandler: (p1: SBDError) => void): void;

	static markAsReadWithChannelUrlsCompletionHandler(channelUrls: NSArray<string> | string[], completionHandler: (p1: SBDError) => void): void;

	static new(): SBDMain; // inherited from NSObject

	static performCompletionHandlerDelegateQueueBlock(block: () => void): void;

	static reconnect(): boolean;

	static registerDevicePushKitTokenUniqueCompletionHandler(devToken: NSData, unique: boolean, completionHandler: (p1: SBDPushTokenRegistrationStatus, p2: SBDError) => void): void;

	static registerDevicePushTokenCompletionHandler(devToken: NSData, completionHandler: (p1: SBDPushTokenRegistrationStatus, p2: SBDError) => void): void;

	static registerDevicePushTokenUniqueCompletionHandler(devToken: NSData, unique: boolean, completionHandler: (p1: SBDPushTokenRegistrationStatus, p2: SBDError) => void): void;

	static registerPushTokenCompletionHandler(devToken: NSData, completionHandler: (p1: NSDictionary<any, any>, p2: SBDError) => void): void;

	static removeAllChannelDelegates(): void;

	static removeAllConnectionDelegates(): void;

	static removeAllUserEventDelegates(): void;

	static removeChannelDelegateForIdentifier(identifier: string): void;

	static removeConnectionDelegateForIdentifier(identifier: string): void;

	static removeSessionDelegate(): void;

	static removeUserEventDelegateForIdentifier(identifier: string): void;

	static setAllowFriendDiscoveryCompletionHandler(allow: boolean, completionHandler: (p1: SBDError) => void): void;

	static setAppGroup(appGroup: string): void;

	static setChannelInvitationPreferenceAutoAcceptCompletionHandler(autoAccept: boolean, completionHandler: (p1: SBDError) => void): void;

	static setCompletionHandlerDelegateQueue(queue: NSObject): void;

	static setDoNotDisturbWithEnableStartHourStartMinEndHourEndMinTimezoneCompletionHandler(enable: boolean, startHour: number, startMin: number, endHour: number, endMin: number, timezone: string, completionHandler: (p1: SBDError) => void): void;

	static setLogLevel(logLevel: SBDLogLevel): void;

	static setNetworkAwarenessReconnection(onOff: boolean): void;

	static setPushSoundCompletionHandler(sound: string, completionHandler: (p1: SBDError) => void): void;

	static setPushTemplateWithNameCompletionHandler(name: string, completionHandler: (p1: SBDError) => void): void;

	static setPushTriggerOptionCompletionHandler(pushTriggerOption: SBDPushTriggerOption, completionHandler: (p1: SBDError) => void): void;

	static setSessionDelegate(delegate: SBDSessionDelegate): void;

	static setSharedContainerIdentifier(identifier: string): void;

	static setSnoozePeriodEnableStartTimestampEndTimestampCompletionHandler(enabled: boolean, startTimestamp: number, endTimestamp: number, completionHandler: (p1: SBDError) => void): void;

	static sharedInstance(): SBDMain;

	static unblockUserCompletionHandler(user: SBDUser, completionHandler: (p1: SBDError) => void): void;

	static unblockUserIdCompletionHandler(userId: string, completionHandler: (p1: SBDError) => void): void;

	static unregisterAllPushKitTokenWithCompletionHandler(completionHandler: (p1: NSDictionary<any, any>, p2: SBDError) => void): void;

	static unregisterAllPushTokenWithCompletionHandler(completionHandler: (p1: NSDictionary<any, any>, p2: SBDError) => void): void;

	static unregisterPushKitTokenCompletionHandler(devToken: NSData, completionHandler: (p1: NSDictionary<any, any>, p2: SBDError) => void): void;

	static unregisterPushTokenCompletionHandler(devToken: NSData, completionHandler: (p1: NSDictionary<any, any>, p2: SBDError) => void): void;

	static updateCurrentUserInfoWithNicknameProfileImageCompletionHandler(nickname: string, profileImage: NSData, completionHandler: (p1: SBDError) => void): void;

	static updateCurrentUserInfoWithNicknameProfileImageFilePathProgressHandlerCompletionHandler(nickname: string, profileImageFilePath: string, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDError) => void): void;

	static updateCurrentUserInfoWithNicknameProfileImageProgressHandlerCompletionHandler(nickname: string, profileImage: NSData, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDError) => void): void;

	static updateCurrentUserInfoWithNicknameProfileUrlCompletionHandler(nickname: string, profileUrl: string, completionHandler: (p1: SBDError) => void): void;

	static updateCurrentUserInfoWithPreferredLanguagesCompletionHandler(preferredLanguages: NSArray<string> | string[], completionHandler: (p1: SBDError) => void): void;

	static uploadFriendDiscoveriesCompletionHandler(discoveryKeyAndNames: NSDictionary<string, string>, completionHandler: (p1: SBDError) => void): void;

	static userEventDelegateForIdentifier(identifier: string): SBDUserEventDelegate;

	URLSessionDidFinishEventsForBackgroundURLSession: number;

	backgroundSessionCompletionHandler: () => void;

	backgroundTaskBlock: NSMutableArray<() => void>;

	readonly channelDelegatesDictionary: NSMapTable<string, SBDChannelDelegate>;

	readonly connectionDelegatesDictionary: NSMapTable<string, SBDConnectionDelegate>;

	logLevel: SBDLogLevel;

	readonly userEventDelegatesDictionary: NSMapTable<string, SBDUserEventDelegate>;
}

interface SBDMappable extends NSObjectProtocol {

	_toDictionary?(): NSDictionary<any, any>;

	initWithDictionary?(dict: NSDictionary<any, any>): SBDMappable;
}
declare var SBDMappable: {

	prototype: SBDMappable;

	objectsFromJsonArray?(array: NSArray<any> | any[]): NSArray<any>;
};

declare class SBDMember extends SBDUser implements NSCopying, SBDMappable {

	static alloc(): SBDMember; // inherited from NSObject

	static buildFromSerializedData(data: NSData): SBDMember; // inherited from SBDUser

	static new(): SBDMember; // inherited from NSObject

	static objectsFromJsonArray(array: NSArray<any> | any[]): NSArray<any>;

	isBlockedByMe: boolean;

	isBlockingMe: boolean;

	isMuted: boolean;

	readonly role: SBDRole;

	state: SBDMemberState;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from SBDMappable

	_toDictionary(): NSDictionary<any, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum SBDMemberListOrder {

	NicknameAlphabetical = 0,

	OperatorThenMemberNicknameAlphabetical = 1
}

declare const enum SBDMemberState {

	Joined = 0,

	Invited = 1,

	None = 2
}

declare const enum SBDMemberStateFilter {

	StateFilterAll = 0,

	StateFilterJoinedOnly = 1,

	StateFilterInvitedOnly = 2,

	StateFilterInvitedByFriend = 3,

	StatefilterInvitedByNonFriend = 4
}

declare const enum SBDMentionType {

	Users = 0,

	Channel = 1
}

declare class SBDMessageChangeLogsParams extends NSObject implements NSCopying {

	static alloc(): SBDMessageChangeLogsParams; // inherited from NSObject

	static createWithMessageListParams(params: SBDMessageListParams): SBDMessageChangeLogsParams;

	static createWithPreviousMessageListQuery(query: SBDPreviousMessageListQuery): SBDMessageChangeLogsParams;

	static new(): SBDMessageChangeLogsParams; // inherited from NSObject

	includeMetaArray: boolean;

	includeParentMessageText: boolean;

	includeReactions: boolean;

	includeReplies: boolean;

	includeThreadInfo: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class SBDMessageCollection extends SBDBaseCollection {

	static alloc(): SBDMessageCollection; // inherited from NSObject

	static new(): SBDMessageCollection; // inherited from NSObject

	delegate: SBDMessageCollectionDelegate;

	readonly hasNext: boolean;

	readonly hasPrevious: boolean;

	readonly startingPoint: number;

	constructor(o: { channel: SBDGroupChannel; startingPoint: number; params: SBDMessageListParams; });

	initWithChannelStartingPointParams(channel: SBDGroupChannel, startingPoint: number, params: SBDMessageListParams): this;

	invalidate(): void;

	loadNextWithCompletionHandler(completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	loadPreviousWithCompletionHandler(completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	startCollectionWithInitPolicyCacheResultHandlerApiResultHandler(initPolicy: SBDInitPolicy, cacheResultHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void, apiResultHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;
}

declare var SBDMessageCollectionChangeNotification: string;

interface SBDMessageCollectionDelegate extends NSObjectProtocol {

	didDetectHugeGapInMessageCollection?(collection: SBDMessageCollection): void;

	messageCollectionContextChangedChannel?(collection: SBDMessageCollection, context: SBDMessageContext, channel: SBDGroupChannel): void;

	messageCollectionContextChannelAddedMessages?(collection: SBDMessageCollection, context: SBDMessageContext, channel: SBDGroupChannel, messages: NSArray<SBDBaseMessage> | SBDBaseMessage[]): void;

	messageCollectionContextChannelDeletedMessages?(collection: SBDMessageCollection, context: SBDMessageContext, channel: SBDGroupChannel, messages: NSArray<SBDBaseMessage> | SBDBaseMessage[]): void;

	messageCollectionContextChannelUpdatedMessages?(collection: SBDMessageCollection, context: SBDMessageContext, channel: SBDGroupChannel, messages: NSArray<SBDBaseMessage> | SBDBaseMessage[]): void;

	messageCollectionContextDeletedChannel?(collection: SBDMessageCollection, context: SBDMessageContext, channelUrl: string): void;
}
declare var SBDMessageCollectionDelegate: {

	prototype: SBDMessageCollectionDelegate;
};

declare class SBDMessageContext extends NSObject {

	static alloc(): SBDMessageContext; // inherited from NSObject

	static new(): SBDMessageContext; // inherited from NSObject

	source: SBDSource;
}

declare class SBDMessageListParams extends NSObject implements NSCopying {

	static alloc(): SBDMessageListParams; // inherited from NSObject

	static new(): SBDMessageListParams; // inherited from NSObject

	customType: string;

	customTypes: NSArray<string>;

	includeMetaArray: boolean;

	includeParentMessageText: boolean;

	includeReactions: boolean;

	includeReplies: boolean;

	includeThreadInfo: boolean;

	isInclusive: boolean;

	messageType: SBDMessageTypeFilter;

	nextResultSize: number;

	previousResultSize: number;

	reverse: boolean;

	senderUserIds: NSArray<string>;

	showSubChannelMessagesOnly: boolean;

	belongsTo(message: SBDBaseMessage): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class SBDMessageListQuery extends NSObject {

	static alloc(): SBDMessageListQuery; // inherited from NSObject

	static new(): SBDMessageListQuery; // inherited from NSObject

	constructor(o: { channel: SBDBaseChannel; });

	initWithChannel(channel: SBDBaseChannel): this;

	isLoading(): boolean;

	loadMessagesFromTimestampPrevLimitNextLimitReverseCompletionHandler(timestamp: number, prevLimit: number, nextLimit: number, reverse: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	loadNextMessagesFromTimestampLimitReverseCompletionHandler(timestamp: number, limit: number, reverse: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	loadPreviousMessagesFromTimestampLimitReverseCompletionHandler(timestamp: number, limit: number, reverse: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;
}

declare class SBDMessageMetaArray extends NSObject implements NSCopying, SBDMappable {

	static alloc(): SBDMessageMetaArray; // inherited from NSObject

	static new(): SBDMessageMetaArray; // inherited from NSObject

	static objectsFromJsonArray(array: NSArray<any> | any[]): NSArray<any>;

	readonly key: string;

	readonly value: NSArray<string>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from SBDMappable

	constructor(o: { key: string; });

	constructor(o: { key: string; value: NSArray<string> | string[]; });

	_toDictionary(): NSDictionary<any, any>;

	addValue(value: NSSet<string>): void;

	addValueWithArray(array: NSArray<string> | string[]): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	initWithKey(key: string): this;

	initWithKeyValue(key: string, value: NSArray<string> | string[]): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeValue(value: NSSet<string>): void;

	removeValueWithArray(array: NSArray<string> | string[]): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum SBDMessageQueryIncludeOption {

	None = 1,

	MetaArray = 2,

	Reaction = 4,

	Replies = 8,

	ParentMessageText = 16,

	ThreadInfo = 32
}

declare const enum SBDMessageRequestState {

	None = 0,

	Pending = 1,

	Failed = 2,

	Succeeded = 3
}

declare class SBDMessageRetrievalParams extends NSObject implements NSCopying {

	static alloc(): SBDMessageRetrievalParams; // inherited from NSObject

	static new(): SBDMessageRetrievalParams; // inherited from NSObject

	channelType: SBDChannelType;

	channelUrl: string;

	includeMetaArray: boolean;

	includeParentMessageText: boolean;

	includeThreadInfo: boolean;

	messageId: number;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class SBDMessageSearchQuery extends NSObject implements SBDMappable {

	static alloc(): SBDMessageSearchQuery; // inherited from NSObject

	static buildFromSerializedData(data: NSData): SBDMessageSearchQuery;

	static create(): SBDMessageSearchQuery;

	static createWithBuilder(updateBlock: (p1: SBDMessageSearchQueryBuilder) => void): SBDMessageSearchQuery;

	static new(): SBDMessageSearchQuery; // inherited from NSObject

	static objectsFromJsonArray(array: NSArray<any> | any[]): NSArray<any>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from SBDMappable

	_toDictionary(): NSDictionary<any, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	hasNext(): boolean;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isLoading(): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadNextPageWithCompletionHandler(completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	serialize(): NSData;
}

declare class SBDMessageSearchQueryBuilder extends NSObject {

	static alloc(): SBDMessageSearchQueryBuilder; // inherited from NSObject

	static new(): SBDMessageSearchQueryBuilder; // inherited from NSObject

	advancedQuery: boolean;

	channelCustomType: string;

	channelUrl: string;

	exactMatch: boolean;

	keyword: string;

	limit: number;

	messageTimestampFrom: number;

	messageTimestampTo: number;

	order: SBDMessageSearchQueryOrder;

	reverse: boolean;

	targetFields: NSArray<string>;
}

declare const enum SBDMessageSearchQueryOrder {

	Score = 0,

	TimeStamp = 1
}

declare const enum SBDMessageSendingStatus {

	None = 0,

	Pending = 1,

	Failed = 2,

	Succeeded = 3,

	Canceled = 4
}

declare const enum SBDMessageTypeFilter {

	All = 0,

	User = 1,

	File = 2,

	Admin = 3
}

declare const enum SBDMutedState {

	Unmuted = 0,

	Muted = 1
}

declare class SBDMutedUserListQuery extends SBDUserListQuery {

	static alloc(): SBDMutedUserListQuery; // inherited from NSObject

	static new(): SBDMutedUserListQuery; // inherited from NSObject
}

interface SBDNetworkDelegate extends NSObjectProtocol {

	didReconnect(): void;
}
declare var SBDNetworkDelegate: {

	prototype: SBDNetworkDelegate;
};

interface SBDOGDisplayableMedia extends NSObjectProtocol {

	height: number;

	width: number;
}
declare var SBDOGDisplayableMedia: {

	prototype: SBDOGDisplayableMedia;
};

declare class SBDOGImage extends NSObject implements SBDMappable, SBDOGDisplayableMedia, SBDOGMedia {

	static alloc(): SBDOGImage; // inherited from NSObject

	static new(): SBDOGImage; // inherited from NSObject

	static objectsFromJsonArray(array: NSArray<any> | any[]): NSArray<any>;

	readonly alt: string;

	readonly url: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly height: number; // inherited from SBDOGDisplayableMedia

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly secureURL: string; // inherited from SBDOGMedia

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly type: string; // inherited from SBDOGMedia

	readonly width: number; // inherited from SBDOGDisplayableMedia

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from SBDMappable

	_toDictionary(): NSDictionary<any, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface SBDOGMedia extends NSObjectProtocol {

	secureURL: string;

	type: string;
}
declare var SBDOGMedia: {

	prototype: SBDOGMedia;
};

declare class SBDOGMetaData extends NSObject implements SBDMappable {

	static alloc(): SBDOGMetaData; // inherited from NSObject

	static new(): SBDOGMetaData; // inherited from NSObject

	static objectsFromJsonArray(array: NSArray<any> | any[]): NSArray<any>;

	readonly defaultImage: SBDOGImage;

	readonly desc: string;

	readonly title: string;

	readonly url: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from SBDMappable

	_toDictionary(): NSDictionary<any, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SBDOpenChannel extends SBDBaseChannel implements SBDMappable {

	static alloc(): SBDOpenChannel; // inherited from NSObject

	static buildFromSerializedData(data: NSData): SBDOpenChannel; // inherited from SBDBaseChannel

	static createChannelWithCompletionHandler(completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;

	static createChannelWithNameChannelUrlCoverImageCoverImageNameDataOperatorUserIdsCustomTypeProgressHandlerCompletionHandler(name: string, channelUrl: string, coverImage: NSData, coverImageName: string, data: string, operatorUserIds: NSArray<string> | string[], customType: string, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;

	static createChannelWithNameChannelUrlCoverImageFilePathDataOperatorUserIdsCustomTypeProgressHandlerCompletionHandler(name: string, channelUrl: string, coverImageFilePath: string, data: string, operatorUserIds: NSArray<string> | string[], customType: string, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;

	static createChannelWithNameChannelUrlCoverUrlDataOperatorUserIdsCustomTypeCompletionHandler(name: string, channelUrl: string, coverUrl: string, data: string, operatorUserIds: NSArray<string> | string[], customType: string, completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;

	static createChannelWithNameCoverImageCoverImageNameDataOperatorUserIdsCustomTypeProgressHandlerCompletionHandler(name: string, coverImage: NSData, coverImageName: string, data: string, operatorUserIds: NSArray<string> | string[], customType: string, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;

	static createChannelWithNameCoverImageCoverImageNameDataOperatorUserIdsProgressHandlerCompletionHandler(name: string, coverImage: NSData, coverImageName: string, data: string, operatorUserIds: NSArray<string> | string[], progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;

	static createChannelWithNameCoverImageCoverImageNameDataOperatorUsersProgressHandlerCompletionHandler(name: string, coverImage: NSData, coverImageName: string, data: string, operatorUsers: NSArray<SBDUser> | SBDUser[], progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;

	static createChannelWithNameCoverImageFilePathDataOperatorUserIdsCustomTypeProgressHandlerCompletionHandler(name: string, coverImageFilePath: string, data: string, operatorUserIds: NSArray<string> | string[], customType: string, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;

	static createChannelWithNameCoverUrlDataOperatorUserIdsCompletionHandler(name: string, coverUrl: string, data: string, operatorUserIds: NSArray<string> | string[], completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;

	static createChannelWithNameCoverUrlDataOperatorUserIdsCustomTypeCompletionHandler(name: string, coverUrl: string, data: string, operatorUserIds: NSArray<string> | string[], customType: string, completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;

	static createChannelWithNameCoverUrlDataOperatorUsersCompletionHandler(name: string, coverUrl: string, data: string, operatorUsers: NSArray<SBDUser> | SBDUser[], completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;

	static createChannelWithParamsCompletionHandler(params: SBDOpenChannelParams, completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;

	static createChannelWithParamsProgressHandlerCompletionHandler(params: SBDOpenChannelParams, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;

	static createOpenChannelListQuery(): SBDOpenChannelListQuery;

	static getChannelWithUrlCompletionHandler(channelUrl: string, completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;

	static new(): SBDOpenChannel; // inherited from NSObject

	static objectsFromJsonArray(array: NSArray<any> | any[]): NSArray<any>;

	readonly operators: NSMutableArray<SBDUser>;

	participantCount: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from SBDMappable

	_toDictionary(): NSDictionary<any, any>;

	banUserSecondsCompletionHandler(user: SBDUser, seconds: number, completionHandler: (p1: SBDError) => void): void;

	banUserWithUserIdSecondsCompletionHandler(userId: string, seconds: number, completionHandler: (p1: SBDError) => void): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createBannedUserListQuery(): SBDBannedUserListQuery;

	createMutedUserListQuery(): SBDMutedUserListQuery;

	createParticipantListQuery(): SBDParticipantListQuery;

	deleteChannelWithCompletionHandler(completionHandler: (p1: SBDError) => void): void;

	enterChannelWithCompletionHandler(completionHandler: (p1: SBDError) => void): void;

	exitChannelWithCompletionHandler(completionHandler: (p1: SBDError) => void): void;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isOperatorWithUser(user: SBDUser): boolean;

	isOperatorWithUserId(userId: string): boolean;

	muteUserCompletionHandler(user: SBDUser, completionHandler: (p1: SBDError) => void): void;

	muteUserSecondsDescriptionCompletionHandler(user: SBDUser, seconds: number, description: string, completionHandler: (p1: SBDError) => void): void;

	muteUserWithUserIdCompletionHandler(userId: string, completionHandler: (p1: SBDError) => void): void;

	muteUserWithUserIdSecondsDescriptionCompletionHandler(userId: string, seconds: number, description: string, completionHandler: (p1: SBDError) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	refreshWithCompletionHandler(completionHandler: (p1: SBDError) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	unbanUserCompletionHandler(user: SBDUser, completionHandler: (p1: SBDError) => void): void;

	unbanUserWithUserIdCompletionHandler(userId: string, completionHandler: (p1: SBDError) => void): void;

	unmuteUserCompletionHandler(user: SBDUser, completionHandler: (p1: SBDError) => void): void;

	unmuteUserWithUserIdCompletionHandler(userId: string, completionHandler: (p1: SBDError) => void): void;

	updateChannelWithNameCoverImageCoverImageNameDataOperatorUserIdsCustomTypeProgressHandlerCompletionHandler(name: string, coverImage: NSData, coverImageName: string, data: string, operatorUserIds: NSArray<string> | string[], customType: string, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;

	updateChannelWithNameCoverImageCoverImageNameDataOperatorUserIdsProgressHandlerCompletionHandler(name: string, coverImage: NSData, coverImageName: string, data: string, operatorUserIds: NSArray<string> | string[], progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;

	updateChannelWithNameCoverImageCoverImageNameDataOperatorUsersProgressHandlerCompletionHandler(name: string, coverImage: NSData, coverImageName: string, data: string, operatorUsers: NSArray<SBDUser> | SBDUser[], progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;

	updateChannelWithNameCoverImageFilePathDataOperatorUserIdsCustomTypeProgressHandlerCompletionHandler(name: string, coverImageFilePath: string, data: string, operatorUserIds: NSArray<string> | string[], customType: string, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;

	updateChannelWithNameCoverUrlDataOperatorUserIdsCompletionHandler(name: string, coverUrl: string, data: string, operatorUserIds: NSArray<string> | string[], completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;

	updateChannelWithNameCoverUrlDataOperatorUserIdsCustomTypeCompletionHandler(name: string, coverUrl: string, data: string, operatorUserIds: NSArray<string> | string[], customType: string, completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;

	updateChannelWithNameCoverUrlDataOperatorUsersCompletionHandler(name: string, coverUrl: string, data: string, operatorUsers: NSArray<SBDUser> | SBDUser[], completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;

	updateChannelWithParamsCompletionHandler(params: SBDOpenChannelParams, completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;

	updateChannelWithParamsProgressHandlerCompletionHandler(params: SBDOpenChannelParams, progressHandler: (p1: number, p2: number, p3: number) => void, completionHandler: (p1: SBDOpenChannel, p2: SBDError) => void): void;
}

declare class SBDOpenChannelListQuery extends NSObject implements NSCopying {

	static alloc(): SBDOpenChannelListQuery; // inherited from NSObject

	static new(): SBDOpenChannelListQuery; // inherited from NSObject

	channelNameFilter: string;

	channelUrlFilter: string;

	customTypeFilter: string;

	readonly hasNext: boolean;

	includeFrozenChannel: boolean;

	includeMetaData: boolean;

	limit: number;

	nameKeyword: string;

	urlKeyword: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	isLoading(): boolean;

	loadNextPageWithCompletionHandler(completionHandler: (p1: NSArray<SBDOpenChannel>, p2: SBDError) => void): void;
}

declare class SBDOpenChannelParams extends NSObject implements NSCopying {

	static alloc(): SBDOpenChannelParams; // inherited from NSObject

	static new(): SBDOpenChannelParams; // inherited from NSObject

	channelUrl: string;

	coverImage: NSData;

	coverImageName: string;

	coverUrl: string;

	customType: string;

	data: string;

	name: string;

	operatorUserIds: NSArray<string>;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	setOperators(operators: NSArray<SBDUser> | SBDUser[]): void;
}

declare class SBDOperatorListQuery extends NSObject implements NSCopying {

	static alloc(): SBDOperatorListQuery; // inherited from NSObject

	static new(): SBDOperatorListQuery; // inherited from NSObject

	readonly hasNext: boolean;

	limit: number;

	readonly loading: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	loadNextPageWithCompletionHandler(completionHandler: (p1: NSArray<SBDUser>, p2: SBDError) => void): void;
}

declare class SBDOptions extends NSObject {

	static alloc(): SBDOptions; // inherited from NSObject

	static new(): SBDOptions; // inherited from NSObject

	static setAuthenticationTimeout(timeout: number): void;

	static setConnectionTimeout(timeout: number): void;

	static setFileTransferTimeout(timeout: number): void;

	static setTypingIndicatorThrottle(interval: number): void;

	static setUseMemberAsMessageSender(tf: boolean): void;

	static setWebSocketResponseTimeout(timeout: number): void;

	static useMemberAsMessageSender(): boolean;
}

declare class SBDParticipantListQuery extends SBDUserListQuery {

	static alloc(): SBDParticipantListQuery; // inherited from NSObject

	static new(): SBDParticipantListQuery; // inherited from NSObject
}

declare class SBDPlugin extends NSObject implements SBDMappable {

	static alloc(): SBDPlugin; // inherited from NSObject

	static new(): SBDPlugin; // inherited from NSObject

	static objectsFromJsonArray(array: NSArray<any> | any[]): NSArray<any>;

	readonly detail: NSDictionary<string, NSObject>;

	readonly type: string;

	readonly vendor: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from SBDMappable

	_toDictionary(): NSDictionary<any, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SBDPreviousMessageListQuery extends NSObject {

	static alloc(): SBDPreviousMessageListQuery; // inherited from NSObject

	static new(): SBDPreviousMessageListQuery; // inherited from NSObject

	customTypeFilter: string;

	customTypesFilter: NSArray<string>;

	includeMetaArray: boolean;

	includeParentMessageText: boolean;

	includeReactions: boolean;

	includeReplies: boolean;

	includeThreadInfo: boolean;

	limit: number;

	messageTypeFilter: SBDMessageTypeFilter;

	reverse: boolean;

	senderUserIdsFilter: NSArray<string>;

	showSubChannelMessagesOnly: boolean;

	isLoading(): boolean;

	loadPreviousMessagesWithLimitReverseCompletionHandler(limit: number, reverse: boolean, completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;

	loadWithCompletionHandler(completionHandler: (p1: NSArray<SBDBaseMessage>, p2: SBDError) => void): void;
}

declare const enum SBDPublicGroupChannelListOrder {

	Chronological = 0,

	ChannelNameAlphabetical = 2,

	ChannelMetaDataValueAlphabetical = 3
}

declare class SBDPublicGroupChannelListQuery extends NSObject implements NSCopying {

	static alloc(): SBDPublicGroupChannelListQuery; // inherited from NSObject

	static new(): SBDPublicGroupChannelListQuery; // inherited from NSObject

	channelNameContainsFilter: string;

	channelUrlsFilter: NSArray<string>;

	customTypeStartsWithFilter: string;

	customTypesFilter: NSArray<string>;

	readonly hasNext: boolean;

	includeEmptyChannel: boolean;

	includeFrozenChannel: boolean;

	includeMemberList: boolean;

	includeMetaData: boolean;

	limit: number;

	readonly loading: boolean;

	metaDataOrderKeyFilter: string;

	order: SBDPublicGroupChannelListOrder;

	publicMembershipFilter: SBDPublicGroupChannelMembershipFilter;

	superChannelFilter: SBDGroupChannelSuperChannelFilter;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	loadNextPageWithCompletionHandler(completionHandler: (p1: NSArray<SBDGroupChannel>, p2: SBDError) => void): void;
}

declare const enum SBDPublicGroupChannelMembershipFilter {

	All = 0,

	Joined = 1
}

declare const enum SBDPushNotificationDeliveryOption {

	Default = 0,

	Suppress = 1
}

declare const enum SBDPushTokenRegistrationStatus {

	Success = 0,

	Pending = 1,

	Error = 2
}

declare const enum SBDPushTokenType {

	None = 0,

	GCM = 1,

	APNS = 2,

	APNSVoIP = 3
}

declare const enum SBDPushTriggerOption {

	All = 0,

	Off = 1,

	MentionOnly = 2
}

declare class SBDReaction extends NSObject implements SBDMappable {

	static alloc(): SBDReaction; // inherited from NSObject

	static new(): SBDReaction; // inherited from NSObject

	static objectsFromJsonArray(array: NSArray<any> | any[]): NSArray<any>;

	readonly key: string;

	readonly updatedAt: number;

	readonly userIds: NSArray<string>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from SBDMappable

	_toDictionary(): NSDictionary<any, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SBDReactionEvent extends NSObject implements SBDMappable {

	static alloc(): SBDReactionEvent; // inherited from NSObject

	static new(): SBDReactionEvent; // inherited from NSObject

	static objectsFromJsonArray(array: NSArray<any> | any[]): NSArray<any>;

	readonly key: string;

	readonly messageId: number;

	readonly operation: SBDReactionEventAction;

	readonly updatedAt: number;

	readonly userId: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from SBDMappable

	_toDictionary(): NSDictionary<any, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum SBDReactionEventAction {

	Add = 0,

	Delete = 1
}

declare const enum SBDReportCategory {

	Suspicious = 0,

	Harassing = 1,

	Spam = 2,

	Inappropriate = 3
}

declare const enum SBDRole {

	None = 0,

	Operator = 1
}

declare class SBDScheduledUserMessage extends NSObject implements SBDMappable {

	static alloc(): SBDScheduledUserMessage; // inherited from NSObject

	static new(): SBDScheduledUserMessage; // inherited from NSObject

	static objectsFromJsonArray(array: NSArray<any> | any[]): NSArray<any>;

	readonly channelUrl: string;

	readonly createdAt: number;

	readonly customType: string;

	readonly data: string;

	readonly errorCode: number;

	readonly errorMessage: string;

	readonly mentionType: SBDMentionType;

	readonly mentionedUsers: NSArray<SBDUser>;

	readonly message: string;

	readonly metaArray: NSDictionary<string, NSArray<string>>;

	readonly metaArrays: NSArray<SBDMessageMetaArray>;

	readonly pushOption: SBDPushNotificationDeliveryOption;

	readonly scheduledDateTimeString: string;

	readonly scheduledId: number;

	readonly scheduledTimezone: string;

	readonly sender: SBDSender;

	readonly status: SBDScheduledUserMessageStatus;

	readonly targetLanguages: NSArray<string>;

	readonly updatedAt: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from SBDMappable

	_toDictionary(): NSDictionary<any, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getMetaArrayWithKeys(keys: NSArray<string> | string[]): NSDictionary<string, NSArray<string>>;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isGroupChannel(): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isOpenChannel(): boolean;

	metaArraysWithKeys(keys: NSArray<string> | string[]): NSArray<SBDMessageMetaArray>;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SBDScheduledUserMessageParams extends SBDUserMessageParams {

	static alloc(): SBDScheduledUserMessageParams; // inherited from NSObject

	static new(): SBDScheduledUserMessageParams; // inherited from NSObject

	readonly scheduledDateTimeString: string;

	readonly scheduledTimezone: string;

	constructor(o: { message: string; year: number; month: number; day: number; hour: number; min: number; timezone: string; });

	initWithMessageYearMonthDayHourMinTimezone(message: string, year: number, month: number, day: number, hour: number, min: number, timezone: string): this;

	setScheduleWithYearMonthDayHourMinTimezone(year: number, month: number, day: number, hour: number, min: number, timezone: string): boolean;
}

declare const enum SBDScheduledUserMessageStatus {

	Scheduled = 0,

	Sent = 1,

	Canceled = 2,

	Failed = 3
}

declare class SBDSender extends SBDUser implements NSCopying, SBDMappable {

	static alloc(): SBDSender; // inherited from NSObject

	static buildFromSerializedData(data: NSData): SBDSender; // inherited from SBDUser

	static new(): SBDSender; // inherited from NSObject

	static objectsFromJsonArray(array: NSArray<any> | any[]): NSArray<any>;

	readonly isBlockedByMe: boolean;

	readonly role: SBDRole;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from SBDMappable

	_toDictionary(): NSDictionary<any, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface SBDSessionDelegate extends NSObjectProtocol {

	sessionDidHaveError?(error: SBDError): void;

	sessionTokenDidRequireWithSuccessCompletionFailCompletion(success: (p1: string) => void, fail: () => void): void;

	sessionWasClosed(): void;

	sessionWasExpired?(): void;

	sessionWasRefreshed?(): void;
}
declare var SBDSessionDelegate: {

	prototype: SBDSessionDelegate;
};

declare const enum SBDSource {

	MessageChangelog = 0,

	MessageFill = 1,

	ChannelChangelog = 2,

	ChannelFill = 3,

	EventMessageSent = 4,

	EventMessageReceived = 5,

	EventMessageUpdated = 6,

	EventMessageDeleted = 7,

	EventReactionUpdated = 8,

	EventThreadInfoUpdated = 9,

	EventMention = 10,

	EventChannelChanged = 11,

	EventChannelMemberCountChanged = 12,

	EventChannelFrozen = 13,

	EventChannelUnfrozen = 14,

	EventChannelHidden = 15,

	EventChannelDeleted = 16,

	EventOperatorUpdated = 17,

	EventTypingStatusUpdated = 18,

	EventDeliveryReceiptUpdated = 19,

	EventReadReceiptUpdated = 20,

	EventUserReceivedInvitation = 21,

	EventUserDeclinedInvitation = 22,

	EventUserJoined = 23,

	EventUserMuted = 24,

	EventUserUnmuted = 25,

	EventUserLeft = 26,

	EventUserBanned = 27,

	EventUserUnbanned = 28
}

declare class SBDThreadInfo extends NSObject implements SBDMappable {

	static alloc(): SBDThreadInfo; // inherited from NSObject

	static new(): SBDThreadInfo; // inherited from NSObject

	static objectsFromJsonArray(array: NSArray<any> | any[]): NSArray<any>;

	readonly lastRepliedAt: number;

	readonly mostRepliedUsers: NSArray<SBDUser>;

	readonly replyCount: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from SBDMappable

	_toDictionary(): NSDictionary<any, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SBDThreadInfoUpdateEvent extends NSObject implements SBDMappable {

	static alloc(): SBDThreadInfoUpdateEvent; // inherited from NSObject

	static new(): SBDThreadInfoUpdateEvent; // inherited from NSObject

	static objectsFromJsonArray(array: NSArray<any> | any[]): NSArray<any>;

	readonly channelType: SBDChannelType;

	readonly channelUrl: string;

	readonly targetMessageId: number;

	readonly threadInfo: SBDThreadInfo;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from SBDMappable

	_toDictionary(): NSDictionary<any, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SBDThreadedMessageListParams extends NSObject {

	static alloc(): SBDThreadedMessageListParams; // inherited from NSObject

	static new(): SBDThreadedMessageListParams; // inherited from NSObject

	customType: string;

	customTypes: NSArray<string>;

	includeMetaArray: boolean;

	includeParentMessageText: boolean;

	includeReactions: boolean;

	isInclusive: boolean;

	messageType: SBDMessageTypeFilter;

	nextResultSize: number;

	previousResultSize: number;

	reverse: boolean;

	senderUserIds: NSArray<string>;
}

declare class SBDThumbnail extends NSObject implements NSCopying {

	static alloc(): SBDThumbnail; // inherited from NSObject

	static new(): SBDThumbnail; // inherited from NSObject

	readonly maxSize: CGSize;

	readonly plainUrl: string;

	readonly realSize: CGSize;

	readonly url: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class SBDThumbnailSize extends NSObject implements NSCopying {

	static alloc(): SBDThumbnailSize; // inherited from NSObject

	static makeWithMaxCGSize(size: CGSize): SBDThumbnailSize;

	static makeWithMaxWidthMaxHeight(width: number, height: number): SBDThumbnailSize;

	static new(): SBDThumbnailSize; // inherited from NSObject

	readonly maxSize: CGSize;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum SBDUnreadChannelFilter {

	All = 0,

	UnreadMessage = 1
}

declare class SBDUnreadItemCount extends NSObject implements SBDMappable {

	static alloc(): SBDUnreadItemCount; // inherited from NSObject

	static new(): SBDUnreadItemCount; // inherited from NSObject

	static objectsFromJsonArray(array: NSArray<any> | any[]): NSArray<any>;

	readonly groupChannelInvitationCount: number;

	readonly groupChannelUnreadMentionCount: number;

	readonly groupChannelUnreadMessageCount: number;

	readonly nonSuperInvitationCount: number;

	readonly nonSuperUnreadMentionCount: number;

	readonly nonSuperUnreadMessageCount: number;

	readonly superInvitationCount: number;

	readonly superUnreadMentionCount: number;

	readonly superUnreadMessageCount: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from SBDMappable

	_toDictionary(): NSDictionary<any, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	has(key: SBDUnreadItemKey): boolean;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	unsignedIntegerForKey(key: SBDUnreadItemKey): number;
}

declare const enum SBDUnreadItemKey {

	NonSuperUnreadMessageCount = 1,

	SuperUnreadMessageCount = 2,

	NonSuperInvitationCount = 4,

	SuperInvitationCount = 8,

	NonSuperUnreadMentionCount = 16,

	SuperUnreadMentionCount = 32,

	GroupChannelUnreadMessageCount = 1024,

	GroupChannelUnreadMentionCount = 2048,

	GroupChannelInvitationCount = 4096
}

declare class SBDUser extends NSObject implements NSCopying, SBDMappable {

	static alloc(): SBDUser; // inherited from NSObject

	static buildFromSerializedData(data: NSData): SBDUser;

	static new(): SBDUser; // inherited from NSObject

	static objectsFromJsonArray(array: NSArray<any> | any[]): NSArray<any>;

	readonly connectionStatus: SBDUserConnectionStatus;

	friendDiscoveryKey: string;

	friendName: string;

	readonly isActive: boolean;

	readonly lastSeenAt: number;

	readonly metaData: NSDictionary<string, string>;

	nickname: string;

	originalProfileUrl: string;

	readonly plainProfileImageUrl: string;

	readonly preferredLanguages: NSArray<string>;

	profileUrl: string;

	readonly userId: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dictionary: NSDictionary<any, any>; }); // inherited from SBDMappable

	_toDictionary(): NSDictionary<any, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	createMetaDataCompletionHandler(metaData: NSDictionary<string, string>, completionHandler: (p1: NSDictionary<string, string>, p2: SBDError) => void): void;

	deleteAllMetaDataWithCompletionHandler(completionHandler: (p1: SBDError) => void): void;

	deleteMetaDataWithKeyCompletionHandler(key: string, completionHandler: (p1: SBDError) => void): void;

	initWithDictionary(dict: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	serialize(): NSData;

	updateMetaDataCompletionHandler(metaData: NSDictionary<string, string>, completionHandler: (p1: NSDictionary<string, string>, p2: SBDError) => void): void;
}

declare const enum SBDUserConnectionStatus {

	NonAvailable = 0,

	Online = 1,

	Offline = 2
}

declare const enum SBDUserEventCategory {

	UserUnblock = 20000,

	UserBlock = 20001,

	UserFriendDiscoveryReady = 20900
}

interface SBDUserEventDelegate extends NSObjectProtocol {

	didDiscoverFriends?(friends: NSArray<SBDUser> | SBDUser[]): void;

	didUpdateTotalUnreadMessageCountTotalCountByCustomType?(totalCount: number, totalCountByCustomType: NSDictionary<string, number>): void;
}
declare var SBDUserEventDelegate: {

	prototype: SBDUserEventDelegate;
};

declare class SBDUserListQuery extends NSObject implements NSCopying {

	static alloc(): SBDUserListQuery; // inherited from NSObject

	static new(): SBDUserListQuery; // inherited from NSObject

	readonly channel: SBDBaseChannel;

	readonly hasNext: boolean;

	limit: number;

	readonly metaDataKey: string;

	readonly metaDataValues: NSArray<string>;

	readonly queryType: SBDUserListQueryType;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	isLoading(): boolean;

	loadNextPageWithCompletionHandler(completionHandler: (p1: NSArray<SBDUser>, p2: SBDError) => void): void;

	setMetaDataFilterWithKeyValues(key: string, values: NSArray<string> | string[]): void;
}

declare const enum SBDUserListQueryType {

	AllUser = 1,

	BlockedUsers = 2,

	OpenChannelParticipants = 3,

	OpenChannelMutedUsers = 4,

	OpenChannelBannedUsers = 5,

	FilteredUsers = 6
}

declare class SBDUserMessage extends SBDBaseMessage implements NSCopying {

	static alloc(): SBDUserMessage; // inherited from NSObject

	static buildFromSerializedData(data: NSData): SBDUserMessage; // inherited from SBDBaseMessage

	static buildFromSerializedDataDesiredState(data: NSData, desiredState: SBDMessageSendingStatus): SBDUserMessage; // inherited from SBDBaseMessage

	static new(): SBDUserMessage; // inherited from NSObject

	readonly requestState: SBDMessageRequestState;

	readonly translations: NSDictionary<any, any>;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class SBDUserMessageParams extends SBDBaseMessageParams {

	static alloc(): SBDUserMessageParams; // inherited from NSObject

	static new(): SBDUserMessageParams; // inherited from NSObject

	message: string;

	targetLanguages: NSArray<string>;

	constructor(o: { message: string; });

	initWithMessage(message: string): this;
}

declare const enum SBDWebSocketConnectionState {

	Connecting = 0,

	Open = 1,

	Closed = 3,

	Closing = 3
}

declare var SendBirdSDKVersionNumber: number;

declare var SendBirdSDKVersionString: interop.Reference<number>;
