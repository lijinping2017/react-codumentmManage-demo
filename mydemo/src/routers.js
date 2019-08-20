import Home from './pages/Home/index';
import Login from './pages/LoginPage/index';
import Register from './pages/RegisterPage/index';
import CompanyIntro from './pages/CompanyIntro/index';
	import Develop from './pages/CompanyIntro/MiddleContent/components/Develop';
	import Organize from './pages/CompanyIntro/MiddleContent/components/Organize';
	import Teamwork from './pages/CompanyIntro/MiddleContent/components/Teamwork';
	import Teamintro from './pages/CompanyIntro/MiddleContent/components/Teamintro';
import TypicalCase from './pages/TypicalCase/index';
import TypicalCaseDetail from './pages/TypicalCase/components/TypicalCaseDetail';
import Solution from './pages/Solution/index';
import SolutionDetail from './pages/Solution/components/SolutionDetail';
import WhitePaper from './pages/WhitePaper/index';
import WhitePaperDetail from './pages/WhitePaper/components/WhitePaperDetail';
import DevelopService from './pages/DevelopService/index';

const routeConfig =[
	{ 
		path:'/',
	　　 component: Home,
	　　 childRoutes:[],
		exact: true
　　  },
	{ 
		path:'/user/login',
	　　 component: Login,
	　　 childRoutes:[]
　　  },
	{ 
		path:'/user/register',
	　　  component: Register,
	　　  childRoutes:[]
　　  },
	{ 
		path:'/companyIntro/',
	　　  component: CompanyIntro,
	　　  childRoutes: [
			{
				path: "/companyIntro/",
				component: Develop
			},
			{
				path: "/companyIntro/organize",
				component: Organize
			},
			{
				path: "/companyIntro/teamwork",
				component: Teamwork
			},
			{
				path: "/companyIntro/teamintro",
				component: Teamintro
			}
		]
　　  },
	{ 
		path:'/typicalCase',
	　　  component: TypicalCase,
	　　  childRoutes:[],
		exact: true
　　  },
	{ 
		path:'/typicalCase/:id',
	　　 	component: TypicalCaseDetail,
		childRoutes:[]
　　  },
	{ 
		path:'/solution',
	　　  component: Solution,
	　　  childRoutes:[],
		exact: true
　　  },
	{ 
		path:'/solution/:id',
	　　 	component: SolutionDetail,
		childRoutes:[]
　　  },
	{ 
		path:'/whitePaper',
	　　  component: WhitePaper,
	　　  childRoutes:[],
		exact: true
　　  },
	{ 
		path:'/whitePaper/:id',
	　　 	component: WhitePaperDetail,
		childRoutes:[]
　　  },
	{ 
		path:'/developService',
	　　 	component: DevelopService,
		childRoutes:[]
　　  }
];

export default routeConfig;
