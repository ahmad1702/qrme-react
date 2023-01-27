import React from 'react'
import { Navbar, Link, Text, Avatar, Dropdown, Button } from "@nextui-org/react";
import { QrCodeIcon, SunIcon } from '@heroicons/react/24/solid';
import DarkModeToggle from './DarkModeToggle';
import { useNavigate } from 'react-router-dom';
type Props = {}

const CustomNav = (props: Props) => {
    const navigate = useNavigate();
    const collapseItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];
    return (
        <Navbar isBordered variant="sticky">
            <Navbar.Toggle showIn="sm" />
            <Navbar.Brand
                css={{
                    "@sm": {
                        w: "12%",
                    },
                }}
            >
                <div
                    onClick={(e) => navigate('/')}
                    className="flex items-center hover:text-neutral-500 duration-300"
                >
                    <QrCodeIcon className='w-8 h-8 mr-1' />
                    <div
                        className='text-3xl font-extrabold tracking-tighter cursor-pointer'
                    >
                        QRme
                    </div>
                </div>
            </Navbar.Brand>
            <Navbar.Content
                enableCursorHighlight
                activeColor="primary"
                hideIn="sm"
                variant="highlight-rounded"
            >
                <Navbar.Link href="createcontact">Create</Navbar.Link>
                <Navbar.Link isActive href="#">
                    Customers
                </Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Company</Navbar.Link>
            </Navbar.Content>
            {false ? (
                <Navbar.Content
                    css={{
                        "@sm": {
                            w: "12%",
                            jc: "flex-end",
                        },
                    }}
                >
                    <Dropdown placement="bottom-right">
                        <Navbar.Item>
                            <Dropdown.Trigger>
                                <Avatar
                                    bordered
                                    as="button"
                                    color="primary"
                                    size="md"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                />
                            </Dropdown.Trigger>
                        </Navbar.Item>
                        <Dropdown.Menu
                            aria-label="User menu actions"
                            color="primary"
                            onAction={(actionKey) => console.log({ actionKey })}
                        >
                            <Dropdown.Item key="profile" css={{ height: "$18" }}>
                                <Text b color="inherit" css={{ d: "flex" }}>
                                    Signed in as
                                </Text>
                                <Text b color="inherit" css={{ d: "flex" }}>
                                    zoey@example.com
                                </Text>
                            </Dropdown.Item>
                            <Dropdown.Item key="settings" withDivider>
                                My Settings
                            </Dropdown.Item>
                            <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                            <Dropdown.Item key="analytics" withDivider>
                                Analytics
                            </Dropdown.Item>
                            <Dropdown.Item key="system">System</Dropdown.Item>
                            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
                            <Dropdown.Item key="help_and_feedback" withDivider>
                                Help & Feedback
                            </Dropdown.Item>
                            <Dropdown.Item key="logout" withDivider color="error">
                                Log Out
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Content>
            ) : (
                <Navbar.Content>
                    <Navbar.Link color="inherit" href="#">
                        Login
                    </Navbar.Link>
                    <Navbar.Item>
                        <Button
                            auto
                            flat
                            as={Link}
                            href="#"
                        // css={{
                        //     color: 'white'
                        // }}>
                        >
                            Sign Up
                        </Button>
                    </Navbar.Item>
                    <Navbar.Item>
                        <DarkModeToggle />
                    </Navbar.Item>
                </Navbar.Content>
            )}
            <Navbar.Collapse css={{zIndex: '10000000'}}>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem
                        key={item}
                        activeColor="primary"
                        css={{
                            color: index === collapseItems.length - 1 ? "$error" : "",
                        }}
                        isActive={index === 2}
                    >
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href="#"
                        >
                            {item}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default CustomNav