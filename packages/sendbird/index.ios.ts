import { SendbirdCommon, APP_ID } from './common';
import { Utils, Frame } from '@nativescript/core';

export class Sendbird extends SendbirdCommon {

  sendbirdChannel: SBDOpenChannel;
  delegate: OpenChannelChattingViewController;

  connect(userId: string): Promise<{data: SBDUser}> {
    return new Promise((resolve, reject) => {
      SBDMain.connectWithUserIdCompletionHandler(userId, (user, error) => {
            // Handle error.
            if(error) {
              reject(error)
            }
            console.log('User is connected');
            resolve({data: user})
        // The user is connected to Sendbird server.
      })
    })
  }

  createChannel(): Promise<{data: string}> {
    return new Promise((resolve, reject) => {
      SBDOpenChannel.createChannelWithCompletionHandler((openChannel, error) => {
        if(error) {
          console.log('Sendbird Result Error');
          reject(error)
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
          console.log('updateUnreadCount Error', error);
          reject({ error });
        }
        console.log('TOTAL COUNT', totalCount);

        resolve({ data: totalCount })
      })
    })
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

  launch() {
    const app = UIApplication.sharedApplication;
    const win = app.keyWindow || (app.windows && app.windows.count > 0 && app.windows.objectAtIndex(0));
    let viewController = win.rootViewController;
    /* let channelTheme = new SBUChannelTheme({navigationBarTintColor: SBUColorSet.primary300});

    let messageCellTheme = SBUMessageCellTheme(
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
    SBUTheme.channelTheme.backgroundColor = SBUColorSet.background100;

    // Message cell theme.
    SBUTheme.messageCellTheme.backgroundColor = SBUColorSet.background100;

    // Message input theme.
    SBUTheme.messageInputTheme.backgroundColor = SBUColorSet.background100;

    this.delegateUi = ChannelListViewController.initWithOwner(this);
    this.delegateUi._owner = new WeakRef(this);
    let naviVC = new UINavigationController({rootViewController: this.delegateUi });
    Utils.ios.getVisibleViewController(viewController).presentViewControllerAnimatedCompletion(naviVC, true, () => { console.log('COMPLETIONNNN'); });
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
    //const communityChannelsController = CommunityChannelListViewController.initWithOwner(this);
    const communityChannelsController = new CommunityChannelListViewController();
    debugger
    communityChannelsController._owner = new WeakRef(this);
    channelsViewController.titleView = UIView.new();
    channelsViewController.leftBarButton = this.createLeftTitleItem("Channels");

    this.channelsNavigationController = new UINavigationController({rootViewController: channelsViewController });
    this.communityNavigationController = new UINavigationController({rootViewController: communityChannelsController });

    let tabbarItems = [this.channelsNavigationController, this.communityNavigationController];
    this.viewControllers = tabbarItems;

    this.setupStyles(channelsViewController, communityChannelsController);

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
    channelsViewController.navigationItem.leftBarButtonItem = this.createLeftTitleItem("Channels");
    channelsViewController.tabBarItem = this.createTabItem("Channels")

    communityChannelsController.navigationItem.leftBarButtonItem = this.createLeftTitleItem("Community");
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
    let title = type == "Channels" ? "Channels" : "Community"
    let icon = type == "Channels"
        ? (UIImage.imageNamed("iconChatFilled") as any)//.sd_resizedImageWithSizeScaleMode(iconSize)
        : (UIImage.imageNamed("iconChannels") as any)//.sd_resizedImageWithSizeScaleMode(iconSize)
    let tag = type == "Channels" ? 0 : 1

    let item = new UITabBarItem({title: title, image: icon, tag: tag});
    return item;
  }

}

@NativeClass()
class MySettingsViewController extends UIViewController implements UINavigationControllerDelegate {
  public static ObjCProtocols = [UINavigationControllerDelegate];

  _owner: WeakRef<any>;

  static new(): MySettingsViewController {
		return <MySettingsViewController>super.new(); // calls new() on the NSObject
	}

  public static initWithOwner(owner: any): MySettingsViewController {
		let delegate = <MySettingsViewController>super.new();
		delegate._owner = new WeakRef(owner);
		return delegate;
	}

  viewDidLoad() {
		console.log('VIEW DID LOAD SETTINGS');
		super.viewDidLoad();
	}
}

@NativeClass()
class CommunityChannelListViewController extends SBUBaseChannelListViewController implements SBUEmptyViewDelegate, SBDChannelDelegate, UITableViewDataSource, UITableViewDelegate {
  public static ObjCProtocols = [SBUEmptyViewDelegate, SBDChannelDelegate, UITableViewDataSource, UITableViewDelegate];

  _owner: WeakRef<any>;
  theme: SBUChannelListTheme = SBUTheme.channelListTheme

  channelList = [];
  channelListQuery: SBDOpenChannelListQuery;

  tableView = UITableView.alloc().init();
  channelCell: SBUBaseChannelCell = new CommunityChannelCell();

  rightBarButton: UIBarButtonItem = new UIBarButtonItem({
    image: SBUIconSet.iconCreate, //.resize(CGSizeMake(24, 24)),
    style: UIBarButtonItemStyle.Plain,
    target: this,
    action: this.onClickCreate.bind(this)
  });

  emptyView = this.emptyViewBuilder();

  isLoading = false
  limit = 20;

  static new(): CommunityChannelListViewController {
		return <CommunityChannelListViewController>super.new(); // calls new() on the NSObject
	}

  constructor() {
    super({coder: null});
  }

  emptyViewBuilder() {
    let emptyViewAux = SBUEmptyView.new();
    emptyViewAux.type = EmptyViewType.None;
    // emptyViewAux.delegate = this;
    return emptyViewAux;
  }

  public static initWithOwner(owner: any): CommunityChannelListViewController {
		let delegate = <CommunityChannelListViewController>super.new();
		delegate._owner = new WeakRef(owner);
		return delegate;
	}

  viewDidLoad() {
    console.log('VIEW DID LOAD COMMUNITY');
    super.viewDidLoad()

    this.navigationController.interactivePopGestureRecognizer.delegate = null;

    SBUMain.connectionCheckWithCompletionHandler((user, error) => {
        // guard let self = self else { return }

      SBDMain.addChannelDelegateIdentifier(this, this.description);
      this.loadNextChannelList(true);
    })
  }

  loadView() {
    super.loadView()

    // tableview
    debugger
    this.tableView.delegate = this;
    // this.tableView.dataSource = this;
    this.tableView.bounces = false
    this.tableView.alwaysBounceVertical = false
    // this.tableView.separatorStyle = .none
    this.tableView.backgroundView = this.emptyView;
    this.tableView.rowHeight = UITableViewAutomaticDimension;
    this.tableView.estimatedRowHeight = 44.0;
    this.view.addSubview(this.tableView);

    /* this.tableView.registerClassForCellReuseIdentifier(
      (this.channelCell as any),
      (this.channelCell as any).sbu_className
    ) */

    // navigation bar
    this.navigationItem.rightBarButtonItem = this.rightBarButton

    // autolayout
    this.setupAutolayout()

    // Styles
    this.setupStyles()
  }

  viewWillAppear(animated: boolean) {
    super.viewWillAppear(animated)
    this.setNeedsStatusBarAppearanceUpdate()
    this.tabBarController.tabBar.hidden = false;

    this.updateStyles();
  }

  viewDidLayoutSubviews() {
    super.viewDidLayoutSubviews()

    this.setupStyles();
  }

  viewDidAppear(animated: boolean) {
    super.viewDidAppear(animated);
    this.tabBarController.tabBar.hidden = false;
  }

  viewWillDisappear(animated: boolean) {
    super.viewWillDisappear(animated);
    this.tabBarController.tabBar.hidden = false;
  }

  setupStyles() {
    this.theme = SBUTheme.channelListTheme

    this.navigationController.navigationBar.setBackgroundImageForBarMetrics(
        UIImage.new().imageWithTintColor(this.theme.navigationBarTintColor),
        UIBarMetrics.Default
    )
    this.navigationController.navigationBar.shadowImage = UIImage.new().imageWithTintColor(this.theme.navigationBarShadowColor);

    this.rightBarButton.tintColor = this.theme.rightBarButtonTintColor

    this.view.backgroundColor = this.theme.backgroundColor;
    this.tableView.backgroundColor = this.theme.backgroundColor;
  }

  updateStyles() {
    this.theme = SBUTheme.channelListTheme;

    this.setupStyles();

    this.reloadTableView();
  }

  showChannel(channelUrl: string, messageListParams: SBDMessageListParams = null) {
    let channelVC = new SBUOpenChannelViewController({channelUrl: channelUrl, messageListParams: messageListParams});

    this.navigationController.presentModalViewControllerAnimated(channelVC, true);
  }

  async reloadTableView() {
    await this.tableView.reloadData();
  }

  loadNextChannelList(reset: boolean) {
    if (this.isLoading) { return }
    this.setLoading(true, false)

    if (reset) {
        this.channelListQuery = null;
        this.channelList = []
    }

    if (this.channelListQuery == null) {
        this.channelListQuery = SBDOpenChannel.createOpenChannelListQuery();
        this.channelListQuery.limit = this.limit;
        this.channelListQuery.customTypeFilter = "SB_COMMUNITY_TYPE";
    }

    if(!this.channelListQuery?.hasNext) {
      this.setLoading(false, false)
      return;
    }

    this.channelListQuery?.loadNextPageWithCompletionHandler((channels: any, error) => {
        //defer { this?.setLoading(false, false) }
        this.setLoading(false, false);

        /* guard error == nil else {
            this?.showNetworkError()
            return
        } */
        // guard let channels = channels else { return }

        this.channelList.push(...channels);
        // this.sortChannelList(needReload: true)
    })
  }

  setLoading(loadingState: boolean, showIndicator: boolean) {
    this.isLoading = loadingState
    if(!showIndicator) { return };

    /* if (loadingState) {
        SBULoading.alloc().init().start()
    } else {
        SBULoading.stop()
    } */
  }

  didSelectRetry() {
    if (this.emptyView instanceof SBUEmptyView) {
      this.emptyView.reloadData(EmptyViewType.NoChannels);
    }

    SBUMain.connectionCheckWithCompletionHandler((user, error) => {
        this.loadNextChannelList(true);
    })
  }

  onClickCreate() {
    let createChannelVC = CreateCommunityChannelViewController.new();
    this.navigationController.presentModalViewControllerAnimated(createChannelVC, true);
  }


  sortChannelList(needReload: boolean) {
      /* let sortedChannelList = self.channelList
          .sorted(by: { (lhs: SBDOpenChannel, rhs: SBDOpenChannel) -> Bool in
              let createdAt1 = lhs.createdAt
              let createdAt2 = rhs.createdAt
              return createdAt1 > createdAt2
          })

      self.channelList = sortedChannelList.sbu_unique()
      DispatchQueue.main.async { [weak self] in
          guard let self = self else { return }

          if let emptyView = self.emptyView as? SBUEmptyView {
              emptyView.reloadData((self.channelList.count == 0) ? .noChannels : .none)
          }

          guard needReload else { return }

          self.tableView.reloadData()
      } */
  }

  upsertChannels(channels?: [SBDOpenChannel], needReload?: boolean) {
    if(!channels) {
      return;
    }
    let channelsAux = channels;

    /* for channel in channels {
        guard let index = self.channelList.firstIndex(of: channel) else {
            self.channelList.append(channel)
            continue
        }
        self.channelList.append(self.channelList.remove(at: index))
    }
    self.sortChannelList(needReload: needReload) */
  }

  deleteChannels(channelUrls?: [string], needReload?: boolean) {
    if(!channelUrls) {
      return;
    }
    let channelsUrlsAux = channelUrls;
    let toBeDeleteIndexes = [];
    channelsUrlsAux.forEach((channelUrl, index) => {
      if(index === this.channelList.findIndex(x => x.channelUrl === channelUrl )) {
        toBeDeleteIndexes.push(index);
      }
    });
    // for remove from last
    let sortedIndexes = toBeDeleteIndexes.sort().reverse();
    sortedIndexes.forEach(element => {
      this.channelList.splice(element, 1);
    });

    this.sortChannelList(needReload);
  }

  showNetworkError() {
    this.channelListQuery = null;
    this.channelList = [];
    if(this.emptyView instanceof SBUEmptyView) {
      this.emptyView.reloadData(EmptyViewType.Error);
    }

    this.reloadTableView();
  }


  channel(sender: SBDOpenChannel, user: SBDUser) {
      this.upsertChannels([sender], true);
  }

  channelWasDeleted(channelUrl: string, channelType: SBDChannelType) {
    if(channelType !== SBDChannelType.Open) {
      return;
    }
    this.deleteChannels([channelUrl], true)
    // this.navigationController.popViewController(animated: true)
  }

  channelWasFrozen(sender: SBDBaseChannel) {
    if(!(sender instanceof SBDOpenChannel)) {
      return;
    }
    let channel = sender;
    this.upsertChannels([channel], true)
  }

  channelWasUnfrozen(sender: SBDBaseChannel) {
    if(!(sender instanceof SBDOpenChannel)) {
      return;
    }
    let channel = sender;
    this.upsertChannels([channel], true);
  }

  /* Table View */
  tableViewDidDeselectRowAtIndexPath(tableView, indexPath: any) {
    let channel = this.channelList[indexPath.row];
    this.showChannel(channel.channelUrl);
  }

  tableViewCellForRowAtIndexPath(tableView, indexPath: any): UITableViewCell {
    let channel = this.channelList[indexPath.row];

    var cell: CommunityChannelCell = null;

    cell = tableView.dequeueReusableCellWithIdentifier('this.channelCell') as CommunityChannelCell;

    /* cell?.selectionStyle = .none
    cell?.configure(channel: channel) */
    return cell ?? UITableViewCell.new();
  }

  tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: any) {
    /* guard !self.channelList.isEmpty else { return }
    guard let query = channelListQuery else { return }
    guard query.hasNext else { return }
    guard indexPath.row == (self.channelList.count - Int(self.limit) / 2) else { return }
    guard !self.isLoading else { return }

    self.loadNextChannelList(reset: false) */
  }

