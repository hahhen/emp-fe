'use client'

import { ArrowPath, ArrowUturnLeft, FlyingBox } from "@medusajs/icons"
import { Text, ProgressAccordion, Heading, Label } from "@medusajs/ui"

export default function Details({ details }) {
    return (
        <div className="w-full">
            <ProgressAccordion type="multiple">
                <ProgressAccordion.Item value="details">
                    <ProgressAccordion.Header className="px-0">Details</ProgressAccordion.Header>
                    <ProgressAccordion.Content className="px-0">
                        <div className="pb-4 px-4 grid grid-cols-2 gap-6">
                            {details.map((detail, index) => (
                                <div className="flex flex-col" key={index}>
                                    <Heading className="text-xs">{detail.label}</Heading>
                                    <Label className="text-xs">{detail.desc}</Label>
                                </div>
                            ))}
                        </div>
                    </ProgressAccordion.Content>
                </ProgressAccordion.Item>
                <ProgressAccordion.Item value="shipping">
                    <ProgressAccordion.Header className="px-0">Shipping & Returns</ProgressAccordion.Header>
                    <ProgressAccordion.Content className="px-0">
                        <div className="flex gap-4 flex-col pb-4 px-4 ">
                            <div className="flex">
                                <div className="w-min">
                                    <FlyingBox viewBox="0 0 30 30"/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Heading className="text-xs">Fast delivery</Heading>
                                    <Text className="text-xs">Your package will arrive in 3-5 business days at your pick up location or in the comfort of your home.</Text>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-min">
                                    <ArrowPath viewBox="0 0 30 30"/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Heading className="text-xs">Fast delivery</Heading>
                                    <Text className="text-xs">Your package will arrive in 3-5 business days at your pick up location or in the comfort of your home.</Text>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-min">
                                    <ArrowUturnLeft viewBox="0 0 30 30"/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Heading className="text-xs">Fast delivery</Heading>
                                    <Text className="text-xs">Your package will arrive in 3-5 business days at your pick up location or in the comfort of your home.</Text>
                                </div>
                            </div>
                        </div>
                    </ProgressAccordion.Content>
                </ProgressAccordion.Item>
            </ProgressAccordion>
        </div>
    )
}