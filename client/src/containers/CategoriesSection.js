import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { ArrowUp } from "../svg/ArrowUp";
import { PageWidth } from "../components/PageWidth";

function CategoriesSection({ categories }) {
    return (
        <section>
            <h1 className="my-8 text-center text-3xl font-semibold text-gray-800 lg:text-4xl">
                Our Collections
            </h1>
            <div className="my-32 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-3 lg:gap-8">
                {categories.map((categorie, index) => (
                    <>
                    <Link to={`/categories/${categorie.id}`}>
                        <Card radius="sm" key={index} shadow="none" isPressable className="bg-[#FEEFFF] p-8">
                            <CardHeader>
                                <h2 className="text-2xl text-gray-800 font-bold">{categorie.name}</h2>
                            </CardHeader>
                            <CardBody>
                                <Image
                                className="mt-8 flex items-center justify-center md:mt-24"
                                alt={categorie.title}
                                src={categorie.image}
                                />
                            </CardBody>
                        </Card>
                    </Link>
                    </>
                ))}
            </div>
        </section>
    )
}

function CategoriesSectionHome({ categories }) {
    return (
        <PageWidth>    
            <section className="pt-16">
                <h1 className="my-8 text-center text-3xl font-semibold text-gray-800 lg:text-4xl">
                    Our Collections
                </h1>
                <div className="my-12 md:my-48 grid grid-cols-2 gap-4 md:mt-10 md:grid-cols-3 lg:gap-8">
                    {/* Show just 5 categories in total. */}
                    {categories.slice(0, 5).map((categorie, index) => (
                        <>
                        <Link to={`/categories/${categorie.id}`}>
                        <Card radius="sm" key={index} shadow="none" isPressable className="bg-[#FEEFFF] p-2">
                            <CardHeader>
                                <h2 className="text-xl md:text-2xl text-gray-800 font-bold">{categorie.name}</h2>
                            </CardHeader>
                            <CardBody>
                                <Image
                                className="mt-4 flex items-center justify-center md:mt-24"
                                alt={categorie.title}
                                src={categorie.image}
                                />
                            </CardBody>
                        </Card>
                        </Link>
                        </>
                    ))}
                    <div className="flex justify-center items-center">
                        <Button
                            as={ Link }
                            to={`/categories`}
                            variant="bordered"
                            radius="full"
                            className="
                            px-6
                            md:px-8
                            py-6
                            md:py-8
                            font-medium
                            border-[3px]
                            border-[#461E5C]
                            text-[#461E5C]
                            text-base
                            lg:text-xl
                            leading-9
                            tracking-wide
                            "
                        >
                            ALL CATEGORIES
                            <ArrowUp />
                        </Button>
                    </div>
                </div>
            </section>
        </PageWidth>
    )
}

export { CategoriesSection, CategoriesSectionHome }