  tableViewNumberOfRowsInSection(tableView: UITableView, section: any) {
    tableView.backgroundView.hidden = !(this.channelList.length === 0);

    return this.channelList.length;
  }
}

@NativeClass()
class CommunityChannelCell extends SBUBaseChannelCell {
  channelImage = SBUCoverImageView.new();
  titleHStack: UIStackView = this.buildTitle();
  channelNameLabel = UILabel.new();
  freezeIcon = UIImageView.new();
  separatorLine = UIView.new();
  channelImageSize = 32;
  leadingPadding = 16;
  freezIconSize = 16;

  buildTitle() {
    let titleHStack = UIStackView.new();
    titleHStack.alignment = UIStackViewAlignment.Center;
    titleHStack.spacing = 8.0;
    titleHStack.axis = UILayoutConstraintAxis.Horizontal;
    return titleHStack
  }

  constructor() {
    super({coder: null});
  }

  static new(): CommunityChannelCell {
		return <CommunityChannelCell>super.new(); // calls new() on the NSObject
	}

  awakeFromNib() {
    super.awakeFromNib()
  }

  setupViews() {
    //super.setupViews();

    this.channelImage.clipsToBounds = true
    this.channelImage.frame = CGRectMake(0, 0, this.channelImageSize, this.channelImageSize);

    this.freezeIcon.hidden = true;
    this.titleHStack.addArrangedSubview(this.channelNameLabel)
    this.titleHStack.addArrangedSubview(this.freezeIcon)

    this.contentView.addSubview(this.channelImage)
    this.contentView.addSubview(this.titleHStack)
    this.contentView.addSubview(this.separatorLine)
  }

