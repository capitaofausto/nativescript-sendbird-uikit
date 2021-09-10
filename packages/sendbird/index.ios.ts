import { SendbirdCommon, APP_ID, dismissCallback, SendbirdFilters } from './common';
import { Utils, Frame, prompt, PromptOptions, inputType, capitalizationType, PromptResult } from '@nativescript/core';

export class Sendbird extends SendbirdCommon {

  sendbirdChannel: SBDOpenChannel;
  delegate: OpenChannelChattingViewController;

  connect(userId: string, nickname: string, profileUrl: string): Promise<{data: SBDUser}> {
    return new Promise((resolve, reject) => {
      SBDMain.connectWithUserIdCompletionHandler(userId, (user, error) => {
            // Handle error.
            if(error) {
              reject(error)
              return;
            }
            console.log('User is connected', user.nickname);
            SBDMain.updateCurrentUserInfoWithNicknameProfileUrlCompletionHandler(nickname, profileUrl, (error) => {

              resolve({ data: user });
              // The current user's profile is successfully updated.
              // You could redraw the profile in a view in response to this operation.
            })
            // The user is connected to Sendbird server.
      })
    })
  }

  createChannel(): Promise<{data: string}> {
    return new Promise((resolve, reject) => {
      SBDOpenChannel.createChannelWithCompletionHandler((openChannel, error) => {
        if(error) {
          console.log('Sendbird Result Error');
          reject(error);
          return;
        }
        console.log('Channel created');
        resolve({data: openChannel.channelUrl})
      })
    })
  }

  enterChannel(channelId: string): Promise<{data: string} | {error: any}> {
    return new Promise((resolve, reject) => {
      SBDOpenChannel.getChannelWithUrlCompletionHandler(channelId, (openChannel, error) => {
        if(error) {
          console.log('Sendbird enter channel Error');
          reject(error)
          return;
        }
        console.log('Sendbird enter channel success');
        this.sendbirdChannel = openChannel;
        // Call the instance method of the result object in the "openChannel" parameter of the callback method.
        openChannel?.enterChannelWithCompletionHandler( (error) => {
          resolve({ data: openChannel.channelUrl });
        })
      })
    })

  }

  sendMessage(message: string): Promise<{data: SBDUserMessage} | {error: any}> {
    return new Promise((resolve, reject) => {
      this.sendbirdChannel?.sendUserMessageCompletionHandler(message, (message, error) => {
        if(error) {
          console.log('Send message Error');
          reject({ error });
          return;
        }
        console.log('MESSAGE SENT', message);

        resolve({ data: message })
        // The message is successfully sent to the channel.
        // The current user can receive messages from other users through the didReceiveMessage() method of an event delegate.
      })
    })
  }

  receiveMessages(channelUrl: string) {
    console.log('Banuba start IOS');
		let topMostFrame = Frame.topmost();
		let viewController: UIViewController = topMostFrame.currentPage && topMostFrame.currentPage.ios;
		this.delegate = OpenChannelChattingViewController.initWithOwner(this.sendbirdChannel, channelUrl);
		this.delegate._owner = new WeakRef(this.sendbirdChannel);
		// this.rtcEngine.delegate = this.delegate;
		this.delegate.viewDidLoad();
  }

  leaveChannel(channelUrl: string) {
    SBDMain.removeChannelDelegateForIdentifier(channelUrl);
  }

  getTotalUnreadMessages() {
    return new Promise((resolve, reject) => {
      SBDMain.getTotalUnreadMessageCountWithCompletionHandler(( totalCount, error) => {
        if(error) {
          console.log('updateUnreadCount Error');
          reject({ error });
          return;
        }
        console.log('TOTAL COUNT', totalCount);

        resolve({ data: totalCount })
      })
    })
  }

  registerPushToken(token: string): Promise<void> {
    return new Promise((resolve, reject) => {
      SBDMain.registerDevicePushKitTokenUniqueCompletionHandler(new NSString({ string: token }).dataUsingEncoding(NSUTF8StringEncoding), true, (status, error) => {
        if (error) {
          console.error('Failed to register device token: ' + error);
          reject(error);
          return;
        }
        resolve();
      });
    });
  }
}

export class SendbirdUIKit {
  delegateUi: ChannelListViewController;
  delegateTabsUi: MainChannelTabbarController;

  setCurrentUser(userId: string, nickname: string, profileUrl: string) {
    SBUGlobals.CurrentUser = new SBUUser({userId, nickname, profileUrl });
  }

