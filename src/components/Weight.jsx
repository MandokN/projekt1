import Header from "./Header";
import '../app.css'

function Weight() {
    return (
        <>
        <Header />
        <section className='main_block' id='weight'>
            <div className='main_block--how'>
              <h3>MASA</h3>
              <p>Konwerter masy jest narzędziem, które umożliwia dokonywanie szybkich i precyzyjnych przeliczeń pomiędzy 
                różnymi jednostkami masy. Ten interaktywny komponent został zaprojektowany w formie aplikacji internetowej, 
                aby ułatwić użytkownikom przekształcanie wartości masy z jednej jednostki na inną w sposób wygodny i 
                intuicyjny. Dzięki temu konwerterowi, użytkownicy mogą wprowadzać wartości mas w różnych jednostkach, 
                takich jak kilogramy, funty, uncje czy gramy, a następnie wybrać jednostkę docelową, do której chcą 
                przeliczyć daną masę. Komponent automatycznie wykonuje konwersję i prezentuje wynik w wybranej jednostce, 
                zapewniając tym samym szybkie rozwiązanie dla codziennych potrzeb związanych z przeliczaniem masy.
              </p>
              <p>Instrukcja:</p>
              <ol>
                <li>Wybierz jednostkę wejściową: Wybierz jednostkę masy, z której chcesz przeliczyć wartość.
                   Możliwe opcje obejmują kilogramy (kg), funty (lb), uncje (oz) i gramy (g).</li>
                <li>Wprowadź wartość: Wprowadź wartość masy, którą chcesz przeliczyć. Możesz wpisać wartość 
                  numeryczną w polu tekstowym.</li>
                <li>Wybierz jednostkę wyjściową: Wybierz jednostkę masy, na którą chcesz przeliczyć wartość.
                   Możesz wybrać dowolną jednostkę spośród wymienionych powyżej.</li>
                <li>Kliknij przycisk przelicz: Po wprowadzeniu wartości i wybraniu jednostek, kliknij przycisk 
                  "Przelicz". Narzędzie wyświetli przeliczoną wartość w jednostce wyjściowej.</li>
                <li>Wyświetlenie wyniku: Przeliczona wartość pojawi się na ekranie, umożliwiając łatwe 
                  odczytanie wyniku.</li>
              </ol>
            </div>
            <div className='main_block--count'>
              <input type='number'></input>
               <select value='unit' defaultValue='kg'>
                <option value='kg'>kilogram (kg)</option>
                <option value='lb'>funt (lb)</option>
                <option value='oz'>uncja (oz)</option>
                <option value='g'>gram (g)</option>
              </select>
              =
              <input type='number'></input>
              <select value='unit' defaultValue='kg'>
                <option value='kg'>kilogram (kg)</option>
                <option value='lb'>funt (lb)</option>
                <option value='oz'>uncja (oz)</option>
                <option value='g'>gram (g)</option>
              </select>
            </div>
            <div className='main_block--button'>
              <input type='button' value='przelicz' className='btn'/>
            </div>
          </section>
        </>
    )
}

export default Weight;