  setupActions() {
    // super.setupActions()
  }

  setupAutolayout() {
    /* super.setupAutolayout()

    self.channelImage
        .sbu_constraint(equalTo: self.contentView,
                        left: leadingPadding,
                        top: 10,
                        bottom: 10)
        .sbu_constraint(width: channelImageSize,
                        height: channelImageSize)

    self.titleHStack
        .sbu_constraint(equalTo: self.contentView,
                        right: 16,
                        top: 15)
        .sbu_constraint_equalTo(leadingAnchor: self.channelImage.trailingAnchor,
                                leading: leadingPadding)
    self.separatorLine
        .sbu_constraint(equalTo: self.contentView, trailing: 0, bottom: 0.5)
        .sbu_constraint(height: 0.5)
        .sbu_constraint(equalTo: self.titleHStack, leading: 0)

    self.freezeIcon
        .sbu_constraint(width: freezIconSize,
                        height: freezIconSize)

    self.channelNameLabel
        .setContentCompressionResistancePriority(.defaultLow, for: .horizontal) */
}

/// This function handles the initialization of styles.
  setupStyles() {
    /* super.setupStyles()

    self.theme = SBUTheme.channelCellTheme

    self.backgroundColor = theme.backgroundColor

    self.channelNameLabel.font = theme.titleFont
    self.channelNameLabel.textColor = theme.titleTextColor

    self.freezeIcon.image = SBUIconSet.iconFreeze.sbu_with(
        tintColor: theme.freezeStateTintColor
    )

    self.separatorLine.backgroundColor = theme.separatorLineColor */
  }