  init(appId: string, userId: string, nickname: string, profileUrl: string) {
    console.log("UI KIT start IOS");
    SBDMain.initWithApplicationId(appId);
    this.setCurrentUser(userId, nickname, profileUrl);
  }

  launch(callback: dismissCallback) {
    const app = UIApplication.sharedApplication;
    const win = app.keyWindow || (app.windows && app.windows.count > 0 && app.windows.objectAtIndex(0));
    let viewController = win.rootViewController;
    // let channelTheme = new SBUChannelTheme({navigationBarTintColor: SBUColorSet.primary300});

    /* let messageCellTheme = SBUMessageCellTheme(
        backgroundColor: SBUColorSet.background100
        ...
    )

    let messageInputTheme = SBUMessageInputTheme(
        backgroundColor: SBUColorSet.background100
        ...
    )

    SBUTheme.setChannel(channelTheme: channelTheme,
            messageCellTheme: messageCellTheme,
            messageInputTheme: messageInputTheme) */
    // Channel theme.
    /*  SBUTheme.channelTheme.backgroundColor = SBUColorSet.background100;

    // Message cell theme.
    SBUTheme.messageCellTheme.backgroundColor = SBUColorSet.background100;

    // Message input theme.
    SBUTheme.messageInputTheme.backgroundColor = SBUColorSet.background100; */
    // SBUTheme.messageCellTheme.backgroundColor = SBUColorSet.background100;
    const color = new UIColor({red: 247 / 255.0, green: (245 / 255.0), blue: (255 / 255.0), alpha: 1});
    let channelListTheme = SBUChannelListTheme.new();
    channelListTheme.navigationBarTintColor = color;
    SBUTheme.setChannelListTheme(channelListTheme);
    this.delegateUi = new ChannelListViewController(callback);
    this.delegateUi._owner = new WeakRef(this);
    let naviVC = new UINavigationController({ rootViewController: this.delegateUi });
    naviVC.modalPresentationStyle = UIModalPresentationStyle.FullScreen;
    Utils.ios.getVisibleViewController(viewController).presentViewControllerAnimatedCompletion(naviVC, true, () => { console.log('COMPLETIONNNN'); });
  }

  createChannel(channelName: string, customType): Promise<{data: string}> {
    return new Promise((resolve, reject) => {
      let params = new SBDGroupChannelParams();
      params.isSuper = true
      params.isPublic = true
      params.name = channelName;
      params.customType = customType;
      const currentUser = SBUGlobals.CurrentUser;
      params.addUserId(currentUser.userId)

      SBDGroupChannel.createChannelWithParamsCompletionHandler(params, (groupChannel, error) => {
        let channelUrl = groupChannel?.channelUrl;
        if(error) {
          console.log('Sendbird Create channel Error');
          reject(error);
          return;
        }
        resolve({data: channelUrl})
        // SUCCESS ON CREATION
      })
    })
  }

  joinChannel(channelUrl: string): Promise<void> {
    return new Promise((resolve, reject) => {
      SBDGroupChannel.getChannelWithUrlCompletionHandler(channelUrl, (channel: SBDGroupChannel, err: SBDError) => {
        if (err) {
          reject(err);
        }
        channel.joinWithCompletionHandler((err: SBDError) => {
          if (err) {
            reject(err);
          }

          resolve();
        })

      });
    });
  }

  launchChannel(channelUrl: string) {
    const app = UIApplication.sharedApplication;
    const win = app.keyWindow || (app.windows && app.windows.count > 0 && app.windows.objectAtIndex(0));
    let viewController = win.rootViewController;

    const delegateUi = new ChannelViewController(channelUrl);
    //this.delegateUi.initWithChannelUrlMessageListParams(channelUrl, null);
    //delegateUi._owner = new WeakRef(this);

    let naviVC = new UINavigationController({ rootViewController: delegateUi });
    naviVC.modalPresentationStyle = 0 // FullScreen;
    Utils.ios.getVisibleViewController(viewController).presentViewControllerAnimatedCompletion(naviVC, true, () => { console.log('View channel completed') });
  }

