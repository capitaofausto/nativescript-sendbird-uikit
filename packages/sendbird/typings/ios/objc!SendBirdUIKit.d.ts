
declare const enum ChannelEditType {

	Name = 0,

	Image = 1
}

declare const enum ChannelInviteListType {

	None = 0,

	Users = 1,

	Operators = 2
}

declare const enum ChannelMemberListType {

	None = 0,

	ChannelMembers = 1,

	Operators = 2,

	MutedMembers = 3,

	BannedMembers = 4,

	Participants = 5
}

declare const enum ChannelSettingItemType {

	Moderations = 0,

	Notifications = 1,

	Members = 2,

	Search = 3,

	Leave = 4
}

declare const enum ChannelType {

	Group = 0,

	Supergroup = 1,

	Broadcast = 2,

	Open = 3
}

declare const enum EmptyViewType {

	None = 0,

	NoChannels = 1,

	NoMessages = 2,

	NoMembers = 3,

	NoMutedMembers = 4,

	NoBannedMembers = 5,

	NoSearchResults = 6,

	Error = 7
}

declare const enum LogType {

	None = 0,

	Error = 1,

	Warning = 2,

	Info = 4,

	All = 7
}

declare const enum MediaResourceType {

	Camera = 0,

	Library = 1,

	Document = 2,

	Unknown = 3
}

declare const enum MemberListType {

	None = 0,

	CreateChannel = 1,

	ChannelMembers = 2,

	InviteUser = 3,

	Reaction = 4
}

declare const enum MessageEditItem {

	Copy = 0,

	Edit = 1,

	Delete = 2
}

declare const enum MessageFileType {

	Image = 0,

	Video = 1,

	Audio = 2,

	Pdf = 3,

	Etc = 4
}

declare const enum MessageGroupPosition {

	None = 0,

	Top = 1,

	Middle = 2,

	Bottom = 3
}

declare const enum MessageMenuItem {

	Save = 0,

	Copy = 1,

	Edit = 2,

	Delete = 3
}

declare const enum MessagePosition {

	Left = 0,

	Right = 1,

	Center = 2
}

declare class MessageProfileView extends SBUMessageProfileView {

	static alloc(): MessageProfileView; // inherited from NSObject

	static appearance(): MessageProfileView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MessageProfileView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MessageProfileView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MessageProfileView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MessageProfileView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MessageProfileView; // inherited from UIAppearance

	static new(): MessageProfileView; // inherited from NSObject
}

declare class MessageStateView extends SBUMessageStateView {

	static alloc(): MessageStateView; // inherited from NSObject

	static appearance(): MessageStateView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MessageStateView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MessageStateView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MessageStateView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MessageStateView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MessageStateView; // inherited from UIAppearance

	static new(): MessageStateView; // inherited from NSObject
}

declare const enum ModerationItemType {

	Operators = 0,

	MutedMembers = 1,

	BannedMembers = 2,

	FreezeChannel = 3
}

declare const enum NewMessageInfoItemType {

	Tooltip = 0,

	Button = 1
}

declare const enum OpenChannelSettingItemType {

	Participants = 0,

	Delete = 1
}

declare class SBUActionSheet extends NSObject {

	static alloc(): SBUActionSheet; // inherited from NSObject

	static dismiss(): void;

	static new(): SBUActionSheet; // inherited from NSObject

	static showWithItemsCancelItemIdentifierOneTimethemeDelegate(items: NSArray<SBUActionSheetItem> | SBUActionSheetItem[], cancelItem: SBUActionSheetItem, identifier: number, oneTimetheme: SBUComponentTheme, delegate: SBUActionSheetDelegate): void;
}

interface SBUActionSheetDelegate extends NSObjectProtocol {

	didSelectActionSheetItemWithIndexIdentifier(index: number, identifier: number): void;
}
declare var SBUActionSheetDelegate: {

	prototype: SBUActionSheetDelegate;
};

declare class SBUActionSheetItem extends SBUCommonItem {

	static alloc(): SBUActionSheetItem; // inherited from NSObject

	static new(): SBUActionSheetItem; // inherited from NSObject

	constructor(o: { title: string; color: UIColor; image: UIImage; font: UIFont; textAlignment: NSTextAlignment; completionHandler: () => void; });

	initWithTitleColorImageFontTextAlignmentCompletionHandler(title: string, color: UIColor, image: UIImage, font: UIFont, textAlignment: NSTextAlignment, completionHandler: () => void): this;
}

declare class SBUAdminMessageCell extends SBUBaseMessageCell {

	static alloc(): SBUAdminMessageCell; // inherited from NSObject

	static appearance(): SBUAdminMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUAdminMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUAdminMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUAdminMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUAdminMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUAdminMessageCell; // inherited from UIAppearance

	static new(): SBUAdminMessageCell; // inherited from NSObject

	messageLabel: UILabel;

	configureHideDateView(message: SBDAdminMessage, hideDateView: boolean): void;
}

declare class SBUAlertButtonItem extends NSObject {

	static alloc(): SBUAlertButtonItem; // inherited from NSObject

	static new(): SBUAlertButtonItem; // inherited from NSObject

	constructor(o: { title: string; color: UIColor; completionHandler: (p1: any) => void; });

	initWithTitleColorCompletionHandler(title: string, color: UIColor, completionHandler: (p1: any) => void): this;
}

declare class SBUAlertView extends NSObject {

	static alloc(): SBUAlertView; // inherited from NSObject

	static dismiss(): void;

	static new(): SBUAlertView; // inherited from NSObject
}

declare class SBUAvailable extends NSObject {

	static alloc(): SBUAvailable; // inherited from NSObject

	static isSupportBroadcastChannel(): boolean;

	static isSupportMessageSearch(): boolean;

	static isSupportOgTag(): boolean;

	static isSupportReactions(): boolean;

	static isSupportSuperGroupChannel(): boolean;

	static new(): SBUAvailable; // inherited from NSObject
}

declare class SBUBaseChannelCell extends UITableViewCell {

	static alloc(): SBUBaseChannelCell; // inherited from NSObject

	static appearance(): SBUBaseChannelCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUBaseChannelCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUBaseChannelCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUBaseChannelCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUBaseChannelCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUBaseChannelCell; // inherited from UIAppearance

	static new(): SBUBaseChannelCell; // inherited from NSObject
}

declare class SBUBaseChannelListViewController extends SBUBaseViewController {

	static alloc(): SBUBaseChannelListViewController; // inherited from NSObject

	static new(): SBUBaseChannelListViewController; // inherited from NSObject

	showChannelWithChannelUrlMessageListParams(channelUrl: string, messageListParams: SBDMessageListParams): void;
}

declare class SBUBaseChannelSettingViewController extends SBUBaseViewController implements SBDChannelDelegate, SBUActionSheetDelegate, UIImagePickerControllerDelegate, UITableViewDataSource, UITableViewDelegate {

	static alloc(): SBUBaseChannelSettingViewController; // inherited from NSObject

	static new(): SBUBaseChannelSettingViewController; // inherited from NSObject

	channelName: string;

	readonly channelUrl: string;

	isOperator: boolean;

	leftBarButton: UIBarButtonItem;

	rightBarButton: UIBarButtonItem;

	readonly tableView: UITableView;

	theme: SBUChannelSettingsTheme;

	titleView: UIView;

	userInfoView: UIView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	changeChannelName(): void;

	channelCreatedMetaCounters(sender: SBDBaseChannel, createdMetaCounters: NSDictionary<string, number>): void;

	channelCreatedMetaData(sender: SBDBaseChannel, createdMetaData: NSDictionary<string, string>): void;

	channelDeletedMetaCountersKeys(sender: SBDBaseChannel, deletedMetaCountersKeys: NSArray<string> | string[]): void;

	channelDeletedMetaDataKeys(sender: SBDBaseChannel, deletedMetaDataKeys: NSArray<string> | string[]): void;

	channelDidChangeMemberCount(channels: NSArray<SBDGroupChannel> | SBDGroupChannel[]): void;

	channelDidChangeParticipantCount(channels: NSArray<SBDOpenChannel> | SBDOpenChannel[]): void;

	channelDidDeclineInvitationInviter(sender: SBDGroupChannel, invitee: SBDUser, inviter: SBDUser): void;

	channelDidReceiveInvitationInviter(sender: SBDGroupChannel, invitees: NSArray<SBDUser> | SBDUser[], inviter: SBDUser): void;

	channelDidReceiveMention(channel: SBDBaseChannel, message: SBDBaseMessage): void;

	channelDidReceiveMessage(sender: SBDBaseChannel, message: SBDBaseMessage): void;

	channelDidUpdateDeliveryReceipt(sender: SBDGroupChannel): void;

	channelDidUpdateMessage(sender: SBDBaseChannel, message: SBDBaseMessage): void;

	channelDidUpdateOperators(sender: SBDBaseChannel): void;

	channelDidUpdateReadReceipt(sender: SBDGroupChannel): void;

	channelDidUpdateThreadInfo(channel: SBDBaseChannel, threadInfoUpdateEvent: SBDThreadInfoUpdateEvent): void;

	channelDidUpdateTypingStatus(sender: SBDGroupChannel): void;

	channelMessageWasDeleted(sender: SBDBaseChannel, messageId: number): void;

	channelUpdatedMetaCounters(sender: SBDBaseChannel, updatedMetaCounters: NSDictionary<string, number>): void;

	channelUpdatedMetaData(sender: SBDBaseChannel, updatedMetaData: NSDictionary<string, string>): void;

	channelUpdatedReaction(sender: SBDBaseChannel, reactionEvent: SBDReactionEvent): void;

	channelUserDidEnter(sender: SBDOpenChannel, user: SBDUser): void;

	channelUserDidExit(sender: SBDOpenChannel, user: SBDUser): void;

	channelUserDidJoin(sender: SBDGroupChannel, user: SBDUser): void;

	channelUserDidLeave(sender: SBDGroupChannel, user: SBDUser): void;

	channelUserWasBanned(sender: SBDBaseChannel, user: SBDUser): void;

	channelUserWasMuted(sender: SBDBaseChannel, user: SBDUser): void;

	channelUserWasUnbanned(sender: SBDBaseChannel, user: SBDUser): void;

	channelUserWasUnmuted(sender: SBDBaseChannel, user: SBDUser): void;

	channelWasChanged(sender: SBDBaseChannel): void;

	channelWasDeletedChannelType(channelUrl: string, channelType: SBDChannelType): void;

	channelWasFrozen(sender: SBDBaseChannel): void;

	channelWasHidden(sender: SBDGroupChannel): void;

	channelWasUnfrozen(sender: SBDBaseChannel): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didReceiveError(message: string): void;

	didSelectActionSheetItemWithIndexIdentifier(index: number, identifier: number): void;

	imagePickerControllerDidCancel(picker: UIImagePickerController): void;

	imagePickerControllerDidFinishPickingImageEditingInfo(picker: UIImagePickerController, image: UIImage, editingInfo: NSDictionary<string, any>): void;

	imagePickerControllerDidFinishPickingMediaWithInfo(picker: UIImagePickerController, info: NSDictionary<string, any>): void;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadChannelWithChannelUrl(channelUrl: string): void;

	numberOfSectionsInTableView(tableView: UITableView): number;