  layoutSubviews() {
    super.layoutSubviews();

    this.setupStyles();
  }

  configure(channel: SBDBaseChannel) {
    /* super.configure(channel: channel)

    guard let channel = channel as? SBDOpenChannel else { return }

    // Cover image
    if let coverURL = channel.coverUrl {
        self.channelImage.setImage(with: coverURL)
    } else {
        self.channelImage.setPlaceholderImage(iconSize: CGSize(width: 40, height: 40))
    }
    self.channelNameLabel.text = channel.name
    self.freezeIcon.isHidden = self.channel?.isFrozen == false */
  }

  setSelected(selected: boolean, animated: boolean) {
    // super.setSelected(selected, animated: animated)
  }

  prepareForReuse() {
    super.prepareForReuse();
  }

}

@NativeClass()
class CreateCommunityChannelViewController extends UIViewController implements UINavigationControllerDelegate {
  public static ObjCProtocols = [UINavigationControllerDelegate];

  titleView: SBUNavigationTitleView = this.buildTitleView();
  leftBarButton: UIBarButtonItem = this.buildLeftBarButton();
  rightBarButton: UIBarButtonItem = this.buildRightBarButton();
  coverImageButton: UIButton = this.buildCoverImageButton();
  coverImageSize = 80;
  channelNameField = UITextField.new();
  theme: SBUUserListTheme = SBUTheme.userListTheme
  customType: string = "SB_COMMUNITY_TYPE"
    // MARK: - Logic properties (Private)
  hasCoverImage = false;

