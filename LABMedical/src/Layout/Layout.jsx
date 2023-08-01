import { Outlet } from "react-router-dom";
import * as Styled from './Layout.style';
import { Sidebar } from '../Components/OthersComponents/Sidebar/SideBar.jsx';
import  Toolbar  from '../Components/OthersComponents/Toolbar/Toolbar.jsx';

export const Layout = () => {
    const render = () => {
        return (
            <Styled.App>
                <Styled.SidebarBox>
                    <Sidebar/>
                </Styled.SidebarBox>
                <Styled.Main>
                    <Styled.Header>
                        <Toolbar/>
                    </Styled.Header>
                    <Styled.Content>
                        <Outlet/>
                    </Styled.Content>
                </Styled.Main>
            </Styled.App>
        )
    }
    return render();
}