  launchTabs(callback: dismissCallback, filters: SendbirdFilters = {}) {
    const app = UIApplication.sharedApplication;
    const win = app.keyWindow || (app.windows && app.windows.count > 0 && app.windows.objectAtIndex(0));
    let viewController = win.rootViewController;
    this.delegateTabsUi = new MainChannelTabbarController(callback, filters);
    this.delegateTabsUi._owner = new WeakRef(this);
    const color = new UIColor({red: 247 / 255.0, green: (245 / 255.0), blue: (255 / 255.0), alpha: 1});
    let channelListTheme = SBUChannelListTheme.new();
    channelListTheme.navigationBarTintColor = color;
    //let naviVC = new UINavigationController({rootViewController: this.delegateTabsUi });
    this.delegateTabsUi.modalPresentationStyle = UIModalPresentationStyle.FullScreen;
    Utils.ios.getVisibleViewController(viewController).presentViewControllerAnimatedCompletion(this.delegateTabsUi, true, () => { console.log('COMPLETIONNNN'); });
  }
}
@NativeClass()
class ChannelListViewController extends SBUChannelListViewController {

  public static ObjCExposedMethods = {
    viewDidLoad: { returns: interop.types.void, params: [] },
    onClickCreate: { returns: interop.types.void, params: [] },
    tableViewDidSelectRowAtIndexPath: { returns: interop.types.void, params: [UITableView, NSIndexPath]}
	};

  _owner: WeakRef<any>;
  titleView: SBUNavigationTitleView;
  viewDidLoaded: boolean;
  dismissCallback: dismissCallback;

  constructor(dismissCalback: dismissCallback) {
    let listQuery = SBDGroupChannel.createMyGroupChannelListQuery();
    listQuery.superChannelFilter = SBDGroupChannelSuperChannelFilter.NonSuper;
    listQuery.includeEmptyChannel = true;

    super({channelListQuery: listQuery});
    this.dismissCallback = dismissCalback;
  }

	static new(): ChannelListViewController {
		return <ChannelListViewController>super.new(); // calls new() on the NSObject
	}

	public static initWithOwner(owner: any): ChannelListViewController {
		let delegate = <ChannelListViewController>super.new();
		delegate._owner = new WeakRef(owner);
		return delegate;
	}

  viewWillAppear() {
    console.log('VIEW WILL APPEAR');
    /* if(this.viewDidLoaded) {
      let listQuery = SBDGroupChannel.createMyGroupChannelListQuery();
      listQuery.superChannelFilter = SBDGroupChannelSuperChannelFilter.NonSuper;
      listQuery.includeEmptyChannel = true;
      this.initWithChannelListQuery(listQuery);
    } */
    SBUStringSet.ChannelList_Header_Title = 'Chat';
    SBUStringSet.CreateChannel_Header_Title = 'Start a chat';
    SBUStringSet.Empty_No_Messages = "Send a message below to get the conversation going.";
    SBUStringSet.ChannelSettings_Freeze_Channel = "Messages from hosts only";
    SBUStringSet.MemberList_Title_Operators = "Hosts";
    SBUStringSet.ChannelSettings_Operators = "Hosts";
    SBUStringSet.ChannelSettings_Header_Title = "Chat information";
    SBUStringSet.ChannelSettings_Leave = "Leave chat";
    SBUStringSet.ChannelSettings_Change_Image = "Change chat image";
    SBUStringSet.ChannelSettings_Notifications = "Notifications (Coming Soon!)";
    SBUIconSet.iconMessage = null;
    if(!this.viewDidLoaded) {
      this.viewDidLoaded = true;
    }
    // super.viewWillAppear(true);
  }

  viewDidLoad() {
		console.log('VIEW DID LOAD');
		super.viewDidLoad();
	}

  viewWillDisappear() {
		super.viewWillDisappear(true);
    if(this.dismissCallback) {
      this.dismissCallback();
    }
  }

  onClickCreate() {
    if (this.createChannelTypeSelector != null) {
      this.showCreateChannelTypeSelector();
      return;
    }

    const createChannelVC = CreateChannelViewController.newWithType(ChannelType.Group);
    // const createChannelVC = CreateChannelViewController.newWithType(ChannelType.Supergroup);
    this.navigationController.pushViewControllerAnimated(createChannelVC, true);
  }

  tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath) {
    const channelUrl = this.channelList[indexPath.row].channelUrl;
    const channelVC = new ChannelViewController(channelUrl);
    this.navigationController.pushViewControllerAnimated(channelVC, true);
  }
}

@NativeClass()
class ChannelViewController extends SBUChannelViewController {

  public static ObjCExposedMethods = {
    onClickSetting: { returns: interop.types.void, params: [] }
  };

  constructor(channelUrl: string) {
    super({channelUrl, messageListParams: null});
  }

