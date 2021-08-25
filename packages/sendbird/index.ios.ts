import { SendbirdCommon, APP_ID, dismissCallback } from './common';
import { Utils, Frame } from '@nativescript/core';

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
    SBUStringSet.ChannelList_Header_Title = 'Chat';
    SBUStringSet.Empty_No_Messages = "You haven't messaged this person yet\r\nPop them a line byt typing below";
    SBUIconSet.iconMessage = null;
    this.delegateUi = new ChannelListViewController(callback);
    this.delegateUi._owner = new WeakRef(this);
    let naviVC = new UINavigationController({ rootViewController: this.delegateUi });
    naviVC.modalPresentationStyle = UIModalPresentationStyle.FullScreen;
    Utils.ios.getVisibleViewController(viewController).presentViewControllerAnimatedCompletion(naviVC, true, () => { console.log('COMPLETIONNNN'); });
  }

  launchChannel(channelUrl: string) {
    const app = UIApplication.sharedApplication;
    const win = app.keyWindow || (app.windows && app.windows.count > 0 && app.windows.objectAtIndex(0));
    let viewController = win.rootViewController;

    const delegateUi = new SBUChannelViewController({channelUrl, messageListParams: null});
    //this.delegateUi.initWithChannelUrlMessageListParams(channelUrl, null);
    //delegateUi._owner = new WeakRef(this);

    let naviVC = new UINavigationController({ rootViewController: delegateUi });
    naviVC.modalPresentationStyle = 0 // FullScreen;
    Utils.ios.getVisibleViewController(viewController).presentViewControllerAnimatedCompletion(naviVC, true, () => { console.log('View channel completed') });
  }

  launchTabs() {
    const app = UIApplication.sharedApplication;
    const win = app.keyWindow || (app.windows && app.windows.count > 0 && app.windows.objectAtIndex(0));
    let viewController = win.rootViewController;
    this.delegateTabsUi = MainChannelTabbarController.initWithOwner(this);
    this.delegateTabsUi._owner = new WeakRef(this);
    //let naviVC = new UINavigationController({rootViewController: this.delegateTabsUi });
    this.delegateTabsUi.modalPresentationStyle = UIModalPresentationStyle.FullScreen;
    Utils.ios.getVisibleViewController(viewController).presentViewControllerAnimatedCompletion(this.delegateTabsUi, true, () => { console.log('COMPLETIONNNN'); });
  }
}
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

@NativeClass()
class ChannelListViewController extends SBUChannelListViewController {

  public static ObjCExposedMethods = {
    viewDidLoad: { returns: interop.types.void, params: [] },
	};

  _owner: WeakRef<any>;
  dismissCallback: dismissCallback;

  constructor(dismissCalback: dismissCallback) {
    super({channelListQuery: null})
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

	}

  viewWillDisappear() {
    console.log('VIEW WILLL DISAPPEAR');
		super.viewWillDisappear(true);
    if(this.dismissCallback) {
      this.dismissCallback();
    }
  }
}

@NativeClass()
class MainChannelTabbarController extends UITabBarController {
  /* channelsViewController;
  settingsViewController; */

  channelsNavigationController;
  communityNavigationController;
  viewControllers;


  // theme: SBUComponentTheme = SBUTheme.componentTheme;
  isDarkMode: boolean = false;

  _owner: WeakRef<any>;

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
    // ._owner = new WeakRef(this);
    const channelsViewController = ChannelListViewController.initWithOwner(this);
    channelsViewController._owner = new WeakRef(this);
    /* const communityChannelsController = new CommunityChannelListViewController();
    debugger
    communityChannelsController._owner = new WeakRef(this); */
    const channels2ViewController = ChannelListViewController.initWithOwner(this);
    channelsViewController._owner = new WeakRef(this);
    channelsViewController.titleView = UIView.new();
    channelsViewController.leftBarButton = this.createLeftTitleItem("Channels");

    this.channelsNavigationController = new UINavigationController({rootViewController: channelsViewController });
    this.communityNavigationController = new UINavigationController({rootViewController: channels2ViewController });

    let tabbarItems = [this.channelsNavigationController, this.communityNavigationController];
    this.viewControllers = tabbarItems;

    this.setupStyles(channelsViewController, channels2ViewController);

    SBDMain.addChannelDelegateIdentifier(this, 'Channel 1');

    // this.loadTotalUnreadMessageCount()
	}

  setupStyles(channelsViewController, communityChannelsController) {
    // this.theme = SBUTheme.componentTheme;

    this.tabBar.barTintColor =
        UIColor.whiteColor;
    this.tabBar.tintColor = this.isDarkMode
        ? SBUColorSet.primary200
        : SBUColorSet.primary300
    channelsViewController.navigationItem.leftBarButtonItem = this.createLeftTitleItem("My chats");
    channelsViewController.tabBarItem = this.createTabItem("Channels")

    communityChannelsController.navigationItem.leftBarButtonItem = this.createLeftTitleItem("My chatrooms");
    communityChannelsController.tabBarItem = this.createTabItem("Community");

    this.channelsNavigationController.navigationBar.barStyle = this.isDarkMode
        ? UIColor.blackColor
        : UIColor.blueColor;
    this.communityNavigationController.navigationBar.barStyle = this.isDarkMode
        ? UIColor.blackColor
        : UIColor.blueColor;
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
    let title = type == "Channels" ? "My chats" : "My chatrooms"
    let icon = type == "Channels"
        ? (UIImage.imageNamed("iconChannels") as any)//.sd_resizedImageWithSizeScaleMode(iconSize)
        : (UIImage.imageNamed("iconChannels") as any)//.sd_resizedImageWithSizeScaleMode(iconSize)
    let tag = type == "Channels" ? 0 : 1

    let item = new UITabBarItem({title: title, image: icon, tag: tag});
    return item;
  }

}
