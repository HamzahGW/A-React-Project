import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import SharedLayout from "@/views/pages/SharedLayout/SharedLayout";
import { ERoutesCommon, FULL_ROUTES } from "@tx/util-models";
import { DirectionProvider } from "@radix-ui/react-direction";
import { AppWrapper } from "@tx/lib";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs";
import { StartYourProject } from "./pages/StartYourProject";
import InvestmentPhilosophy from "./pages/Home/InvestmentPhilosophy";
import WhoAreWe from "./pages/Home/WhoAreWe";
import History from "./pages/Home/History";
import OurFounders from "./pages/Home/OurFounders";
import Director from "./pages/Home/Director";
import Reports from "./pages/Home/Reports";
import Business from "./pages/Home/Business";
import Faq from "./pages/Home/Faq";

import TermsAndConditions from "./pages/Home/TermsAndConditions";
import Cookies from "./pages/Home/Cookies";
import PrivacyPolicy from "./pages/Home/PrivacyPolicy";
import InTheMedia from "./pages/Home/InTheMedia";
import Jobs from "./pages/Home/Jobs";
import OrganizationChart from "./pages/Home/OrganizationChart";
import BoardMembers from "./pages/Home/BoardMembers";
import AssetManagement from "./pages/Home/AssetManagement";
import InvestmentBanking from "./pages/Home/InvestmentBanking";
import OurFunds from "./pages/Home/OurFunds";
import WealthManagement from "./pages/Home/WealthManagement";
import OurStoryExtended from "./pages/Home/OurStoryExtended";
import { ExtremeResponsive } from "@tx/ui-components";
import { useWindowSize } from "@tx/util-hooks";

function App() {
  const windowSize = useWindowSize();
  return (
    <AppWrapper>
      <DirectionProvider dir="rtl">
        <Routes>
          <Route path="/contact_us" element={<ContactUs />} />

          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={
                <ExtremeResponsive minWidth={530}>
                  <Home />
                </ExtremeResponsive>
              }
            />

            <Route
              path={FULL_ROUTES.INVESTMENT_PHILOSOPHY}
              element={<InvestmentPhilosophy />}
            />
            <Route path={FULL_ROUTES.who_are_we} element={<WhoAreWe />} />
            <Route path={FULL_ROUTES.OUR_HISTORY} element={<History />} />
            <Route path={FULL_ROUTES.OUR_BUSINESS} element={<Business />} />
            <Route path={FULL_ROUTES.FAQ} element={<Faq />} />
            <Route
              path={FULL_ROUTES.TERMS_AND_CONDITIONS}
              element={<TermsAndConditions />}
            />
            <Route path={FULL_ROUTES.COOKIES_POLICY} element={<Cookies />} />
            <Route
              path={FULL_ROUTES.PRIVACY_POLICY}
              element={<PrivacyPolicy />}
            />
            <Route
              path={FULL_ROUTES.OUR_FOUNDERS.base}
              element={<OurFounders />}
            />
            <Route
              path={FULL_ROUTES.OUR_STORY}
              element={<OurStoryExtended />}
            />
            <Route
              path={FULL_ROUTES.OUR_FOUNDERS.director}
              element={<Director />}
            />
            <Route path={FULL_ROUTES.reports.base} element={<Reports />} />

            <Route path={FULL_ROUTES.news.base}
            element={<InTheMedia/>}
             />

            <Route path={FULL_ROUTES.jobs.base} element={<Jobs />} />
            <Route
              path={FULL_ROUTES.organization_chart.base}
              element={<OrganizationChart />}
            />
            <Route
              path={FULL_ROUTES.board_members.base}
              element={<BoardMembers />}
            />
            <Route
              path={FULL_ROUTES.asset_management.base}
              element={<AssetManagement />}
            />
            <Route
              path={FULL_ROUTES.investment_banking.base}
              element={<InvestmentBanking />}
            />
            <Route
              path={FULL_ROUTES.wealth_management.base}
              element={<WealthManagement />}
            />
            <Route path={FULL_ROUTES.our_funds.base} element={<OurFunds />} />
          </Route>
        </Routes>
      </DirectionProvider>
    </AppWrapper>
  );
}

export default App;
