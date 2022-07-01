import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  PlayCircleOutlineOutlined,
  List,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Tableau de Bord</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Accueil
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytique
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Ventes
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu Rapide</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Utilisateurs
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <PlayCircleOutlineOutlined className="sidebarIcon" />
                Films
              </li>
            </Link>
            <li className="sidebarListItem">
              <List className="sidebarIcon" />
              Lists
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Rapports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Email
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback | Retour Info
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff | Retour données</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              gestion
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytique
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Rapports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