  static new(): CreateCommunityChannelViewController {
		return <CreateCommunityChannelViewController>super.new(); // calls new() on the NSObject
	}

  buildTitleView() {
    let titleView: SBUNavigationTitleView = SBUNavigationTitleView.new();
    /* if SBUAvailable.(iOS 11, *) {
        titleView = SBUNavigationTitleView()
    } else {
        titleView = SBUNavigationTitleView(
            frame: CGRect(x: 0, y: 0, width: self.view.bounds.width, height: 50)
        )
    } */
    titleView.text = SBUStringSet.CreateChannel_Header_Title_Profile
    titleView.textAlignment = NSTextAlignment.Center;
    return titleView;
  }

  buildLeftBarButton() {
    let barButtinItem = new UIBarButtonItem({
      title: SBUStringSet.Cancel,
      style: UIBarButtonItemStyle.Plain,
      target: this,
      action: this.onClickBack.bind(this)
    });
    // barButtinItem.setTitleTextAttributes([.font : SBUFontSet.button2], for: .normal)
    return barButtinItem;
  }

  buildRightBarButton() {
    let barButtinItem = new UIBarButtonItem({
      title: SBUStringSet.CreateChannel_Create(0),
      style: UIBarButtonItemStyle.Plain,
      target: this,
      action: this.onClickCreate.bind(this)
    });
    barButtinItem.enabled = false;
    // barButtinItem.setTitleTextAttributes([.font : SBUFontSet.button2], for: .normal)
    return barButtinItem
  }