	onClickEdit(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	selectChannelImage(): void;

	self(): this;

	shouldDismissLoadingIndicator(): void;

	shouldShowLoadingIndicator(): boolean;

	showMemberList(): void;

	showModerationList(): void;

	showParticipantsList(): void;

	showSearch(): void;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewContextMenuConfigurationForRowAtIndexPathPoint(tableView: UITableView, indexPath: NSIndexPath, point: CGPoint): UIContextMenuConfiguration;

	tableViewDidBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndMultipleSelectionInteraction(tableView: UITableView): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewPreviewForDismissingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewPreviewForHighlightingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayContextMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillEndContextMenuInteractionWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillPerformPreviewActionForMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	updateChannelWithChannelNameCoverImage(channelName: string, coverImage: UIImage): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class SBUBaseChannelViewController extends SBUBaseViewController implements SBUEmptyViewDelegate, SBUMessageInputViewDelegate, SBUUserProfileViewDelegate, UIDocumentPickerDelegate, UIGestureRecognizerDelegate, UIImagePickerControllerDelegate, UITableViewDataSource, UITableViewDelegate, UIViewControllerTransitioningDelegate {

	static alloc(): SBUBaseChannelViewController; // inherited from NSObject

	static new(): SBUBaseChannelViewController; // inherited from NSObject

	readonly channelUrl: string;

	emptyView: UIView;

	readonly fullMessageList: NSArray<SBDBaseMessage>;

	readonly inEditingMessage: SBDUserMessage;

	messageInputView: SBUMessageInputView;

	readonly messageList: NSArray<SBDBaseMessage>;

	readonly messageListParams: SBDMessageListParams;

	readonly tableView: UITableView;

	theme: SBUChannelTheme;

	userProfileView: UIView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addGestureHideKeyboard(): void;

	animationControllerForDismissedController(dismissed: UIViewController): UIViewControllerAnimatedTransitioning;

	animationControllerForPresentedControllerPresentingControllerSourceController(presented: UIViewController, presenting: UIViewController, source: UIViewController): UIViewControllerAnimatedTransitioning;

	class(): typeof NSObject;

	clearMessageList(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deleteMessageWithMessage(message: SBDBaseMessage): void;

	deleteMessagesInListWithMessageIdsExcludeResendableMessagesNeedReload(messageIds: NSArray<number> | number[], excludeResendableMessages: boolean, needReload: boolean): void;

	deleteMessagesInListWithMessageIdsNeedReload(messageIds: NSArray<number> | number[], needReload: boolean): void;

	deleteResendableMessagesWithRequestIdsNeedReload(requestIds: NSArray<string> | string[], needReload: boolean): void;

	didReceiveError(message: string): void;

	didSelectClose(): void;

	didSelectDeleteImageWithMessage(message: SBDFileMessage): void;

	didSelectMessageWithUserId(userId: string): void;

	didSelectRetry(): void;

	dismissKeyboard(): void;

	documentPickerDidPickDocumentAtURL(controller: UIDocumentPickerViewController, url: NSURL): void;

	documentPickerDidPickDocumentsAtURLs(controller: UIDocumentPickerViewController, urls: NSArray<NSURL> | NSURL[]): void;

	documentPickerWasCancelled(controller: UIDocumentPickerViewController): void;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceiveEvent(gestureRecognizer: UIGestureRecognizer, event: _UIEvent): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	imagePickerControllerDidCancel(picker: UIImagePickerController): void;

	imagePickerControllerDidFinishPickingImageEditingInfo(picker: UIImagePickerController, image: UIImage, editingInfo: NSDictionary<string, any>): void;

	imagePickerControllerDidFinishPickingMediaWithInfo(picker: UIImagePickerController, info: NSDictionary<string, any>): void;

	increaseNewMessageCount(): void;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	interactionControllerForDismissal(animator: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	interactionControllerForPresentation(animator: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	keyboardWillHide(notification: NSNotification): void;

	keyboardWillShow(notification: NSNotification): void;

	loadChannelWithChannelUrlMessageListParams(channelUrl: string, messageListParams: SBDMessageListParams): void;

	messageInputViewDidEndTyping(): void;

	messageInputViewDidSelectEdit(messageInputView: SBUMessageInputView, text: string): void;

	messageInputViewDidSelectResource(messageInputView: SBUMessageInputView, type: MediaResourceType): void;

	messageInputViewDidSelectSend(messageInputView: SBUMessageInputView, text: string): void;

	messageInputViewDidStartTyping(): void;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentationControllerForPresentedViewControllerPresentingViewControllerSourceViewController(presented: UIViewController, presenting: UIViewController, source: UIViewController): UIPresentationController;

	resendMessageWithFailedMessage(failedMessage: SBDBaseMessage): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollToBottomWithAnimated(animated: boolean): void;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	sendDocumentFileMessageWithDocumentUrls(documentUrls: NSArray<NSURL> | NSURL[]): void;

	sendFileMessageWithFileDataFileNameMimeType(fileData: NSData, fileName: string, mimeType: string): void;

	sendFileMessageWithMessageParams(messageParams: SBDFileMessageParams): void;

	sendImageFileMessageWithInfo(info: NSDictionary<string, any>): void;

	sendUserMessageWithMessageParams(messageParams: SBDUserMessageParams): void;

	sendUserMessageWithText(text: string): void;

	sendVideoFileMessageWithInfo(info: NSDictionary<string, any>): void;

	setEditModeFor(userMessage: SBDUserMessage): void;

	setLoading(loadingState: boolean, showIndicator: boolean): void;

	setUserProfileTapGestureHandler(user: SBUUser): void;

	shouldDismissLoadingIndicator(): void;

	shouldShowLoadingIndicator(): boolean;

	sortAllMessageListWithNeedReload(needReload: boolean): void;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewContextMenuConfigurationForRowAtIndexPathPoint(tableView: UITableView, indexPath: NSIndexPath, point: CGPoint): UIContextMenuConfiguration;

	tableViewDidBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndMultipleSelectionInteraction(tableView: UITableView): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewPreviewForDismissingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewPreviewForHighlightingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayContextMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillEndContextMenuInteractionWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillPerformPreviewActionForMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	updateUserMessageWithMessageMessageParams(message: SBDUserMessage, messageParams: SBDUserMessageParams): void;

	updateUserMessageWithMessageText(message: SBDUserMessage, text: string): void;

	upsertMessagesInListWithMessagesNeedUpdateNewMessageNeedReload(messages: NSArray<SBDBaseMessage> | SBDBaseMessage[], needUpdateNewMessage: boolean, needReload: boolean): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class SBUBaseMessageCell extends UITableViewCell {

	static alloc(): SBUBaseMessageCell; // inherited from NSObject

	static appearance(): SBUBaseMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUBaseMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUBaseMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUBaseMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUBaseMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUBaseMessageCell; // inherited from UIAppearance

	static new(): SBUBaseMessageCell; // inherited from NSObject

	dateView: UIView;

	groupPosition: MessageGroupPosition;

	message: SBDBaseMessage;

	messageContentView: UIView;

	position: MessagePosition;

	receiptState: SBUMessageReceiptState;

	theme: SBUMessageCellTheme;

	configureWithMessagePositionHideDateViewGroupPositionReceiptState(message: SBDBaseMessage, position: MessagePosition, hideDateView: boolean, groupPosition: MessageGroupPosition, receiptState: SBUMessageReceiptState): void;

	setupActions(): void;

	setupAutolayout(): void;

	setupStyles(): void;

	setupViews(): void;
}

declare class SBUBaseViewController extends UIViewController implements UINavigationControllerDelegate {

	static alloc(): SBUBaseViewController; // inherited from NSObject

	static new(): SBUBaseViewController; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	navigationControllerAnimationControllerForOperationFromViewControllerToViewController(navigationController: UINavigationController, operation: UINavigationControllerOperation, fromVC: UIViewController, toVC: UIViewController): UIViewControllerAnimatedTransitioning;

	navigationControllerDidShowViewControllerAnimated(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;

	navigationControllerInteractionControllerForAnimationController(navigationController: UINavigationController, animationController: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	navigationControllerPreferredInterfaceOrientationForPresentation(navigationController: UINavigationController): UIInterfaceOrientation;

	navigationControllerSupportedInterfaceOrientations(navigationController: UINavigationController): UIInterfaceOrientationMask;

	navigationControllerWillShowViewControllerAnimated(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;

	onClickBack(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setupAutolayout(): void;

	setupStyles(): void;

	updateStyles(): void;
}

declare class SBUChannelCell extends SBUBaseChannelCell {

	static alloc(): SBUChannelCell; // inherited from NSObject

	static appearance(): SBUChannelCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUChannelCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUChannelCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUChannelCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUChannelCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUChannelCell; // inherited from UIAppearance

	static new(): SBUChannelCell; // inherited from NSObject
}

declare class SBUChannelCellTheme extends NSObject {

	static alloc(): SBUChannelCellTheme; // inherited from NSObject

	static new(): SBUChannelCellTheme; // inherited from NSObject

	backgroundColor: UIColor;

	broadcastMarkTintColor: UIColor;

	freezeStateTintColor: UIColor;

	lastUpdatedTimeFont: UIFont;

	lastUpdatedTimeTextColor: UIColor;

	memberCountFont: UIFont;

	memberCountTextColor: UIColor;

	messageFont: UIFont;

	messageTextColor: UIColor;

	separatorLineColor: UIColor;

	titleFont: UIFont;

	titleTextColor: UIColor;

	unreadCountBackgroundColor: UIColor;

	unreadCountFont: UIFont;

	unreadCountTextColor: UIColor;

	static readonly dark: SBUChannelCellTheme;

	static readonly light: SBUChannelCellTheme;

	constructor(o: { backgroundColor: UIColor; titleFont: UIFont; titleTextColor: UIColor; memberCountFont: UIFont; memberCountTextColor: UIColor; lastUpdatedTimeFont: UIFont; lastUpdatedTimeTextColor: UIColor; messageFont: UIFont; messageTextColor: UIColor; broadcastMarkTintColor: UIColor; freezeStateTintColor: UIColor; unreadCountBackgroundColor: UIColor; unreadCountTextColor: UIColor; unreadCountFont: UIFont; separatorLineColor: UIColor; });

	initWithBackgroundColorTitleFontTitleTextColorMemberCountFontMemberCountTextColorLastUpdatedTimeFontLastUpdatedTimeTextColorMessageFontMessageTextColorBroadcastMarkTintColorFreezeStateTintColorUnreadCountBackgroundColorUnreadCountTextColorUnreadCountFontSeparatorLineColor(backgroundColor: UIColor, titleFont: UIFont, titleTextColor: UIColor, memberCountFont: UIFont, memberCountTextColor: UIColor, lastUpdatedTimeFont: UIFont, lastUpdatedTimeTextColor: UIColor, messageFont: UIFont, messageTextColor: UIColor, broadcastMarkTintColor: UIColor, freezeStateTintColor: UIColor, unreadCountBackgroundColor: UIColor, unreadCountTextColor: UIColor, unreadCountFont: UIFont, separatorLineColor: UIColor): this;
}

declare class SBUChannelInfoHeaderView extends UIView {

	static alloc(): SBUChannelInfoHeaderView; // inherited from NSObject

	static appearance(): SBUChannelInfoHeaderView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUChannelInfoHeaderView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUChannelInfoHeaderView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUChannelInfoHeaderView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUChannelInfoHeaderView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUChannelInfoHeaderView; // inherited from UIAppearance

	static new(): SBUChannelInfoHeaderView; // inherited from NSObject

	readonly channel: SBDBaseChannel;

	coverImage: SBUCoverImageView;

	descriptionLabel: UILabel;

	infoButton: UIButton;

	titleLabel: UILabel;

	configureWithChannelDescription(channel: SBDBaseChannel, description: string): void;

	onClickChannelInfo(): void;

	onClickChannelMembers(): void;

	onClickChannelParticipants(): void;
}

interface SBUChannelInfoHeaderViewDelegate {

	didSelectChannelInfo?(): void;

	didSelectChannelMembers?(): void;

	didSelectChannelParticipants?(): void;
}
declare var SBUChannelInfoHeaderViewDelegate: {

	prototype: SBUChannelInfoHeaderViewDelegate;
};

declare class SBUChannelListTheme extends NSObject {

	static alloc(): SBUChannelListTheme; // inherited from NSObject

	static new(): SBUChannelListTheme; // inherited from NSObject

	alertBackgroundColor: UIColor;

	backgroundColor: UIColor;

	leaveBackgroundColor: UIColor;

	leaveTintColor: UIColor;

	leftBarButtonTintColor: UIColor;

	navigationBarShadowColor: UIColor;

	navigationBarTintColor: UIColor;

	notificationOffBackgroundColor: UIColor;

	notificationOffTintColor: UIColor;

	notificationOnBackgroundColor: UIColor;

	notificationOnTintColor: UIColor;

	rightBarButtonTintColor: UIColor;

	statusBarStyle: UIStatusBarStyle;

	static readonly dark: SBUChannelListTheme;

	static readonly light: SBUChannelListTheme;

	constructor(o: { statusBarStyle: UIStatusBarStyle; leftBarButtonTintColor: UIColor; rightBarButtonTintColor: UIColor; navigationBarTintColor: UIColor; navigationBarShadowColor: UIColor; backgroundColor: UIColor; notificationOnBackgroundColor: UIColor; notificationOnTintColor: UIColor; notificationOffBackgroundColor: UIColor; notificationOffTintColor: UIColor; leaveBackgroundColor: UIColor; leaveTintColor: UIColor; alertBackgroundColor: UIColor; });

	initWithStatusBarStyleLeftBarButtonTintColorRightBarButtonTintColorNavigationBarTintColorNavigationBarShadowColorBackgroundColorNotificationOnBackgroundColorNotificationOnTintColorNotificationOffBackgroundColorNotificationOffTintColorLeaveBackgroundColorLeaveTintColorAlertBackgroundColor(statusBarStyle: UIStatusBarStyle, leftBarButtonTintColor: UIColor, rightBarButtonTintColor: UIColor, navigationBarTintColor: UIColor, navigationBarShadowColor: UIColor, backgroundColor: UIColor, notificationOnBackgroundColor: UIColor, notificationOnTintColor: UIColor, notificationOffBackgroundColor: UIColor, notificationOffTintColor: UIColor, leaveBackgroundColor: UIColor, leaveTintColor: UIColor, alertBackgroundColor: UIColor): this;
}

declare class SBUChannelListViewController extends SBUBaseChannelListViewController implements SBDChannelDelegate, SBDConnectionDelegate, SBUCreateChannelTypeSelectorDelegate, SBUEmptyViewDelegate, UITableViewDataSource, UITableViewDelegate {

	static alloc(): SBUChannelListViewController; // inherited from NSObject

	static new(): SBUChannelListViewController; // inherited from NSObject

	readonly channelCell: SBUBaseChannelCell;

	readonly channelList: NSArray<SBDGroupChannel>;

	readonly channelListQuery: SBDGroupChannelListQuery;

	createChannelTypeSelector: UIView;

	readonly customCell: SBUBaseChannelCell;

	emptyView: UIView;

	readonly includeEmptyChannel: boolean;

	readonly isLoading: boolean;

	readonly lastUpdatedTimestamp: number;

	readonly lastUpdatedToken: string;

	leftBarButton: UIBarButtonItem;

	readonly limit: number;

	rightBarButton: UIBarButtonItem;

	readonly tableView: UITableView;

	theme: SBUChannelListTheme;

	titleView: UIView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { channelListQuery: SBDGroupChannelListQuery; });

	changePushTriggerOptionWithOptionChannelCompletionHandler(option: SBDGroupChannelPushTriggerOption, channel: SBDGroupChannel, completionHandler: (p1: boolean) => void): void;

	channelCreatedMetaCounters(sender: SBDBaseChannel, createdMetaCounters: NSDictionary<string, number>): void;

	channelCreatedMetaData(sender: SBDBaseChannel, createdMetaData: NSDictionary<string, string>): void;

	channelDeletedMetaCountersKeys(sender: SBDBaseChannel, deletedMetaCountersKeys: NSArray<string> | string[]): void;

	channelDeletedMetaDataKeys(sender: SBDBaseChannel, deletedMetaDataKeys: NSArray<string> | string[]): void;

	channelDidChangeMemberCount(channels: NSArray<SBDGroupChannel> | SBDGroupChannel[]): void;

	channelDidChangeParticipantCount(channels: NSArray<SBDOpenChannel> | SBDOpenChannel[]): void;

	channelDidDeclineInvitationInviter(sender: SBDGroupChannel, invitee: SBDUser, inviter: SBDUser): void;

	channelDidReceiveInvitationInviter(sender: SBDGroupChannel, invitees: NSArray<SBDUser> | SBDUser[], inviter: SBDUser): void;

	channelDidReceiveMention(channel: SBDBaseChannel, message: SBDBaseMessage): void;

	channelDidReceiveMessage(sender: SBDBaseChannel, message: SBDBaseMessage): void;

	channelDidUpdateDeliveryReceipt(sender: SBDGroupChannel): void;

	channelDidUpdateMessage(sender: SBDBaseChannel, message: SBDBaseMessage): void;

	channelDidUpdateOperators(sender: SBDBaseChannel): void;

	channelDidUpdateReadReceipt(sender: SBDGroupChannel): void;

	channelDidUpdateThreadInfo(channel: SBDBaseChannel, threadInfoUpdateEvent: SBDThreadInfoUpdateEvent): void;

	channelDidUpdateTypingStatus(sender: SBDGroupChannel): void;

	channelMessageWasDeleted(sender: SBDBaseChannel, messageId: number): void;

	channelUpdatedMetaCounters(sender: SBDBaseChannel, updatedMetaCounters: NSDictionary<string, number>): void;

	channelUpdatedMetaData(sender: SBDBaseChannel, updatedMetaData: NSDictionary<string, string>): void;

	channelUpdatedReaction(sender: SBDBaseChannel, reactionEvent: SBDReactionEvent): void;

	channelUserDidEnter(sender: SBDOpenChannel, user: SBDUser): void;

	channelUserDidExit(sender: SBDOpenChannel, user: SBDUser): void;

	channelUserDidJoin(sender: SBDGroupChannel, user: SBDUser): void;

	channelUserDidLeave(sender: SBDGroupChannel, user: SBDUser): void;

	channelUserWasBanned(sender: SBDBaseChannel, user: SBDUser): void;

	channelUserWasMuted(sender: SBDBaseChannel, user: SBDUser): void;

	channelUserWasUnbanned(sender: SBDBaseChannel, user: SBDUser): void;

	channelUserWasUnmuted(sender: SBDBaseChannel, user: SBDUser): void;

	channelWasChanged(sender: SBDBaseChannel): void;

	channelWasDeletedChannelType(channelUrl: string, channelType: SBDChannelType): void;

	channelWasFrozen(sender: SBDBaseChannel): void;

	channelWasHidden(sender: SBDGroupChannel): void;

	channelWasUnfrozen(sender: SBDBaseChannel): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deleteChannelsWithChannelUrlsNeedReload(channelUrls: NSArray<string> | string[], needReload: boolean): void;

	didCancelReconnection(): void;

	didFailReconnection(): void;

	didReceiveError(message: string): void;

	didSelectCloseSelector(): void;

	didSelectCreateBroadcastChannel(): void;

	didSelectCreateGroupChannel(): void;

	didSelectCreateSuperGroupChannel(): void;

	didSelectRetry(): void;

	didStartReconnection(): void;

	didSucceedReconnection(): void;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	initWithChannelListQuery(channelListQuery: SBDGroupChannelListQuery): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	leaveChannelCompletionHandler(channel: SBDGroupChannel, completionHandler: (p1: boolean) => void): void;

	loadChannelChangeLogsWithHasMoreToken(hasMore: boolean, token: string): void;

	loadNextChannelListWithReset(reset: boolean): void;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerWithChannelCellNib(channelCell: SBUBaseChannelCell, nib: UINib): void;

	registerWithCustomCellNib(customCell: SBUBaseChannelCell, nib: UINib): void;

	reloadTableView(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	setLoading(loadingState: boolean, showIndicator: boolean): void;

	shouldDismissLoadingIndicator(): void;

	shouldShowLoadingIndicator(): boolean;

	showCreateChannelTypeSelector(): void;

	showCreateChannelWithType(type: ChannelType): void;

	sortChannelListWithNeedReload(needReload: boolean): void;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewContextMenuConfigurationForRowAtIndexPathPoint(tableView: UITableView, indexPath: NSIndexPath, point: CGPoint): UIContextMenuConfiguration;

	tableViewDidBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndMultipleSelectionInteraction(tableView: UITableView): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewPreviewForDismissingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewPreviewForHighlightingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayContextMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillEndContextMenuInteractionWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillPerformPreviewActionForMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	updateChannelsNeedReload(channels: NSArray<SBDGroupChannel> | SBDGroupChannel[], needReload: boolean): void;

	upsertChannelsNeedReload(channels: NSArray<SBDGroupChannel> | SBDGroupChannel[], needReload: boolean): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class SBUChannelSettingsTheme extends NSObject {

	static alloc(): SBUChannelSettingsTheme; // inherited from NSObject

	static new(): SBUChannelSettingsTheme; // inherited from NSObject

	backgroundColor: UIColor;

	cellArrowIconTintColor: UIColor;

	cellDeleteIconColor: UIColor;

	cellLeaveIconColor: UIColor;

	cellMemberButtonColor: UIColor;

	cellMemberIconColor: UIColor;

	cellNotificationIconColor: UIColor;

	cellSeparateColor: UIColor;

	cellSubTextColor: UIColor;

	cellSubTextFont: UIFont;

	cellSwitchColor: UIColor;

	cellTextColor: UIColor;

	cellTextFont: UIFont;

	cellTypeIconTintColor: UIColor;

	itemColor: UIColor;

	itemTextColor: UIColor;

	leftBarButtonTintColor: UIColor;

	navigationBarTintColor: UIColor;

	navigationShadowColor: UIColor;

	rightBarButtonTintColor: UIColor;

	statusBarStyle: UIStatusBarStyle;

	urlColor: UIColor;

	urlFont: UIFont;

	urlTitleColor: UIColor;

	urlTitleFont: UIFont;

	userNameFont: UIFont;

	userNameTextColor: UIColor;

	static readonly dark: SBUChannelSettingsTheme;

	static readonly light: SBUChannelSettingsTheme;

	constructor(o: { statusBarStyle: UIStatusBarStyle; navigationBarTintColor: UIColor; navigationShadowColor: UIColor; leftBarButtonTintColor: UIColor; rightBarButtonTintColor: UIColor; backgroundColor: UIColor; cellTextFont: UIFont; cellTextColor: UIColor; cellSubTextFont: UIFont; cellSubTextColor: UIColor; cellSwitchColor: UIColor; cellSeparateColor: UIColor; cellTypeIconTintColor: UIColor; cellArrowIconTintColor: UIColor; cellLeaveIconColor: UIColor; cellDeleteIconColor: UIColor; userNameFont: UIFont; userNameTextColor: UIColor; itemTextColor: UIColor; itemColor: UIColor; urlTitleFont: UIFont; urlTitleColor: UIColor; urlFont: UIFont; urlColor: UIColor; });

	initWithStatusBarStyleNavigationBarTintColorNavigationShadowColorLeftBarButtonTintColorRightBarButtonTintColorBackgroundColorCellTextFontCellTextColorCellSubTextFontCellSubTextColorCellSwitchColorCellSeparateColorCellTypeIconTintColorCellArrowIconTintColorCellLeaveIconColorCellDeleteIconColorUserNameFontUserNameTextColorItemTextColorItemColorUrlTitleFontUrlTitleColorUrlFontUrlColor(statusBarStyle: UIStatusBarStyle, navigationBarTintColor: UIColor, navigationShadowColor: UIColor, leftBarButtonTintColor: UIColor, rightBarButtonTintColor: UIColor, backgroundColor: UIColor, cellTextFont: UIFont, cellTextColor: UIColor, cellSubTextFont: UIFont, cellSubTextColor: UIColor, cellSwitchColor: UIColor, cellSeparateColor: UIColor, cellTypeIconTintColor: UIColor, cellArrowIconTintColor: UIColor, cellLeaveIconColor: UIColor, cellDeleteIconColor: UIColor, userNameFont: UIFont, userNameTextColor: UIColor, itemTextColor: UIColor, itemColor: UIColor, urlTitleFont: UIFont, urlTitleColor: UIColor, urlFont: UIFont, urlColor: UIColor): this;
}

declare class SBUChannelSettingsViewController extends SBUBaseChannelSettingViewController {

	static alloc(): SBUChannelSettingsViewController; // inherited from NSObject

	static new(): SBUChannelSettingsViewController; // inherited from NSObject

	readonly channel: SBDGroupChannel;

	constructor(o: { channel: SBDGroupChannel; });

	constructor(o: { channelUrl: string; });

	changeNotificationWithIsOn(isOn: boolean): void;

	initWithChannel(channel: SBDGroupChannel): this;

	initWithChannelUrl(channelUrl: string): this;

	leaveChannel(): void;

	updateChannelInfoWithChannelName(channelName: string): void;

	updateChannelWithParams(params: SBDGroupChannelParams): void;
}

declare class SBUChannelTheme extends NSObject {

	static alloc(): SBUChannelTheme; // inherited from NSObject

	static new(): SBUChannelTheme; // inherited from NSObject

	alertCancelColor: UIColor;

	alertRemoveColor: UIColor;

	backgroundColor: UIColor;

	cancelItemColor: UIColor;

	channelStateBannerBackgroundColor: UIColor;

	channelStateBannerFont: UIFont;

	channelStateBannerTextColor: UIColor;

	leftBarButtonTintColor: UIColor;

	menuItemTintColor: UIColor;

	menuTextColor: UIColor;

	navigationBarShadowColor: UIColor;

	navigationBarTintColor: UIColor;

	removeItemColor: UIColor;

	rightBarButtonTintColor: UIColor;

	statusBarStyle: UIStatusBarStyle;

	static readonly dark: SBUChannelTheme;

	static readonly light: SBUChannelTheme;

	static readonly overlay: SBUChannelTheme;

	constructor(o: { statusBarStyle: UIStatusBarStyle; navigationBarTintColor: UIColor; navigationBarShadowColor: UIColor; leftBarButtonTintColor: UIColor; rightBarButtonTintColor: UIColor; backgroundColor: UIColor; removeItemColor: UIColor; cancelItemColor: UIColor; alertRemoveColor: UIColor; alertCancelColor: UIColor; menuTextColor: UIColor; menuItemTintColor: UIColor; channelStateBannerFont: UIFont; channelStateBannerTextColor: UIColor; channelStateBannerBackgroundColor: UIColor; });

	initWithStatusBarStyleNavigationBarTintColorNavigationBarShadowColorLeftBarButtonTintColorRightBarButtonTintColorBackgroundColorRemoveItemColorCancelItemColorAlertRemoveColorAlertCancelColorMenuTextColorMenuItemTintColorChannelStateBannerFontChannelStateBannerTextColorChannelStateBannerBackgroundColor(statusBarStyle: UIStatusBarStyle, navigationBarTintColor: UIColor, navigationBarShadowColor: UIColor, leftBarButtonTintColor: UIColor, rightBarButtonTintColor: UIColor, backgroundColor: UIColor, removeItemColor: UIColor, cancelItemColor: UIColor, alertRemoveColor: UIColor, alertCancelColor: UIColor, menuTextColor: UIColor, menuItemTintColor: UIColor, channelStateBannerFont: UIFont, channelStateBannerTextColor: UIColor, channelStateBannerBackgroundColor: UIColor): this;
}

declare class SBUChannelViewController extends SBUBaseChannelViewController implements SBDChannelDelegate, SBDConnectionDelegate, UIDocumentInteractionControllerDelegate {

	static alloc(): SBUChannelViewController; // inherited from NSObject

	static new(): SBUChannelViewController; // inherited from NSObject

	readonly adminMessageCell: SBUBaseMessageCell;

	readonly channel: SBDGroupChannel;

	channelName: string;

	channelStateBanner: UIView;

	readonly customMessageCell: SBUBaseMessageCell;

	readonly fileMessageCell: SBUBaseMessageCell;

	readonly fileTransferProgress: NSDictionary<string, number>;

	highlightInfo: SBUHighlightMessageInfo;

	leftBarButton: UIBarButtonItem;

	newMessageInfoView: UIView;

	readonly preSendFileData: NSDictionary<string, NSDictionary<string, any>>;

	readonly preSendMessages: NSDictionary<string, SBDBaseMessage>;

	readonly resendableFileData: NSDictionary<string, NSDictionary<string, any>>;

	readonly resendableMessages: NSDictionary<string, SBDBaseMessage>;

	rightBarButton: UIBarButtonItem;

	scrollBottomView: UIView;

	titleView: UIView;

	readonly unknownMessageCell: SBUBaseMessageCell;

	useRightBarButtonItem: boolean;

	readonly userMessageCell: SBUBaseMessageCell;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { channel: SBDGroupChannel; messageListParams: SBDMessageListParams; });

	constructor(o: { channelUrl: string; messageListParams: SBDMessageListParams; });

	constructor(o: { channelUrl: string; startingPoint: number; messageListParams: SBDMessageListParams; });

	calculatorMenuPointWithIndexPathPosition(indexPath: NSIndexPath, position: MessagePosition): CGPoint;

	channelCreatedMetaCounters(sender: SBDBaseChannel, createdMetaCounters: NSDictionary<string, number>): void;

	channelCreatedMetaData(sender: SBDBaseChannel, createdMetaData: NSDictionary<string, string>): void;

	channelDeletedMetaCountersKeys(sender: SBDBaseChannel, deletedMetaCountersKeys: NSArray<string> | string[]): void;

	channelDeletedMetaDataKeys(sender: SBDBaseChannel, deletedMetaDataKeys: NSArray<string> | string[]): void;

	channelDidChangeMemberCount(channels: NSArray<SBDGroupChannel> | SBDGroupChannel[]): void;

	channelDidChangeParticipantCount(channels: NSArray<SBDOpenChannel> | SBDOpenChannel[]): void;

	channelDidDeclineInvitationInviter(sender: SBDGroupChannel, invitee: SBDUser, inviter: SBDUser): void;

	channelDidReceiveInvitationInviter(sender: SBDGroupChannel, invitees: NSArray<SBDUser> | SBDUser[], inviter: SBDUser): void;

	channelDidReceiveMention(channel: SBDBaseChannel, message: SBDBaseMessage): void;

	channelDidReceiveMessage(sender: SBDBaseChannel, message: SBDBaseMessage): void;

	channelDidUpdateDeliveryReceipt(sender: SBDGroupChannel): void;

	channelDidUpdateMessage(sender: SBDBaseChannel, message: SBDBaseMessage): void;

	channelDidUpdateOperators(sender: SBDBaseChannel): void;

	channelDidUpdateReadReceipt(sender: SBDGroupChannel): void;

	channelDidUpdateThreadInfo(channel: SBDBaseChannel, threadInfoUpdateEvent: SBDThreadInfoUpdateEvent): void;

	channelDidUpdateTypingStatus(sender: SBDGroupChannel): void;

	channelMessageWasDeleted(sender: SBDBaseChannel, messageId: number): void;

	channelUpdatedMetaCounters(sender: SBDBaseChannel, updatedMetaCounters: NSDictionary<string, number>): void;

	channelUpdatedMetaData(sender: SBDBaseChannel, updatedMetaData: NSDictionary<string, string>): void;

	channelUpdatedReaction(sender: SBDBaseChannel, reactionEvent: SBDReactionEvent): void;

	channelUserDidEnter(sender: SBDOpenChannel, user: SBDUser): void;

	channelUserDidExit(sender: SBDOpenChannel, user: SBDUser): void;

	channelUserDidJoin(sender: SBDGroupChannel, user: SBDUser): void;

	channelUserDidLeave(sender: SBDGroupChannel, user: SBDUser): void;

	channelUserWasBanned(sender: SBDBaseChannel, user: SBDUser): void;

	channelUserWasMuted(sender: SBDBaseChannel, user: SBDUser): void;

	channelUserWasUnbanned(sender: SBDBaseChannel, user: SBDUser): void;

	channelUserWasUnmuted(sender: SBDBaseChannel, user: SBDUser): void;

	channelWasChanged(sender: SBDBaseChannel): void;

	channelWasDeletedChannelType(channelUrl: string, channelType: SBDChannelType): void;

	channelWasFrozen(sender: SBDBaseChannel): void;

	channelWasHidden(sender: SBDGroupChannel): void;

	channelWasUnfrozen(sender: SBDBaseChannel): void;

	checkSameDayAsNextMessageWithCurrentIndex(currentIndex: number): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didCancelReconnection(): void;

	didFailReconnection(): void;

	didStartReconnection(): void;

	didSucceedReconnection(): void;

	documentInteractionControllerCanPerformAction(controller: UIDocumentInteractionController, action: string): boolean;

	documentInteractionControllerDidDismissOpenInMenu(controller: UIDocumentInteractionController): void;

	documentInteractionControllerDidDismissOptionsMenu(controller: UIDocumentInteractionController): void;

	documentInteractionControllerDidEndPreview(controller: UIDocumentInteractionController): void;

	documentInteractionControllerDidEndSendingToApplication(controller: UIDocumentInteractionController, application: string): void;

	documentInteractionControllerPerformAction(controller: UIDocumentInteractionController, action: string): boolean;

	documentInteractionControllerRectForPreview(controller: UIDocumentInteractionController): CGRect;

	documentInteractionControllerViewControllerForPreview(controller: UIDocumentInteractionController): UIViewController;

	documentInteractionControllerViewForPreview(controller: UIDocumentInteractionController): UIView;

	documentInteractionControllerWillBeginPreview(controller: UIDocumentInteractionController): void;

	documentInteractionControllerWillBeginSendingToApplication(controller: UIDocumentInteractionController, application: string): void;

	documentInteractionControllerWillPresentOpenInMenu(controller: UIDocumentInteractionController): void;

	documentInteractionControllerWillPresentOptionsMenu(controller: UIDocumentInteractionController): void;

	generateCellIdentifierBy(message: SBDBaseMessage): string;

	getMessageGroupingPositionWithCurrentIndex(currentIndex: number): MessageGroupPosition;

	initWithChannelMessageListParams(channel: SBDGroupChannel, messageListParams: SBDMessageListParams): this;

	initWithChannelUrlMessageListParams(channelUrl: string, messageListParams: SBDMessageListParams): this;

	initWithChannelUrlStartingPointMessageListParams(channelUrl: string, startingPoint: number, messageListParams: SBDMessageListParams): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	onClickScrollBottomWithSender(sender: UIButton): void;

	onClickSetting(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerWithAdminMessageCellNib(adminMessageCell: SBUBaseMessageCell, nib: UINib): void;

	registerWithCustomMessageCellNib(customMessageCell: SBUBaseMessageCell, nib: UINib): void;

	registerWithFileMessageCellNib(fileMessageCell: SBUBaseMessageCell, nib: UINib): void;

	registerWithUserMessageCellNib(userMessageCell: SBUBaseMessageCell, nib: UINib): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setEmojiLongTapGestureHandlerEmojiKey(cell: SBUBaseMessageCell, emojiKey: string): void;

	setEmojiTapGestureHandlerEmojiKey(cell: SBUBaseMessageCell, emojiKey: string): void;

	setFileMessageCellGesturesFileMessageIndexPath(cell: SBUFileMessageCell, fileMessage: SBDFileMessage, indexPath: NSIndexPath): void;

	setLongTapEmojiGestureHandlerEmojiKey(cell: SBUBaseMessageCell, emojiKey: string): void;

	setLongTapGestureHandlerMessageIndexPath(cell: SBUBaseMessageCell, message: SBDBaseMessage, indexPath: NSIndexPath): void;

	setReactionWithMessageEmojiKeyDidSelect(message: SBDBaseMessage, emojiKey: string, didSelect: boolean): void;

	setTapEmojiGestureHandlerEmojiKey(cell: SBUBaseMessageCell, emojiKey: string): void;

	setTapGestureHandlerMessage(cell: SBUBaseMessageCell, message: SBDBaseMessage): void;

	setUnkownMessageCellGesturesUnknownMessageIndexPath(cell: SBUUnknownMessageCell, unknownMessage: SBDBaseMessage, indexPath: NSIndexPath): void;

	setUserMessageCellGesturesUserMessageIndexPath(cell: SBUUserMessageCell, userMessage: SBDUserMessage, indexPath: NSIndexPath): void;

	showChannelSettings(): void;

	showEmojiListModalWithMessage(message: SBDBaseMessage): void;

	updateMessageInputModeState(): void;

	updateMessagesInListWithMessagesNeedReload(messages: NSArray<SBDBaseMessage> | SBDBaseMessage[], needReload: boolean): void;
}

declare class SBUColorSet extends NSObject {

	static alloc(): SBUColorSet; // inherited from NSObject

	static new(): SBUColorSet; // inherited from NSObject

	static setBackground100(value: UIColor): void;

	static setBackground200(value: UIColor): void;

	static setBackground300(value: UIColor): void;

	static setBackground400(value: UIColor): void;

	static setBackground50(value: UIColor): void;

	static setBackground500(value: UIColor): void;

	static setBackground600(value: UIColor): void;

	static setBackground700(value: UIColor): void;

	static setError100(value: UIColor): void;

	static setError200(value: UIColor): void;

	static setError300(value: UIColor): void;

	static setError400(value: UIColor): void;

	static setError500(value: UIColor): void;

	static setHighlight(value: UIColor): void;

	static setInformation(value: UIColor): void;

	static setOndark01(value: UIColor): void;

	static setOndark02(value: UIColor): void;

	static setOndark03(value: UIColor): void;

	static setOndark04(value: UIColor): void;

	static setOnlight01(value: UIColor): void;

	static setOnlight02(value: UIColor): void;

	static setOnlight03(value: UIColor): void;

	static setOnlight04(value: UIColor): void;

	static setOverlay01(value: UIColor): void;

	static setOverlay02(value: UIColor): void;

	static setPrimary100(value: UIColor): void;

	static setPrimary200(value: UIColor): void;

	static setPrimary300(value: UIColor): void;

	static setPrimary400(value: UIColor): void;

	static setPrimary500(value: UIColor): void;

	static setSecondary100(value: UIColor): void;

	static setSecondary200(value: UIColor): void;

	static setSecondary300(value: UIColor): void;

	static setSecondary400(value: UIColor): void;

	static setSecondary500(value: UIColor): void;

	static background100: UIColor;

	static background200: UIColor;

	static background300: UIColor;

	static background400: UIColor;

	static background50: UIColor;

	static background500: UIColor;

	static background600: UIColor;

	static background700: UIColor;

	static error100: UIColor;

	static error200: UIColor;

	static error300: UIColor;

	static error400: UIColor;

	static error500: UIColor;

	static highlight: UIColor;

	static information: UIColor;

	static ondark01: UIColor;

	static ondark02: UIColor;

	static ondark03: UIColor;

	static ondark04: UIColor;

	static onlight01: UIColor;

	static onlight02: UIColor;

	static onlight03: UIColor;

	static onlight04: UIColor;

	static overlay01: UIColor;

	static overlay02: UIColor;

	static primary100: UIColor;

	static primary200: UIColor;

	static primary300: UIColor;

	static primary400: UIColor;

	static primary500: UIColor;

	static secondary100: UIColor;

	static secondary200: UIColor;

	static secondary300: UIColor;

	static secondary400: UIColor;

	static secondary500: UIColor;
}

declare class SBUCommonItem extends NSObject {

	static alloc(): SBUCommonItem; // inherited from NSObject

	static new(): SBUCommonItem; // inherited from NSObject

	constructor(o: { title: string; color: UIColor; image: UIImage; font: UIFont; tintColor: UIColor; textAlignment: NSTextAlignment; });

	initWithTitleColorImageFontTintColorTextAlignment(title: string, color: UIColor, image: UIImage, font: UIFont, tintColor: UIColor, textAlignment: NSTextAlignment): this;
}

declare class SBUComponentTheme extends NSObject {

	static alloc(): SBUComponentTheme; // inherited from NSObject

	static new(): SBUComponentTheme; // inherited from NSObject

	actionSheetButtonFont: UIFont;

	actionSheetErrorColor: UIColor;

	actionSheetItemColor: UIColor;

	actionSheetSubTextColor: UIColor;

	actionSheetSubTextFont: UIFont;

	actionSheetTextColor: UIColor;

	actionSheetTextFont: UIFont;

	addReactionTintColor: UIColor;

	alertButtonColor: UIColor;

	alertButtonFont: UIFont;

	alertDetailColor: UIColor;

	alertDetailFont: UIFont;

	alertErrorColor: UIColor;

	alertPlaceholderColor: UIColor;

	alertTextFieldBackgroundColor: UIColor;

	alertTextFieldFont: UIFont;

	alertTextFieldTintColor: UIColor;

	alertTitleColor: UIColor;

	alertTitleFont: UIFont;

	backgroundColor: UIColor;

	barItemTintColor: UIColor;

	broadcastIconBackgroundColor: UIColor;

	broadcastIconTintColor: UIColor;

	buttonTextColor: UIColor;

	channelTypeSelectorItemFont: UIFont;

	channelTypeSelectorItemTextColor: UIColor;

	channelTypeSelectorItemTintColor: UIColor;

	closeBarButtonTintColor: UIColor;

	emojiCountColor: UIColor;

	emojiCountFont: UIFont;

	emojiListSelectedBackgroundColor: UIColor;

	emojiSelectedCountColor: UIColor;

	emojiSelectedUnderlineColor: UIColor;

	emptyViewBackgroundColor: UIColor;

	emptyViewRetryButtonFont: UIFont;

	emptyViewRetryButtonTintColor: UIColor;

	emptyViewStatusFont: UIFont;

	emptyViewStatusTintColor: UIColor;

	highlightedColor: UIColor;

	loadingBackgroundColor: UIColor;

	loadingFont: UIFont;

	loadingPopupBackgroundColor: UIColor;

	loadingSpinnerColor: UIColor;

	loadingTextColor: UIColor;

	menuTitleFont: UIFont;

	newMessageBackground: UIColor;

	newMessageButtonBackground: UIColor;

	newMessageButtonHighlighted: UIColor;

	newMessageButtonTintColor: UIColor;

	newMessageFont: UIFont;

	newMessageHighlighted: UIColor;

	newMessageTintColor: UIColor;

	overlayColor: UIColor;

	reactionBoxBackgroundColor: UIColor;

	reactionBoxBorderLineColor: UIColor;

	reactionBoxEmojiBackgroundColor: UIColor;

	reactionBoxEmojiCountColor: UIColor;

	reactionBoxEmojiCountFont: UIFont;

	reactionBoxSelectedEmojiBackgroundColor: UIColor;

	reactionMenuLineColor: UIColor;

	scrollBottomButtonBackground: UIColor;

	scrollBottomButtonHighlighted: UIColor;

	scrollBottomButtonIconColor: UIColor;

	separatorColor: UIColor;

	shadowColor: UIColor;

	titleColor: UIColor;

	titleFont: UIFont;

	titleOnlineStateColor: UIColor;

	titleStatusColor: UIColor;

	titleStatusFont: UIFont;

	userPlaceholderBackgroundColor: UIColor;

	userPlaceholderTintColor: UIColor;

	static readonly dark: SBUComponentTheme;

	static readonly light: SBUComponentTheme;

	static readonly overlay: SBUComponentTheme;

	constructor(o: { emptyViewBackgroundColor: UIColor; emptyViewStatusFont: UIFont; emptyViewStatusTintColor: UIColor; emptyViewRetryButtonTintColor: UIColor; emptyViewRetryButtonFont: UIFont; overlayColor: UIColor; backgroundColor: UIColor; highlightedColor: UIColor; buttonTextColor: UIColor; separatorColor: UIColor; shadowColor: UIColor; closeBarButtonTintColor: UIColor; alertTitleColor: UIColor; alertTitleFont: UIFont; alertDetailColor: UIColor; alertDetailFont: UIFont; alertPlaceholderColor: UIColor; alertButtonColor: UIColor; alertErrorColor: UIColor; alertButtonFont: UIFont; alertTextFieldBackgroundColor: UIColor; alertTextFieldTintColor: UIColor; alertTextFieldFont: UIFont; actionSheetTextFont: UIFont; actionSheetTextColor: UIColor; actionSheetSubTextFont: UIFont; actionSheetSubTextColor: UIColor; actionSheetItemColor: UIColor; actionSheetErrorColor: UIColor; actionSheetButtonFont: UIFont; newMessageFont: UIFont; newMessageTintColor: UIColor; newMessageBackground: UIColor; newMessageHighlighted: UIColor; newMessageButtonTintColor: UIColor; newMessageButtonBackground: UIColor; newMessageButtonHighlighted: UIColor; scrollBottomButtonIconColor: UIColor; scrollBottomButtonBackground: UIColor; scrollBottomButtonHighlighted: UIColor; titleOnlineStateColor: UIColor; titleColor: UIColor; titleFont: UIFont; titleStatusColor: UIColor; titleStatusFont: UIFont; menuTitleFont: UIFont; userPlaceholderBackgroundColor: UIColor; userPlaceholderTintColor: UIColor; reactionBoxBackgroundColor: UIColor; reactionBoxBorderLineColor: UIColor; reactionBoxEmojiCountColor: UIColor; reactionBoxEmojiBackgroundColor: UIColor; reactionBoxSelectedEmojiBackgroundColor: UIColor; reactionBoxEmojiCountFont: UIFont; emojiCountColor: UIColor; emojiSelectedCountColor: UIColor; emojiSelectedUnderlineColor: UIColor; emojiCountFont: UIFont; reactionMenuLineColor: UIColor; emojiListSelectedBackgroundColor: UIColor; addReactionTintColor: UIColor; channelTypeSelectorItemTintColor: UIColor; channelTypeSelectorItemTextColor: UIColor; channelTypeSelectorItemFont: UIFont; broadcastIconBackgroundColor: UIColor; broadcastIconTintColor: UIColor; barItemTintColor: UIColor; loadingBackgroundColor: UIColor; loadingPopupBackgroundColor: UIColor; loadingFont: UIFont; loadingTextColor: UIColor; loadingSpinnerColor: UIColor; });

	initWithEmptyViewBackgroundColorEmptyViewStatusFontEmptyViewStatusTintColorEmptyViewRetryButtonTintColorEmptyViewRetryButtonFontOverlayColorBackgroundColorHighlightedColorButtonTextColorSeparatorColorShadowColorCloseBarButtonTintColorAlertTitleColorAlertTitleFontAlertDetailColorAlertDetailFontAlertPlaceholderColorAlertButtonColorAlertErrorColorAlertButtonFontAlertTextFieldBackgroundColorAlertTextFieldTintColorAlertTextFieldFontActionSheetTextFontActionSheetTextColorActionSheetSubTextFontActionSheetSubTextColorActionSheetItemColorActionSheetErrorColorActionSheetButtonFontNewMessageFontNewMessageTintColorNewMessageBackgroundNewMessageHighlightedNewMessageButtonTintColorNewMessageButtonBackgroundNewMessageButtonHighlightedScrollBottomButtonIconColorScrollBottomButtonBackgroundScrollBottomButtonHighlightedTitleOnlineStateColorTitleColorTitleFontTitleStatusColorTitleStatusFontMenuTitleFontUserPlaceholderBackgroundColorUserPlaceholderTintColorReactionBoxBackgroundColorReactionBoxBorderLineColorReactionBoxEmojiCountColorReactionBoxEmojiBackgroundColorReactionBoxSelectedEmojiBackgroundColorReactionBoxEmojiCountFontEmojiCountColorEmojiSelectedCountColorEmojiSelectedUnderlineColorEmojiCountFontReactionMenuLineColorEmojiListSelectedBackgroundColorAddReactionTintColorChannelTypeSelectorItemTintColorChannelTypeSelectorItemTextColorChannelTypeSelectorItemFontBroadcastIconBackgroundColorBroadcastIconTintColorBarItemTintColorLoadingBackgroundColorLoadingPopupBackgroundColorLoadingFontLoadingTextColorLoadingSpinnerColor(emptyViewBackgroundColor: UIColor, emptyViewStatusFont: UIFont, emptyViewStatusTintColor: UIColor, emptyViewRetryButtonTintColor: UIColor, emptyViewRetryButtonFont: UIFont, overlayColor: UIColor, backgroundColor: UIColor, highlightedColor: UIColor, buttonTextColor: UIColor, separatorColor: UIColor, shadowColor: UIColor, closeBarButtonTintColor: UIColor, alertTitleColor: UIColor, alertTitleFont: UIFont, alertDetailColor: UIColor, alertDetailFont: UIFont, alertPlaceholderColor: UIColor, alertButtonColor: UIColor, alertErrorColor: UIColor, alertButtonFont: UIFont, alertTextFieldBackgroundColor: UIColor, alertTextFieldTintColor: UIColor, alertTextFieldFont: UIFont, actionSheetTextFont: UIFont, actionSheetTextColor: UIColor, actionSheetSubTextFont: UIFont, actionSheetSubTextColor: UIColor, actionSheetItemColor: UIColor, actionSheetErrorColor: UIColor, actionSheetButtonFont: UIFont, newMessageFont: UIFont, newMessageTintColor: UIColor, newMessageBackground: UIColor, newMessageHighlighted: UIColor, newMessageButtonTintColor: UIColor, newMessageButtonBackground: UIColor, newMessageButtonHighlighted: UIColor, scrollBottomButtonIconColor: UIColor, scrollBottomButtonBackground: UIColor, scrollBottomButtonHighlighted: UIColor, titleOnlineStateColor: UIColor, titleColor: UIColor, titleFont: UIFont, titleStatusColor: UIColor, titleStatusFont: UIFont, menuTitleFont: UIFont, userPlaceholderBackgroundColor: UIColor, userPlaceholderTintColor: UIColor, reactionBoxBackgroundColor: UIColor, reactionBoxBorderLineColor: UIColor, reactionBoxEmojiCountColor: UIColor, reactionBoxEmojiBackgroundColor: UIColor, reactionBoxSelectedEmojiBackgroundColor: UIColor, reactionBoxEmojiCountFont: UIFont, emojiCountColor: UIColor, emojiSelectedCountColor: UIColor, emojiSelectedUnderlineColor: UIColor, emojiCountFont: UIFont, reactionMenuLineColor: UIColor, emojiListSelectedBackgroundColor: UIColor, addReactionTintColor: UIColor, channelTypeSelectorItemTintColor: UIColor, channelTypeSelectorItemTextColor: UIColor, channelTypeSelectorItemFont: UIFont, broadcastIconBackgroundColor: UIColor, broadcastIconTintColor: UIColor, barItemTintColor: UIColor, loadingBackgroundColor: UIColor, loadingPopupBackgroundColor: UIColor, loadingFont: UIFont, loadingTextColor: UIColor, loadingSpinnerColor: UIColor): this;
}

declare class SBUContentBaseMessageCell extends SBUBaseMessageCell {

	static alloc(): SBUContentBaseMessageCell; // inherited from NSObject

	static appearance(): SBUContentBaseMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUContentBaseMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUContentBaseMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUContentBaseMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUContentBaseMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUContentBaseMessageCell; // inherited from UIAppearance

	static new(): SBUContentBaseMessageCell; // inherited from NSObject

	contentsStackView: UIStackView;

	profileView: UIView;

	stateView: UIView;

	useReaction: boolean;

	userNameStackView: UIStackView;

	userNameView: UIView;

	onLongPressContentViewWithSender(sender: UILongPressGestureRecognizer): void;

	onTapContentViewWithSender(sender: UITapGestureRecognizer): void;

	onTapProfileImageViewWithSender(sender: UITapGestureRecognizer): void;

	onTapUserProfileViewWithSender(sender: UITapGestureRecognizer): void;

	setMessageGrouping(): void;
}

declare class SBUCoverImageView extends UIView {

	static alloc(): SBUCoverImageView; // inherited from NSObject

	static appearance(): SBUCoverImageView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUCoverImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUCoverImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUCoverImageView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUCoverImageView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUCoverImageView; // inherited from UIAppearance

	static new(): SBUCoverImageView; // inherited from NSObject
}

interface SBUCreateChannelTypeSelectorDelegate {

	didSelectCloseSelector(): void;

	didSelectCreateBroadcastChannel(): void;

	didSelectCreateGroupChannel(): void;

	didSelectCreateSuperGroupChannel(): void;
}
declare var SBUCreateChannelTypeSelectorDelegate: {

	prototype: SBUCreateChannelTypeSelectorDelegate;
};

interface SBUCreateChannelTypeSelectorProtocol {

	dismiss(): void;

	show(): void;
}
declare var SBUCreateChannelTypeSelectorProtocol: {

	prototype: SBUCreateChannelTypeSelectorProtocol;
};

declare class SBUCreateChannelViewController extends SBUBaseViewController implements SBUEmptyViewDelegate, UITableViewDataSource, UITableViewDelegate {

	static alloc(): SBUCreateChannelViewController; // inherited from NSObject

	static new(): SBUCreateChannelViewController; // inherited from NSObject

	readonly channelType: ChannelType;

	emptyView: UIView;

	leftBarButton: UIBarButtonItem;

	rightBarButton: UIBarButtonItem;

	readonly selectedUserList: NSSet<SBUUser>;

	readonly tableView: UITableView;

	theme: SBUUserListTheme;

	titleView: UIView;

	readonly userCell: UITableViewCell;

	readonly userList: NSArray<SBUUser>;

	readonly userListQuery: SBDApplicationUserListQuery;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { users: NSArray<SBUUser> | SBUUser[]; type: ChannelType; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createChannelWithParamsMessageListParams(params: SBDGroupChannelParams, messageListParams: SBDMessageListParams): void;

	createChannelWithUserIds(userIds: NSArray<string> | string[]): void;

	didReceiveError(message: string): void;

	didSelectRetry(): void;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	initWithUsersType(users: NSArray<SBUUser> | SBUUser[], type: ChannelType): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadNextUserListWithResetUsers(reset: boolean, users: NSArray<SBUUser> | SBUUser[]): void;

	nextUserList(): NSArray<SBUUser>;

	numberOfSectionsInTableView(tableView: UITableView): number;

	onClickCreate(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerWithUserCellNib(userCell: UITableViewCell, nib: UINib): void;

	reloadData(): void;

	reloadUserList(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	selectUserWithUser(user: SBUUser): void;

	self(): this;

	shouldDismissLoadingIndicator(): void;

	shouldShowLoadingIndicator(): boolean;

	showLoadingWithState(state: boolean): void;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewContextMenuConfigurationForRowAtIndexPathPoint(tableView: UITableView, indexPath: NSIndexPath, point: CGPoint): UIContextMenuConfiguration;

	tableViewDidBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndMultipleSelectionInteraction(tableView: UITableView): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewPreviewForDismissingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewPreviewForHighlightingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayContextMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillEndContextMenuInteractionWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillPerformPreviewActionForMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class SBUEmojiManager extends NSObject {

	static alloc(): SBUEmojiManager; // inherited from NSObject

	static getAllEmojis(): NSArray<SBDEmoji>;

	static getEmojiCategories(): NSArray<SBDEmojiCategory>;

	static getEmojisWithEmojiCategoryId(emojiCategoryId: number): NSArray<SBDEmoji>;

	static new(): SBUEmojiManager; // inherited from NSObject
}

declare class SBUEmptyView extends UIView {

	static alloc(): SBUEmptyView; // inherited from NSObject

	static appearance(): SBUEmptyView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUEmptyView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUEmptyView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUEmptyView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUEmptyView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUEmptyView; // inherited from UIAppearance

	static new(): SBUEmptyView; // inherited from NSObject

	delegate: SBUEmptyViewDelegate;

	retryButton: UIButton;

	statusImageView: UIImageView;

	statusLabel: UILabel;

	theme: SBUComponentTheme;

	type: EmptyViewType;

	onClickRetry(sender: any): void;

	reloadData(type: EmptyViewType): void;

	setupAutolayout(): void;

	setupStyles(): void;

	setupViews(): void;

	updateViews(): void;
}

interface SBUEmptyViewDelegate extends NSObjectProtocol {

	didSelectRetry(): void;
}
declare var SBUEmptyViewDelegate: {

	prototype: SBUEmptyViewDelegate;
};

declare class SBUFileMessageCell extends SBUContentBaseMessageCell {

	static alloc(): SBUFileMessageCell; // inherited from NSObject

	static appearance(): SBUFileMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUFileMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUFileMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUFileMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUFileMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUFileMessageCell; // inherited from UIAppearance

	static new(): SBUFileMessageCell; // inherited from NSObject

	readonly fileMessage: SBDFileMessage;

	configureWithHighlightInfo(highlightInfo: SBUHighlightMessageInfo): void;
}

declare class SBUFontSet extends NSObject {

	static alloc(): SBUFontSet; // inherited from NSObject

	static new(): SBUFontSet; // inherited from NSObject

	static setBody1(value: UIFont): void;

	static setBody2(value: UIFont): void;

	static setBody3(value: UIFont): void;

	static setButton1(value: UIFont): void;

	static setButton2(value: UIFont): void;

	static setButton3(value: UIFont): void;

	static setCaption1(value: UIFont): void;

	static setCaption2(value: UIFont): void;

	static setCaption3(value: UIFont): void;

	static setCaption4(value: UIFont): void;

	static setH1(value: UIFont): void;

	static setH2(value: UIFont): void;

	static setH3(value: UIFont): void;

	static setSubtitle1(value: UIFont): void;

	static setSubtitle2(value: UIFont): void;

	static body1: UIFont;

	static body2: UIFont;

	static body3: UIFont;

	static button1: UIFont;

	static button2: UIFont;

	static button3: UIFont;

	static caption1: UIFont;

	static caption2: UIFont;

	static caption3: UIFont;

	static caption4: UIFont;

	static h1: UIFont;

	static h2: UIFont;

	static h3: UIFont;

	static subtitle1: UIFont;

	static subtitle2: UIFont;
}

declare class SBUGlobalCustomParams extends NSObject {

	static alloc(): SBUGlobalCustomParams; // inherited from NSObject

	static new(): SBUGlobalCustomParams; // inherited from NSObject

	static setFileMessageParamsSendBuilder(value: (p1: SBDFileMessageParams) => void): void;

	static setGroupChannelParamsCreateBuilder(value: (p1: SBDGroupChannelParams) => void): void;

	static setGroupChannelParamsUpdateBuilder(value: (p1: SBDGroupChannelParams) => void): void;

	static setMessageListParamsBuilder(value: (p1: SBDMessageListParams) => void): void;

	static setOpenChannelParamsUpdateBuilder(value: (p1: SBDOpenChannelParams) => void): void;

	static setUserMessageParamsSendBuilder(value: (p1: SBDUserMessageParams) => void): void;

	static setUserMessageParamsUpdateBuilder(value: (p1: SBDUserMessageParams) => void): void;

	static fileMessageParamsSendBuilder: (p1: SBDFileMessageParams) => void;

	static groupChannelParamsCreateBuilder: (p1: SBDGroupChannelParams) => void;

	static groupChannelParamsUpdateBuilder: (p1: SBDGroupChannelParams) => void;

	static messageListParamsBuilder: (p1: SBDMessageListParams) => void;

	static openChannelParamsUpdateBuilder: (p1: SBDOpenChannelParams) => void;

	static userMessageParamsSendBuilder: (p1: SBDUserMessageParams) => void;

	static userMessageParamsUpdateBuilder: (p1: SBDUserMessageParams) => void;
}

declare class SBUGlobals extends NSObject {

	static alloc(): SBUGlobals; // inherited from NSObject

	static new(): SBUGlobals; // inherited from NSObject

	static setAccessToken(value: string): void;

	static setApplicationId(value: string): void;

	static setCurrentUser(value: SBUUser): void;

	static setImageCompressionRate(value: number): void;

	static setImageResizingSize(value: CGSize): void;

	static setUsingImageCompression(value: boolean): void;

	static setUsingMessageGrouping(value: boolean): void;

	static setUsingUserProfile(value: boolean): void;

	static setUsingUserProfileInOpenChannel(value: boolean): void;

	static AccessToken: string;

	static ApplicationId: string;

	static CurrentUser: SBUUser;

	static UsingImageCompression: boolean;

	static UsingMessageGrouping: boolean;

	static UsingUserProfile: boolean;

	static UsingUserProfileInOpenChannel: boolean;

	static imageCompressionRate: number;

	static imageResizingSize: CGSize;
}

declare class SBUHighlightMessageInfo extends NSObject {

	static alloc(): SBUHighlightMessageInfo; // inherited from NSObject

	static new(): SBUHighlightMessageInfo; // inherited from NSObject

	readonly messageId: number;

	readonly updatedAt: number;

	constructor(o: { messageId: number; updatedAt: number; });

	initWithMessageIdUpdatedAt(messageId: number, updatedAt: number): this;
}

declare class SBUIconSet extends NSObject {

	static alloc(): SBUIconSet; // inherited from NSObject

	static new(): SBUIconSet; // inherited from NSObject

	static restoreDefaultIcons(): void;

	static setIconAdd(value: UIImage): void;

	static setIconBack(value: UIImage): void;

	static setIconBan(value: UIImage): void;

	static setIconBroadcast(value: UIImage): void;

	static setIconCamera(value: UIImage): void;

	static setIconChat(value: UIImage): void;

	static setIconCheckboxChecked(value: UIImage): void;

	static setIconCheckboxUnchecked(value: UIImage): void;

	static setIconChevronDown(value: UIImage): void;

	static setIconChevronRight(value: UIImage): void;

	static setIconClose(value: UIImage): void;

	static setIconCopy(value: UIImage): void;

	static setIconCreate(value: UIImage): void;

	static setIconDelete(value: UIImage): void;

	static setIconDocument(value: UIImage): void;

	static setIconDone(value: UIImage): void;

	static setIconDoneAll(value: UIImage): void;

	static setIconDownload(value: UIImage): void;

	static setIconEdit(value: UIImage): void;

	static setIconEmojiMore(value: UIImage): void;

	static setIconError(value: UIImage): void;

	static setIconFileAudio(value: UIImage): void;

	static setIconFileDocument(value: UIImage): void;

	static setIconFreeze(value: UIImage): void;

	static setIconGif(value: UIImage): void;

	static setIconInfo(value: UIImage): void;

	static setIconLeave(value: UIImage): void;

	static setIconMembers(value: UIImage): void;

	static setIconMessage(value: UIImage): void;

	static setIconModerations(value: UIImage): void;

	static setIconMore(value: UIImage): void;

	static setIconMute(value: UIImage): void;

	static setIconNotificationFilled(value: UIImage): void;

	static setIconNotificationOffFilled(value: UIImage): void;

	static setIconNotifications(value: UIImage): void;

	static setIconOperator(value: UIImage): void;

	static setIconPhoto(value: UIImage): void;

	static setIconPlay(value: UIImage): void;

	static setIconPlus(value: UIImage): void;

	static setIconQuestion(value: UIImage): void;

	static setIconRefresh(value: UIImage): void;

	static setIconRemove(value: UIImage): void;

	static setIconSearch(value: UIImage): void;

	static setIconSend(value: UIImage): void;

	static setIconSpinner(value: UIImage): void;

	static setIconSupergroup(value: UIImage): void;

	static setIconThumbnailNone(value: UIImage): void;

	static setIconUser(value: UIImage): void;

	static iconAdd: UIImage;

	static iconBack: UIImage;

	static iconBan: UIImage;

	static iconBroadcast: UIImage;

	static iconCamera: UIImage;

	static iconChat: UIImage;

	static iconCheckboxChecked: UIImage;

	static iconCheckboxUnchecked: UIImage;

	static iconChevronDown: UIImage;

	static iconChevronRight: UIImage;

	static iconClose: UIImage;

	static iconCopy: UIImage;

	static iconCreate: UIImage;

	static iconDelete: UIImage;

	static iconDocument: UIImage;

	static iconDone: UIImage;

	static iconDoneAll: UIImage;

	static iconDownload: UIImage;

	static iconEdit: UIImage;

	static iconEmojiMore: UIImage;

	static iconError: UIImage;

	static iconFileAudio: UIImage;

	static iconFileDocument: UIImage;

	static iconFreeze: UIImage;

	static iconGif: UIImage;

	static iconInfo: UIImage;

	static iconLeave: UIImage;

	static iconMembers: UIImage;

	static iconMessage: UIImage;

	static iconModerations: UIImage;

	static iconMore: UIImage;

	static iconMute: UIImage;

	static iconNotificationFilled: UIImage;

	static iconNotificationOffFilled: UIImage;

	static iconNotifications: UIImage;

	static iconOperator: UIImage;

	static iconPhoto: UIImage;

	static iconPlay: UIImage;

	static iconPlus: UIImage;

	static iconQuestion: UIImage;

	static iconRefresh: UIImage;

	static iconRemove: UIImage;

	static iconSearch: UIImage;

	static iconSend: UIImage;

	static iconSpinner: UIImage;

	static iconSupergroup: UIImage;

	static iconThumbnailNone: UIImage;

	static iconUser: UIImage;
}

interface SBUInviteUserListDatasource extends NSObjectProtocol {

	nextUserList(): NSArray<SBUUser>;
}
declare var SBUInviteUserListDatasource: {

	prototype: SBUInviteUserListDatasource;
};

declare class SBUInviteUserViewController extends SBUBaseViewController implements SBUInviteUserListDatasource, UITableViewDataSource, UITableViewDelegate {

	static alloc(): SBUInviteUserViewController; // inherited from NSObject

	static new(): SBUInviteUserViewController; // inherited from NSObject

	readonly channel: SBDGroupChannel;

	readonly channelUrl: string;

	readonly inviteListType: ChannelInviteListType;

	readonly joinedUserIds: NSSet<string>;

	leftBarButton: UIBarButtonItem;

	readonly memberListQuery: SBDGroupChannelMemberListQuery;

	rightBarButton: UIBarButtonItem;

	readonly selectedUserList: NSSet<SBUUser>;

	readonly tableView: UITableView;

	theme: SBUUserListTheme;

	titleView: UIView;

	readonly userCell: UITableViewCell;

	readonly userList: NSArray<SBUUser>;

	readonly userListQuery: SBDApplicationUserListQuery;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { channel: SBDGroupChannel; type: ChannelInviteListType; });

	constructor(o: { channelUrl: string; type: ChannelInviteListType; });

	constructor(o: { channelUrl: string; users: NSArray<SBUUser> | SBUUser[]; type: ChannelInviteListType; });

	constructor(o: { channel: SBDGroupChannel; users: NSArray<SBUUser> | SBUUser[]; type: ChannelInviteListType; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didReceiveError(message: string): void;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	initWithChannelType(channel: SBDGroupChannel, type: ChannelInviteListType): this;

	initWithChannelUrlType(channelUrl: string, type: ChannelInviteListType): this;

	initWithChannelUrlUsersType(channelUrl: string, users: NSArray<SBUUser> | SBUUser[], type: ChannelInviteListType): this;

	initWithChannelUsersType(channel: SBDGroupChannel, users: NSArray<SBUUser> | SBUUser[], type: ChannelInviteListType): this;

	inviteUsers(): void;

	inviteUsersWithUserIds(userIds: NSArray<string> | string[]): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadChannelWithChannelUrl(channelUrl: string): void;

	loadNextUserListWithResetUsers(reset: boolean, users: NSArray<SBUUser> | SBUUser[]): void;

	nextUserList(): NSArray<SBUUser>;

	numberOfSectionsInTableView(tableView: UITableView): number;

	onClickInviteOrPromote(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	popToChannel(): void;

	popToPrevious(): void;

	promoteToOperators(): void;

	promoteToOperatorsWithMemberIds(memberIds: NSArray<string> | string[]): void;

	registerWithUserCellNib(userCell: UITableViewCell, nib: UINib): void;

	reloadData(): void;

	resetUserList(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	selectUserWithUser(user: SBUUser): void;

	self(): this;

	shouldDismissLoadingIndicator(): void;

	shouldShowLoadingIndicator(): boolean;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewContextMenuConfigurationForRowAtIndexPathPoint(tableView: UITableView, indexPath: NSIndexPath, point: CGPoint): UIContextMenuConfiguration;

	tableViewDidBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndMultipleSelectionInteraction(tableView: UITableView): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewPreviewForDismissingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewPreviewForHighlightingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayContextMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillEndContextMenuInteractionWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillPerformPreviewActionForMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class SBULoading extends NSObject {

	static alloc(): SBULoading; // inherited from NSObject

	static new(): SBULoading; // inherited from NSObject
}

declare class SBUMain extends NSObject {

	static alloc(): SBUMain; // inherited from NSObject

	static connectWithCompletionHandler(completionHandler: (p1: SBDUser, p2: SBDError) => void): void;

	static connectionCheckWithCompletionHandler(completionHandler: (p1: SBDUser, p2: SBDError) => void): void;

	static createAndMoveToChannelWithParamsMessageListParams(params: SBDGroupChannelParams, messageListParams: SBDMessageListParams): void;

	static createAndMoveToChannelWithUserIdsMessageListParams(userIds: NSArray<string> | string[], messageListParams: SBDMessageListParams): void;

	static disconnectWithCompletionHandler(completionHandler: () => void): void;

	static getUIKitVersion(): string;

	static initializeWithApplicationId(applicationId: string): void;

	static moveToChannelWithChannelUrlBasedOnChannelListMessageListParamsChannelType(channelUrl: string, basedOnChannelList: boolean, messageListParams: SBDMessageListParams, channelType: ChannelType): void;

	static new(): SBUMain; // inherited from NSObject

	static openChannelWithChannelUrlBasedOnChannelListMessageListParams(channelUrl: string, basedOnChannelList: boolean, messageListParams: SBDMessageListParams): void;

	static registerPushWithDeviceTokenCompletionHandler(deviceToken: NSData, completionHandler: (p1: boolean) => void): void;

	static setLogLevel(type: LogType): void;

	static shortVersionString(): string;

	static unregisterAllPushTokenWithCompletionHandler(completionHandler: (p1: boolean) => void): void;

	static unregisterPushTokenWithCompletionHandler(completionHandler: (p1: boolean) => void): void;

	static updateUserInfoWithNicknameProfileImageCompletionHandler(nickname: string, profileImage: NSData, completionHandler: (p1: SBDError) => void): void;

	static updateUserInfoWithNicknameProfileUrlCompletionHandler(nickname: string, profileUrl: string, completionHandler: (p1: SBDError) => void): void;

	static versionString(): string;
}

declare class SBUMemberListViewController extends SBUBaseViewController implements SBDChannelDelegate, SBUEmptyViewDelegate, SBUUserProfileViewDelegate, UITableViewDataSource, UITableViewDelegate {

	static alloc(): SBUMemberListViewController; // inherited from NSObject

	static new(): SBUMemberListViewController; // inherited from NSObject

	readonly bannedMemberListQuery: SBDBannedUserListQuery;

	readonly channel: SBDBaseChannel;

	readonly channelUrl: string;

	componentTheme: SBUComponentTheme;

	emptyView: UIView;

	leftBarButton: UIBarButtonItem;

	readonly memberList: NSArray<SBUUser>;

	readonly memberListQuery: SBDGroupChannelMemberListQuery;

	readonly memberListType: ChannelMemberListType;

	readonly mutedMemberListQuery: SBDGroupChannelMemberListQuery;

	readonly operatorListQuery: SBDOperatorListQuery;

	readonly participantListQuery: SBDParticipantListQuery;

	rightBarButton: UIBarButtonItem;

	readonly tableView: UITableView;

	theme: SBUUserListTheme;

	titleView: UIView;

	readonly userCell: UITableViewCell;

	userProfileView: UIView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { channel: SBDBaseChannel; members: NSArray<SBUUser> | SBUUser[]; type: ChannelMemberListType; });

	constructor(o: { channel: SBDBaseChannel; type: ChannelMemberListType; });

	constructor(o: { channelUrl: string; channelType: SBDChannelType; memberListType: ChannelMemberListType; });

	constructor(o: { channelUrl: string; channelType: SBDChannelType; members: NSArray<SBUUser> | SBUUser[]; memberListType: ChannelMemberListType; });

	constructor(o: { channelUrl: string; members: NSArray<SBUUser> | SBUUser[]; type: ChannelMemberListType; });

	constructor(o: { channelUrl: string; type: ChannelMemberListType; });

	banWithMember(member: SBUUser): void;

	channelCreatedMetaCounters(sender: SBDBaseChannel, createdMetaCounters: NSDictionary<string, number>): void;

	channelCreatedMetaData(sender: SBDBaseChannel, createdMetaData: NSDictionary<string, string>): void;

	channelDeletedMetaCountersKeys(sender: SBDBaseChannel, deletedMetaCountersKeys: NSArray<string> | string[]): void;

	channelDeletedMetaDataKeys(sender: SBDBaseChannel, deletedMetaDataKeys: NSArray<string> | string[]): void;

	channelDidChangeMemberCount(channels: NSArray<SBDGroupChannel> | SBDGroupChannel[]): void;

	channelDidChangeParticipantCount(channels: NSArray<SBDOpenChannel> | SBDOpenChannel[]): void;

	channelDidDeclineInvitationInviter(sender: SBDGroupChannel, invitee: SBDUser, inviter: SBDUser): void;

	channelDidReceiveInvitationInviter(sender: SBDGroupChannel, invitees: NSArray<SBDUser> | SBDUser[], inviter: SBDUser): void;

	channelDidReceiveMention(channel: SBDBaseChannel, message: SBDBaseMessage): void;

	channelDidReceiveMessage(sender: SBDBaseChannel, message: SBDBaseMessage): void;

	channelDidUpdateDeliveryReceipt(sender: SBDGroupChannel): void;

	channelDidUpdateMessage(sender: SBDBaseChannel, message: SBDBaseMessage): void;

	channelDidUpdateOperators(sender: SBDBaseChannel): void;

	channelDidUpdateReadReceipt(sender: SBDGroupChannel): void;

	channelDidUpdateThreadInfo(channel: SBDBaseChannel, threadInfoUpdateEvent: SBDThreadInfoUpdateEvent): void;

	channelDidUpdateTypingStatus(sender: SBDGroupChannel): void;

	channelMessageWasDeleted(sender: SBDBaseChannel, messageId: number): void;

	channelUpdatedMetaCounters(sender: SBDBaseChannel, updatedMetaCounters: NSDictionary<string, number>): void;

	channelUpdatedMetaData(sender: SBDBaseChannel, updatedMetaData: NSDictionary<string, string>): void;

	channelUpdatedReaction(sender: SBDBaseChannel, reactionEvent: SBDReactionEvent): void;

	channelUserDidEnter(sender: SBDOpenChannel, user: SBDUser): void;

	channelUserDidExit(sender: SBDOpenChannel, user: SBDUser): void;

	channelUserDidJoin(sender: SBDGroupChannel, user: SBDUser): void;

	channelUserDidLeave(sender: SBDGroupChannel, user: SBDUser): void;

	channelUserWasBanned(sender: SBDBaseChannel, user: SBDUser): void;

	channelUserWasMuted(sender: SBDBaseChannel, user: SBDUser): void;

	channelUserWasUnbanned(sender: SBDBaseChannel, user: SBDUser): void;

	channelUserWasUnmuted(sender: SBDBaseChannel, user: SBDUser): void;

	channelWasChanged(sender: SBDBaseChannel): void;

	channelWasDeletedChannelType(channelUrl: string, channelType: SBDChannelType): void;

	channelWasFrozen(sender: SBDBaseChannel): void;

	channelWasHidden(sender: SBDGroupChannel): void;

	channelWasUnfrozen(sender: SBDBaseChannel): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didReceiveError(message: string): void;

	didSelectClose(): void;

	didSelectMessageWithUserId(userId: string): void;

	didSelectRetry(): void;

	dismissOperatorWithMember(member: SBUUser): void;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	initWithChannelMembersType(channel: SBDBaseChannel, members: NSArray<SBUUser> | SBUUser[], type: ChannelMemberListType): this;

	initWithChannelType(channel: SBDBaseChannel, type: ChannelMemberListType): this;

	initWithChannelUrlChannelTypeMemberListType(channelUrl: string, channelType: SBDChannelType, memberListType: ChannelMemberListType): this;

	initWithChannelUrlChannelTypeMembersMemberListType(channelUrl: string, channelType: SBDChannelType, members: NSArray<SBUUser> | SBUUser[], memberListType: ChannelMemberListType): this;

	initWithChannelUrlMembersType(channelUrl: string, members: NSArray<SBUUser> | SBUUser[], type: ChannelMemberListType): this;

	initWithChannelUrlType(channelUrl: string, type: ChannelMemberListType): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadChannelWithChannelUrl(channelUrl: string): void;

	loadMembers(): void;

	loadNextMemberListWithResetMembers(reset: boolean, members: NSArray<SBUUser> | SBUUser[]): void;

	muteWithMember(member: SBUUser): void;

	nextMemberList(): NSArray<SBUUser>;

	numberOfSectionsInTableView(tableView: UITableView): number;

	onClickInviteUser(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	promoteToOperatorWithMember(member: SBUUser): void;

	registerWithUserCellNib(userCell: UITableViewCell, nib: UINib): void;

	reloadData(): void;

	reloadMemberList(): void;

	resetMemberList(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	setMoreMenuActionHandler(member: SBUUser): void;

	setUserProfileTapGestureHandler(user: SBUUser): void;

	shouldDismissLoadingIndicator(): void;

	shouldShowLoadingIndicator(): boolean;

	showInviteUser(): void;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewContextMenuConfigurationForRowAtIndexPathPoint(tableView: UITableView, indexPath: NSIndexPath, point: CGPoint): UIContextMenuConfiguration;

	tableViewDidBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndMultipleSelectionInteraction(tableView: UITableView): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewPreviewForDismissingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewPreviewForHighlightingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayContextMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillEndContextMenuInteractionWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillPerformPreviewActionForMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	unbanWithMember(member: SBUUser): void;

	unmuteWithMember(member: SBUUser): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class SBUMessageCellTheme extends NSObject {

	static alloc(): SBUMessageCellTheme; // inherited from NSObject

	static new(): SBUMessageCellTheme; // inherited from NSObject

	adminMessageFont: UIFont;

	adminMessageTextColor: UIColor;

	backgroundColor: UIColor;

	contentBackgroundColor: UIColor;

	currentUserNameTextColor: UIColor;

	dateBackgroundColor: UIColor;

	dateFont: UIFont;

	dateTextColor: UIColor;

	deliveryReceiptStateColor: UIColor;

	failedStateColor: UIColor;

	fileIconBackgroundColor: UIColor;

	fileIconColor: UIColor;

	fileImageBackgroundColor: UIColor;

	fileImageIconColor: UIColor;

	fileMessageLeftTextColor: UIColor;

	fileMessageNameFont: UIFont;

	fileMessagePlaceholderColor: UIColor;

	fileMessageRightTextColor: UIColor;

	leftBackgroundColor: UIColor;

	leftPressedBackgroundColor: UIColor;

	linkColor: UIColor;

	messageLeftHighlightTextColor: UIColor;

	messageRightHighlightTextColor: UIColor;

	ogDescriptionColor: UIColor;

	ogDescriptionFont: UIFont;

	ogTitleColor: UIColor;

	ogTitleFont: UIFont;

	ogURLAddressColor: UIColor;

	ogURLAddressFont: UIFont;

	openChannelBackgroundColor: UIColor;

	openChannelPressedBackgroundColor: UIColor;

	pendingStateColor: UIColor;

	pressedContentBackgroundColor: UIColor;

	readReceiptStateColor: UIColor;

	rightBackgroundColor: UIColor;

	rightPressedBackgroundColor: UIColor;

	succeededStateColor: UIColor;

	timeFont: UIFont;

	timeTextColor: UIColor;

	unknownMessageDescFont: UIFont;

	unknownMessageDescTextColor: UIColor;

	userMessageFont: UIFont;

	userMessageLeftEditTextColor: UIColor;

	userMessageLeftTextColor: UIColor;

	userMessageRightEditTextColor: UIColor;

	userMessageRightTextColor: UIColor;

	userNameFont: UIFont;

	userNameTextColor: UIColor;

	userPlaceholderBackgroundColor: UIColor;

	userPlaceholderTintColor: UIColor;

	static readonly dark: SBUMessageCellTheme;

	static readonly light: SBUMessageCellTheme;

	static readonly overlay: SBUMessageCellTheme;

	constructor(o: { backgroundColor: UIColor; leftBackgroundColor: UIColor; leftPressedBackgroundColor: UIColor; rightBackgroundColor: UIColor; rightPressedBackgroundColor: UIColor; openChannelBackgroundColor: UIColor; openChannelPressedBackgroundColor: UIColor; dateFont: UIFont; dateTextColor: UIColor; dateBackgroundColor: UIColor; userPlaceholderBackgroundColor: UIColor; userPlaceholderTintColor: UIColor; userNameFont: UIFont; userNameTextColor: UIColor; currentUserNameTextColor: UIColor; timeFont: UIFont; timeTextColor: UIColor; pendingStateColor: UIColor; failedStateColor: UIColor; succeededStateColor: UIColor; readReceiptStateColor: UIColor; deliveryReceiptStateColor: UIColor; userMessageFont: UIFont; userMessageLeftTextColor: UIColor; userMessageLeftEditTextColor: UIColor; userMessageLeftHighlightTextColor: UIColor; userMessageRightTextColor: UIColor; userMessageRightEditTextColor: UIColor; userMessageRightHighlightTextColor: UIColor; fileIconBackgroundColor: UIColor; fileImageBackgroundColor: UIColor; fileImageIconColor: UIColor; fileIconColor: UIColor; fileMessageNameFont: UIFont; fileMessageLeftTextColor: UIColor; fileMessageRightTextColor: UIColor; fileMessagePlaceholderColor: UIColor; adminMessageFont: UIFont; adminMessageTextColor: UIColor; unknownMessageDescFont: UIFont; unknownMessageDescTextColor: UIColor; ogTitleFont: UIFont; ogTitleColor: UIColor; ogDescriptionFont: UIFont; ogDescriptionColor: UIColor; ogURLAddressFont: UIFont; ogURLAddressColor: UIColor; linkColor: UIColor; contentBackgroundColor: UIColor; pressedContentBackgroundColor: UIColor; });

	initWithBackgroundColorLeftBackgroundColorLeftPressedBackgroundColorRightBackgroundColorRightPressedBackgroundColorOpenChannelBackgroundColorOpenChannelPressedBackgroundColorDateFontDateTextColorDateBackgroundColorUserPlaceholderBackgroundColorUserPlaceholderTintColorUserNameFontUserNameTextColorCurrentUserNameTextColorTimeFontTimeTextColorPendingStateColorFailedStateColorSucceededStateColorReadReceiptStateColorDeliveryReceiptStateColorUserMessageFontUserMessageLeftTextColorUserMessageLeftEditTextColorUserMessageLeftHighlightTextColorUserMessageRightTextColorUserMessageRightEditTextColorUserMessageRightHighlightTextColorFileIconBackgroundColorFileImageBackgroundColorFileImageIconColorFileIconColorFileMessageNameFontFileMessageLeftTextColorFileMessageRightTextColorFileMessagePlaceholderColorAdminMessageFontAdminMessageTextColorUnknownMessageDescFontUnknownMessageDescTextColorOgTitleFontOgTitleColorOgDescriptionFontOgDescriptionColorOgURLAddressFontOgURLAddressColorLinkColorContentBackgroundColorPressedContentBackgroundColor(backgroundColor: UIColor, leftBackgroundColor: UIColor, leftPressedBackgroundColor: UIColor, rightBackgroundColor: UIColor, rightPressedBackgroundColor: UIColor, openChannelBackgroundColor: UIColor, openChannelPressedBackgroundColor: UIColor, dateFont: UIFont, dateTextColor: UIColor, dateBackgroundColor: UIColor, userPlaceholderBackgroundColor: UIColor, userPlaceholderTintColor: UIColor, userNameFont: UIFont, userNameTextColor: UIColor, currentUserNameTextColor: UIColor, timeFont: UIFont, timeTextColor: UIColor, pendingStateColor: UIColor, failedStateColor: UIColor, succeededStateColor: UIColor, readReceiptStateColor: UIColor, deliveryReceiptStateColor: UIColor, userMessageFont: UIFont, userMessageLeftTextColor: UIColor, userMessageLeftEditTextColor: UIColor, userMessageLeftHighlightTextColor: UIColor, userMessageRightTextColor: UIColor, userMessageRightEditTextColor: UIColor, userMessageRightHighlightTextColor: UIColor, fileIconBackgroundColor: UIColor, fileImageBackgroundColor: UIColor, fileImageIconColor: UIColor, fileIconColor: UIColor, fileMessageNameFont: UIFont, fileMessageLeftTextColor: UIColor, fileMessageRightTextColor: UIColor, fileMessagePlaceholderColor: UIColor, adminMessageFont: UIFont, adminMessageTextColor: UIColor, unknownMessageDescFont: UIFont, unknownMessageDescTextColor: UIColor, ogTitleFont: UIFont, ogTitleColor: UIColor, ogDescriptionFont: UIFont, ogDescriptionColor: UIColor, ogURLAddressFont: UIFont, ogURLAddressColor: UIColor, linkColor: UIColor, contentBackgroundColor: UIColor, pressedContentBackgroundColor: UIColor): this;
}

declare class SBUMessageInputTheme extends NSObject {

	static alloc(): SBUMessageInputTheme; // inherited from NSObject

	static new(): SBUMessageInputTheme; // inherited from NSObject

	backgroundColor: UIColor;

	buttonDisabledTintColor: UIColor;

	buttonTintColor: UIColor;

	cancelButtonFont: UIFont;

	saveButtonFont: UIFont;

	saveButtonTextColor: UIColor;

	textFieldBackgroundColor: UIColor;

	textFieldBorderColor: UIColor;

	textFieldDisabledColor: UIColor;

	textFieldPlaceholderColor: UIColor;

	textFieldPlaceholderFont: UIFont;

	textFieldTextColor: UIColor;

	textFieldTintColor: UIColor;

	static readonly dark: SBUMessageInputTheme;

	static readonly light: SBUMessageInputTheme;

	static readonly overlay: SBUMessageInputTheme;

	constructor(o: { backgroundColor: UIColor; textFieldBackgroundColor: UIColor; textFieldPlaceholderColor: UIColor; textFieldPlaceholderFont: UIFont; textFieldDisabledColor: UIColor; textFieldTintColor: UIColor; textFieldTextColor: UIColor; textFieldBorderColor: UIColor; buttonTintColor: UIColor; buttonDisabledTintColor: UIColor; cancelButtonFont: UIFont; saveButtonFont: UIFont; saveButtonTextColor: UIColor; });

	initWithBackgroundColorTextFieldBackgroundColorTextFieldPlaceholderColorTextFieldPlaceholderFontTextFieldDisabledColorTextFieldTintColorTextFieldTextColorTextFieldBorderColorButtonTintColorButtonDisabledTintColorCancelButtonFontSaveButtonFontSaveButtonTextColor(backgroundColor: UIColor, textFieldBackgroundColor: UIColor, textFieldPlaceholderColor: UIColor, textFieldPlaceholderFont: UIFont, textFieldDisabledColor: UIColor, textFieldTintColor: UIColor, textFieldTextColor: UIColor, textFieldBorderColor: UIColor, buttonTintColor: UIColor, buttonDisabledTintColor: UIColor, cancelButtonFont: UIFont, saveButtonFont: UIFont, saveButtonTextColor: UIColor): this;
}

declare class SBUMessageInputView extends UIView implements SBUActionSheetDelegate, UITextViewDelegate {

	static alloc(): SBUMessageInputView; // inherited from NSObject

	static appearance(): SBUMessageInputView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUMessageInputView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUMessageInputView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUMessageInputView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUMessageInputView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUMessageInputView; // inherited from UIAppearance

	static new(): SBUMessageInputView; // inherited from NSObject

	addButton: UIButton;

	cancelButton: UIButton;

	editView: UIView;

	inputHStackView: UIStackView;

	layoutInsets: UIEdgeInsets;

	placeholderLabel: UILabel;

	saveButton: UIButton;

	sendButton: UIButton;

	showsSendButton: boolean;

	textView: UITextView;

	textViewLeadingSpacing: number;

	textViewMaxHeight: number;

	textViewMinHeight: number;

	textViewTrailingSpacing: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didSelectActionSheetItemWithIndexIdentifier(index: number, identifier: number): void;

	endEditMode(): void;

	endTypingMode(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	onClickAddButton(sender: any): void;

	onClickCancelButton(sender: any): void;

	onClickSaveButton(sender: any): void;

	onClickSendButton(sender: any): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	setErrorState(): void;

	setFrozenModeState(isFrozen: boolean): void;

	setMutedModeState(isMuted: boolean): void;

	setupAutolayout(): void;

	setupStyles(): void;

	setupTextViewHeightWithTextView(textView: UIView): void;

	setupViews(): void;

	startEditModeWithText(text: string): void;

	textViewDidBeginEditing(textView: UITextView): void;

	textViewDidChange(textView: UITextView): void;

	textViewDidChangeSelection(textView: UITextView): void;

	textViewDidEndEditing(textView: UITextView): void;

	textViewShouldBeginEditing(textView: UITextView): boolean;

	textViewShouldChangeTextInRangeReplacementText(textView: UITextView, range: NSRange, text: string): boolean;

	textViewShouldEndEditing(textView: UITextView): boolean;

	textViewShouldInteractWithTextAttachmentInRange(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange): boolean;

	textViewShouldInteractWithTextAttachmentInRangeInteraction(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	textViewShouldInteractWithURLInRange(textView: UITextView, URL: NSURL, characterRange: NSRange): boolean;

	textViewShouldInteractWithURLInRangeInteraction(textView: UITextView, URL: NSURL, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	updateTextViewHeight(): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface SBUMessageInputViewDelegate extends NSObjectProtocol {

	messageInputViewDidEndTyping?(): void;

	messageInputViewDidSelectEdit?(messageInputView: SBUMessageInputView, text: string): void;

	messageInputViewDidSelectResource?(messageInputView: SBUMessageInputView, type: MediaResourceType): void;

	messageInputViewDidSelectSend?(messageInputView: SBUMessageInputView, text: string): void;

	messageInputViewDidStartTyping?(): void;
}
declare var SBUMessageInputViewDelegate: {

	prototype: SBUMessageInputViewDelegate;
};

declare class SBUMessageProfileView extends UIView {

	static alloc(): SBUMessageProfileView; // inherited from NSObject

	static appearance(): SBUMessageProfileView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUMessageProfileView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUMessageProfileView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUMessageProfileView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUMessageProfileView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUMessageProfileView; // inherited from UIAppearance

	static new(): SBUMessageProfileView; // inherited from NSObject
}

declare const enum SBUMessageReceiptState {

	None = 0,

	ReadReceipt = 1,

	DeliveryReceipt = 2
}

declare class SBUMessageSearchResultCell extends UITableViewCell {

	static alloc(): SBUMessageSearchResultCell; // inherited from NSObject

	static appearance(): SBUMessageSearchResultCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUMessageSearchResultCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUMessageSearchResultCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUMessageSearchResultCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUMessageSearchResultCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUMessageSearchResultCell; // inherited from UIAppearance

	static new(): SBUMessageSearchResultCell; // inherited from NSObject

	readonly coverImage: SBUCoverImageView;

	readonly createdAtLabel: UILabel;

	readonly fileMessageIcon: UIImageView;

	readonly fileMessageLabel: UILabel;

	readonly fileStackView: UIStackView;

	readonly messageLabel: UILabel;

	readonly separatorLine: UIView;

	theme: SBUMessageSearchResultCellTheme;

	readonly titleLabel: UILabel;

	configureWithMessage(message: SBDBaseMessage): void;

	setupActions(): void;

	setupAutolayout(): void;

	setupFileIcon(): void;

	setupStyles(): void;

	setupViews(): void;
}

declare class SBUMessageSearchResultCellTheme extends NSObject {

	static alloc(): SBUMessageSearchResultCellTheme; // inherited from NSObject

	static new(): SBUMessageSearchResultCellTheme; // inherited from NSObject

	backgroundColor: UIColor;

	descriptionFont: UIFont;

	descriptionTextColor: UIColor;

	fileMessageFont: UIFont;

	fileMessageIconBackgroundColor: UIColor;

	fileMessageIconTintColor: UIColor;

	fileMessageTextColor: UIColor;

	separatorLineColor: UIColor;

	titleFont: UIFont;

	titleTextColor: UIColor;

	updatedAtFont: UIFont;

	updatedAtTextColor: UIColor;

	static readonly dark: SBUMessageSearchResultCellTheme;

	static readonly light: SBUMessageSearchResultCellTheme;

	constructor(o: { backgroundColor: UIColor; titleFont: UIFont; titleTextColor: UIColor; descriptionFont: UIFont; descriptionTextColor: UIColor; updatedAtFont: UIFont; updatedAtTextColor: UIColor; fileMessageFont: UIFont; fileMessageTextColor: UIColor; fileMessageIconBackgroundColor: UIColor; fileMessageIconTinkColor: UIColor; separatorLineColor: UIColor; });

	initWithBackgroundColorTitleFontTitleTextColorDescriptionFontDescriptionTextColorUpdatedAtFontUpdatedAtTextColorFileMessageFontFileMessageTextColorFileMessageIconBackgroundColorFileMessageIconTinkColorSeparatorLineColor(backgroundColor: UIColor, titleFont: UIFont, titleTextColor: UIColor, descriptionFont: UIFont, descriptionTextColor: UIColor, updatedAtFont: UIFont, updatedAtTextColor: UIColor, fileMessageFont: UIFont, fileMessageTextColor: UIColor, fileMessageIconBackgroundColor: UIColor, fileMessageIconTinkColor: UIColor, separatorLineColor: UIColor): this;
}

declare class SBUMessageSearchTheme extends NSObject {

	static alloc(): SBUMessageSearchTheme; // inherited from NSObject

	static new(): SBUMessageSearchTheme; // inherited from NSObject

	backgroundColor: UIColor;

	cancelButtonTintColor: UIColor;

	clearIconTintColor: UIColor;

	navigationBarShadowColor: UIColor;

	navigationBarStyle: UIBarStyle;

	navigationBarTintColor: UIColor;

	searchIconTintColor: UIColor;

	searchPlaceholderColor: UIColor;

	searchTextBackgroundColor: UIColor;

	searchTextColor: UIColor;

	searchTextFont: UIFont;

	statusBarStyle: UIStatusBarStyle;

	static readonly dark: SBUMessageSearchTheme;

	static readonly light: SBUMessageSearchTheme;

	constructor(o: { statusBarStyle: UIStatusBarStyle; navigationBarStyle: UIBarStyle; navigationBarTintColor: UIColor; navigationBarShadowColor: UIColor; backgroundColor: UIColor; searchTextColor: UIColor; searchTextFont: UIFont; searchTextBackgroundColor: UIColor; searchPlaceholderColor: UIColor; searchIconTintColor: UIColor; clearIconTintColor: UIColor; cancelButtonTintColor: UIColor; });

	initWithStatusBarStyleNavigationBarStyleNavigationBarTintColorNavigationBarShadowColorBackgroundColorSearchTextColorSearchTextFontSearchTextBackgroundColorSearchPlaceholderColorSearchIconTintColorClearIconTintColorCancelButtonTintColor(statusBarStyle: UIStatusBarStyle, navigationBarStyle: UIBarStyle, navigationBarTintColor: UIColor, navigationBarShadowColor: UIColor, backgroundColor: UIColor, searchTextColor: UIColor, searchTextFont: UIFont, searchTextBackgroundColor: UIColor, searchPlaceholderColor: UIColor, searchIconTintColor: UIColor, clearIconTintColor: UIColor, cancelButtonTintColor: UIColor): this;
}

declare class SBUMessageSearchViewController extends SBUBaseViewController implements SBUEmptyViewDelegate, UISearchBarDelegate, UITableViewDataSource, UITableViewDelegate {

	static alloc(): SBUMessageSearchViewController; // inherited from NSObject

	static new(): SBUMessageSearchViewController; // inherited from NSObject

	channel: SBDBaseChannel;

	customMessageSearchQueryBuilder: (p1: SBDMessageSearchQueryBuilder) => void;

	readonly emptyView: UIView;

	messageListParams: SBDMessageListParams;

	messageSearchResultCell: SBUMessageSearchResultCell;

	readonly searchBar: UIView;

	readonly searchResultList: NSArray<SBDBaseMessage>;

	readonly tableView: UITableView;

	theme: SBUMessageSearchTheme;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { channel: SBDBaseChannel; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didReceiveError(message: string): void;

	didSelectRetry(): void;

	enterChannelWithHighlightInfoMessageListParams(message: SBDBaseMessage, highlightInfo: SBUHighlightMessageInfo, messageListParams: SBDMessageListParams): void;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	initWithChannel(channel: SBDBaseChannel): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	messageAt(indexPath: NSIndexPath): SBDBaseMessage;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	positionForBar(bar: UIBarPositioning): UIBarPosition;

	registerWithMessageSearchResultCellNib(messageSearchResultCell: SBUMessageSearchResultCell, nib: UINib): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	searchBarBookmarkButtonClicked(searchBar: UISearchBar): void;

	searchBarCancelButtonClicked(searchBar: UISearchBar): void;

	searchBarResultsListButtonClicked(searchBar: UISearchBar): void;

	searchBarSearchButtonClicked(searchBar: UISearchBar): void;

	searchBarSelectedScopeButtonIndexDidChange(searchBar: UISearchBar, selectedScope: number): void;

	searchBarShouldBeginEditing(searchBar: UISearchBar): boolean;

	searchBarShouldChangeTextInRangeReplacementText(searchBar: UISearchBar, range: NSRange, text: string): boolean;

	searchBarShouldEndEditing(searchBar: UISearchBar): boolean;

	searchBarTextDidBeginEditing(searchBar: UISearchBar): void;

	searchBarTextDidChange(searchBar: UISearchBar, searchText: string): void;

	searchBarTextDidEndEditing(searchBar: UISearchBar): void;

	searchWithKeyword(keyword: string): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	setupSearchBarStyleWithSearchBar(searchBar: UISearchBar): void;

	shouldDismissLoadingIndicator(): void;

	shouldShowLoadingIndicator(): boolean;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewContextMenuConfigurationForRowAtIndexPathPoint(tableView: UITableView, indexPath: NSIndexPath, point: CGPoint): UIContextMenuConfiguration;

	tableViewDidBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndMultipleSelectionInteraction(tableView: UITableView): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewPreviewForDismissingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewPreviewForHighlightingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayContextMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillEndContextMenuInteractionWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillPerformPreviewActionForMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class SBUMessageStateView extends UIView {

	static alloc(): SBUMessageStateView; // inherited from NSObject

	static appearance(): SBUMessageStateView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUMessageStateView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUMessageStateView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUMessageStateView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUMessageStateView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUMessageStateView; // inherited from UIAppearance

	static new(): SBUMessageStateView; // inherited from NSObject
}

declare class SBUModerationsViewController extends SBUBaseViewController implements UITableViewDataSource, UITableViewDelegate {

	static alloc(): SBUModerationsViewController; // inherited from NSObject

	static new(): SBUModerationsViewController; // inherited from NSObject

	readonly channel: SBDGroupChannel;

	readonly channelUrl: string;

	leftBarButton: UIBarButtonItem;

	rightBarButton: UIBarButtonItem;

	readonly tableView: UITableView;

	theme: SBUChannelSettingsTheme;

	titleView: UIView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { channel: SBDGroupChannel; });

	constructor(o: { channelUrl: string; });

	changeFreeze(freeze: boolean, completionHandler: (p1: boolean) => void): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didReceiveError(message: string): void;

	freezeChannelWithCompletionHandler(completionHandler: (p1: boolean) => void): void;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	initWithChannel(channel: SBDGroupChannel): this;

	initWithChannelUrl(channelUrl: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadChannelWithChannelUrl(channelUrl: string): void;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	shouldDismissLoadingIndicator(): void;

	shouldShowLoadingIndicator(): boolean;

	showBannedMeberList(): void;

	showBannedMemberList(): void;

	showMutedMeberList(): void;

	showMutedMemberList(): void;

	showOperatorList(): void;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewContextMenuConfigurationForRowAtIndexPathPoint(tableView: UITableView, indexPath: NSIndexPath, point: CGPoint): UIContextMenuConfiguration;

	tableViewDidBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndMultipleSelectionInteraction(tableView: UITableView): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewPreviewForDismissingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewPreviewForHighlightingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayContextMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillEndContextMenuInteractionWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillPerformPreviewActionForMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	unfreezeChannelWithCompletionHandler(completionHandler: (p1: boolean) => void): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class SBUNavigationTitleView extends UIView {

	static alloc(): SBUNavigationTitleView; // inherited from NSObject

	static appearance(): SBUNavigationTitleView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUNavigationTitleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUNavigationTitleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUNavigationTitleView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUNavigationTitleView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUNavigationTitleView; // inherited from UIAppearance

	static new(): SBUNavigationTitleView; // inherited from NSObject

	text: string;

	textAlignment: NSTextAlignment;

	setupAutolayout(): void;

	setupStyles(): void;

	setupViews(): void;
}

declare class SBUNewMessageInfo extends UIView {

	static alloc(): SBUNewMessageInfo; // inherited from NSObject

	static appearance(): SBUNewMessageInfo; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUNewMessageInfo; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUNewMessageInfo; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUNewMessageInfo; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUNewMessageInfo; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUNewMessageInfo; // inherited from UIAppearance

	static new(): SBUNewMessageInfo; // inherited from NSObject

	onClickNewMessageInfo(): void;
}

declare class SBUOpenChannelAdminMessageCell extends SBUOpenChannelBaseMessageCell {

	static alloc(): SBUOpenChannelAdminMessageCell; // inherited from NSObject

	static appearance(): SBUOpenChannelAdminMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUOpenChannelAdminMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUOpenChannelAdminMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUOpenChannelAdminMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUOpenChannelAdminMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUOpenChannelAdminMessageCell; // inherited from UIAppearance

	static new(): SBUOpenChannelAdminMessageCell; // inherited from NSObject

	baseView: UIView;

	messageLabel: UILabel;

	configureHideDateViewIsOverlay(message: SBDAdminMessage, hideDateView: boolean, isOverlay: boolean): void;
}

declare class SBUOpenChannelBaseMessageCell extends UITableViewCell {

	static alloc(): SBUOpenChannelBaseMessageCell; // inherited from NSObject

	static appearance(): SBUOpenChannelBaseMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUOpenChannelBaseMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUOpenChannelBaseMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUOpenChannelBaseMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUOpenChannelBaseMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUOpenChannelBaseMessageCell; // inherited from UIAppearance

	static new(): SBUOpenChannelBaseMessageCell; // inherited from NSObject

	dateView: UIView;

	groupPosition: MessageGroupPosition;

	message: SBDBaseMessage;

	messageContentView: UIView;

	theme: SBUMessageCellTheme;

	configureWithMessageHideDateViewGroupPositionIsOverlay(message: SBDBaseMessage, hideDateView: boolean, groupPosition: MessageGroupPosition, isOverlay: boolean): void;

	setupActions(): void;

	setupAutolayout(): void;

	setupStyles(): void;

	setupViews(): void;
}

declare class SBUOpenChannelContentBaseMessageCell extends SBUOpenChannelBaseMessageCell {

	static alloc(): SBUOpenChannelContentBaseMessageCell; // inherited from NSObject

	static appearance(): SBUOpenChannelContentBaseMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUOpenChannelContentBaseMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUOpenChannelContentBaseMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUOpenChannelContentBaseMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUOpenChannelContentBaseMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUOpenChannelContentBaseMessageCell; // inherited from UIAppearance

	static new(): SBUOpenChannelContentBaseMessageCell; // inherited from NSObject

	baseStackView: UIStackView;

	contentsStackView: UIStackView;

	infoStackView: UIStackView;

	isFileType: boolean;

	isWebType: boolean;

	mainContainerView: UIView;

	messageTimeLabel: UILabel;

	profileView: UIView;

	stateImageView: UIImageView;

	userNameView: UIView;

	configureHideDateViewGroupPositionIsOverlay(message: SBDBaseMessage, hideDateView: boolean, groupPosition: MessageGroupPosition, isOverlay: boolean): void;

	onLongPressContentViewWithSender(sender: UILongPressGestureRecognizer): void;

	onTapContentViewWithSender(sender: UITapGestureRecognizer): void;

	onTapUserProfileViewWithSender(sender: UITapGestureRecognizer): void;

	setMessageGrouping(): void;

	setUsernameColor(color: UIColor): void;
}

declare class SBUOpenChannelFileMessageCell extends SBUOpenChannelContentBaseMessageCell {

	static alloc(): SBUOpenChannelFileMessageCell; // inherited from NSObject

	static appearance(): SBUOpenChannelFileMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUOpenChannelFileMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUOpenChannelFileMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUOpenChannelFileMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUOpenChannelFileMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUOpenChannelFileMessageCell; // inherited from UIAppearance

	static new(): SBUOpenChannelFileMessageCell; // inherited from NSObject

	readonly fileMessage: SBDFileMessage;

	configureHideDateViewGroupPositionFileTypeIsOverlay(message: SBDFileMessage, hideDateView: boolean, groupPosition: MessageGroupPosition, fileType: MessageFileType, isOverlay: boolean): void;
}

declare class SBUOpenChannelSettingsViewController extends SBUBaseChannelSettingViewController {

	static alloc(): SBUOpenChannelSettingsViewController; // inherited from NSObject

	static new(): SBUOpenChannelSettingsViewController; // inherited from NSObject

	readonly channel: SBDOpenChannel;

	constructor(o: { channel: SBDOpenChannel; });

	constructor(o: { channelUrl: string; });

	deleteChannel(): void;

	initWithChannel(channel: SBDOpenChannel): this;

	initWithChannelUrl(channelUrl: string): this;

	updateChannelWithParams(params: SBDOpenChannelParams): void;
}

declare class SBUOpenChannelUnknownMessageCell extends SBUOpenChannelUserMessageCell {

	static alloc(): SBUOpenChannelUnknownMessageCell; // inherited from NSObject

	static appearance(): SBUOpenChannelUnknownMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUOpenChannelUnknownMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUOpenChannelUnknownMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUOpenChannelUnknownMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUOpenChannelUnknownMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUOpenChannelUnknownMessageCell; // inherited from UIAppearance

	static new(): SBUOpenChannelUnknownMessageCell; // inherited from NSObject
}

declare class SBUOpenChannelUserMessageCell extends SBUOpenChannelContentBaseMessageCell {

	static alloc(): SBUOpenChannelUserMessageCell; // inherited from NSObject

	static appearance(): SBUOpenChannelUserMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUOpenChannelUserMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUOpenChannelUserMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUOpenChannelUserMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUOpenChannelUserMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUOpenChannelUserMessageCell; // inherited from UIAppearance

	static new(): SBUOpenChannelUserMessageCell; // inherited from NSObject

	messageTextView: UIView;

	readonly userMessage: SBDUserMessage;

	configureHideDateViewGroupPositionWithTextViewIsOverlay(message: SBDBaseMessage, hideDateView: boolean, groupPosition: MessageGroupPosition, withTextView: boolean, isOverlay: boolean): void;
}

declare class SBUOpenChannelViewController extends SBUBaseChannelViewController implements SBDChannelDelegate, SBDConnectionDelegate, SBUChannelInfoHeaderViewDelegate {

	static alloc(): SBUOpenChannelViewController; // inherited from NSObject

	static new(): SBUOpenChannelViewController; // inherited from NSObject

	readonly adminMessageCell: SBUOpenChannelBaseMessageCell;

	readonly channel: SBDOpenChannel;

	channelDescription: string;

	channelInfoView: SBUChannelInfoHeaderView;

	channelName: string;

	channelStateBanner: UIView;

	currentOrientation: UIDeviceOrientation;

	readonly customMessageCell: SBUOpenChannelBaseMessageCell;

	readonly fileMessageCell: SBUOpenChannelBaseMessageCell;

	hideChannelInfoView: boolean;

	hideNavigationBar: boolean;

	readonly isMediaViewEnabled: boolean;

	readonly isMediaViewIgnoringSafeArea: boolean;

	readonly isMediaViewOverlaying: boolean;

	leftBarButton: UIBarButtonItem;

	mediaView: UIView;

	readonly mediaViewRatio: number;

	readonly messageListRatio: number;

	newMessageInfoView: UIView;

	rightBarButton: UIBarButtonItem;

	titleView: UIView;

	readonly unknownMessageCell: SBUOpenChannelBaseMessageCell;

	readonly userMessageCell: SBUOpenChannelBaseMessageCell;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { channel: SBDOpenChannel; messageListParams: SBDMessageListParams; });

	constructor(o: { channelUrl: string; messageListParams: SBDMessageListParams; });

	calculatorMenuPointWithIndexPath(indexPath: NSIndexPath): CGPoint;

	channelCreatedMetaCounters(sender: SBDBaseChannel, createdMetaCounters: NSDictionary<string, number>): void;

	channelCreatedMetaData(sender: SBDBaseChannel, createdMetaData: NSDictionary<string, string>): void;

	channelDeletedMetaCountersKeys(sender: SBDBaseChannel, deletedMetaCountersKeys: NSArray<string> | string[]): void;

	channelDeletedMetaDataKeys(sender: SBDBaseChannel, deletedMetaDataKeys: NSArray<string> | string[]): void;

	channelDidChangeMemberCount(channels: NSArray<SBDGroupChannel> | SBDGroupChannel[]): void;

	channelDidChangeParticipantCount(channels: NSArray<SBDOpenChannel> | SBDOpenChannel[]): void;

	channelDidDeclineInvitationInviter(sender: SBDGroupChannel, invitee: SBDUser, inviter: SBDUser): void;

	channelDidReceiveInvitationInviter(sender: SBDGroupChannel, invitees: NSArray<SBDUser> | SBDUser[], inviter: SBDUser): void;

	channelDidReceiveMention(channel: SBDBaseChannel, message: SBDBaseMessage): void;

	channelDidReceiveMessage(sender: SBDBaseChannel, message: SBDBaseMessage): void;

	channelDidUpdateDeliveryReceipt(sender: SBDGroupChannel): void;

	channelDidUpdateMessage(sender: SBDBaseChannel, message: SBDBaseMessage): void;

	channelDidUpdateOperators(sender: SBDBaseChannel): void;

	channelDidUpdateReadReceipt(sender: SBDGroupChannel): void;

	channelDidUpdateThreadInfo(channel: SBDBaseChannel, threadInfoUpdateEvent: SBDThreadInfoUpdateEvent): void;

	channelDidUpdateTypingStatus(sender: SBDGroupChannel): void;

	channelMessageWasDeleted(sender: SBDBaseChannel, messageId: number): void;

	channelUpdatedMetaCounters(sender: SBDBaseChannel, updatedMetaCounters: NSDictionary<string, number>): void;

	channelUpdatedMetaData(sender: SBDBaseChannel, updatedMetaData: NSDictionary<string, string>): void;

	channelUpdatedReaction(sender: SBDBaseChannel, reactionEvent: SBDReactionEvent): void;

	channelUserDidEnter(sender: SBDOpenChannel, user: SBDUser): void;

	channelUserDidExit(sender: SBDOpenChannel, user: SBDUser): void;

	channelUserDidJoin(sender: SBDGroupChannel, user: SBDUser): void;

	channelUserDidLeave(sender: SBDGroupChannel, user: SBDUser): void;

	channelUserWasBanned(sender: SBDBaseChannel, user: SBDUser): void;

	channelUserWasMuted(sender: SBDBaseChannel, user: SBDUser): void;

	channelUserWasUnbanned(sender: SBDBaseChannel, user: SBDUser): void;

	channelUserWasUnmuted(sender: SBDBaseChannel, user: SBDUser): void;

	channelWasChanged(sender: SBDBaseChannel): void;

	channelWasDeletedChannelType(channelUrl: string, channelType: SBDChannelType): void;

	channelWasFrozen(sender: SBDBaseChannel): void;

	channelWasHidden(sender: SBDGroupChannel): void;

	channelWasUnfrozen(sender: SBDBaseChannel): void;

	checkSameDayAsNextMessageWithCurrentIndex(currentIndex: number): boolean;

	class(): typeof NSObject;

	configureOffset(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didCancelReconnection(): void;

	didFailReconnection(): void;

	didSelectChannelInfo(): void;

	didSelectChannelMembers(): void;

	didSelectChannelParticipants(): void;

	didStartReconnection(): void;

	didSucceedReconnection(): void;

	enableMediaView(enabled: boolean): void;

	generateCellIdentifierBy(message: SBDBaseMessage): string;

	getMessageGroupingPositionWithCurrentIndex(currentIndex: number): MessageGroupPosition;

	initWithChannelMessageListParams(channel: SBDOpenChannel, messageListParams: SBDMessageListParams): this;

	initWithChannelUrlMessageListParams(channelUrl: string, messageListParams: SBDMessageListParams): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	mediaViewIgnoringSafeArea(enabled: boolean): void;

	onClickParticipantsList(): void;

	onClickScrollBottomWithSender(sender: UIButton): void;

	onClickSetting(): void;

	overlayMediaViewMessageListRatio(overlaying: boolean, messageListRatio: number): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerWithAdminMessageCellNib(adminMessageCell: SBUOpenChannelBaseMessageCell, nib: UINib): void;

	registerWithCustomMessageCellNib(customMessageCell: SBUOpenChannelBaseMessageCell, nib: UINib): void;

	registerWithFileMessageCellNib(fileMessageCell: SBUOpenChannelBaseMessageCell, nib: UINib): void;

	registerWithUserMessageCellNib(userMessageCell: SBUOpenChannelBaseMessageCell, nib: UINib): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setFileMessageCellGesturesFileMessageIndexPath(cell: SBUOpenChannelFileMessageCell, fileMessage: SBDFileMessage, indexPath: NSIndexPath): void;

	setLongTapGestureHandlerMessageIndexPath(cell: SBUOpenChannelBaseMessageCell, message: SBDBaseMessage, indexPath: NSIndexPath): void;

	setTapGestureHandlerMessage(cell: SBUOpenChannelBaseMessageCell, message: SBDBaseMessage): void;

	setUnkownMessageCellGesturesUnknownMessageIndexPath(cell: SBUOpenChannelUnknownMessageCell, unknownMessage: SBDBaseMessage, indexPath: NSIndexPath): void;

	setUserMessageCellGesturesUserMessageIndexPath(cell: SBUOpenChannelUserMessageCell, userMessage: SBDUserMessage, indexPath: NSIndexPath): void;

	showChannelSettings(): void;

	showParticipantsList(): void;

	updateAutolayout(): void;

	updateBarButton(): void;

	updateMessageInputModeState(): void;

	updateMessageListRatioTo(ratio: number): void;

	updateMessagesInListWithMessagesNeedReload(messages: NSArray<SBDBaseMessage> | SBDBaseMessage[], needReload: boolean): void;
}

declare class SBUOverlayTheme extends NSObject {

	static alloc(): SBUOverlayTheme; // inherited from NSObject

	static new(): SBUOverlayTheme; // inherited from NSObject

	channelTheme: SBUChannelTheme;

	componentTheme: SBUComponentTheme;

	messageCellTheme: SBUMessageCellTheme;

	messageInputTheme: SBUMessageInputTheme;

	constructor(o: { channelTheme: SBUChannelTheme; messageInputTheme: SBUMessageInputTheme; messageCellTheme: SBUMessageCellTheme; componentTheme: SBUComponentTheme; });

	initWithChannelThemeMessageInputThemeMessageCellThemeComponentTheme(channelTheme: SBUChannelTheme, messageInputTheme: SBUMessageInputTheme, messageCellTheme: SBUMessageCellTheme, componentTheme: SBUComponentTheme): this;
}

declare class SBUPendingMessageManager extends NSObject {

	static alloc(): SBUPendingMessageManager; // inherited from NSObject

	static new(): SBUPendingMessageManager; // inherited from NSObject

	static readonly shared: SBUPendingMessageManager;

	addFileInfoWithRequestIdParams(requestId: string, params: SBDFileMessageParams): void;

	getFileInfoWithRequestId(requestId: string): SBDFileMessageParams;
}

declare class SBUStringSet extends NSObject {

	static alloc(): SBUStringSet; // inherited from NSObject

	static new(): SBUStringSet; // inherited from NSObject

	static setAlert_Delete(value: string): void;

	static setCamera(value: string): void;

	static setCancel(value: string): void;

	static setChannelList_Header_Title(value: string): void;

	static setChannelList_Last_File_Message(value: string): void;

	static setChannelSettings_Banned_Members(value: string): void;

	static setChannelSettings_Change_Image(value: string): void;

	static setChannelSettings_Change_Name(value: string): void;

	static setChannelSettings_Delete(value: string): void;

	static setChannelSettings_Enter_New_Channel_Name(value: string): void;

	static setChannelSettings_Enter_New_Name(value: string): void;

	static setChannelSettings_Freeze_Channel(value: string): void;

	static setChannelSettings_Header_Title(value: string): void;

	static setChannelSettings_Leave(value: string): void;

	static setChannelSettings_Members(value: (p1: number) => string): void;

	static setChannelSettings_Members_Title(value: string): void;

	static setChannelSettings_Moderations(value: string): void;

	static setChannelSettings_Muted_Members(value: string): void;

	static setChannelSettings_Notifications(value: string): void;

	static setChannelSettings_Operators(value: string): void;

	static setChannelSettings_Participants_Title(value: string): void;

	static setChannelSettings_Search(value: string): void;

	static setChannelSettings_URL(value: string): void;

	static setChannelType_Broadcast(value: string): void;

	static setChannelType_Group(value: string): void;

	static setChannelType_SuperGroup(value: string): void;

	static setChannel_Failure_Download_file(value: string): void;

	static setChannel_Failure_Open_file(value: string): void;

	static setChannel_Header_LastSeen(value: string): void;

	static setChannel_Header_Typing(value: (p1: NSArray<SBDUser>) => string): void;

	static setChannel_Name_Default(value: string): void;

	static setChannel_Name_No_Members(value: string): void;

	static setChannel_New_Message(value: (p1: number) => string): void;

	static setChannel_New_Message_File(value: string): void;

	static setChannel_State_Banner_Frozen(value: string): void;

	static setChannel_Success_Download_file(value: string): void;

	static setChoosePhoto(value: string): void;

	static setCopy(value: string): void;

	static setCreateChannel_Create(value: (p1: number) => string): void;

	static setCreateChannel_Header_Select_Members(value: string): void;

	static setCreateChannel_Header_Title(value: string): void;

	static setCreateChannel_Header_Title_Profile(value: string): void;

	static setDate_Ago(value: string): void;

	static setDate_Day(value: (p1: number) => string): void;

	static setDate_Hour(value: (p1: number) => string): void;

	static setDate_Min(value: (p1: number) => string): void;

	static setDate_Month(value: (p1: number) => string): void;

	static setDate_On(value: string): void;

	static setDate_Year(value: (p1: number) => string): void;

	static setDate_Yesterday(value: string): void;

	static setDelete(value: string): void;

	static setDocument(value: string): void;

	static setEdit(value: string): void;

	static setEmpty_No_Banned_Members(value: string): void;

	static setEmpty_No_Channels(value: string): void;

	static setEmpty_No_Messages(value: string): void;

	static setEmpty_No_Muted_Members(value: string): void;

	static setEmpty_No_Users(value: string): void;

	static setEmpty_Search_Result(value: string): void;

	static setEmpty_Wrong(value: string): void;

	static setInvite(value: string): void;

	static setInviteChannel_Add(value: (p1: number) => string): void;

	static setInviteChannel_Header_Select_Members(value: string): void;

	static setInviteChannel_Header_Title(value: string): void;

	static setInviteChannel_Invite(value: (p1: number) => string): void;

	static setLoading(value: string): void;

	static setMemberList_Ban(value: string): void;

	static setMemberList_Dismiss_Operator(value: string): void;

	static setMemberList_Header_Title(value: string): void;

	static setMemberList_Me(value: string): void;

	static setMemberList_Mute(value: string): void;

	static setMemberList_Promote_Operator(value: string): void;

	static setMemberList_Title_Banned_Members(value: string): void;

	static setMemberList_Title_Members(value: string): void;

	static setMemberList_Title_Muted_Members(value: string): void;

	static setMemberList_Title_Operators(value: string): void;

	static setMemberList_Title_Participants(value: string): void;

	static setMemberList_Unban(value: string): void;

	static setMemberList_Unmute(value: string): void;

	static setMessageInput_Text_Muted(value: string): void;

	static setMessageInput_Text_Placeholder(value: string): void;

	static setMessageInput_Text_Unavailable(value: string): void;

	static setMessage_Edited(value: string): void;

	static setMessage_System(value: string): void;

	static setMessage_Unknown_Desctiption(value: string): void;

	static setMessage_Unknown_Title(value: string): void;

	static setOK(value: string): void;

	static setOpen_Channel_Name_Default(value: string): void;

	static setOpen_Channel_Participants(value: string): void;

	static setOpen_Channel_Participants_Count(value: (p1: number) => string): void;

	static setPhotoVideoLibrary(value: string): void;

	static setRemove(value: string): void;

	static setRemovePhoto(value: string): void;

	static setRetry(value: string): void;

	static setSave(value: string): void;

	static setSearch(value: string): void;

	static setTakePhoto(value: string): void;

	static setUserProfile_Ban(value: string): void;

	static setUserProfile_Dismiss(value: string): void;

	static setUserProfile_Message(value: string): void;

	static setUserProfile_Mute(value: string): void;

	static setUserProfile_Promote(value: string): void;

	static setUserProfile_Role_Member(value: string): void;

	static setUserProfile_Role_Operator(value: string): void;

	static setUserProfile_Unmute(value: string): void;

	static setUserProfile_UserID(value: string): void;

	static setUser_No_Name(value: string): void;

	static setUser_Operator(value: string): void;

	static Alert_Delete: string;

	static Camera: string;

	static Cancel: string;

	static ChannelList_Header_Title: string;

	static ChannelList_Last_File_Message: string;

	static ChannelSettings_Banned_Members: string;

	static ChannelSettings_Change_Image: string;

	static ChannelSettings_Change_Name: string;

	static ChannelSettings_Delete: string;

	static ChannelSettings_Enter_New_Channel_Name: string;

	static ChannelSettings_Enter_New_Name: string;

	static ChannelSettings_Freeze_Channel: string;

	static ChannelSettings_Header_Title: string;

	static ChannelSettings_Leave: string;

	static ChannelSettings_Members: (p1: number) => string;

	static ChannelSettings_Members_Title: string;

	static ChannelSettings_Moderations: string;

	static ChannelSettings_Muted_Members: string;

	static ChannelSettings_Notifications: string;

	static ChannelSettings_Operators: string;

	static ChannelSettings_Participants_Title: string;

	static ChannelSettings_Search: string;

	static ChannelSettings_URL: string;

	static ChannelType_Broadcast: string;

	static ChannelType_Group: string;

	static ChannelType_SuperGroup: string;

	static Channel_Failure_Download_file: string;

	static Channel_Failure_Open_file: string;

	static Channel_Header_LastSeen: string;

	static Channel_Header_Typing: (p1: NSArray<SBDUser>) => string;

	static Channel_Name_Default: string;

	static Channel_Name_No_Members: string;

	static Channel_New_Message: (p1: number) => string;

	static Channel_New_Message_File: string;

	static Channel_State_Banner_Frozen: string;

	static Channel_Success_Download_file: string;

	static ChoosePhoto: string;

	static Copy: string;

	static CreateChannel_Create: (p1: number) => string;

	static CreateChannel_Header_Select_Members: string;

	static CreateChannel_Header_Title: string;

	static CreateChannel_Header_Title_Profile: string;

	static Date_Ago: string;

	static Date_Day: (p1: number) => string;

	static Date_Hour: (p1: number) => string;

	static Date_Min: (p1: number) => string;

	static Date_Month: (p1: number) => string;

	static Date_On: string;

	static Date_Year: (p1: number) => string;

	static Date_Yesterday: string;

	static Delete: string;

	static Document: string;

	static Edit: string;

	static Empty_No_Banned_Members: string;

	static Empty_No_Channels: string;

	static Empty_No_Messages: string;

	static Empty_No_Muted_Members: string;

	static Empty_No_Users: string;

	static Empty_Search_Result: string;

	static Empty_Wrong: string;

	static Invite: string;

	static InviteChannel_Add: (p1: number) => string;

	static InviteChannel_Header_Select_Members: string;

	static InviteChannel_Header_Title: string;

	static InviteChannel_Invite: (p1: number) => string;

	static Loading: string;

	static MemberList_Ban: string;

	static MemberList_Dismiss_Operator: string;

	static MemberList_Header_Title: string;

	static MemberList_Me: string;

	static MemberList_Mute: string;

	static MemberList_Promote_Operator: string;

	static MemberList_Title_Banned_Members: string;

	static MemberList_Title_Members: string;

	static MemberList_Title_Muted_Members: string;

	static MemberList_Title_Operators: string;

	static MemberList_Title_Participants: string;

	static MemberList_Unban: string;

	static MemberList_Unmute: string;

	static MessageInput_Text_Muted: string;

	static MessageInput_Text_Placeholder: string;

	static MessageInput_Text_Unavailable: string;

	static Message_Edited: string;

	static Message_System: string;

	static Message_Unknown_Desctiption: string;

	static Message_Unknown_Title: string;

	static OK: string;

	static Open_Channel_Name_Default: string;

	static Open_Channel_Participants: string;

	static Open_Channel_Participants_Count: (p1: number) => string;

	static PhotoVideoLibrary: string;

	static Remove: string;

	static RemovePhoto: string;

	static Retry: string;

	static Save: string;

	static Search: string;

	static TakePhoto: string;

	static UserProfile_Ban: string;

	static UserProfile_Dismiss: string;

	static UserProfile_Message: string;

	static UserProfile_Mute: string;

	static UserProfile_Promote: string;

	static UserProfile_Role_Member: string;

	static UserProfile_Role_Operator: string;

	static UserProfile_Unmute: string;

	static UserProfile_UserID: string;

	static User_No_Name: string;

	static User_Operator: string;
}

declare class SBUTheme extends NSObject {

	static alloc(): SBUTheme; // inherited from NSObject

	static new(): SBUTheme; // inherited from NSObject

	static setChannelCellTheme(newValue: SBUChannelCellTheme): void;

	static setChannelListTheme(newValue: SBUChannelListTheme): void;

	static setChannelListWithChannelListThemeChannelCellTheme(channelListTheme: SBUChannelListTheme, channelCellTheme: SBUChannelCellTheme): void;

	static setChannelSettingsTheme(newValue: SBUChannelSettingsTheme): void;

	static setChannelSettingsWithChannelSettingsTheme(channelSettingsTheme: SBUChannelSettingsTheme): void;

	static setChannelTheme(newValue: SBUChannelTheme): void;

	static setChannelWithChannelThemeMessageCellThemeMessageInputThemeComponentTheme(channelTheme: SBUChannelTheme, messageCellTheme: SBUMessageCellTheme, messageInputTheme: SBUMessageInputTheme, componentTheme: SBUComponentTheme): void;

	static setComponentTheme(newValue: SBUComponentTheme): void;

	static setMessageCellTheme(newValue: SBUMessageCellTheme): void;

	static setMessageInputTheme(newValue: SBUMessageInputTheme): void;

	static setMessageSearchResultCellTheme(newValue: SBUMessageSearchResultCellTheme): void;

	static setMessageSearchTheme(newValue: SBUMessageSearchTheme): void;

	static setOverlayTheme(newValue: SBUOverlayTheme): void;

	static setUserCellTheme(newValue: SBUUserCellTheme): void;

	static setUserListTheme(newValue: SBUUserListTheme): void;

	static setUserListWithUserListThemeUserCellTheme(userListTheme: SBUUserListTheme, userCellTheme: SBUUserCellTheme): void;

	static setUserProfileTheme(newValue: SBUUserProfileTheme): void;

	static setUserProfileWithUserProfileTheme(userProfileTheme: SBUUserProfileTheme): void;

	static setWithTheme(theme: SBUTheme): void;

	static channelCellTheme: SBUChannelCellTheme;

	static channelListTheme: SBUChannelListTheme;

	static channelSettingsTheme: SBUChannelSettingsTheme;

	static channelTheme: SBUChannelTheme;

	static componentTheme: SBUComponentTheme;

	static readonly dark: SBUTheme;

	static readonly light: SBUTheme;

	static messageCellTheme: SBUMessageCellTheme;

	static messageInputTheme: SBUMessageInputTheme;

	static messageSearchResultCellTheme: SBUMessageSearchResultCellTheme;

	static messageSearchTheme: SBUMessageSearchTheme;

	static overlayTheme: SBUOverlayTheme;

	static userCellTheme: SBUUserCellTheme;

	static userListTheme: SBUUserListTheme;

	static userProfileTheme: SBUUserProfileTheme;

	constructor(o: { channelListTheme: SBUChannelListTheme; channelCellTheme: SBUChannelCellTheme; channelTheme: SBUChannelTheme; messageInputTheme: SBUMessageInputTheme; messageCellTheme: SBUMessageCellTheme; userListTheme: SBUUserListTheme; userCellTheme: SBUUserCellTheme; channelSettingsTheme: SBUChannelSettingsTheme; userProfileTheme: SBUUserProfileTheme; componentTheme: SBUComponentTheme; overlayTheme: SBUOverlayTheme; messageSearchTheme: SBUMessageSearchTheme; messageSearchResultCellTheme: SBUMessageSearchResultCellTheme; });

	initWithChannelListThemeChannelCellThemeChannelThemeMessageInputThemeMessageCellThemeUserListThemeUserCellThemeChannelSettingsThemeUserProfileThemeComponentThemeOverlayThemeMessageSearchThemeMessageSearchResultCellTheme(channelListTheme: SBUChannelListTheme, channelCellTheme: SBUChannelCellTheme, channelTheme: SBUChannelTheme, messageInputTheme: SBUMessageInputTheme, messageCellTheme: SBUMessageCellTheme, userListTheme: SBUUserListTheme, userCellTheme: SBUUserCellTheme, channelSettingsTheme: SBUChannelSettingsTheme, userProfileTheme: SBUUserProfileTheme, componentTheme: SBUComponentTheme, overlayTheme: SBUOverlayTheme, messageSearchTheme: SBUMessageSearchTheme, messageSearchResultCellTheme: SBUMessageSearchResultCellTheme): this;
}

declare class SBUUnknownMessageCell extends SBUUserMessageCell {

	static alloc(): SBUUnknownMessageCell; // inherited from NSObject

	static appearance(): SBUUnknownMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUUnknownMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUUnknownMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUUnknownMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUUnknownMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUUnknownMessageCell; // inherited from UIAppearance

	static new(): SBUUnknownMessageCell; // inherited from NSObject
}

declare class SBUUser extends NSObject {

	static alloc(): SBUUser; // inherited from NSObject

	static new(): SBUUser; // inherited from NSObject

	readonly isMuted: boolean;

	readonly isOperator: boolean;

	readonly nickname: string;

	readonly profileUrl: string;

	readonly userId: string;

	constructor(o: { member: SBDMember; });

	constructor(o: { sender: SBDSender; });

	constructor(o: { user: SBDUser; });

	constructor(o: { userId: string; nickname: string; profileUrl: string; });

	constructor(o: { user: SBUUser; isOperator: boolean; isMuted: boolean; });

	initWithMember(member: SBDMember): this;

	initWithSender(sender: SBDSender): this;

	initWithUser(user: SBDUser): this;

	initWithUserIdNicknameProfileUrl(userId: string, nickname: string, profileUrl: string): this;

	initWithUserIsOperatorIsMuted(user: SBUUser, isOperator: boolean, isMuted: boolean): this;

	refinedNickname(): string;
}

declare class SBUUserCell extends UITableViewCell {

	static alloc(): SBUUserCell; // inherited from NSObject

	static appearance(): SBUUserCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUUserCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUUserCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUUserCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUUserCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUUserCell; // inherited from UIAppearance

	static new(): SBUUserCell; // inherited from NSObject

	onClickMoreMenu(): void;

	onTapUserProfileViewWithSender(sender: UITapGestureRecognizer): void;
}

declare class SBUUserCellTheme extends NSObject {

	static alloc(): SBUUserCellTheme; // inherited from NSObject

	static new(): SBUUserCellTheme; // inherited from NSObject

	backgroundColor: UIColor;

	checkboxOffColor: UIColor;

	checkboxOnColor: UIColor;

	moreButtonColor: UIColor;

	moreButtonDisabledColor: UIColor;

	mutedStateBackgroundColor: UIColor;

	mutedStateIconColor: UIColor;

	separateColor: UIColor;

	subInfoFont: UIFont;

	subInfoTextColor: UIColor;

	userNameFont: UIFont;

	userNameTextColor: UIColor;

	userPlaceholderBackgroundColor: UIColor;

	userPlaceholderTintColor: UIColor;

	static readonly dark: SBUUserCellTheme;

	static readonly light: SBUUserCellTheme;

	constructor(o: { backgroundColor: UIColor; checkboxOnColor: UIColor; checkboxOffColor: UIColor; userNameTextColor: UIColor; userNameFont: UIFont; userPlaceholderBackgroundColor: UIColor; userPlaceholderTintColor: UIColor; mutedStateBackgroundColor: UIColor; mutedStateIconColor: UIColor; subInfoTextColor: UIColor; subInfoFont: UIFont; moreButtonColor: UIColor; moreButtonDisabledColor: UIColor; separateColor: UIColor; });

	initWithBackgroundColorCheckboxOnColorCheckboxOffColorUserNameTextColorUserNameFontUserPlaceholderBackgroundColorUserPlaceholderTintColorMutedStateBackgroundColorMutedStateIconColorSubInfoTextColorSubInfoFontMoreButtonColorMoreButtonDisabledColorSeparateColor(backgroundColor: UIColor, checkboxOnColor: UIColor, checkboxOffColor: UIColor, userNameTextColor: UIColor, userNameFont: UIFont, userPlaceholderBackgroundColor: UIColor, userPlaceholderTintColor: UIColor, mutedStateBackgroundColor: UIColor, mutedStateIconColor: UIColor, subInfoTextColor: UIColor, subInfoFont: UIFont, moreButtonColor: UIColor, moreButtonDisabledColor: UIColor, separateColor: UIColor): this;
}

declare class SBUUserListTheme extends NSObject {

	static alloc(): SBUUserListTheme; // inherited from NSObject

	static new(): SBUUserListTheme; // inherited from NSObject

	backgroundColor: UIColor;

	barButtonDisabledTintColor: UIColor;

	barButtonTintColor: UIColor;

	coverImageBackgroundColor: UIColor;

	coverImageTintColor: UIColor;

	itemColor: UIColor;

	itemTextColor: UIColor;

	leftBarButtonTintColor: UIColor;

	navigationBarTintColor: UIColor;

	navigationShadowColor: UIColor;

	placeholderTintColor: UIColor;

	removeColor: UIColor;

	rightBarButtonSelectedTintColor: UIColor;

	rightBarButtonTintColor: UIColor;

	statusBarStyle: UIStatusBarStyle;

	textfieldTextColor: UIColor;

	static readonly dark: SBUUserListTheme;

	static readonly light: SBUUserListTheme;

	constructor(o: { statusBarStyle: UIStatusBarStyle; navigationBarTintColor: UIColor; navigationShadowColor: UIColor; leftBarButtonTintColor: UIColor; rightBarButtonTintColor: UIColor; rightBarButtonSelectedTintColor: UIColor; barButtonTintColor: UIColor; barButtonDisabledTintColor: UIColor; backgroundColor: UIColor; coverImageTintColor: UIColor; coverImageBackgroundColor: UIColor; itemTextColor: UIColor; itemColor: UIColor; removeColor: UIColor; placeholderTintColor: UIColor; textfieldTextColor: UIColor; });

	initWithStatusBarStyleNavigationBarTintColorNavigationShadowColorLeftBarButtonTintColorRightBarButtonTintColorRightBarButtonSelectedTintColorBarButtonTintColorBarButtonDisabledTintColorBackgroundColorCoverImageTintColorCoverImageBackgroundColorItemTextColorItemColorRemoveColorPlaceholderTintColorTextfieldTextColor(statusBarStyle: UIStatusBarStyle, navigationBarTintColor: UIColor, navigationShadowColor: UIColor, leftBarButtonTintColor: UIColor, rightBarButtonTintColor: UIColor, rightBarButtonSelectedTintColor: UIColor, barButtonTintColor: UIColor, barButtonDisabledTintColor: UIColor, backgroundColor: UIColor, coverImageTintColor: UIColor, coverImageBackgroundColor: UIColor, itemTextColor: UIColor, itemColor: UIColor, removeColor: UIColor, placeholderTintColor: UIColor, textfieldTextColor: UIColor): this;
}

declare class SBUUserMessageCell extends SBUContentBaseMessageCell {

	static alloc(): SBUUserMessageCell; // inherited from NSObject

	static appearance(): SBUUserMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUUserMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUUserMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUUserMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUUserMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUUserMessageCell; // inherited from UIAppearance

	static new(): SBUUserMessageCell; // inherited from NSObject

	messageTextView: UIView;

	readonly userMessage: SBDUserMessage;

	configureWithHighlightInfo(highlightInfo: SBUHighlightMessageInfo): void;
}

declare class SBUUserNameView extends UIView {

	static alloc(): SBUUserNameView; // inherited from NSObject

	static appearance(): SBUUserNameView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): SBUUserNameView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SBUUserNameView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUUserNameView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SBUUserNameView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SBUUserNameView; // inherited from UIAppearance

	static new(): SBUUserNameView; // inherited from NSObject
}

declare class SBUUserProfileTheme extends NSObject {

	static alloc(): SBUUserProfileTheme; // inherited from NSObject

	static new(): SBUUserProfileTheme; // inherited from NSObject

	backgroundColor: UIColor;

	informationDesctiptionColor: UIColor;

	informationDesctiptionFont: UIFont;

	informationTitleColor: UIColor;

	informationTitleFont: UIFont;

	itemBackgroundColor: UIColor;

	itemFont: UIFont;

	itemHighlightedTintColor: UIColor;

	itemSelectedBackgroundColor: UIColor;

	itemSelectedTintColor: UIColor;

	itemTintColor: UIColor;

	largeItemBackgroundColor: UIColor;

	largeItemFont: UIFont;

	largeItemHighlightedColor: UIColor;

	largeItemTintColor: UIColor;

	overlayColor: UIColor;

	separatorColor: UIColor;

	statusBarStyle: UIStatusBarStyle;

	userPlaceholderBackgroundColor: UIColor;

	userPlaceholderTintColor: UIColor;

	userRoleFont: UIFont;

	userRoleTextColor: UIColor;

	usernameFont: UIFont;

	usernameTextColor: UIColor;

	static readonly dark: SBUUserProfileTheme;

	static readonly light: SBUUserProfileTheme;

	constructor(o: { statusBarStyle: UIStatusBarStyle; overlayColor: UIColor; backgroundColor: UIColor; userPlaceholderBackgroundColor: UIColor; userPlaceholderTintColor: UIColor; usernameTextColor: UIColor; usernameFont: UIFont; userRoleTextColor: UIColor; userRoleFont: UIFont; largeItemTintColor: UIColor; largeItemFont: UIFont; largeItemBackgroundColor: UIColor; largeItemHighlightedColor: UIColor; itemFont: UIFont; itemBackgroundColor: UIColor; itemSelectedBackgroundColor: UIColor; itemTintColor: UIColor; itemSelectedTintColor: UIColor; itemHighlightedTintColor: UIColor; separatorColor: UIColor; informationTitleColor: UIColor; informationTitleFont: UIFont; informationDesctiptionColor: UIColor; informationDesctiptionFont: UIFont; });

	initWithStatusBarStyleOverlayColorBackgroundColorUserPlaceholderBackgroundColorUserPlaceholderTintColorUsernameTextColorUsernameFontUserRoleTextColorUserRoleFontLargeItemTintColorLargeItemFontLargeItemBackgroundColorLargeItemHighlightedColorItemFontItemBackgroundColorItemSelectedBackgroundColorItemTintColorItemSelectedTintColorItemHighlightedTintColorSeparatorColorInformationTitleColorInformationTitleFontInformationDesctiptionColorInformationDesctiptionFont(statusBarStyle: UIStatusBarStyle, overlayColor: UIColor, backgroundColor: UIColor, userPlaceholderBackgroundColor: UIColor, userPlaceholderTintColor: UIColor, usernameTextColor: UIColor, usernameFont: UIFont, userRoleTextColor: UIColor, userRoleFont: UIFont, largeItemTintColor: UIColor, largeItemFont: UIFont, largeItemBackgroundColor: UIColor, largeItemHighlightedColor: UIColor, itemFont: UIFont, itemBackgroundColor: UIColor, itemSelectedBackgroundColor: UIColor, itemTintColor: UIColor, itemSelectedTintColor: UIColor, itemHighlightedTintColor: UIColor, separatorColor: UIColor, informationTitleColor: UIColor, informationTitleFont: UIFont, informationDesctiptionColor: UIColor, informationDesctiptionFont: UIFont): this;
}

interface SBUUserProfileViewDelegate {

	didSelectClose(): void;

	didSelectMessageWithUserId(userId: string): void;
}
declare var SBUUserProfileViewDelegate: {

	prototype: SBUUserProfileViewDelegate;
};

interface SBUUserProfileViewProtocol {

	dismiss(): void;

	showWithBaseViewUser(baseView: UIView, user: SBUUser): void;

	showWithBaseViewUserIsOpenChannel(baseView: UIView, user: SBUUser, isOpenChannel: boolean): void;
}
declare var SBUUserProfileViewProtocol: {

	prototype: SBUUserProfileViewProtocol;
};

declare class SBUUtils extends NSObject {

	static alloc(): SBUUtils; // inherited from NSObject

	static emptyTitleForRowEditActionFor(size: CGSize): string;

	static generateChannelNameWithChannel(channel: SBDGroupChannel): string;

	static getFileTypeByFileMessage(fileMessage: SBDFileMessage): MessageFileType;

	static getFileTypeByType(type: string): MessageFileType;

	static getMimeTypeWithUrl(url: NSURL): string;

	static getReceiptStateWithChannelMessage(channel: SBDGroupChannel, message: SBDBaseMessage): SBUMessageReceiptState;

	static isValidWithChannelNameType(channelName: string, type: ChannelType): boolean;

	static isValidWithCoverUrl(coverUrl: string): boolean;

	static new(): SBUUtils; // inherited from NSObject
}

declare var SendBirdUIKitVersionNumber: number;

declare var SendBirdUIKitVersionString: interop.Reference<number>;

declare const enum UserListType {

	None = 0,

	CreateChannel = 1,

	ChannelMembers = 2,

	InviteUser = 3,

	Reaction = 4,

	Operators = 5,

	MutedMembers = 6,

	BannedMembers = 7,

	Participants = 8
}

declare class UserNameView extends SBUUserNameView {

	static alloc(): UserNameView; // inherited from NSObject

	static appearance(): UserNameView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UserNameView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UserNameView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): UserNameView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UserNameView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): UserNameView; // inherited from UIAppearance

	static new(): UserNameView; // inherited from NSObject
}
