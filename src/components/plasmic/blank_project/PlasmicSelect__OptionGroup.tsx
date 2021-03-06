// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cMaVBwcHAKAbUiZW5BBnSf
// Component: AZZh7FhC7qj
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Select__Option from "../../Select__Option"; // plasmic-import: RYSuD0jj_2f/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: cMaVBwcHAKAbUiZW5BBnSf/projectcss
import * as sty from "./PlasmicSelect__OptionGroup.module.css"; // plasmic-import: AZZh7FhC7qj/css

import SUPER__PlasmicSelect from "./PlasmicSelect"; // plasmic-import: KLG_AqYkhWj/render

export type PlasmicSelect__OptionGroup__VariantMembers = {
  noTitle: "noTitle";
  isFirst: "isFirst";
};

export type PlasmicSelect__OptionGroup__VariantsArgs = {
  noTitle?: SingleBooleanChoiceArg<"noTitle">;
  isFirst?: SingleBooleanChoiceArg<"isFirst">;
};

type VariantPropType = keyof PlasmicSelect__OptionGroup__VariantsArgs;
export const PlasmicSelect__OptionGroup__VariantProps =
  new Array<VariantPropType>("noTitle", "isFirst");

export type PlasmicSelect__OptionGroup__ArgsType = {
  children?: React.ReactNode;
  title?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSelect__OptionGroup__ArgsType;
export const PlasmicSelect__OptionGroup__ArgProps = new Array<ArgPropType>(
  "children",
  "title"
);

export type PlasmicSelect__OptionGroup__OverridesType = {
  root?: p.Flex<"div">;
  separator?: p.Flex<"div">;
  titleContainer?: p.Flex<"div">;
  optionsContainer?: p.Flex<"div">;
};

export interface DefaultSelect__OptionGroupProps
  extends p.BaseSelectOptionGroupProps {
  title?: React.ReactNode;
  noTitle?: SingleBooleanChoiceArg<"noTitle">;
}

function PlasmicSelect__OptionGroup__RenderFunc(props: {
  variants: PlasmicSelect__OptionGroup__VariantsArgs;
  args: PlasmicSelect__OptionGroup__ArgsType;
  overrides: PlasmicSelect__OptionGroup__OverridesType;
  dataFetches?: PlasmicSelect__OptionGroup__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const superContexts = {
    Select: React.useContext(SUPER__PlasmicSelect.Context)
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {(hasVariant(variants, "isFirst", "isFirst") ? false : true) ? (
        <div
          data-plasmic-name={"separator"}
          data-plasmic-override={overrides.separator}
          className={classNames(defaultcss.all, sty.separator, {
            [sty.separator__isFirst]: hasVariant(
              variants,
              "isFirst",
              "isFirst"
            ),
            [sty.separator__noTitle]: hasVariant(variants, "noTitle", "noTitle")
          })}
        />
      ) : null}
      {(hasVariant(variants, "noTitle", "noTitle") ? false : true) ? (
        <div
          data-plasmic-name={"titleContainer"}
          data-plasmic-override={overrides.titleContainer}
          className={classNames(defaultcss.all, sty.titleContainer, {
            [sty.titleContainer__isFirst]: hasVariant(
              variants,
              "isFirst",
              "isFirst"
            ),
            [sty.titleContainer__noTitle]: hasVariant(
              variants,
              "noTitle",
              "noTitle"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Group Name",
            value: args.title,
            className: classNames(sty.slotTitle)
          })}
        </div>
      ) : null}

      <div
        data-plasmic-name={"optionsContainer"}
        data-plasmic-override={overrides.optionsContainer}
        className={classNames(defaultcss.all, sty.optionsContainer)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <Select__Option
                className={classNames("__wab_instance", sty.option__e4AjF)}
              />

              <Select__Option
                className={classNames("__wab_instance", sty.option__dKXj)}
              />
            </React.Fragment>
          ),
          value: args.children
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

function useBehavior<P extends p.BaseSelectOptionGroupProps>(props: P) {
  return p.useSelectOptionGroup(PlasmicSelect__OptionGroup, props, {
    noTitleVariant: { group: "noTitle", variant: "noTitle" },
    isFirstVariant: { group: "isFirst", variant: "isFirst" },
    optionsSlot: "children",
    titleSlot: "title",

    root: "root",
    separator: "separator",
    titleContainer: "titleContainer",
    optionsContainer: "optionsContainer"
  });
}

const PlasmicDescendants = {
  root: ["root", "separator", "titleContainer", "optionsContainer"],
  separator: ["separator"],
  titleContainer: ["titleContainer"],
  optionsContainer: ["optionsContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  separator: "div";
  titleContainer: "div";
  optionsContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSelect__OptionGroup__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSelect__OptionGroup__VariantsArgs;
    args?: PlasmicSelect__OptionGroup__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSelect__OptionGroup__Fetches;
  } & Omit<PlasmicSelect__OptionGroup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSelect__OptionGroup__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSelect__OptionGroup__ArgProps,
      internalVariantPropNames: PlasmicSelect__OptionGroup__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicSelect__OptionGroup__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelect__OptionGroup";
  } else {
    func.displayName = `PlasmicSelect__OptionGroup.${nodeName}`;
  }
  return func;
}

export const PlasmicSelect__OptionGroup = Object.assign(
  // Top-level PlasmicSelect__OptionGroup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    separator: makeNodeComponent("separator"),
    titleContainer: makeNodeComponent("titleContainer"),
    optionsContainer: makeNodeComponent("optionsContainer"),

    // Metadata about props expected for PlasmicSelect__OptionGroup
    internalVariantProps: PlasmicSelect__OptionGroup__VariantProps,
    internalArgProps: PlasmicSelect__OptionGroup__ArgProps,

    useBehavior
  }
);

export default PlasmicSelect__OptionGroup;
/* prettier-ignore-end */
