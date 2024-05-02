'use client';

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';

import { Switcher, Notification, UserAvatar } from '@carbon/icons-react';


const GlobalHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Spell Binder">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName href="/" prefix="Miners Online">
          Spell Binder
        </HeaderName>
        <HeaderNavigation aria-label="Spell Binder">
          {/* <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem> */}
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              {/* <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem> */}
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
				<HeaderGlobalBar>
				<HeaderGlobalAction
					aria-label="Notifications"
					tooltipAlignment="center"
					className="action-icons"
				>
					<Notification size={20} />
				</HeaderGlobalAction>
					<HeaderGlobalAction
						aria-label="User Avatar"
						tooltipAlignment="center"
						className="action-icons"
					>
						<UserAvatar size={20} />
						</HeaderGlobalAction>
						<HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
							<Switcher size={20} />
						</HeaderGlobalAction>
					</HeaderGlobalBar>
      </Header>
    )}
  />
);

export default GlobalHeader;
