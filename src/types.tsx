/**
 * Type of parameter
 */
import {ReactNode} from "react";

interface ParameterType<T> {
    /**
     * Unique name of the type
     */
    typeName: string
    /**
     * Additional parameters (for selects - list of options)
     */
    data?: T
}

export const stringType: ParameterType<string> = {
    typeName: "string"
}

export type SelectOption = {
    id: string
    displayName: string
};

export type SelectOptionCollection = {
    options: SelectOption[]
    multiple: boolean
}

export const selectionType = (options: string[], multiple = true): ParameterType<SelectOptionCollection>  => {
    return {
        data: {
            options: options.map((id) => ({displayName: id, id: id})),
            multiple
        },
        typeName: "selection",
    }
}

export type Parameter = {
    /**
     * Display name (for UI)
     */
    displayName: string
    /**
     * Id (corresponds to key in yaml config)
     */
    id: string
    /**
     * Type of parameter
     */
    type: ParameterType<any>
}

interface CollectionParameter extends Parameter {
    /**
     * If defined, should be applied only to specific collections
     * (see SourceConnector.collectionTypes)
     */
    applyOnlyTo?: string[] | string

}


export type SourceConnector = {
    /**
     * Name of connector that should be displayed
     */
    displayName: string
    /**
     * id of connector. Corresponds to 'type' node in event native config
     */
    id: string
    /**
     * SVG icon (please, no height/width params!)
     */
    pic: ReactNode,
    /**
     * Parameters of each collection
     */
    collectionParameters: CollectionParameter[]
    /**
     * Configuration parameters
     */
    configParameters: Parameter[]

    /**
     * If collections are limited to certain names, list them here
     */
    collectionTypes: string[]
}