  buildCoverImageButton() {
    let button = UIButton.new();
    button.setImageForState(
        SBUIconSet.iconCamera
            /* .sbu_with(tintColor: self.theme.coverImageTintColor)
            .resize(with: .init(width: self.coverImageSize, height: self.coverImageSize))
            .withBackground(
                color: self.theme.coverImageBackgroundColor,
                margin: 24,
                circle: true
        ), */,
        UIControlState.Normal
    )
    // button.addTarget(self, action: #selector(selectChannelImage), for: .touchUpInside)
    button.layer.cornerRadius = this.coverImageSize / 2;
    button.layer.masksToBounds = true
    return button
  }

  loadView() {
    super.loadView()

    // navigation bar
    this.navigationItem.leftBarButtonItem = this.leftBarButton
    this.navigationItem.rightBarButtonItem = this.rightBarButton
    this.navigationItem.titleView = this.titleView

    // components
    // this.channelNameField.addTarget(this, action: #selector(onEditingChangeTextField(_:)), for: .editingChanged)
    this.channelNameField.clearButtonMode = UITextFieldViewMode.WhileEditing;
    this.view.addSubview(this.coverImageButton)
    this.view.addSubview(this.channelNameField)

    // autolayout
    this.setupAutolayout()

    // Styles
    this.setupStyles()
  }

  setupAutolayout() {
    /* this.coverImageButton.sbu_constraint(
        equalTo: this.view,
        left: 15,
        top: 15
    )

    this.coverImageButton.sbu_constraint(
        width: coverImageSize,
        height: coverImageSize
    )

    this.channelNameField.sbu_constraint(
        equalTo: this.coverImageButton,
        top: 0,
        bottom: 0
    )

    this.channelNameField.sbu_constraint_equalTo(
        leadingAnchor: this.coverImageButton.trailingAnchor,
        leading: 15,
        trailingAnchor: this.view.trailingAnchor,
        trailing: -15
    ) */
  }

  setupStyles() {
    this.theme = SBUTheme.userListTheme;

    this.navigationController.navigationBar.setBackgroundImageForBarMetrics(
      UIImage.new().imageWithTintColor(this.theme.navigationBarTintColor),
      UIBarMetrics.Default
    );
    this.navigationController.navigationBar.shadowImage = UIImage.new().imageWithTintColor(this.theme.navigationShadowColor);
    this.leftBarButton.tintColor = this.theme.leftBarButtonTintColor;
    this.rightBarButton.tintColor = this.theme.barButtonDisabledTintColor;

    this.titleView.backgroundColor = this.theme.backgroundColor;


    /* this.channelNameField.attributedPlaceholder = NSAttributedString(
        string: SBUStringSet.ChannelSettings_Enter_New_Channel_Name,
        attributes: [
            NSAttributedString.Key.foregroundColor: theme.placeholderTintColor
        ]
    ); */
    this.channelNameField.textColor = this.theme.textfieldTextColor
  }

  updateStyles() {
    this.theme = SBUTheme.userListTheme

    this.setupStyles()

    this.titleView.setupStyles()
  }

