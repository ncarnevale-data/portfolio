import photo from "../assets/photo.jpeg";

const About = () => {
  return (
    <section className="mx-auto max-w-7xl" id="about">
      <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2">
        <div className="my-auto space-y-4">
          <h3 className="text-2xl ">Data Scientist & Web Developer</h3>
          <h1 className="text-4xl font-bold">Nicolás Carnevale</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            laboriosam animi soluta magnam dolorum non. Officiis reiciendis ab,
            omnis aperiam expedita veritatis, quam, nulla facere iure ducimus
            iste aliquam fuga? Accusamus, inventore illum. Dignissimos nihil
            aspernatur ipsam iste quas saepe?
          </p>
        </div>
        <div>
          <img
            src={photo}
            alt="Nicolás Carnevale"
            className="mx-auto max-h-96 overflow-hidden rounded-full"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default About;
