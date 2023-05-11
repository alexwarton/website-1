import React from 'react'

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="root">
        <main>{children}</main>
        </div>
    )
}