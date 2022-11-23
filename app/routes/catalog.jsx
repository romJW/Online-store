export default function Index() {
   
    return (
        <Route path='/catalog'>
        <div
          style={{
            fontFamily: 'inter-regular, sans-serif',
            lineHeight: '1.4',
            fontSize: '18px',
          }}>
            
            <ModalCityContext.Provider value={{ isCityModalOpen, setCityModalOpen }}>
            <MobileMenuContext.Provider value={{ isMobileMenuOpen, SetMobileMenuOpen }}>
              <Header />
              </MobileMenuContext.Provider>
          
          <Hero />
          <MainSection />
          <Slider />
          <div className="relative"> 
          <Consult
            text={
              <>
                <p className="font-bold">Получите консультацию по вашему объекту уже сегодня.</p>
                <p>
                  Оставьте заявку и наш менеджер свяжется с вами чтобы <br /> проконсультировать и
                  рассчитать стоимость
                </p>
              </>
            }
          />
          <div className='absolute right-[1px] top-[-50px]'>
              <img src='assets/circles.svg' alt='' className=''/>
            </div>
          </div>
          <BoardDescription />
          <MontageBlock />
          <About />
          <FormBlock />
          <SliderReview />
          <DeliveryBlock />
          <SliderLicense />
          <Consult
            title="Получите консультацию"
            text={
              <>
                <p>
                  <span className="font-bold">по вашему объекту уже сегодня.</span> Оставьте заявку и
                  наш менеджер <br /> свяжется с вами чтобы проконсультировать и рассчитать стоимость
                </p>
              </>
            }
          />
          <NewsBlock />
          <Map />
          <Subscribe />
          <Footer />
          </ModalCityContext.Provider>
        </div>
        </Route>
      );
    }
    