  viewDidLoad() {
    super.viewDidLoad()

    this.navigationController.interactivePopGestureRecognizer.delegate = null;

    let tap = new UITapGestureRecognizer({target: this, action: this.onTapBackground.bind(this)})
    this.view.addGestureRecognizer(tap)
  }

  viewWillAppear(animated: boolean) {
    super.viewWillAppear(animated);
    this.setNeedsStatusBarAppearanceUpdate();

    this.updateStyles();
  }

  createChannel() {
    if (SBDMain.getConnectState() == SBDWebSocketConnectionState.Closed) {
        this.showError("The Internet connection appears to be offline.");
        return
    }

    let channelName = this.channelNameField.text.trim();

    /* let coverImage = (
        this.hasCoverImage
            ? this.coverImageButton
                .imageView?
                .image?
                .jpegData(compressionQuality: 1.0)
            : Data()
        ) ?? Data()
     */
    this.rightBarButton.enabled = false;
    // SBULoading.start()

    SBDOpenChannel.createChannelWithNameChannelUrlCoverImageCoverImageNameDataOperatorUserIdsCustomTypeProgressHandlerCompletionHandler(
        channelName,
        null,
        null,//coverImage,
        "cover_image",
        null,
        [SBUGlobals.CurrentUser?.userId ?? ""],
        this.customType,
        (channel, error) => {
          console.log('PROGRESS HANDLER');

          /* guard let this = this else { return }
          this.rightBarButton.isEnabled = true
          // SBULoading.stop()

          if let error = error { this.showError(error.localizedDescription) }

          guard let channel = channel else { return }
          SBUMain.moveToChannel(
              channelUrl: channel.channelUrl,
              basedOnChannelList: false,
              channelType: .open
          ) */
        },
        (channel, error) => {
          console.log('COMPLETION HANDLER');
        }
    )
  }
  onClickCreate() {
    this.createChannel();
  }

  onClickBack() {
    /* if let navigationController = self.navigationController,
        navigationController.viewControllers.count > 1 {
        navigationController.popViewController(animated: true)
    }
    else {
        self.dismiss(animated: true, completion: nil)
    } */
  }

  selectChannelImage() {
    /* let removeItem = SBUActionSheetItem(
      title: SBUStringSet.RemovePhoto,
      color: theme.removeColor,
      textAlignment: .center,
      completionHandler: nil
  )
  let cameraItem = SBUActionSheetItem(
      title: SBUStringSet.TakePhoto,
      textAlignment: .center,
      completionHandler: nil
  )
  let libraryItem = SBUActionSheetItem(
      title: SBUStringSet.ChoosePhoto,
      textAlignment: .center,
      completionHandler: nil
  )
  let cancelItem = SBUActionSheetItem(
      title: SBUStringSet.Cancel,
      color: theme.itemColor,
      completionHandler: nil
  )

  self.view.endEditing(true)

  SBUActionSheet.show(
      items: self.hasCoverImage
          ? [removeItem, cameraItem, libraryItem]
          : [cameraItem, libraryItem],
      cancelItem: cancelItem,
      delegate: self
  ) */
  }

  onEditingChangeTextField(sender: UITextField) {
    /* self.rightBarButton.isEnabled = !(sender.text?.isEmpty == true)
    self.rightBarButton.tintColor = sender.text?.isEmpty == true
        ? theme.barButtonDisabledTintColor
        : theme.barButtonTintColor */
  }


  showError(message: String) {
    /* let okButton = SBUAlertButtonItem(title: SBUStringSet.OK) { _ in }

    SBUAlertView.show(
        title: message,
        confirmButtonItem: okButton,
        cancelButtonItem: nil
    ) */
  }

  onTapBackground(sender: UITapGestureRecognizer = null) {
    this.view.endEditing(true);
  }
}

@NativeClass()
class ChannelListViewController extends SBUChannelListViewController {

  public static ObjCExposedMethods = {
    viewDidLoad: { returns: interop.types.void, params: [] },
	};

  _owner: WeakRef<any>;
	// agoraKit: AgoraRtcEngineKit;

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
}