  onClickSetting() {
    if (!this.channel) {
      return;
    }

    const channelVC = new ChannelSettingsViewController(this.channel);
    this.navigationController.pushViewControllerAnimated(channelVC, true);
  }

}

@NativeClass()
class ChannelSettingsViewController extends SBUChannelSettingsViewController {

  public static ObjCExposedMethods = {
    tableViewDidSelectRowAtIndexPath: { returns: interop.types.void, params: [UITableView, NSIndexPath]},
    /* tableViewHeightForRowAtIndexPath: { returns: interop.types.uint32, params: [UITableView, NSIndexPath]} */
  };

  constructor(channel: SBDGroupChannel) {
    super({channel});
  }

  loadView() {
    // this.tableViewCellForRowAtIndexPath()
    /* const cell = this.tableViewCellForRowAtIndexPath(this.tableView, new NSIndexPath({index: 0}))
    cell.removeFromSuperview(); */
    super.loadView();
  }

  /* tableViewHeightForRowAtIndexPath(tableView, indexPath) {
    console.log('AQUIII', indexPath.row);
    if(indexPath.row == 0) {
      return 0.0;
    } else {
      return 60
    }
  } */

  tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath) {
    console.log('-------------------');
    console.log('--OVERRIDE WORKED at least for tableViewDidSelectRowAtIndexPath. GREAT SUCCESS!!!!--');
    console.log('-------------------');

    if (!this.userInfoView) {
      return;
    }

    this.userInfoView.endEditing(true);

    const rowValue = indexPath.row + (this.isOperator ? 0 : 1);
    console.log('ROW value: ', rowValue);

    if (rowValue === ChannelSettingItemType.Members) {
      const memberListViewVC = new MemberListViewController(this.channel);
      this.navigationController.pushViewControllerAnimated(memberListViewVC, true);
    } else {
      super.tableViewDidSelectRowAtIndexPath(tableView, indexPath);
    }
  }
}

@NativeClass()
class MemberListViewController extends SBUMemberListViewController {

  public static ObjCExposedMethods = {
    onClickInviteUser: { returns: interop.types.void}
  };

  constructor(channel: SBDGroupChannel) {
    super({channel, type: ChannelMemberListType.ChannelMembers});
  }

  onClickInviteUser() {
    const channel = this.channel;
    if (!(channel instanceof SBDGroupChannel)) {
      return;
    }

    const type = this.memberListType === ChannelMemberListType.Operators ? ChannelInviteListType.Operators : ChannelInviteListType.Users;

    const inviteUserVC = new InviteUserViewController(channel, type);
    this.navigationController.pushViewControllerAnimated(inviteUserVC, true);
  }
}

@NativeClass()
class InviteUserViewController extends SBUInviteUserViewController {

  public static ObjCExposedMethods = {
    loadView: { returns: interop.types.void, params: [] },
  };

  constructor(channel: SBDGroupChannel, type: ChannelInviteListType) {
    super({channel, type});
  }

  loadView() {
    super.loadView();

    const searchBar = UISearchBar.alloc().init();
    searchBar.searchBarStyle = 0;
    searchBar.placeholder = " Search...";
    searchBar.sizeToFit();
    searchBar.backgroundImage = UIImage.alloc().init();
    searchBar.delegate = new UISearchBarDelegateImpl(this);
    this.tableView.tableHeaderView = searchBar;
  }

}

@NativeClass()
class CreateChannelViewController extends SBUCreateChannelViewController {

  public static ObjCExposedMethods = {
    loadView: { returns: interop.types.void, params: [] },
  };

  static newWithType(type: ChannelType): CreateChannelViewController {
    return this.alloc().initWithUsersType(null, type);
  }

  loadView() {
    super.loadView();

    const searchBar = UISearchBar.alloc().init();
    searchBar.searchBarStyle = 0;
    searchBar.placeholder = " Search...";
    searchBar.sizeToFit();
    searchBar.backgroundImage = UIImage.alloc().init();
    searchBar.delegate = new UISearchBarDelegateImpl(this);
    this.tableView.tableHeaderView = searchBar;
  }
}

@NativeClass()
class UISearchBarDelegateImpl extends NSObject implements UISearchBarDelegate {
  public static ObjCProtocols = [UISearchBarDelegate];

  constructor(private controller: CreateChannelViewController | InviteUserViewController) {
    super();
  }

