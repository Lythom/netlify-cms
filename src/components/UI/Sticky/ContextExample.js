export default class StickyContext() {
  updateStickies = (updateSubscribers) => {
    const stickyContextTop = ref.getBoundingClientRect().top;
    updateSubscribers({ stickyContextTop });
  };

  handleScroll = (event) => {
    this.

  render() {
    return (
      asContext(<
      <Context onUpdate={this.updateStickies} ref={(ref) => {this.ref = ref}}>
        {this.props.children}
      </Context>
    );
  }
}
