
import Feed from 'components/Feed';
const Home= () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            A Creative Pen
            <br className="max-md:hidden"/>
            {<span className="orange_gradient text-center">Publish your passions, your way</span> }
        </h1>
        <p className="desc text-center">
           . COME FOR WHAT YOU LOVE  heyyyyyy.
           <br/>
          . STAY FOR WHAT YOU DISCOVER . hhhhh
        </p>
        <Feed/>

    </section>
  )
}

export default Home