  searchBarTextDidChange(searchBar: UISearchBar, searchText: string) {
    const listQuery = SBDMain.createApplicationUserListQuery();
    listQuery.nicknameStartsWithFilter = searchText;
    listQuery.loadNextPageWithCompletionHandler((data, error) => {
      if (error) {
        console.log('ERROR LOADING FILTERED USERS', error);
      }
      this.controller.loadNextUserListWithResetUsers(true, data['sbu_convertUserList']());
    });
  }

}

@NativeClass()
class MainChannelTabbarController extends UITabBarController {

  groupChannelsNavigationController;
  myChatroomsNavigationController;
  allChatroomsNavigationController;
  viewControllers;

  isDarkMode: boolean = false;
  dismissCallback: dismissCallback;
  filters: SendbirdFilters;
  _owner: WeakRef<any>;

  constructor(dismissCalback: dismissCallback, filters: SendbirdFilters) {
    super({coder: null});
    this.dismissCallback = dismissCalback;
    this.filters = filters;
  }

  static new(): MainChannelTabbarController {
		return <MainChannelTabbarController>super.new(); // calls new() on the NSObject
	}

  public static initWithOwner(owner: any): MainChannelTabbarController {
		let delegate = <MainChannelTabbarController>super.new();
		delegate._owner = new WeakRef(owner);
		return delegate;
	}

  viewDidLoad() {
		console.log('VIEW DID LOAD CHANNELS');
		super.viewDidLoad();

    const channelsViewController = new ChannelListViewController(null);
    // channelsViewController._owner = new WeakRef(this);
    channelsViewController.titleView = SBUNavigationTitleView.new();
    channelsViewController.titleView.text = "My chats";
    channelsViewController.titleView.textAlignment = NSTextAlignment.Center;

    /* MY SUPERGROUPS QUERY */
    let listQuery = SBDGroupChannel.createMyGroupChannelListQuery();
    listQuery.superChannelFilter = SBDGroupChannelSuperChannelFilter.Super;
    listQuery.includeEmptyChannel = true;
    let customFiltersArray = [];
    for (const key in this.filters) {
      if (Object.prototype.hasOwnProperty.call(this.filters, key)) {
        customFiltersArray.push(...this.filters[key].map(value => `${key}_${value}`));
      }
    }
    listQuery.customTypesFilter = new NSArray({array: customFiltersArray});
    /* MY SUPERGROUPS QUERY */

    const mySupergroupsViewController = new SupergroupChannelListViewController(null, this.filters, listQuery);
    mySupergroupsViewController.titleView = SBUNavigationTitleView.new();
    mySupergroupsViewController.titleView.text = "My chatrooms";
    mySupergroupsViewController.titleView.textAlignment = NSTextAlignment.Center;
    /* ALL SUPERGROUPS QUERY */

    /* ALL SUPERGROUPS QUERY */
    /* const allSupergroupsViewController = new SupergroupChannelListViewController(null, this.filters, listQuery);
    allSupergroupsViewController.titleView = UIView.new(); */

    this.groupChannelsNavigationController = new UINavigationController({rootViewController: channelsViewController });
    this.myChatroomsNavigationController = new UINavigationController({rootViewController: mySupergroupsViewController });
    /* this.allChatroomsNavigationController = new UINavigationController({rootViewController: allSupergroupsViewController }); */

    let tabbarItems = [this.groupChannelsNavigationController, this.myChatroomsNavigationController/* , this.allChatroomsNavigationController */];
    this.viewControllers = tabbarItems;

    this.setupStyles(channelsViewController, mySupergroupsViewController/* , allSupergroupsViewController */);

    SBDMain.addChannelDelegateIdentifier(this, 'Channel 1');

    // this.loadTotalUnreadMessageCount()
	}

