function Home ({}) {
    return (
        <main>
        <section id="text_center">
            <img src="img/titulo (1).png" alt=""/>
            <p>
                O site com as receitas para você!!
            </p>
        </section>
        <p className="receitas">Receitas</p>
        <div className="container_slider">
            <button id="prev_btn"><img src="img/carrosel/arrow.png" alt="prev"/></button>
            <div className="container_images" >
                <section className="cards slider on" alt="teste1">
                    <div className="card_receita">
                            <h1>Molho Pesto</h1>
                            <h3>Ingredientes</h3>
                            <ul className="qnt">
                                <li className="ingredientes">4 dentes de alho</li>
                                <li className="ingredientes">1 xicara (chá) de folhas de manjericão fresco</li>
                                <li className="ingredientes">100 g de queijo pecorino ou parmesão ralado</li>
                                <li className="ingredientes">1 colher (chá) de sal</li>
                                <li className="ingredientes">3 colheres (chá) de pinoli ou nozes sem casca</li>
                                <li className="ingredientes">1/2 (chá) de azeite</li>
                                <li className="ingredientes">Pimenta-do-reino a gosto</li>
                            </ul>
                    </div>
                    <div className="card_preparo">
                            <h1>Modo de preparo</h1>
                            <ul className="prep">
                                <li className="descr">Corte a cebola roxa em rodelas ou tirar e deixe de molho em água gelada por aproximadamente 15 minutos. Depois escorra com o auxílio de uma peneira</li>
                                <li className="descr">Pique a polpa do coco em pedaços grandes. Junte com o pimentão e a pimenta cambuci. Depois, misture com o gengibre e a cebola roxa escorrida</li>
                                <li className="descr">Tempere com sal e pimenta. Acrecente o suco de limão, misture e deixe na geladeira por pelo menos 1 hora</li>
                                <li className="descr">Antes de servir regue com azeite, e coloque a salsinha picada</li>
                            </ul>
                    </div>
                </section>
                <section className="cards slider" alt="teste2">
                    <div className="card_receita">
                            <h1>Molho Pesto</h1>
                            <h3>Ingredientes</h3>
                            <ul className="qnt">
                                <li className="ingredientes">4 dentes de alho</li>
                                <li className="ingredientes">1 xicara (chá) de folhas de manjericão fresco</li>
                                <li className="ingredientes">100 g de queijo pecorino ou parmesão ralado</li>
                                <li className="ingredientes">1 colher (chá) de sal</li>
                                <li className="ingredientes">3 colheres (chá) de pinoli ou nozes sem casca</li>
                                <li className="ingredientes">1/2 (chá) de azeite</li>
                                <li className="ingredientes">Pimenta-do-reino a gosto</li>
                            </ul>
                    </div>
                    <div className="card_preparo">
                            <h1>Modo de preparo</h1>
                            <ul className="prep">
                                <li className="descr">Corte a cebola roxa em rodelas ou tirar e deixe de molho em água gelada por aproximadamente 15 minutos. Depois escorra com o auxílio de uma peneira</li>
                                <li className="descr">Pique a polpa do coco em pedaços grandes. Junte com o pimentão e a pimenta cambuci. Depois, misture com o gengibre e a cebola roxa escorrida</li>
                                <li className="descr">Tempere com sal e pimenta. Acrecente o suco de limão, misture e deixe na geladeira por pelo menos 1 hora</li>
                                <li className="descr">Antes de servir regue com azeite, e coloque a salsinha picada</li>
                            </ul>
                    </div>
                </section>
                <section className="cards slider" alt="teste3">
                    <div className="card_receita">
                            <h1>Molho Pesto</h1>
                            <h3>Ingredientes</h3>
                            <ul className="qnt">
                                <li className="ingredientes">4 dentes de alho</li>
                                <li className="ingredientes">1 xicara (chá) de folhas de manjericão fresco</li>
                                <li className="ingredientes">100 g de queijo pecorino ou parmesão ralado</li>
                                <li className="ingredientes">1 colher (chá) de sal</li>
                                <li className="ingredientes">3 colheres (chá) de pinoli ou nozes sem casca</li>
                                <li className="ingredientes">1/2 (chá) de azeite</li>
                                <li className="ingredientes">Pimenta-do-reino a gosto</li>
                            </ul>
                    </div>
                    <div className="card_preparo">
                            <h1>Modo de preparo</h1>
                            <ul className="prep">
                                <li className="descr">Corte a cebola roxa em rodelas ou tirar e deixe de molho em água gelada por aproximadamente 15 minutos. Depois escorra com o auxílio de uma peneira</li>
                                <li className="descr">Pique a polpa do coco em pedaços grandes. Junte com o pimentão e a pimenta cambuci. Depois, misture com o gengibre e a cebola roxa escorrida</li>
                                <li className="descr">Tempere com sal e pimenta. Acrecente o suco de limão, misture e deixe na geladeira por pelo menos 1 hora</li>
                                <li className="descr">Antes de servir regue com azeite, e coloque a salsinha picada</li>
                            </ul>
                    </div>
                </section>
            </div>
            <button id="next_btn"><img src="img/carrosel/arrow.png" alt="next"/></button>
        </div>
    </main>
    )
}