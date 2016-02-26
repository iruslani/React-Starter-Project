import AppComponent   from './app/components/App';
import IndexComponent from './app/components/Index';
import AboutComponent from './app/components/About';
import HelloComponent from './app/components/HelloWorld';

const routes = {
  path: '',
  component: AppComponent,
  childRoutes: [
    {
      path: '/',
      component: IndexComponent
    },
    {
      path: '/about',
      component: AboutComponent
    },
    {
      path: '/json',
      component: HelloComponent
    }
  ]
}

export { routes };