  setupStyles(channelsViewController, mySupergroupsViewController/* , allSupergroupsViewController */) {
    // this.theme = SBUTheme.componentTheme;

    this.tabBar.barTintColor =
        UIColor.whiteColor;
    this.tabBar.tintColor = this.isDarkMode
        ? SBUColorSet.primary200
        : SBUColorSet.primary300

    channelsViewController.tabBarItem = this.createTabItem("My chats");
    // mySupergroupsViewController.leftBarButton = this.createLeftTitleItem("My Chatrooms");
    // mySupergroupsViewController.navigationItem.leftBarButtonItem = this.createLeftTitleItem("My Chatrooms");
    mySupergroupsViewController.tabBarItem = this.createTabItem("My chatrooms");

    /* allSupergroupsViewController.leftBarButton = this.createLeftTitleItem("All chatrooms");
    allSupergroupsViewController.navigationItem.leftBarButtonItem = this.createLeftTitleItem("All Chatrooms");
    allSupergroupsViewController.tabBarItem = this.createTabItem("All chatrooms"); */

    this.groupChannelsNavigationController.navigationBar.barStyle = this.isDarkMode
        ? UIColor.blackColor
        : UIColor.blueColor;
    this.myChatroomsNavigationController.navigationBar.barStyle = this.isDarkMode
        ? UIColor.blackColor
        : UIColor.blueColor;
    /* this.allChatroomsNavigationController.navigationBar.barStyle = this.isDarkMode
        ? UIColor.blackColor
        : UIColor.blueColor; */
  }

  createLeftTitleItem(text: string): UIBarButtonItem {
    let titleLabel = UILabel.new();
    titleLabel.text = text;
    titleLabel.font = UIFont.systemFontOfSizeWeight(18.0, UIFontWeightBold);
    titleLabel.textColor = UIColor.blackColor;
    return new UIBarButtonItem({customView: titleLabel});
  }

  createTabItem(type: any): UITabBarItem {
    let iconSize = CGSizeMake(24, 24);
    let title = type;
    let icon = type == "My chats"
      ? this.resizeImage(UIImage.imageNamed("iconChat"), iconSize)
      : type == "My chatrooms"
        ? this.resizeImage(UIImage.imageNamed("iconSupergroup"), iconSize)
        : this.resizeImage(UIImage.imageNamed("iconChatrooms"), iconSize);
    /* type == "My chats"
        ? (UIImage.imageNamed("iconChat") as any)//.sd_resizedImageWithSizeScaleMode(iconSize)
        : (UIImage.imageNamed("iconChannels") as any)//.sd_resizedImageWithSizeScaleMode(iconSize) */
    let tag = type == "Channels" ? 0 : 1

    let item = new UITabBarItem({title: title, image: icon, tag: tag});
    return item;
  }

  resizeImage(image: UIImage, targetSize: CGSize): UIImage {
    let size = image.size

    let widthRatio  = targetSize.width  / image.size.width
    let heightRatio = targetSize.height / image.size.height

    // Figure out what our orientation is, and use that to form the rectangle
    var newSize: CGSize
    if(widthRatio > heightRatio) {
        newSize = CGSizeMake(size.width * heightRatio, size.height * heightRatio);
    } else {
        newSize = CGSizeMake(size.width * widthRatio, size.height * widthRatio);
    }

    // This is the rect that we've calculated out and this is what is actually used below
    let rect = CGRectMake(0, 0, newSize.width, newSize.height);

    // Actually do the resizing to the rect using the ImageContext stuff
    UIGraphicsBeginImageContextWithOptions(newSize, false, 1.0)
    image.drawInRect(rect);
    let newImage = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();

    return newImage!;
  }

}

@NativeClass()
class SupergroupChannelListViewController extends SBUChannelListViewController implements SBUActionSheetDelegate {
  public static ObjCProtocols = [SBUActionSheetDelegate];
  public static ObjCExposedMethods = {
    viewDidLoad: { returns: interop.types.void, params: [] },
    onClickCreate: { returns: interop.types.void, params: [] },
	};

  _owner: WeakRef<any>;
  filters: SendbirdFilters;
  titleView: SBUNavigationTitleView;
  dismissCallback: dismissCallback;

  constructor(dismissCalback: dismissCallback, filters: SendbirdFilters, listQuery: any) {
    // listQuery.publicChannelFilter = SBDGroupChannelPublicChannelFilter.Public;
    super({channelListQuery: listQuery});
    this.filters = filters;
    this.dismissCallback = dismissCalback;
  }

  didSelectActionSheetItemWithIndexIdentifier(index: number, identifier: number): void {
    console.log('AQUIIII', index, identifier);

    // throw new Error('Method not implemented.');
  }

	static new(): ChannelListViewController {
		return <ChannelListViewController>super.new(); // calls new() on the NSObject
	}

	public static initWithOwner(owner: any): ChannelListViewController {
    let delegate = <ChannelListViewController>super.new();
		delegate._owner = new WeakRef(owner);
		return delegate;
	}

