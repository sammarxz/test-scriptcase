import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';

import Tab from '../Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.defaultActiveIndex,
    };
  }

  handleTabClick = (tabIndex) => {
    const { activeIndex } = this.state;
    const { onClick } = this.props;

    if (tabIndex !== activeIndex) {
      this.setState({ activeIndex: tabIndex });
    }

    if (onClick) {
      onClick(tabIndex);
    }
  }

  cloneTabElement = (tab, index = 0) => {
    const { activeIndex } = this.state;

    return (
      cloneElement(tab, {
        onClick: () => this.handleTabClick(index),
        tabIndex: index,
        isActive: index === activeIndex,
      })
    );
  }

  renderChildrenTabs = () => {
    const { children } = this.props;
    if (!Array.isArray(children)) {
      return this.cloneTabElement(children);
    }

    return children.map(this.cloneTabElement);
  }

  renderActiveTabContent() {
    const { children } = this.props;
    const { activeIndex } = this.state;

    console.log(Array.isArray(children));

    if (children[activeIndex]) {
      return children[activeIndex].props.children;
    }

    return children.props.children;
  }

  render() {
    const { className } = this.props;
    // const cssClass = cx('tabs', className);

    return (
      <section className={className}>
        <ul className="tabs__list">
          {this.renderChildrenTabs()}
        </ul>
        <div className="tabs__content">
          {this.renderActiveTabContent()}
        </div>
      </section>
    );
  }
}

Tabs.Tab = Tab;

Tabs.defaultProps = {
  defaultActiveIndex: 0,
  className: '',
};

Tabs.propTypes = {
  className: PropTypes.string,
  defaultActiveIndex: PropTypes.number,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tabs;