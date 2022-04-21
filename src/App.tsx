import classes from './app.module.css';
import SafeView from './lib';

function App() {
  return (
    <div className={classes.container}>
      <SafeView accessKey='so'>
        <div className={classes.box}>
          <h1 data-safe>Hello World</h1>
        </div>
      </SafeView>
    </div>
  );
}

export default App;
