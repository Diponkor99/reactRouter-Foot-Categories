import img from"../../../assets/top-view-table-full-delicious-food-composition_23-2149141352.avif"
const About = () => {
    return (
        <div>
            <h1>About Us </h1>
      
        {/* Section ---1--Start */}
        <section className="flex flex-wrap items-center justify-center p-6 gap-6 p-6 bg-gray-100">
            <div className="md:w-2/3 p-6 overflow-hidden leading-relaxed ">
                <p>Chances are you have bought one of Sun-Brite Canning Limited’s products. The Ruthven facility produces canned tomatoes, sauces, condiments, beans and pasta, just to name a few. Its brand names include Unico and Primo, and its client list includes Campbell’s and Heinz. Its products make their way to stores from the Maritimes to Vancouver Island. So how has this local business succeeded in the ever-competitive food industry? “Success is based on honesty, integrity and hard work,” says Henry Iacobelli, president and founder of Sun-Brite. Iacobelli started the cannery with his wife, Lina, in 1973.</p>
                <p>The couple, who met in a local cannery where they both worked, bought a failing cannery facility and worked in the plant alongside their employees. “Everything was done by hand. We had 30 ladies peeling tomatoes,” Iacobelli says. That first year, the 5,000 square-foot plant produced 33,000 cases of canned whole tomatoes. These days, the processing facility is now 140,000 square feet, plus 300,000 square-feet of warehouse, and produces 70,000 cases of tomato products a day. Growth has not come overnight, but gradually over the past three decades as Sun-Brite upgraded to new, more efficient processing technology, added new products and took opportunities to expand its operations. One such opportunity came in 1997, when Sun-Brite bought Unico Inc., one of its larges customers. As the market became tougher, Sun-Brite management knew they needed to expand their business with a brand name product to remain competitive. The Unico acquisition provided that opportunity, with a long-standing, recognizable brand that has helped double sales over the last decade. Started in 1917 by Edward Pasquale, Unico’s product line includes pastas, cooking oils, tomatoes, beans, peas, fish, marinades and rice.</p>

                <p>In 1993, Sun-Brite and a group of employees bought local Countryside Canners Co. Ltd., in a profit sharing purchase that has “done very well for [the employees],” Iacobelli says. In August, the company also purchased Primo, which along with a variety of products added a pasta-making plant to the Sun-Brite facilities.</p>

                <p>Growth has not just come from acquisitions, however. Research and development have been key to producing quality products cost-effectively and efficiently, allowing Sun-Brite to increase its production volume. “We put a lot of time and effort into R & D,” says John Iacobelli, Henry’s son and director of sales and logistics. “We reinvest a lot of money.”</p>

                <p>Sun-Brite’s research and development includes new equipment and technology, new product lines and working with customers to develop new recipes for items such as pizza and pasta sauces. During the past year, Sun-Brite has updated its labels, both to modernize the designs and to comply to the government’s new nutritional labeling regulations. The company also introduced several new products, including new pasta sauces, tomatoes packed in thicker juices with seasonings, and new condiments under the Unico brand. “Whatever we can come up with that will complement our existing products,” John says. “We’re on track for some good growth we’ve increased sales [in 2006] by seven to eight percent, which is really good in our business.”</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <img src={img} alt="fdf"  className="rounded-xl"/>
            </div>
        </section>


        </div>
    );
};

export default About;