  viewWillAppear() {
    console.log('VIEW WILL APPEAR');
    SBUStringSet.ChannelList_Header_Title = 'Chat';
    SBUStringSet.CreateChannel_Header_Title = 'Start a chat';
    SBUStringSet.Empty_No_Messages = "Invite more fans to join your chatroom with the (i) icon above!";
    SBUStringSet.ChannelSettings_Freeze_Channel = "Messages from hosts only";
    SBUStringSet.MemberList_Title_Operators = "Hosts";
    SBUStringSet.ChannelSettings_Operators = "Hosts";
    SBUStringSet.ChannelSettings_Header_Title = "Chatroom information";
    SBUStringSet.ChannelSettings_Leave = "Leave chatroom";
    SBUStringSet.ChannelSettings_Change_Image = "Change chatroom image";
    SBUStringSet.ChannelSettings_Notifications = "Notifications (Coming Soon!)";
  }

  viewDidLoad() {
		console.log('VIEW DID LOAD');
		super.viewDidLoad();
    /* let listQuery = SBDGroupChannel.createMyGroupChannelListQuery();
    listQuery.superChannelFilter = SBDGroupChannelSuperChannelFilter.Super;
    listQuery.loadNextPageWithCompletionHandler( (groupChannels, error) => {

        debugger
        // A list of matching group channels is successfully retrieved.
        // Through the "groupChannels" parameter of the callback method,
        // you can access the data of each group channel from the result list that Sendbird server has passed to the callback method.
        //self.channels += groupChannels!
        // ...
    }) */
	}

  viewWillDisappear() {
		super.viewWillDisappear(true);
    if(this.dismissCallback) {
      this.dismissCallback();
    }
  }

  tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath) {
    const channelUrl = this.channelList[indexPath.row].channelUrl;
    const channelVC = new ChannelViewController(channelUrl);
    this.navigationController.pushViewControllerAnimated(channelVC, true);
  }

  onClickCreate() {
    console.log('CREATE CHANNEL CLICKED');

    let options: PromptOptions = {
      title: "Chatroom Name",
      defaultText: "",
      message: "Enter chatroom name",
      okButtonText: "Create",
      cancelButtonText: "Cancel",
      cancelable: true,
      inputType: inputType.text, // email, number, text, password, or email
      capitalizationType: capitalizationType.sentences // all. none, sentences or words
    };

    let fandomOptions = [];
    for (const key in this.filters) {
      if (Object.prototype.hasOwnProperty.call(this.filters, key) && key === 'fandom') {
        // const element = filters[key];
        fandomOptions.push(...this.filters['fandom']);
      }
    }
    if(fandomOptions.length > 1) {
      const actionItems = fandomOptions.map((fandom => {
        return new SBUActionSheetItem({
          title: `${fandom} Fandom`,
          color: null,
          image: null,
          font: null,
          textAlignment: null,
          completionHandler: () => {
            console.log(`SELLECTED ${fandom}`);
            let customType = `fandom_${fandom}`;
            prompt(options).then((result: PromptResult) => {
              console.log(`WRITE ${result.text} ${result.result}`);
              if(result.text && result.result) {
                this.createChannel(result.text, customType.toLowerCase());
              }
            });
          }
        });
      }));
      let cancelItem = new SBUActionSheetItem({
        title: SBUStringSet.Cancel,
        color: UIColor.blackColor,
        image: null,
        font: null,
        textAlignment: null,
        completionHandler: () => {
          console.log('SELLECTED CANCEL');
        }
      });

      SBUActionSheet.showWithItemsCancelItemIdentifierOneTimethemeDelegate(
        actionItems,
        cancelItem,
        1,
        SBUComponentTheme.light,
        this
      )
    } else if(fandomOptions.length === 1) {
      prompt(options).then((result: PromptResult) => {
        if(result.text) {
          let customType = `fandom_${fandomOptions[0]}`;
          this.createChannel(result.text, customType.toLowerCase());
        }
      });
    }

  }

  createChannel(channelName: string, customType) {
    let params = new SBDGroupChannelParams();
    params.isSuper = true
    params.isPublic = true
    params.name = channelName;
    params.customType = customType;

    SBDGroupChannel.createChannelWithParamsCompletionHandler(params, (groupChannel, error) => {
      let channelUrl = groupChannel?.channelUrl;
      SBUMain.openChannelWithChannelUrlBasedOnChannelListMessageListParams(
        channelUrl,
        false,
        null
      )
      // SUCCESS ON CREATION
    })

  }
}

