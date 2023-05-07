import { MdCalendarMonth, MdCelebration, MdDiversity3, MdInsights, MdMonetizationOn, MdPerson, MdTaskAlt } from "react-icons/md";

export const NavLinks = [
  { title: "Dashboard", link: "/", icon: MdInsights },
  { title: "Perfil", link: "/profile", icon: MdPerson },
  { title: "Equipe", link: "/team", icon: MdDiversity3 },
  { title: "Finanças", link: "/balance", icon: MdMonetizationOn },
  { title: "Eventos", link: "/events", icon: MdCelebration },
  { title: "Tarefas", link: "/tasks", icon: MdTaskAlt },
  { title: "Agenda", link: "/calendar", icon: MdCalendarMonth }
]