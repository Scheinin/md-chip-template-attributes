# md-chip-template-attributes
Acting on the md-chip element via md-chip-template.
# Usage
```
<md-chips readonly="true" ng-model="tags" md-removable="false" md-enable-chip-edit="false">
        <md-chip-template chip-click="click($chip)" 
        chip-class="{[$chip.isOfficial ? 'tag is-official' : 'tag']}">
        </md-chip-template>
</md-chips>
```
