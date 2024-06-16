"use client"

import { Button, Label } from '@medusajs/ui';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { atom, useAtom } from 'jotai'

export const variantsAtom = atom([[]])

export default function ProductInfo({ variant, id }) {
    const [variants, setVariants] = useAtom(variantsAtom)
    if(!variants[id]) {
        setVariants([...variants, variants[id]=[]])
    }
    function handleValueChange(value, index, item) {
        const newVariants = [...variants]
        newVariants[id] = [...variants[id]]
        newVariants[id][index] = {}
        newVariants[id][index] =
        {
            label: item.label,
            value: value
        }
        setVariants(newVariants)
    }
    return (
        <>
            {
                variant.map((item, index) => (
                    <div key={index} className='flex flex-col gap-2'>
                        <Label>Select {item.label}</Label>
                        <ToggleGroup.Root
                            onValueChange={(value) => {
                                if (value) handleValueChange(value, index, item);
                            }}
                            value={variants[id][index] ? variants[id][index].value : null}
                            type='single' className='flex gap-2 w-full'>
                            {item.options.map((option, index) => (
                                <ToggleGroup.Item key={index} value={option} asChild>
                                    <Button variant='secondary' size='large' className="w-full aria-[checked=true]:bg-ui-button-neutral-pressed">{option}</Button>
                                </ToggleGroup.Item>
                            ))}
                        </ToggleGroup.Root>
                    </div>
                ))
            }
        </>
    )
}