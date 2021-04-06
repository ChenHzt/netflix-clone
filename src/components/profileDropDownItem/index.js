import {StyledProfileDropDownItem,StyledProfileDropDownItemImage,StyledProfileDropDownItemName} from './style'

export default function ProfileDropDownItem({profile}) {
    return (
        <StyledProfileDropDownItem>
            <StyledProfileDropDownItemImage src={profile.imageUrl} alt="profile" />
            <StyledProfileDropDownItemName>{profile.name}</StyledProfileDropDownItemName>
        </StyledProfileDropDownItem>
    )
}