/* @NativeClass()
class OpenChannelListViewController extends SBUChannelListViewController {

  public static ObjCExposedMethods = {
    viewDidLoad: { returns: interop.types.void, params: [] },
    onClickCreate: { returns: interop.types.void, params: [] },
	};

  _owner: WeakRef<any>;
  dismissCallback: dismissCallback;

  constructor(dismissCalback: dismissCallback) {
    // let listQuery = SBDGroupChannel.createMyGroupChannelListQuery()
    // listQuery.superChannelFilter = SBDGroupChannelSuperChannelFilter.Super;
    // listQuery.includeEmptyChannel = true;
    // // listQuery.publicChannelFilter = SBDGroupChannelPublicChannelFilter.Public;
    // super({channelListQuery: listQuery});
    super({channelListQuery: null});
    this.dismissCallback = dismissCalback;
  }

	static new(): ChannelListViewController {
		return <ChannelListViewController>super.new(); // calls new() on the NSObject
	}

	public static initWithOwner(owner: any): ChannelListViewController {
    let delegate = <ChannelListViewController>super.new();
		delegate._owner = new WeakRef(owner);
		return delegate;
	}

  viewDidLoad() {
		console.log('VIEW DID LOAD');
		super.viewDidLoad();
    // let listQuery = SBDOpenChannel.createOpenChannelListQuery()!

    // listQuery.loadNextPageWithCompletionHandler((openChannels, error) => {


    //     // A list of open channels is successfully retrieved.
    //     // Through the "openChannels" parameter of the callback method,
    //     // you can access the data of each open channel from the result list that Sendbird server has passed to the callback method.
    //     // this.channels += openChannels!
    //     debugger
    //     this.updateChannelsNeedReload(openChannels as any, true)
    //     // this.channelList += channels;
    //     // data['sbu_convertUserList']()
    // })
    // let listQuery = SBDGroupChannel.createMyGroupChannelListQuery();
    // listQuery.superChannelFilter = SBDGroupChannelSuperChannelFilter.Super;
    // listQuery.loadNextPageWithCompletionHandler( (groupChannels, error) => {

    //     debugger
    //     // A list of matching group channels is successfully retrieved.
    //     // Through the "groupChannels" parameter of the callback method,
    //     // you can access the data of each group channel from the result list that Sendbird server has passed to the callback method.
    //     //self.channels += groupChannels!
    //     // ...
    // })
	}

  viewWillDisappear() {
		super.viewWillDisappear(true);
    if(this.dismissCallback) {
      this.dismissCallback();
    }
  }

  onClickCreate() {
    console.log('CREATE CHANNEL CLICKED');

    if (this.createChannelTypeSelector != null) {
      this.showCreateChannelTypeSelector();
      return;
    }

    console.log('SUPPORT SUPER', SBUAvailable.isSupportSuperGroupChannel());
    console.log('SUPPORT BROADCAST', SBUAvailable.isSupportBroadcastChannel());

    const createChannelVC = CreateChannelViewController.newWithType(ChannelType.Group);
    // const createChannelVC = CreateChannelViewController.newWithType(ChannelType.Supergroup);
    this.navigationController.pushViewControllerAnimated(createChannelVC, true);
  }
} */

@NativeClass()
class OpenChannelChattingViewController extends UIViewController implements SBDChannelDelegate {
	public static ObjCProtocols = [SBDChannelDelegate];
	public static ObjCExposedMethods = {
    viewDidLoad: { returns: interop.types.void, params: [] },
		channelDidReceiveMessage: { returns: SBDBaseMessage, params: [] },
	};

  _owner: WeakRef<SBDBaseChannel>;
  static channelUrl;
	// agoraKit: AgoraRtcEngineKit;

	static new(): OpenChannelChattingViewController {
		return <OpenChannelChattingViewController>super.new(); // calls new() on the NSObject
	}

	public static initWithOwner(owner: SBDBaseChannel, channelUrl): OpenChannelChattingViewController {
		let delegate = <OpenChannelChattingViewController>super.new();
    this.channelUrl = channelUrl;
		delegate._owner = new WeakRef(owner);
		return delegate;
	}

  viewDidLoad() {
		console.log('VIEW DID LOAD', OpenChannelChattingViewController.channelUrl);
		super.viewDidLoad();
    SBDMain.addChannelDelegateIdentifier(this, OpenChannelChattingViewController.channelUrl);
	}

  channelDidReceiveMessage(sender: SBDBaseChannel, message: SBDBaseMessage) {
    console.log('ARRIVED MESSAGE', message);
  }

}
