import classes from './app.module.css';
import SafeView from './lib';

function App() {
  return (
    <div className={classes.container}>
      <SafeView accessKey='so' filter='blur'>
        <div className={classes.box}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
            laborum illo recusandae ullam, quas quos! Aliquid a, nihil tempore
            accusamus facere hic earum assumenda soluta perferendis itaque
            explicabo reprehenderit. Nostrum, aperiam voluptatem optio saepe
            recusandae veritatis reprehenderit error quo commodi eligendi dolore
            nemo eum ullam? Culpa odit reprehenderit dolore labore ab molestiae
            nam fugit tempora, quo,
            <strong data-safe>
              deserunt amet repudiandae saepe doloremque dignissimos praesentium
              quidem nulla!
            </strong>
            Quasi aliquam soluta delectus pariatur, sint, sequi maxime error
            magni, inventore animi beatae architecto aspernatur? Enim quis nemo
            tempore qui, rem, ducimus, magni deleniti illo odio consectetur
            eveniet optio incidunt. Facere natus commodi soluta amet?
          </p>
        </div>
      </SafeView>
    </div>
  );
}

export default App;
