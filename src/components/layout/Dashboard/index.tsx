import type { FunctionComponent, ReactNode } from 'react';

import style from './style.module.css';

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout: FunctionComponent<DashboardLayoutProps> = ({
    children,
}) => {
    return (
        <main className={style.main}>
            <header className={style.sidebar}>
                <nav>This is a sidebar.</nav>
            </header>
            <section className={style.profile}>
                This is the user profile.
            </section>
            <section className={style.content}>{children}</section>
        </main>
    );
};

export default DashboardLayout;
