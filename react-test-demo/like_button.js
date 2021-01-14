const e = React.createElement;

function LikeButton () {

  return e(
    'button',
    { onClick: () => this.setState({ liked: true }) },
    'Like'
  );
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(App), domContainer);