##Read in data
pm25_sum <- readRDS("summarySCC_PM25.rds")
pm25_srccls <- readRDS("Source_Classification_Code.rds")

##Combine coal summary and classification data
pm25_srccls.coal <- pm25_srccls[grepl("coal", pm25_srccls$Short.Name, ignore.case=TRUE),]
coal_sub <- merge(pm25_sum, pm25_srccls.coal, by = "SCC")

##Aggregate emissions for coal by year
coalEmissions <- aggregate(Emissions ~ year, coal_sub, sum)

##plot emission trends between 1999-2008
plot(coalEmissions$year, coalEmissions$Emissions, xlab = "year", ylab = "PM2.5 Emissions", main = "PM2.5 Emissions for Coal Between 1999-2008", type = "l")